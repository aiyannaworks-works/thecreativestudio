"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";

type Lesson = {
  number: string;
  title: string;
  note: string;
  question: string;
  concepts: string[];
  project: string;
  reflections: string[];
  coaching: string[];
};

const practiceMeta = [
  { title: "Build the reading order.", intro: "Change the relationship between the message and its details until the intended sequence is unmistakable." },
  { title: "Edit until the space speaks.", intro: "Remove supporting elements and open the composition. Notice when quiet becomes clarity—and when it becomes emptiness." },
  { title: "Direct the voice of the words.", intro: "Keep the message constant while changing its typographic character. Judge the feeling before reading the sentence." },
  { title: "Create one decisive difference.", intro: "Choose what dominates through scale, weight, and color. Contrast should clarify the idea, not decorate it." },
  { title: "Reveal the invisible system.", intro: "Build a layout with columns, alignment, and rhythm. Then bend the system without losing coherence." },
  { title: "Practice the discipline of less.", intro: "Begin with abundance, then decide which idea deserves to survive. Every remaining element must earn its place." },
  { title: "Build a recognizable ritual.", intro: "Combine product truth, sensory language, repetition, and atmosphere into a small world people can recognize." },
  { title: "Control the reader’s pace.", intro: "Move through a cover, opener, and spread. Use scale, columns, cropping, and silence to choreograph attention." },
  { title: "Shift the emotional territory.", intro: "Art-direct the same ordinary object for different kinds of desire without changing the product itself." },
  { title: "Make one idea travel.", intro: "Translate a central campaign belief across channels. The execution should adapt while the idea remains intact." },
  { title: "Direct the world, not one image.", intro: "Set the casting, light, location, type, and movement. Look for the decision that breaks the spell." },
  { title: "Create recognition without a logo.", intro: "Choose repeatable brand behaviors, then remove the name. Test whether the system still feels unmistakably itself." },
  { title: "Find the strategy beneath the surface.", intro: "Break a campaign into its idea, insight, story, and channel roles. Analysis should reveal a reusable principle." },
  { title: "Lead the review.", intro: "Prioritize the feedback that strengthens the central idea. Creative direction is judgment made useful to other people." },
];

