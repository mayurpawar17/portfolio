import '../styles/Section.css'
import '../styles/Projects.css'

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="section">
      <span className="section-badge">Selected Projects</span>
      <h2 className="section-title">Check out my latest work</h2>

      <div className="projects-grid">
        <ProjectCard
          title="Video-Ocean Video Agent"
          date="Jun. 2025 – Present"
          desc="Video-Ocean Video Agent generates videos up to minutes with a few clicks."
          image="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tags={["Website"]}
        />

        <ProjectCard
          title="Open-Sora"
          date="Mar. 2024 – Mar. 2025"
          desc="The world’s first open-source Sora-like video generation model."
         image="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tags={["GitHub", "Open-Sora 1.2", "Open-Sora 2.0"]}
        />

        <ProjectCard
          title="Video-Ocean"
          date="Apr. 2025 – Present"
          desc="A video generation platform supporting video, image and audio."
           image="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tags={["Website", "#1 Product Hunt"]}
        />
      </div>

      <button className="show-all">⌄ Show All</button>
    </section>
  );
};

export default Projects;
