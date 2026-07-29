"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";

const lessons = [
  { number: "01", title: "Visual Hierarchy", note: "Direct attention with intention.", progress: 68 },
  { number: "02", title: "White Space", note: "Give information room to breathe.", progress: 15 },
  { number: "03", title: "Typography", note: "Give language the right voice.", progress: 0 },
  { number: "04", title: "Contrast", note: "Make difference create meaning.", progress: 0 },
  { number: "05", title: "Grid Systems", note: "Build order before decoration.", progress: 0 },
];

const observations = [
  { tag: "Editorial", title: "Quiet type, confident scale", color: "cream" },
  { tag: "Wayfinding", title: "One decision at a time", color: "yellow" },
  { tag: "Composition", title: "Asymmetry with a clear anchor", color: "wine" },
];

export default function Home() {
  const [view, setView] = useState<"studio" | "lesson">("studio");
  const [activeLesson, setActiveLesson] = useState(0);
  const [headline, setHeadline] = useState(66);
  const [details, setDetails] = useState(22);
  const [spacing, setSpacing] = useState(28);
  const [posterColor, setPosterColor] = useState("#fffdf6");
  const [inkColor, setInkColor] = useState("#1d1c1a");
  const [accentColor, setAccentColor] = useState("#701f32");
  const [headlineStyle, setHeadlineStyle] = useState<"bold" | "serif" | "condensed">("bold");
  const [showRule, setShowRule] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [uploads, setUploads] = useState<{ name: string; url: string; type: string }[]>([]);

  const currentLesson = lessons[activeLesson];
  const openLesson = (index: number) => {
    setActiveLesson(index);
    setView("lesson");
    setCompleted(completedLessons.includes(index));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const moveLesson = (direction: -1 | 1) => {
    const next = Math.max(0, Math.min(lessons.length - 1, activeLesson + direction));
    openLesson(next);
  };

  const completePractice = () => {
    setCompleted(true);
    setCompletedLessons((current) => current.includes(activeLesson) ? current : [...current, activeLesson]);
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    const nextUploads = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
    }));
    setUploads((current) => [...current, ...nextUploads]);
    event.target.value = "";
  };

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [view]);

  useEffect(() => {
    let frame = 0;
    const updateProjectMotion = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const project = document.querySelector<HTMLElement>(".project-poster");
        if (!project) return;
        const rect = project.getBoundingClientRect();
        const shift = Math.max(-22, Math.min(22, (window.innerHeight / 2 - rect.top) * 0.035));
        project.style.setProperty("--project-shift", `${shift}px`);
      });
    };

    updateProjectMotion();
    window.addEventListener("scroll", updateProjectMotion, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProjectMotion);
    };
  }, [view]);

  const feedback = useMemo(() => {
    const gap = headline - details;
    if (gap > 35 && spacing >= 24) return "Strong hierarchy. The message leads; the details support.";
    if (gap > 20) return "The reading order is emerging. Give the headline more room.";
    return "The elements are competing. Decide what deserves attention first.";
  }, [headline, details, spacing]);

  return (
    <main>
      <header className="site-header">
        <button className="wordmark" onClick={() => setView("studio")} aria-label="Creative Studio home">
          <span className="mark">CS</span>
          <span>The Creative Studio</span>
        </button>
        <nav aria-label="Primary navigation">
          <button className={view === "studio" ? "active" : ""} onClick={() => setView("studio")}>Studio</button>
          <button className={view === "lesson" ? "active" : ""} onClick={() => openLesson(activeLesson)}>Learn</button>
          <a href="#project">Projects</a>
          <a href="#inspiration">Inspiration</a>
        </nav>
        <button className="profile" aria-label="Open profile">AS</button>
      </header>

      {view === "studio" ? (
        <div className="view-enter">
          <section className="hero">
            <div className="eyebrow">Your studio · Week 01</div>
            <div className="hero-grid">
              <div data-reveal>
                <h1>Learn to see what<br /><em>others overlook.</em></h1>
                <p className="lede">The book gives you the principles. This studio helps you practice them—one deliberate decision at a time.</p>
                <button className="primary" onClick={() => openLesson(activeLesson)}>Continue learning</button>
              </div>
              <div className="today-card" data-reveal>
                <div className="card-kicker">Today in the studio</div>
                <div className="lesson-index">01</div>
                <h2>Visual Hierarchy</h2>
                <p>What should someone notice first?</p>
                <div className="progress-track"><span style={{ width: "68%" }} /></div>
                <small>12 min remaining</small>
              </div>
            </div>
          </section>

          <section className="manifesto" data-reveal>
            <p>Design is not decoration.</p>
            <h2>It is the practice of reducing uncertainty.</h2>
          </section>

          <section className="section lessons-section">
            <span className="section-number" aria-hidden="true">01</span>
            <div className="section-heading">
              <div><span className="eyebrow">The foundations</span><h2>Five ways of seeing</h2></div>
              <button className="text-link" onClick={() => openLesson(activeLesson)}>View curriculum</button>
            </div>
            <div className="lesson-list">
              {lessons.map((lesson, index) => (
                <button className="lesson-row" key={lesson.number} onClick={() => openLesson(index)} data-reveal>
                  <span className="lesson-number">{lesson.number}</span>
                  <span><strong>{lesson.title}</strong><small>{lesson.note}</small></span>
                  <span className="lesson-row-status">
                    {completedLessons.includes(index) ? <b>Complete ✓</b> : <span className="mini-progress"><i style={{ width: `${index === activeLesson ? 68 : lesson.progress}%` }} /></span>}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section id="project" className="section project-section">
            <div className="project-copy" data-reveal>
              <span className="eyebrow light">Studio project 01</span>
              <h2>Build an identity<br />for a living community.</h2>
              <p>The farmers market project takes you from field research to a flexible visual system. You will not make one pretty logo. You will build something other people can use.</p>
              <div className="phase-list">
                <span>01 Research</span><span>02 Strategy</span><span>03 System</span><span>04 Application</span>
              </div>
              <button className="paper-button">Open project brief</button>
            </div>
            <div className="project-poster" aria-label="Farmers Market Identity project preview" data-reveal>
              <span>FIELD NOTES / 001</span>
              <div className="sun" aria-hidden="true" />
              <h3>Saturday<br />Market</h3>
              <p>Grown here.<br />Shared here.</p>
              <div className="poster-foot"><span>8—1</span><span>RAIN<br />OR SHINE</span></div>
            </div>
          </section>

          <section id="inspiration" className="section inspiration-section">
            <span className="section-number" aria-hidden="true">02</span>
            <div className="section-heading">
              <div><span className="eyebrow">Your visual library</span><h2>What are you noticing?</h2></div>
              <button className="text-link">Add a reference +</button>
            </div>
            <div className="observation-grid">
              {observations.map((item, index) => (
                <article className={`observation ${item.color}`} key={item.title} data-reveal>
                  <span>{item.tag}</span>
                  <div className={`visual visual-${index}`}><i /><b>Aa</b><i /></div>
                  <h3>{item.title}</h3>
                  <p>Saved observation · July 29</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <section className="lesson-page view-enter">
          <aside className="lesson-progress" aria-label="Lesson progress">
            <span>{currentLesson.number}</span>
            <i><b style={{ height: `${((activeLesson + 1) / lessons.length) * 100}%` }} /></i>
            <small>05</small>
          </aside>
          <div className="lesson-toolbar">
            <button className="back-link" onClick={() => setView("studio")}>Back to studio</button>
            <div className="lesson-switcher" aria-label="Lesson navigation">
              {lessons.map((lesson, index) => (
                <button
                  key={lesson.number}
                  className={index === activeLesson ? "active" : ""}
                  onClick={() => openLesson(index)}
                  aria-label={`Open lesson ${lesson.number}: ${lesson.title}`}
                >
                  {completedLessons.includes(index) ? "✓" : lesson.number}
                </button>
              ))}
            </div>
          </div>
          <div className="lesson-intro" data-reveal>
            <div><span className="eyebrow">Foundation {currentLesson.number} · 12 minutes</span><h1>{currentLesson.title.split(" ")[0]}<br /><em>{currentLesson.title.split(" ").slice(1).join(" ") || "Practice"}</em></h1></div>
            <div className="lesson-definition"><span>THE QUESTION</span><p>If someone remembers only one thing, what should it be?</p></div>
          </div>
          {completed && (
            <div className="completion-banner" role="status">
              <span className="completion-check">✓</span>
              <div><strong>Practice complete</strong><p>Your work is saved in this session. Continue when you are ready.</p></div>
              {activeLesson < lessons.length - 1 && <button className="primary" onClick={() => moveLesson(1)}>Next lesson</button>}
            </div>
          )}
          <div className="exercise-shell" data-reveal>
            <div className="exercise-copy">
              <span className="eyebrow">Practice {currentLesson.number}</span>
              <h2>Make the message impossible to miss.</h2>
              <p>Adjust the relationship between the elements. You are not decorating a flyer—you are deciding what the viewer understands first.</p>
              <label>Headline scale <output>{headline}</output><input type="range" min="34" max="82" value={headline} onChange={(e) => setHeadline(Number(e.target.value))} /></label>
              <label>Detail scale <output>{details}</output><input type="range" min="14" max="44" value={details} onChange={(e) => setDetails(Number(e.target.value))} /></label>
              <label>Breathing room <output>{spacing}</output><input type="range" min="8" max="56" value={spacing} onChange={(e) => setSpacing(Number(e.target.value))} /></label>
              <fieldset className="design-controls">
                <legend>Change the visual direction</legend>
                <label>Background <input type="color" value={posterColor} onChange={(e) => setPosterColor(e.target.value)} /></label>
                <label>Type color <input type="color" value={inkColor} onChange={(e) => setInkColor(e.target.value)} /></label>
                <label>Accent <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} /></label>
                <label className="select-control">Headline style
                  <select value={headlineStyle} onChange={(e) => setHeadlineStyle(e.target.value as "bold" | "serif" | "condensed")}>
                    <option value="bold">Bold sans</option>
                    <option value="serif">Editorial serif</option>
                    <option value="condensed">Condensed</option>
                  </select>
                </label>
                <label className="toggle-control"><input type="checkbox" checked={showRule} onChange={(e) => setShowRule(e.target.checked)} /> Show divider</label>
              </fieldset>
              <div className="feedback"><span>Studio note</span><p>{feedback}</p></div>
            </div>
            <div className="canvas-wrap">
              <div className={`practice-canvas headline-${headlineStyle}`} style={{ gap: `${spacing}px`, backgroundColor: posterColor, color: inkColor, boxShadow: `12px 12px 0 ${accentColor}` }}>
                <span className="canvas-label">RIVERSIDE ARTS COUNCIL PRESENTS</span>
                <strong style={{ fontSize: `${headline}px` }}>OPEN<br />STUDIO</strong>
                {showRule && <div className="canvas-rule" style={{ backgroundColor: accentColor }} />}
                <p style={{ fontSize: `${details}px` }}>Saturday, August 16<br />10 AM—6 PM</p>
                <small>Meet the artists. See the work.<br />Leave with a new perspective.</small>
              </div>
              <div className="canvas-actions">
                <button onClick={() => { setHeadline(66); setDetails(22); setSpacing(28); setPosterColor("#fffdf6"); setInkColor("#1d1c1a"); setAccentColor("#701f32"); setHeadlineStyle("bold"); setShowRule(true); setCompleted(false); }}>Reset</button>
                <button className={`primary ${completed ? "complete-button" : ""}`} onClick={completePractice}>{completed ? "Completed ✓" : "Mark practice complete"}</button>
              </div>
              <section className="upload-work">
                <div><span className="eyebrow">Your work</span><h3>Bring your practice into the studio.</h3><p>Upload a poster, sketch, screenshot, or PDF you made in Canva or Adobe.</p></div>
                <label className="upload-button">Upload work<input type="file" accept="image/*,.pdf" multiple onChange={handleUpload} /></label>
                {uploads.length > 0 && (
                  <div className="upload-grid">
                    {uploads.map((upload, index) => (
                      <article key={`${upload.name}-${index}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element -- Local object URL preview. */}
                        {upload.type.startsWith("image/") ? <img src={upload.url} alt="" /> : <div className="pdf-preview">PDF</div>}
                        <span>{upload.name}</span>
                        <button aria-label={`Remove ${upload.name}`} onClick={() => setUploads((current) => current.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            </div>
          </div>
          <nav className="lesson-bottom-nav" aria-label="Previous and next lessons">
            <button disabled={activeLesson === 0} onClick={() => moveLesson(-1)}><span>Previous</span><strong>{activeLesson > 0 ? lessons[activeLesson - 1].title : "Start"}</strong></button>
            <button disabled={activeLesson === lessons.length - 1} onClick={() => moveLesson(1)}><span>Next</span><strong>{activeLesson < lessons.length - 1 ? lessons[activeLesson + 1].title : "Complete"}</strong></button>
          </nav>
        </section>
      )}

      <footer>
        <div className="mark">CS</div>
        <p>Observe carefully.<br />Decide deliberately.</p>
        <span>The Creative Studio · First Edition</span>
      </footer>
    </main>
  );
}