const lessons: Lesson[] = [
  { number: "01", title: "Visual Hierarchy", note: "Direct attention with intention.", question: "If someone remembers only one thing, what should it be?", concepts: ["Dominance", "Reading order", "Visual weight"], project: "Create one clear reading path through a crowded event poster.", reflections: ["What leads?", "What competes?", "What could disappear?"], coaching: ["What deserves more emphasis?", "What could be removed entirely?", "Are you designing for attention or for memory?"] },
  { number: "02", title: "White Space", note: "Give information room to breathe.", question: "What would happen if you made this quieter instead of louder?", concepts: ["Restraint", "Grouping", "Pacing"], project: "Edit a dense layout until every remaining element earns its space.", reflections: ["Where does the eye rest?", "What feels crowded?", "What became clearer after editing?"], coaching: ["What would happen if you made this quieter instead of louder?", "Is the space creating meaning or merely emptiness?", "Where does the composition need a pause?"] },
  { number: "03", title: "Typography", note: "Give language the right voice.", question: "What should the message feel like before anyone reads it?", concepts: ["Voice", "Scale", "Pairing"], project: "Express one message in three distinct typographic voices.", reflections: ["What personality is present?", "Is the type serving the message?", "Could one family do more?"], coaching: ["Could this typography belong to another brand?", "What emotional signal arrives before the words?", "Which typographic decision is doing the most work?"] },
  { number: "04", title: "Contrast", note: "Make difference create meaning.", question: "Which difference is carrying the idea?", concepts: ["Emphasis", "Difference", "Focal point"], project: "Build a composition around one unmistakable contrast.", reflections: ["Where is the focal point?", "Is contrast purposeful?", "What feels unnecessarily loud?"], coaching: ["What is this trying to communicate?", "Does the contrast clarify or decorate?", "What would a Creative Director question first?"] },
  { number: "05", title: "Grid Systems", note: "Build order before decoration.", question: "What invisible system holds the work together?", concepts: ["Alignment", "Rhythm", "Structure"], project: "Create three related layouts from one flexible grid.", reflections: ["What repeats?", "Where does the system bend?", "Does variation still feel related?"], coaching: ["What relationship are you establishing?", "Where does the system become inconsistent?", "Could another designer extend this without you?"] },
  { number: "06", title: "Thinking Like Apple", note: "Turn focus and restraint into a system.", question: "What is the single idea this experience refuses to dilute?", concepts: ["Radical focus", "Product storytelling", "End-to-end consistency", "Restraint"], project: "Reduce a product launch to one belief, one hero, and one memorable sequence.", reflections: ["What is the hero?", "Which detail earns attention?", "Does the experience feel inevitable?"], coaching: ["What should people remember tomorrow?", "What can disappear without weakening the idea?", "Does every touchpoint reinforce the same belief?"] },
  { number: "07", title: "The Rhode Method", note: "Create desire through disciplined repetition.", question: "How does the system turn one product truth into recognizable desire?", concepts: ["World building", "Sensory consistency", "Repetition", "Cultural relevance"], project: "Build a three-touchpoint launch around one product ritual.", reflections: ["What is the ritual?", "What creates desire?", "Would this remain recognizable without the logo?"], coaching: ["What emotional territory does this occupy?", "Could this belong to another brand?", "Is repetition building recognition or becoming predictable?"] },
  { number: "08", title: "Editorial Design Systems", note: "Use sequence, rhythm, and voice to shape meaning.", question: "How should the reader move, pause, and remember?", concepts: ["Narrative pacing", "Modular grids", "Editorial voice", "Image-text relationships"], project: "Turn one long-form story into a cover, opener, and two-page spread.", reflections: ["Where does the story begin?", "What controls pacing?", "What deserves a full stop?"], coaching: ["What is the eye meant to discover second?", "Where does the story need silence?", "Is the system supporting the content or overpowering it?"] },
  { number: "09", title: "Designing Desire", note: "Create emotional value without empty decoration.", question: "What makes the audience want to enter this world?", concepts: ["Aspiration", "Tension", "Sensory cues", "Perceived value"], project: "Art-direct one ordinary object so it occupies three emotional territories.", reflections: ["What creates longing?", "What remains believable?", "Where does desire become cliché?"], coaching: ["What promise is the image making?", "Is this designing for attention or for memory?", "Which choice creates emotional value?"] },
  { number: "10", title: "Campaign Thinking", note: "Expand one strong idea across many moments.", question: "Can the central idea survive every format?", concepts: ["Big idea", "Audience insight", "Message architecture", "Campaign cohesion"], project: "Translate one campaign idea into social, outdoor, editorial, and experiential touchpoints.", reflections: ["What is the idea in one sentence?", "What changes by channel?", "What must never change?"], coaching: ["Is this supporting the central idea or distracting from it?", "What is the audience insight?", "Would every execution still belong to the same campaign?"] },
  { number: "11", title: "The Modern Art Director", note: "Build worlds through coherent creative choices.", question: "What belief connects every visual and verbal decision?", concepts: ["Art direction", "Image making", "Creative territory", "Collaboration"], project: "Create an art-direction board covering casting, styling, setting, light, type, and motion.", reflections: ["What world are you building?", "Which choice breaks the spell?", "Can collaborators act on this direction?"], coaching: ["Does every creative decision reinforce the same belief?", "What emotional territory does this occupy?", "What would you ask the photographer to protect?"] },
  { number: "12", title: "Building a Visual Brand", note: "Create recognition beyond the logo.", question: "If someone removed the logo, would this still feel like your brand?", concepts: ["Brand beliefs", "Behaviors", "Recognition codes", "Tone of voice"], project: "Define a visual brand through five repeatable behaviors rather than a logo sheet.", reflections: ["What is unmistakably yours?", "What behavior repeats?", "Where is the system generic?"], coaching: ["If someone removed the logo, would this still feel like your brand?", "Could this belong to another brand?", "Which recognition code is strongest?"] },
  { number: "13", title: "Campaign Breakdown Studio", note: "Learn to see the strategy beneath the execution.", question: "What strategic decision made the campaign coherent?", concepts: ["Insight", "Story structure", "Channel roles", "Lessons learned"], project: "Dissect one campaign from big idea through typography, photography, motion, and channel behavior.", reflections: ["What is the big idea?", "What is each channel doing?", "What would you borrow as a principle?"], coaching: ["What is this trying to communicate?", "What is the campaign asking people to feel?", "Where does the idea become weakest?"] },
  { number: "14", title: "Becoming a Creative Director", note: "Lead with judgment, clarity, and belief.", question: "What kind of creative leader do you intend to become?", concepts: ["Judgment", "Feedback", "Creative philosophy", "Leadership"], project: "Write and present a personal creative philosophy supported by three decisions from your work.", reflections: ["What will you protect?", "What will you never compromise?", "How will your leadership improve the work?"], coaching: ["What would a Creative Director question first?", "What do you believe good design should accomplish?", "What legacy do you hope your work leaves behind?"] },
];

const workspaces = [
  { id: "brand", title: "Brand Builder", intro: "Define the beliefs and behaviors that make a brand recognizable.", fields: ["Brand beliefs", "Emotional territory", "Brand behaviors", "Tone of voice", "Brand principles", "Recognition strategy"] },
  { id: "campaign", title: "Campaign Breakdown", intro: "Document the strategic and creative system behind a campaign.", fields: ["Big Idea", "Audience", "Insight", "Emotional territory", "Story structure", "Typography", "Photography", "Motion", "Brand principles", "Lessons learned"] },
  { id: "philosophy", title: "Creative Philosophy", intro: "Build the private point of view that will guide your work and leadership.", fields: ["What kind of work do I want to create?", "What do I believe good design should accomplish?", "What will I never compromise?", "What legacy do I hope my work leaves behind?", "What kind of creative leader do I want to become?"] },
];

const reviewDimensions = ["Visual hierarchy", "Brand consistency", "Emotional territory", "Storytelling", "Recognition", "Memorability", "Campaign cohesion", "Editing and restraint", "Rhythm and pacing", "Strategic alignment", "Consistency across touchpoints", "Strength of the central idea"];
const observations = [
  { tag: "Editorial", title: "Quiet type, confident scale", color: "cream" },
  { tag: "Wayfinding", title: "One decision at a time", color: "yellow" },
  { tag: "Composition", title: "Asymmetry with a clear anchor", color: "wine" },
];

