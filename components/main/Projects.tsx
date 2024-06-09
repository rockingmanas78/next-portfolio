import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 px-10">
        <ProjectCard
          src="/sdsenclave.png"
          title="SDS Enclave"
          description="Modern Interactive Website for a construction project in Jamshedpur based on NextJs"
        />
        <ProjectCard
          src="/dawntown.png"
          title="Dawntown"
          description="Ecommerce marketplace website for Hyped Sneakers & Apparels"
        />
        <ProjectCard
          src="/foodorich.png"
          title="Foodorich App"
          description="A cross platform food delivery app build using flutter with payment gateway integration and location based restaurant listing"
        />
        <ProjectCard
          src="/admindashboard.png"
          title="Admin Dashboard"
          description="An multisupport Admin Dashboard for small businesses for managing their ERP and Inventories"
        />
        <ProjectCard
          src="/jetsetgocabs.png"
          title="Jet Set Go Cabs"
          description="A website for intercity cab booking"
        />
      </div>
    </div>
  );
};

export default Projects;
