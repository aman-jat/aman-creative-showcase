import php from "../assets/images/php.png";
import mui from "../assets/images/material-ui.png";
import git from "../assets/images/git.png";
import html from "../assets/images/html.png";
import next from "../assets/images/next.png";
import jest from "../assets/images/jest.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/node.png";
import mysql from "../assets/images/mysql.png";
import redux from "../assets/images/redux.png";
import github from "../assets/images/github.png";
import typescript from "../assets/images/ts.png";
import python from "../assets/images/python.png";
import vitest from "../assets/images/vitest.png";
import postman from "../assets/images/postman.png";
import angular from "../assets/images/angular.png";
import mongodb from "../assets/images/mongodb.png";
import graphql from "../assets/images/graphql.png";
import express from "../assets/images/express.png";
import fastAPI from "../assets/images/fastapi.png";
import laravel from "../assets/images/laravel.png";
import tailwind from "../assets/images/tailwind.png";
import firebase from "../assets/images/firebase.png";
import sequelize from "../assets/images/sequelize.png";
import postgreSQL from "../assets/images/postgres.png";
import playwright from "../assets/images/playwright.svg";
import androidStudio from "../assets/images/android-studio.png";
import reactTestingLibrary from "../assets/images/react-testing-library.png";

import sleeksky from "../assets/organizations/sleeksky.svg";
import exxat from "../assets/organizations/exxat.svg";
import techdome from "../assets/organizations/techdome.svg";
import numadic from "../assets/organizations/numadic.svg";
import cibirix from "../assets/organizations/cibirix.svg";
import sensei from "../assets/organizations/sensei.svg";

import { Code, Database, Server, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Primary Tech Stack (Daily Drivers)",
      gradient: "from-accent to-secondary",
      icon: Code,
      skills: [
        { name: "Next.js", icon: next },
        { name: "React.js", icon: react },
        { name: "Redux/RTK", icon: redux },
        { name: "TypeScript", icon: typescript },
        { name: "Javascript", icon: typescript },
        { name: "HTML5/CSS3", icon: html },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "Material UI", icon: mui },
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
        { name: "Jest/Testing", icon: jest },
        { name: "Vitest", icon: vitest },
        { name: "React Testing Library", icon: reactTestingLibrary },
        { name: "Playwright", icon: playwright },
        { name: "postman", icon: postman },
      ],
    },
    {
      category: "Experienced & Familiar with",
      gradient: "from-accent to-secondary",
      icon: Server,
      skills: [
        { name: "Angular", icon: angular },
        { name: "React Native", icon: react },
        { name: "Node.js", icon: nodejs },
        { name: "Express.js", icon: express },
        { name: "Python", icon: python },
        { name: "Fast API", icon: fastAPI },
        { name: "PHP", icon: php },
        { name: "Laravel", icon: laravel },
        { name: "GraphQL", icon: graphql },
        { name: "Sequelize", icon: sequelize },
        { name: "MongoDB", icon: mongodb },
        { name: "MySQL", icon: mysql },
        { name: "PostgreSQL", icon: postgreSQL },
        { name: "Firebase", icon: firebase },
        { name: "Android Studio", icon: androidStudio },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="glass rounded-3xl p-6 md:p-10">
              <h3
                className={`text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-display`}
              >
                {category.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div className="flex flex-col items-center">
                    <img
                      src={skill.icon}
                      alt="React"
                      className={`h-12  ${skillIndex === 0 && catIndex === 0 ? "bg-white" : ""}`}
                    />
                    <span className="text-sm font-semibold text-foreground font-display">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass mt-8 rounded-2xl p-8  text-center">
          <p className="text-lg text-slate-300 mb-4">
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
              Always Learning
            </span>{" "}
            - Continuously expanding my skillset with emerging technologies and best practices
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Next.js", "Vue.js", "Docker", "AWS", "CI/CD"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full text-sm text-slate-400 hover:text-white hover:border-blue-500 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