export default function Home() {
  const [view, setView] = useState<"studio" | "lesson" | "workspace">("studio");
  const [activeLesson, setActiveLesson] = useState(0);
  const [activeWorkspace, setActiveWorkspace] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [projectResponses, setProjectResponses] = useState<Record<number, string>>({});
  const [coachResponses, setCoachResponses] = useState<Record<number, string[]>>({});
  const [coachDraft, setCoachDraft] = useState("");
  const [coachStep, setCoachStep] = useState(0);
  const [workspaceResponses, setWorkspaceResponses] = useState<Record<string, Record<string, string>>>({});
  const [savedProject, setSavedProject] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [uploads, setUploads] = useState<{ name: string; url: string; type: string }[]>([]);
  const [hydrated, setHydrated] = useState(false);

  const currentLesson = lessons[activeLesson];
  const currentWorkspace = workspaces[activeWorkspace];
  const savedCount = Object.values(projectResponses).filter(Boolean).length + uploads.length;
  const overallProgress = Math.round((completedLessons.length / lessons.length) * 100);

  useEffect(() => {
    const hydration = window.setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem("creative-studio-progress") || "{}");
        setCompletedLessons(saved.completedLessons || []);
        setNotes(saved.notes || {});
        setProjectResponses(saved.projectResponses || {});
        setCoachResponses(saved.coachResponses || {});
        setWorkspaceResponses(saved.workspaceResponses || {});
      } catch { /* Start with a clean studio if saved data is unavailable. */ }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(hydration);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("creative-studio-progress", JSON.stringify({ completedLessons, notes, projectResponses, coachResponses, workspaceResponses }));
  }, [hydrated, completedLessons, notes, projectResponses, coachResponses, workspaceResponses]);

  const openLesson = (index: number) => {
    setActiveLesson(index);
    setView("lesson");
    setCompleted(completedLessons.includes(index));
    setCoachStep(coachResponses[index]?.length || 0);
    setCoachDraft("");
    setSavedProject(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWorkspace = (index: number) => {
    setActiveWorkspace(index);
    setView("workspace");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const moveLesson = (direction: -1 | 1) => openLesson(Math.max(0, Math.min(lessons.length - 1, activeLesson + direction)));
  const completePractice = () => {
    setCompleted(true);
    setCompletedLessons((current) => current.includes(activeLesson) ? current : [...current, activeLesson]);
  };

  const saveCoachResponse = () => {
    if (!coachDraft.trim()) return;
    setCoachResponses((current) => ({ ...current, [activeLesson]: [...(current[activeLesson] || []), coachDraft.trim()] }));
    setCoachDraft("");
    setCoachStep((current) => current + 1);
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    setUploads((current) => [...current, ...files.map((file) => ({ name: file.name, url: URL.createObjectURL(file), type: file.type }))]);
    event.target.value = "";
  };

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.14 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [view, activeLesson]);

  useEffect(() => {
    let frame = 0;
    const updateProjectMotion = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const project = document.querySelector<HTMLElement>(".project-poster");
        if (!project) return;
        const rect = project.getBoundingClientRect();
        project.style.setProperty("--project-shift", `${Math.max(-22, Math.min(22, (window.innerHeight / 2 - rect.top) * 0.035))}px`);
      });
    };
    updateProjectMotion();
    window.addEventListener("scroll", updateProjectMotion, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", updateProjectMotion); };
  }, [view]);

  const coachQuestion = currentLesson.coaching[coachStep % currentLesson.coaching.length];

  const coachQuestion = currentLesson.coaching[coachStep % currentLesson.coaching.length];

  return (
    <main>
      <header className="site-header">
        <button className="wordmark" onClick={() => setView("studio")} aria-label="Creative Studio home"><span className="mark">CS</span><span>The Creative Studio</span></button>
        <nav aria-label="Primary navigation">
          <button className={view === "studio" ? "active" : ""} onClick={() => setView("studio")}>Studio</button>
          <button className={view === "lesson" ? "active" : ""} onClick={() => openLesson(activeLesson)}>Learn</button>
          <a href="#project" onClick={() => setView("studio")}>Projects</a>
          <a href="#inspiration" onClick={() => setView("studio")}>Inspiration</a>
        </nav>
        <button className="profile" aria-label="Open profile">AS</button>
      </header>

      {view === "studio" && (
        <div className="view-enter">
          <section className="hero">
            <div className="eyebrow">Your studio · Expanded edition</div>
            <div className="hero-grid">
              <div data-reveal><h1>Learn to see what<br /><em>others overlook.</em></h1><p className="lede">The book gives you the principles. This studio helps you practice them—from visual foundations to brand building, campaign thinking, and creative leadership.</p><button className="primary" onClick={() => openLesson(activeLesson)}>Continue learning</button></div>
              <div className="today-card" data-reveal><div className="card-kicker">Your progress</div><div className="lesson-index">{overallProgress}%</div><h2>{lessons[activeLesson].title}</h2><p>{completedLessons.length} of {lessons.length} chapters complete · {savedCount} saved pieces</p><div className="progress-track"><span style={{ width: `${overallProgress}%` }} /></div><small>Your work is saved on this device</small></div>
            </div>
          </section>
          <section className="manifesto" data-reveal><p>Design is not decoration.</p><h2>It is the practice of reducing uncertainty.</h2></section>
          <section className="section lessons-section">
            <span className="section-number" aria-hidden="true">01</span>
            <div className="section-heading"><div><span className="eyebrow">The complete studio</span><h2>Fourteen ways of thinking</h2></div><button className="text-link" onClick={() => openLesson(activeLesson)}>View curriculum</button></div>
            <div className="lesson-list">
              {lessons.map((lesson, index) => (
                <button className="lesson-row" key={lesson.number} onClick={() => openLesson(index)} data-reveal>
                  <span className="lesson-number">{lesson.number}</span><span><strong>{lesson.title}</strong><small>{lesson.note}</small></span>
                  <span className="lesson-row-status">{completedLessons.includes(index) ? <b>Complete ✓</b> : <span className="mini-progress"><i style={{ width: index === activeLesson ? "45%" : "0%" }} /></span>}</span>
                </button>
              ))}
            </div>
          </section>
          <section id="project" className="section project-section">
            <div className="project-copy" data-reveal><span className="eyebrow light">Advanced studio</span><h2>Build the thinking<br />behind the work.</h2><p>Three private workspaces translate the final chapters into brand strategy, campaign analysis, and a personal creative philosophy.</p><div className="workspace-links">{workspaces.map((workspace, index) => <button key={workspace.id} className="paper-button" onClick={() => openWorkspace(index)}>{workspace.title}</button>)}</div></div>
            <div className="project-poster" aria-label="Creative Direction Studio preview" data-reveal><span>FIELD NOTES / 540+</span><div className="sun" aria-hidden="true" /><h3>Think<br />Deeper</h3><p>Observe. Question.<br />Direct with intention.</p><div className="poster-foot"><span>14</span><span>CHAPTERS<br />IN PRACTICE</span></div></div>
          </section>
          <section id="inspiration" className="section inspiration-section">
            <span className="section-number" aria-hidden="true">02</span><div className="section-heading"><div><span className="eyebrow">Your visual library</span><h2>What are you noticing?</h2></div><button className="text-link">Add a reference +</button></div>
            <div className="observation-grid">{observations.map((item, index) => <article className={`observation ${item.color}`} key={item.title} data-reveal><span>{item.tag}</span><div className={`visual visual-${index}`}><i /><b>Aa</b><i /></div><h3>{item.title}</h3><p>Saved observation · July 29</p></article>)}</div>
          </section>
        </div>
      )}

      {view === "lesson" && (
        <section className="lesson-page view-enter">
          <aside className="lesson-progress" aria-label="Lesson progress"><span>{currentLesson.number}</span><i><b style={{ height: `${((activeLesson + 1) / lessons.length) * 100}%` }} /></i><small>{lessons.length}</small></aside>
          <div className="lesson-toolbar"><button className="back-link" onClick={() => setView("studio")}>Back to studio</button><div className="lesson-switcher" aria-label="Lesson navigation">{lessons.map((lesson, index) => <button key={lesson.number} className={index === activeLesson ? "active" : ""} onClick={() => openLesson(index)} aria-label={`Open lesson ${lesson.number}: ${lesson.title}`}>{completedLessons.includes(index) ? "✓" : lesson.number}</button>)}</div></div>
          <div className="lesson-intro" data-reveal><div><span className="eyebrow">Chapter {currentLesson.number} · Studio lesson</span><h1>{currentLesson.title.split(" ")[0]}<br /><em>{currentLesson.title.split(" ").slice(1).join(" ") || "Practice"}</em></h1></div><div className="lesson-definition"><span>THE QUESTION</span><p>{currentLesson.question}</p></div></div>
          {completed && <div className="completion-banner" role="status"><span className="completion-check">✓</span><div><strong>Chapter complete</strong><p>Your notes, project, and coaching reflections are saved on this device.</p></div>{activeLesson < lessons.length - 1 && <button className="primary" onClick={() => moveLesson(1)}>Next chapter</button>}</div>}

          <section className="chapter-foundation" data-reveal>
            <div><span className="eyebrow">Key concepts</span><h2>The decisions beneath the design.</h2></div>
            <div className="concept-grid">{currentLesson.concepts.map((concept, index) => <article key={concept}><span>0{index + 1}</span><h3>{concept}</h3><p>Observe how this principle shapes recognition, meaning, and the audience&apos;s experience.</p></article>)}</div>
          </section>

          <PracticeLab key={activeLesson} lessonIndex={activeLesson} lesson={currentLesson} completed={completed} completePractice={completePractice} uploads={uploads} handleUpload={handleUpload} removeUpload={(index) => setUploads((current) => current.filter((_, itemIndex) => itemIndex !== index))} />

          <section className="studio-project-card" data-reveal><div><span className="eyebrow">Studio project · Chapter {currentLesson.number}</span><h2>{currentLesson.project}</h2><p>Document the thinking—not only the outcome. Your response is saved automatically on this device.</p></div><textarea aria-label="Studio project response" value={projectResponses[activeLesson] || ""} onChange={(e) => { setProjectResponses((current) => ({ ...current, [activeLesson]: e.target.value })); setSavedProject(false); }} placeholder="Describe your idea, audience, emotional territory, system, and the decisions you intend to test." /><button className="primary" onClick={() => setSavedProject(true)}>{savedProject ? "Project saved ✓" : "Save project"}</button></section>

          <section className="coach-review" data-reveal>
            <div className="coach-heading"><span className="eyebrow light">Creative Director review</span><h2>One question at a time.</h2><p>The coach will not make the work for you. It will help you see the decision that matters next.</p></div>
            <div className="coach-conversation"><span className="coach-label">Creative Director asks</span><blockquote>{coachQuestion}</blockquote><textarea aria-label="Coaching reflection" value={coachDraft} onChange={(e) => setCoachDraft(e.target.value)} placeholder="Think aloud. What do you notice now?" /><button className="paper-button" onClick={saveCoachResponse}>Save reflection and continue</button><small>{coachResponses[activeLesson]?.length || 0} reflections saved for this chapter</small></div>
          </section>

          <section className="reflection-notes" data-reveal>
            <div><span className="eyebrow">Reflection</span><h2>What changed in your judgment?</h2><ol>{currentLesson.reflections.map((question) => <li key={question}>{question}</li>)}</ol></div>
            <label>Private chapter notes<textarea value={notes[activeLesson] || ""} onChange={(e) => setNotes((current) => ({ ...current, [activeLesson]: e.target.value }))} placeholder="Capture observations, decisions, references, and questions to revisit." /></label>
          </section>

          <section className="review-lens" data-reveal><div><span className="eyebrow">Expanded review lens</span><h2>{reviewDimensions[reviewIndex]}</h2><p>Evaluate the work through this principle before moving to the next. Feedback should be grounded in the central idea—not personal taste.</p></div><div className="review-actions"><button disabled={reviewIndex === 0} onClick={() => setReviewIndex((current) => current - 1)}>Previous lens</button><span>{reviewIndex + 1} / {reviewDimensions.length}</span><button disabled={reviewIndex === reviewDimensions.length - 1} onClick={() => setReviewIndex((current) => current + 1)}>Next lens</button></div></section>

          <nav className="lesson-bottom-nav" aria-label="Previous and next lessons"><button disabled={activeLesson === 0} onClick={() => moveLesson(-1)}><span>Previous</span><strong>{activeLesson > 0 ? lessons[activeLesson - 1].title : "Start"}</strong></button><button disabled={activeLesson === lessons.length - 1} onClick={() => moveLesson(1)}><span>Next</span><strong>{activeLesson < lessons.length - 1 ? lessons[activeLesson + 1].title : "Complete"}</strong></button></nav>
        </section>
      )}

      {view === "workspace" && (
        <section className="workspace-page view-enter">
          <div className="lesson-toolbar"><button className="back-link" onClick={() => setView("studio")}>Back to projects</button><div className="workspace-switcher">{workspaces.map((workspace, index) => <button key={workspace.id} className={index === activeWorkspace ? "active" : ""} onClick={() => setActiveWorkspace(index)}>{workspace.title}</button>)}</div></div>
          <div className="workspace-intro"><span className="eyebrow">Private advanced studio</span><h1>{currentWorkspace.title}</h1><p>{currentWorkspace.intro}</p></div>
          <div className="workspace-form">{currentWorkspace.fields.map((field, index) => <label key={field}><span><b>0{index + 1}</b>{field}</span><textarea value={workspaceResponses[currentWorkspace.id]?.[field] || ""} onChange={(e) => setWorkspaceResponses((current) => ({ ...current, [currentWorkspace.id]: { ...(current[currentWorkspace.id] || {}), [field]: e.target.value } }))} placeholder="Write what you believe, then test whether your creative decisions support it." /></label>)}</div>
          <div className="workspace-save"><span>Saved automatically on this device</span><button className="primary" onClick={() => setView("studio")}>Return to studio</button></div>
        </section>
      )}

      <footer><div className="mark">CS</div><p>Observe carefully.<br />Decide deliberately.</p><span>The Creative Studio · Expanded Edition</span></footer>
    </main>
  );
}

