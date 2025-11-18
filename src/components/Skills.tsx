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
      category: "Frontend Development",
      gradient: "from-accent to-secondary",
      icon: Code,
      skills: [
        { name: "Next.js", level: 95, icon: next },
        { name: "React.js", level: 95, icon: react },
        { name: "Redux/RTK", level: 88, icon: redux },
        { name: "Angular", level: 80, icon: angular },
        { name: "TypeScript/Javascript", level: 95, icon: typescript },
        { name: "HTML5/CSS3", level: 95, icon: html },
        { name: "Tailwind CSS", level: 88, icon: tailwind },
        { name: "Material UI", level: 88, icon: mui },
      ],
    },
    {
      category: "Backend Development",
      gradient: "from-accent to-secondary",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90, icon: nodejs },
        { name: "Express.js", level: 88, icon: express },
        { name: "Python", level: 85, icon: python },
        { name: "Fast API", level: 92, icon: fastAPI },
        { name: "PHP", level: 92, icon: php },
        { name: "Laravel", level: 92, icon: laravel },
        { name: "GraphQL", level: 80, icon: graphql },
        { name: "Sequelize", level: 80, icon: sequelize },
      ],
    },
    {
      category: "Database & Cloud",
      gradient: "from-accent to-secondary",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90, icon: mongodb },
        { name: "MySQL", level: 85, icon: mysql },
        { name: "PostgreSQL", level: 82, icon: postgreSQL },
        { name: "Firebase", level: 70, icon: firebase },
      ],
    },
    {
      category: "Tools & Others",
      gradient: "from-accent to-secondary",
      icon: Settings,
      skills: [
        { name: "Git", level: 92, icon: git },
        { name: "GitHub", level: 80, icon: github },
        { name: "Jest/Testing", level: 85, icon: jest },
        { name: "Vitest", level: 82, icon: vitest },
        { name: "React Testing Library", level: 80, icon: reactTestingLibrary },
        { name: "Playwright", level: 80, icon: playwright },
        { name: "postman", level: 85, icon: postman },
        { name: "Android Studio", level: 80, icon: androidStudio },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="glass rounded-3xl p-6 md:p-10">
              <h3
                className={`text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-display`}
              >
                {category.category}
              </h3>

              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-card/50 group-hover:scale-110 transition-spring">
                          <img
                            src={skill.icon}
                            alt="React"
                            className={`w-6 ${
                              skillIndex === 0 && catIndex === 0 ? "bg-white" : ""
                            }`}
                          />
                        </div>
                        <span className="text-sm font-semibold text-foreground font-display">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-display">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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
