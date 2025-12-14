import php from "../assets/images/php.png";
import mui from "../assets/images/material-ui.png";
import git from "../assets/images/git.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import next from "../assets/images/next.svg";
import jest from "../assets/images/jest.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/node.png";
import mysql from "../assets/images/mysql.png";
import redux from "../assets/images/redux.png";
import github from "../assets/images/github.png";
import typescript from "../assets/images/ts.png";
import javascript from "../assets/images/js.png";

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
        { name: "Next.js", tooltip: "Frontend Framework", icon: next },
        { name: "React.js", tooltip: "Frontend Library", icon: react },
        { name: "Redux/RTK Query", tooltip: "State Management", icon: redux },
        { name: "TypeScript", tooltip: "Programming Language", icon: typescript },
        { name: "Javascript", tooltip: "Programming Language", icon: javascript },
        { name: "HTML5", tooltip: "Markup Language", icon: html },
        { name: "CSS3", tooltip: "Styling Language", icon: css },
        { name: "Tailwind CSS", tooltip: "Styling Framework", icon: tailwind },
        { name: "Material UI", tooltip: "Styling Framework", icon: mui },
        { name: "Git", tooltip: "Version Control", icon: git },
        { name: "GitHub", tooltip: "Version Control", icon: github },
        { name: "Jest/Testing", tooltip: "Testing Framework", icon: jest },
        { name: "Vitest", tooltip: "Testing Framework", icon: vitest },
        { name: "React Testing Library", tooltip: "Testing Framework", icon: reactTestingLibrary },
        { name: "Playwright", tooltip: "Testing Framework", icon: playwright },
        { name: "postman", tooltip: "API Testing", icon: postman },
      ],
    },
    {
      category: "Experienced & Familiar with",
      gradient: "from-accent to-secondary",
      icon: Server,
      skills: [
        { name: "Angular", tooltip: "Frontend Framework", icon: angular },
        { name: "React Native", tooltip: "Frontend Framework", icon: react },
        { name: "Node.js", tooltip: "Backend Framework", icon: nodejs },
        { name: "Express.js", tooltip: "Backend Framework", icon: express },
        { name: "Python", tooltip: "Programming Language", icon: python },
        { name: "Fast API", tooltip: "Backend Framework", icon: fastAPI },
        { name: "PHP", tooltip: "Programming Language", icon: php },
        { name: "Laravel", tooltip: "Backend Framework", icon: laravel },
        { name: "GraphQL", tooltip: "API", icon: graphql },
        { name: "Sequelize", tooltip: "ORM", icon: sequelize },
        { name: "MongoDB", tooltip: "Database", icon: mongodb },
        { name: "MySQL", tooltip: "Database", icon: mysql },
        { name: "PostgreSQL", tooltip: "Database", icon: postgreSQL },
        { name: "Firebase", tooltip: "Database", icon: firebase },
        { name: "Android Studio", tooltip: "IDE", icon: androidStudio },
      ],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative">
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
              <h2 className="text-2xl md:text-2xl font-bold mb-4 gradient-text font-display">
                {category.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div title={skill.tooltip} className="flex flex-col items-center">
                    <img src={skill.icon} alt="React" className={`h-12`} />
                    <span className="text-sm text-center font-semibold text-foreground font-display">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