function PracticeLab({ lessonIndex, lesson, completed, completePractice, uploads, handleUpload, removeUpload }: {
  lessonIndex: number;
  lesson: Lesson;
  completed: boolean;
  completePractice: () => void;
  uploads: { name: string; url: string; type: string }[];
  handleUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  removeUpload: (index: number) => void;
}) {
  const [primary, setPrimary] = useState(68);
  const [secondary, setSecondary] = useState(24);
  const [space, setSpace] = useState(28);
  const [choice, setChoice] = useState(0);
  const [choiceTwo, setChoiceTwo] = useState(0);
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);
  const [background, setBackground] = useState("#fffdf6");
  const [ink, setInk] = useState("#1d1c1a");
  const [accent, setAccent] = useState("#701f32");

  const reset = () => {
    setPrimary(68); setSecondary(24); setSpace(28); setChoice(0); setChoiceTwo(0);
    setShowA(true); setShowB(true); setShowC(true);
    setBackground("#fffdf6"); setInk("#1d1c1a"); setAccent("#701f32");
  };

  const feedback = useMemo(() => {
    switch (lessonIndex) {
      case 0: return primary - secondary > 34 ? "The reading order is clear: message first, evidence second." : "The message and details still compete. Create a more decisive relationship.";
      case 1: return space > 34 && [showA, showB, showC].filter(Boolean).length < 3 ? "The edit creates calm without losing the message." : "Remove one supporting element and give the remaining idea more room.";
      case 2: return ["Authoritative and direct.", "Editorial and considered.", "Condensed and urgent."][choice];
      case 3: return primary > 70 ? "One focal point now carries the composition." : "The contrast is present, but the hierarchy could be more decisive.";
      case 4: return choice > 0 && space > 20 ? "The grid creates order while the variation keeps it alive." : "Choose a structure and let alignment do more of the work.";
      case 5: return [showA, showB, showC].filter(Boolean).length === 1 ? "One idea survives. The restraint makes it feel confident." : "The chapter asks for discipline: decide which element deserves to survive.";
      case 6: return choice === choiceTwo ? "The ritual and atmosphere repeat the same signal. Recognition is forming." : "The sensory choices feel disconnected. Make them reinforce one product truth.";
      case 7: return choice === 2 ? "The spread slows the reader down and lets the story breathe." : "Notice how this format changes pace. Decide what the reader should discover next.";
      case 8: return `The object now occupies a ${["quiet luxury", "playful intimacy", "clinical precision"][choice]} territory.`;
      case 9: return showA && showB && showC ? "The executions change by channel while the central belief stays intact." : "A campaign becomes stronger when each channel has a distinct job.";
      case 10: return choice === choiceTwo ? "The creative choices reinforce one world." : "One decision breaks the spell. Adjust it before adding anything else.";
      case 11: return !showA && showB && showC ? "The logo is gone, but the repeated behaviors still create recognition." : "Remove the name and rely on the system’s behaviors.";
      case 12: return choice > 0 && choiceTwo > 0 ? "You are moving past appearance and identifying the strategic structure." : "Name the audience insight and channel role before judging the execution.";
      default: return choice === 2 ? "The feedback protects the idea and gives the maker a useful next move." : "Lead with the central idea before discussing taste or polish.";
    }
  }, [lessonIndex, primary, secondary, space, choice, choiceTwo, showA, showB, showC]);

  const renderControls = () => {
    switch (lessonIndex) {
      case 0:
        return <><Range label="Message scale" value={primary} setValue={setPrimary} min={38} max={88} /><Range label="Supporting scale" value={secondary} setValue={setSecondary} min={14} max={46} /><Range label="Separation" value={space} setValue={setSpace} min={8} max={58} /></>;
      case 1:
        return <><Range label="Breathing room" value={space} setValue={setSpace} min={8} max={64} /><Toggle label="Keep eyebrow" value={showA} setValue={setShowA} /><Toggle label="Keep supporting copy" value={showB} setValue={setShowB} /><Toggle label="Keep decorative rule" value={showC} setValue={setShowC} /></>;
      case 2:
        return <><Choice label="Typographic voice" options={["Bold sans", "Editorial serif", "Condensed utility"]} value={choice} setValue={setChoice} /><Range label="Type scale" value={primary} setValue={setPrimary} min={42} max={86} /><Range label="Tracking" value={space} setValue={setSpace} min={8} max={52} /></>;
      case 3:
        return <><Range label="Focal scale" value={primary} setValue={setPrimary} min={38} max={92} /><Range label="Supporting weight" value={secondary} setValue={setSecondary} min={14} max={42} /><ColorControls background={background} ink={ink} accent={accent} setBackground={setBackground} setInk={setInk} setAccent={setAccent} /></>;
      case 4:
        return <><Choice label="Column system" options={["No grid", "Two columns", "Four columns"]} value={choice} setValue={setChoice} /><Choice label="Alignment" options={["Centered", "Left edge", "Asymmetrical"]} value={choiceTwo} setValue={setChoiceTwo} /><Range label="Gutter" value={space} setValue={setSpace} min={8} max={48} /></>;
      case 5:
        return <><p className="control-prompt">Choose what earns the spotlight. Try leaving only one.</p><Toggle label="Product" value={showA} setValue={setShowA} /><Toggle label="Feature list" value={showB} setValue={setShowB} /><Toggle label="Promotional badge" value={showC} setValue={setShowC} /><Range label="Isolation" value={space} setValue={setSpace} min={10} max={58} /></>;
      case 6:
        return <><Choice label="Product ritual" options={["Glaze", "Press", "Refresh"]} value={choice} setValue={setChoice} /><Choice label="Sensory atmosphere" options={["Glossy", "Tactile", "Cool"]} value={choiceTwo} setValue={setChoiceTwo} /><Range label="Repetition" value={primary} setValue={setPrimary} min={1} max={5} /></>;
      case 7:
        return <><Choice label="Editorial moment" options={["Cover", "Story opener", "Two-page spread"]} value={choice} setValue={setChoice} /><Range label="Headline scale" value={primary} setValue={setPrimary} min={40} max={90} /><Range label="Margin" value={space} setValue={setSpace} min={10} max={52} /></>;
      case 8:
        return <><Choice label="Emotional territory" options={["Quiet luxury", "Playful intimacy", "Clinical precision"]} value={choice} setValue={setChoice} /><Choice label="Light" options={["Soft", "Flash", "Hard"]} value={choiceTwo} setValue={setChoiceTwo} /><ColorControls background={background} ink={ink} accent={accent} setBackground={setBackground} setInk={setInk} setAccent={setAccent} /></>;
      case 9:
        return <><p className="control-prompt">Give each channel a role while protecting one central belief.</p><Toggle label="Social creates curiosity" value={showA} setValue={setShowA} /><Toggle label="Outdoor creates recognition" value={showB} setValue={setShowB} /><Toggle label="Experience creates participation" value={showC} setValue={setShowC} /></>;
      case 10:
        return <><Choice label="Light and setting" options={["Soft daylight", "Direct flash", "Stage shadow"]} value={choice} setValue={setChoice} /><Choice label="Type and movement" options={["Soft daylight", "Fast energy", "Measured stillness"]} value={choiceTwo} setValue={setChoiceTwo} /><Range label="Visual intensity" value={primary} setValue={setPrimary} min={35} max={88} /></>;
      case 11:
        return <><Toggle label="Show brand name" value={showA} setValue={setShowA} /><Toggle label="Repeat signature crop" value={showB} setValue={setShowB} /><Toggle label="Repeat brand phrase" value={showC} setValue={setShowC} /><Choice label="Brand behavior" options={["Precise", "Generous", "Provocative"]} value={choice} setValue={setChoice} /></>;
      case 12:
        return <><Choice label="Audience insight" options={["Not defined", "Belonging", "Self-expression"]} value={choice} setValue={setChoice} /><Choice label="Channel role" options={["Not defined", "Introduce", "Deepen", "Activate"]} value={choiceTwo} setValue={setChoiceTwo} /><textarea className="practice-textarea" aria-label="Campaign lesson learned" placeholder="What principle—not appearance—would you carry into another campaign?" /></>;
      default:
        return <><Choice label="First review priority" options={["Polish the details", "Make it trendier", "Protect the central idea"]} value={choice} setValue={setChoice} /><textarea className="practice-textarea" aria-label="Creative direction feedback" placeholder="Write one question that helps the designer see the next decision." /><Toggle label="Feedback explains why it matters" value={showA} setValue={setShowA} /></>;
    }
  };

  return (
    <div className={`exercise-shell practice-${lessonIndex + 1}`} data-reveal>
      <div className="exercise-copy">
        <span className="eyebrow">Interactive practice · {lesson.title}</span>
        <h2>{practiceMeta[lessonIndex].title}</h2>
        <p>{practiceMeta[lessonIndex].intro}</p>
        {renderControls()}
        <div className="feedback" role="status"><span>Studio note</span><p>{feedback}</p></div>
      </div>
      <div className="canvas-wrap">
        <PracticeCanvas lessonIndex={lessonIndex} lesson={lesson} primary={primary} secondary={secondary} space={space} choice={choice} choiceTwo={choiceTwo} showA={showA} showB={showB} showC={showC} background={background} ink={ink} accent={accent} />
        <div className="canvas-actions"><button onClick={reset}>Reset</button><button className={`primary ${completed ? "complete-button" : ""}`} onClick={completePractice}>{completed ? "Completed ✓" : "Mark practice complete"}</button></div>
        <UploadWork uploads={uploads} handleUpload={handleUpload} removeUpload={removeUpload} />
      </div>
    </div>
  );
}

