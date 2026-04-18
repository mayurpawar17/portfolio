import "../styles/Section.css";
import "../styles/Projects.css";

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
          image="https://github.com/mayurpawar17/published-apps-resources/blob/main/Portfolio/sneakologBg.jpg?raw=true"
          // tags={["Website","Github"]}
          tags={[
            { name: "Website", link: "https://your-site.com" },
            { name: "Github", link: "https://github.com/your-repo" },
          ]}
        />

        <ProjectCard
          title="GrowMate App"
          // date="Mar. 2024 – Mar. 2025"
          desc="GrowMate is an Android application designed to assist plant enthusiasts in managing and taking care of their plants. The app features user authentication via Firebase for a personalized experience."
          image="https://github.com/mayurpawar17/published-apps-resources/blob/main/Portfolio/growMateBg.png?raw=true"
          tags={[
            { name: "Website", link: "https://your-site.com" },
            { name: "Github", link: "https://github.com/your-repo" },
          ]}
        />

        <ProjectCard
          title="BMI FitIndex Pro app"
          // date="Apr. 2025 – Present"
          desc="BMI FitIndex Pro is a sleek and powerful Flutter app designed to help users monitor their Body Mass Index (BMI) and track their fitness journey with ease. Whether you're a beginner or a fitness enthusiast, this app provides instant feedback on your health index based on your height and weight inputs.

"
          image="https://github.com/mayurpawar17/published-apps-resources/blob/main/Portfolio/bmi_bg.png?raw=true"
          tags={[
            {
              name: "Play Store",
              link: "https://play.google.com/store/apps/details?id=com.devmayur.bmi_fitindex_pro&pcampaignid=web_share",
            },

            {
              name: "Github",
              link: "https://github.com/mayurpawar17/bmi-calculator-app.git",
            },
          ]}
        />

        <ProjectCard
          title="Video-Ocean"
          date="Apr. 2025 – Present"
          desc="A video generation platform supporting video, image and audio."
          image="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tags={[
            { name: "Website", link: "https://your-site.com" },
            { name: "Github", link: "https://github.com/your-repo" },
          ]}
        />

        <ProjectCard
          title="Video-Ocean"
          date="Apr. 2025 – Present"
          desc="A video generation platform supporting video, image and audio."
          image="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tags={[
            { name: "Website", link: "https://your-site.com" },
            { name: "Github", link: "https://github.com/your-repo" },
          ]}
        />
      </div>

      {/* <button className="show-all">Show All</button> */}
    </section>
  );
};

export default Projects;
