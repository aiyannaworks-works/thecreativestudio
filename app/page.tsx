"use client";

import { useMemo, useState } from "react";

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
  const [headline, setHeadline] = useState(66);
  const [details, setDetails] = useState(22);
  const [spacing, setSpacing] = useState(28);
  const [completed, setCompleted] = useState(false);

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
          <button className={view === "lesson" ? "active" : ""} onClick={() => setView("lesson")}>Learn</button>
          <a href="#project">Projects</a>
          <a href="#inspiration">Inspiration</a>
        </nav>
        <button className="profile" aria-label="Open profile">AS</button>
      </header>

      {view === "studio" ? (
        <>
          <section className="hero">
            <div className="eyebrow">Your studio · Week 01</div>
            <div className="hero-grid">
              <div>
                <h1>Learn to see what<br /><em>others overlook.</em></h1>
                <p className="lede">The book gives you the principles. This studio helps you practice them—one deliberate decision at a time.</p>
                <button className="primary" onClick={() => setView("lesson")}>Continue learning</button>
              </div>
              <div className="today-card">
                <div className="card-kicker">Today in the studio</div>
                <div className="lesson-index">01</div>
                <h2>Visual Hierarchy</h2>
                <p>What should someone notice first?</p>
                <div className="progress-track"><span style={{ width: "68%" }} /></div>
                <small>12 min remaining</small>
              </div>
            </div>
          </section>

          <section className="manifesto">
            <p>Design is not decoration.</p>
            <h2>It is the practice of reducing uncertainty.</h2>
          </section>

          <section className="section lessons-section">
            <div className="section-heading">
              <div><span className="eyebrow">The foundations</span><h2>Five ways of seeing</h2></div>
              <button className="text-link" onClick={() => setView("lesson")}>View curriculum</button>
            </div>
            <div className="lesson-list">
              {lessons.map((lesson) => (
                <button className="lesson-row" key={lesson.number} onClick={() => setView("lesson")}>
                  <span className="lesson-number">{lesson.number}</span>
                  <span><strong>{lesson.title}</strong><small>{lesson.note}</small></span>
                  <span className="mini-progress"><i style={{ width: `${lesson.progress}%` }} /></span>
                </button>
              ))}
            </div>
          </section>

          <section id="project" className="section project-section">
            <div className="project-copy">
              <span className="eyebrow light">Studio project 01</span>
              <h2>Build an identity<br />for a living community.</h2>
              <p>The farmers market project takes you from field research to a flexible visual system. You will not make one pretty logo. You will build something other people can use.</p>
              <div className="phase-list">
                <span>01 Research</span><span>02 Strategy</span><span>03 System</span><span>04 Application</span>
              </div>
              <button className="paper-button">Open project brief</button>
            </div>
            <div className="project-poster" aria-label="Farmers Market Identity project preview">
              <span>FIELD NOTES / 001</span>
              <div className="sun" />
              <h3>Saturday<br />Market</h3>
              <p>Grown here.<br />Shared here.</p>
              <div className="poster-foot"><span>8—1</span><span>RAIN<br />OR SHINE</span></div>
            </div>
          </section>

          <section id="inspiration" className="section inspiration-section">
            <div className="section-heading">
              <div><span className="eyebrow">Your visual library</span><h2>What are you noticing?</h2></div>
              <button className="text-link">Add a reference +</button>
            </div>
            <div className="observation-grid">
              {observations.map((item, index) => (
                <article className={`observation ${item.color}`} key={item.title}>
                  <span>{item.tag}</span>
                  <div className={`visual visual-${index}`}><i /><b>Aa</b><i /></div>
                  <h3>{item.title}</h3>
                  <p>Saved observation · July 29</p>
                </article>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="lesson-page">
          <button className="back-link" onClick={() => setView("studio")}>Back to studio</button>
          <div className="lesson-intro">
            <div><span className="eyebrow">Foundation 01 · 12 minutes</span><h1>Visual<br /><em>Hierarchy</em></h1></div>
            <div className="lesson-definition"><span>THE QUESTION</span><p>If someone remembers only one thing, what should it be?</p></div>
          </div>
          <div className="exercise-shell">
            <div className="exercise-copy">
              <span className="eyebrow">Practice 01</span>
              <h2>Make the message impossible to miss.</h2>
              <p>Adjust the relationship between the elements. You are not decorating a flyer—you are deciding what the viewer understands first.</p>
              <label>Headline scale <output>{headline}</output><input type="range" min="34" max="82" value={headline} onChange={(e) => setHeadline(Number(e.target.value))} /></label>
              <label>Detail scale <output>{details}</output><input type="range" min="14" max="44" value={details} onChange={(e) => setDetails(Number(e.target.value))} /></label>
              <label>Breathing room <output>{spacing}</output><input type="range" min="8" max="56" value={spacing} onChange={(e) => setSpacing(Number(e.target.value))} /></label>
              <div className="feedback"><span>Studio note</span><p>{feedback}</p></div>
            </div>
            <div className="canvas-wrap">
              <div className="practice-canvas" style={{ gap: `${spacing}px` }}>
                <span className="canvas-label">RIVERSIDE ARTS COUNCIL PRESENTS</span>
                <strong style={{ fontSize: `${headline}px` }}>OPEN<br />STUDIO</strong>
                <div className="canvas-rule" />
                <p style={{ fontSize: `${details}px` }}>Saturday, August 16<br />10 AM—6 PM</p>
                <small>Meet the artists. See the work.<br />Leave with a new perspective.</small>
              </div>
              <div className="canvas-actions">
                <button onClick={() => { setHeadline(66); setDetails(22); setSpacing(28); setCompleted(false); }}>Reset</button>
                <button className="primary" onClick={() => setCompleted(true)}>{completed ? "Practice complete ✓" : "Complete practice"}</button>
              </div>
            </div>
          </div>
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