function PracticeCanvas(props: { lessonIndex: number; lesson: Lesson; primary: number; secondary: number; space: number; choice: number; choiceTwo: number; showA: boolean; showB: boolean; showC: boolean; background: string; ink: string; accent: string }) {
  const { lessonIndex, lesson, primary, secondary, space, choice, choiceTwo, showA, showB, showC, background, ink, accent } = props;
  const style = { "--lab-space": `${space}px`, "--lab-primary": `${primary}px`, "--lab-secondary": `${secondary}px`, "--lab-bg": background, "--lab-ink": ink, "--lab-accent": accent } as React.CSSProperties;
  const repetitions = Math.max(1, Math.round(primary));

  if (lessonIndex === 5) return <div className="practice-canvas apple-lab" style={style}><span>FOCUS / 01</span>{showA && <div className="product-orb">Object</div>}{showB && <ul><li>Faster</li><li>Lighter</li><li>Smarter</li></ul>}{showC && <b>NEW</b>}<p>One experience.<br />Nothing extra.</p></div>;
  if (lessonIndex === 6) return <div className={`practice-canvas rhode-lab mood-${choiceTwo}`} style={style}><span>{["THE GLAZE", "THE PRESS", "THE REFRESH"][choice]}</span><div className="ritual-row">{Array.from({ length: repetitions }).map((_, index) => <i key={index} />)}</div><strong>{["GLAZE", "PRESS", "COOL"][choice]}</strong><small>One product truth, repeated until it becomes a world.</small></div>;
  if (lessonIndex === 7) return <div className={`practice-canvas editorial-lab editorial-${choice}`} style={style}><span>THE CREATIVE REVIEW / 07</span><strong>PACE<br /><em>the story.</em></strong><div className="editorial-image" /><p>Scale creates emotion. Cropping creates tension. Space creates rhythm.</p></div>;
  if (lessonIndex === 8) return <div className={`practice-canvas desire-lab territory-${choice} light-${choiceTwo}`} style={style}><span>OBJECT STUDY</span><div className="desire-object">01</div><strong>{["WANT LESS.", "KEEP CLOSE.", "EXACTLY RIGHT."][choice]}</strong><small>The product is unchanged. The emotional value is not.</small></div>;
  if (lessonIndex === 9) return <div className="practice-canvas campaign-lab" style={style}><strong>ONE<br />CITY.</strong><p>One shared idea, translated with purpose.</p><div className="channel-row">{showA && <i>SOCIAL<br /><b>Curiosity</b></i>}{showB && <i>OUTDOOR<br /><b>Recognition</b></i>}{showC && <i>LIVE<br /><b>Participation</b></i>}</div></div>;
  if (lessonIndex === 10) return <div className={`practice-canvas direction-lab direction-${choice}-${choiceTwo}`} style={style}><span>ART DIRECTION BOARD</span><div className="direction-frame"><i /><i /><i /></div><strong>{["SOFT / HUMAN", "FLASH / ALIVE", "SHADOW / STILL"][choice]}</strong><small>Casting · Setting · Light · Type · Motion</small></div>;
  if (lessonIndex === 11) return <div className={`practice-canvas brand-lab brand-${choice}`} style={style}>{showA && <span>STILL / FORM</span>}<div className="brand-crop">S</div>{showB && <><i /><i /></>}<strong>{showC ? ["MADE WITH CARE", "ROOM TO BREATHE", "QUESTION THE USUAL"][choice] : "A REPEATABLE BEHAVIOR"}</strong><small>{showA ? "Recognition can begin with a name." : "No logo. Does the system still belong?"}</small></div>;
  if (lessonIndex === 12) return <div className="practice-canvas breakdown-lab" style={style}><span>CAMPAIGN AUTOPSY</span><strong>WHAT<br />MADE IT<br />COHERE?</strong><dl><div><dt>BIG IDEA</dt><dd>Belong here.</dd></div><div><dt>INSIGHT</dt><dd>{["Define the audience first", "People want belonging", "Identity is performed"][choice]}</dd></div><div><dt>CHANNEL ROLE</dt><dd>{["Choose a role", "Introduce", "Deepen", "Activate"][choiceTwo]}</dd></div></dl></div>;
  if (lessonIndex === 13) return <div className="practice-canvas leader-lab" style={style}><span>CREATIVE REVIEW / 14</span><blockquote>“The work needs more.”</blockquote><strong>{["Polish is not yet the problem.", "Trend is not a strategy.", "What central idea are we protecting?"][choice]}</strong><p>{showA ? "Useful direction connects the recommendation to the reason." : "A preference without a reason is not direction."}</p></div>;

  const className = lessonIndex === 1 ? "space-lab" : lessonIndex === 2 ? `type-lab type-${choice}` : lessonIndex === 3 ? "contrast-lab" : lessonIndex === 4 ? `grid-lab grid-${choice} align-${choiceTwo}` : "hierarchy-lab";
  return <div className={`practice-canvas ${className}`} style={style}>{showA && <span className="canvas-label">THE CREATIVE STUDIO PRESENTS</span>}<strong>ONE<br />IDEA</strong>{showC && <div className="canvas-rule" />}{showB && <p>{lesson.title}<br />Chapter {lesson.number}</p>}<small>Make the central belief visible.<br />Let every choice reinforce it.</small></div>;
}

