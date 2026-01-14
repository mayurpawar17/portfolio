import '../styles/Section.css'
import '../styles/Projects.css'

import ProjectCard from "../components/ProjectCard";


const Projects = () => {
  return (
    <section className="section">
      {/* <span className="section-badge">Selected Projects</span> */}
      <h2 className="section-title">Check out my latest work</h2>

      <div className="projects-grid">
        <ProjectCard
          title="Sneakology"
          date=""
          desc="Sneakology is a sneaker enthusiast’s paradise—a dedicated platform for sneaker lovers to explore, analyze, and stay updated on the latest hype releases, rare kicks, and streetwear culture."
          image='https://github.com/mayurpawar17/published-apps-resources/blob/main/Portfolio/sneakologBg.jpg?raw=true'
          tags={["Website","Github"]}
        />

        <ProjectCard
          title="GrowMate App"
          // date="Mar. 2024 – Mar. 2025"
          desc="GrowMate is an Android application designed to assist plant enthusiasts in managing and taking care of their plants. The app features user authentication via Firebase for a personalized experience."
         image='https://github.com/mayurpawar17/published-apps-resources/blob/main/Portfolio/growMateBg.png?raw=true'
          tags={["GitHub"]}
        />

        <ProjectCard
          title="Video-Ocean"
          date="Apr. 2025 – Present"
          desc="A video generation platform supporting video, image and audio."
           image="https://github.com/mayurpawar17/published-apps-resources/blob/main/Portfolio/bmi_bg.png?raw=true"
          tags={["Website", "#1 Product Hunt"]}
        />

         <ProjectCard
          title="Video-Ocean"
          date="Apr. 2025 – Present"
          desc="A video generation platform supporting video, image and audio."
           image="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tags={["Website", "#1 Product Hunt"]}
        />

         <ProjectCard
          title="Video-Ocean"
          date="Apr. 2025 – Present"
          desc="A video generation platform supporting video, image and audio."
           image="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tags={["Website", "#1 Product Hunt"]}
        />
      </div>

      {/* <button className="show-all">Show All</button> */}
    </section>
  );
};

export default Projects;