function Range({ label, value, setValue, min, max }: { label: string; value: number; setValue: (value: number) => void; min: number; max: number }) {
  return <label>{label} <output>{value}</output><input type="range" min={min} max={max} value={value} onChange={(event) => setValue(Number(event.target.value))} /></label>;
}

function Toggle({ label, value, setValue }: { label: string; value: boolean; setValue: (value: boolean) => void }) {
  return <label className="practice-toggle"><input type="checkbox" checked={value} onChange={(event) => setValue(event.target.checked)} /><span>{label}</span></label>;
}

function Choice({ label, options, value, setValue }: { label: string; options: string[]; value: number; setValue: (value: number) => void }) {
  return <label className="practice-choice">{label}<select value={value} onChange={(event) => setValue(Number(event.target.value))}>{options.map((option, index) => <option key={option} value={index}>{option}</option>)}</select></label>;
}

function ColorControls({ background, ink, accent, setBackground, setInk, setAccent }: { background: string; ink: string; accent: string; setBackground: (value: string) => void; setInk: (value: string) => void; setAccent: (value: string) => void }) {
  return <fieldset className="design-controls"><legend>Color relationships</legend><label>Background<input type="color" value={background} onChange={(event) => setBackground(event.target.value)} /></label><label>Type<input type="color" value={ink} onChange={(event) => setInk(event.target.value)} /></label><label>Accent<input type="color" value={accent} onChange={(event) => setAccent(event.target.value)} /></label></fieldset>;
}

function UploadWork({ uploads, handleUpload, removeUpload }: { uploads: { name: string; url: string; type: string }[]; handleUpload: (event: ChangeEvent<HTMLInputElement>) => void; removeUpload: (index: number) => void }) {
  return (
    <section className="upload-work">
      <div><span className="eyebrow">Saved work</span><h3>Bring your practice into the studio.</h3><p>Upload a poster, sketch, screenshot, campaign board, or PDF made in Canva or Adobe.</p></div>
      <label className="upload-button">Upload work<input type="file" accept="image/*,.pdf" multiple onChange={handleUpload} /></label>
      {uploads.length > 0 && (
        <div className="upload-grid">
          {uploads.map((upload, index) => (
            <article key={`${upload.name}-${index}`}>
              {upload.type.startsWith("image/") ? (
                // eslint-disable-next-line @next/next/no-img-element -- Local object URL preview.
                <img src={upload.url} alt="" />
              ) : <div className="pdf-preview">PDF</div>}
              <span>{upload.name}</span>
              <button aria-label={`Remove ${upload.name}`} onClick={() => removeUpload(index)}>Remove</button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
