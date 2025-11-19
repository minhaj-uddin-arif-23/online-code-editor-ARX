"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tutorials = [
  // Programming Languages
  { title: "Python", href: "/tutorials/python", color: "bg-blue-500" },
  {
    title: "JavaScript",
    href: "/tutorials/javascript",
    color: "bg-yellow-500",
  },
  { title: "TypeScript", href: "/tutorials/typescript", color: "bg-blue-700" },
  { title: "C++", href: "/tutorials/cpp", color: "bg-purple-500" },
  { title: "C", href: "/tutorials/c", color: "bg-gray-500" },
  { title: "Java", href: "/tutorials/java", color: "bg-red-500" },
  { title: "Go", href: "/tutorials/go", color: "bg-green-500" },
  { title: "Rust", href: "/tutorials/rust", color: "bg-orange-500" },
  { title: "Kotlin", href: "/tutorials/kotlin", color: "bg-pink-500" },
  { title: "PHP", href: "/tutorials/php", color: "bg-indigo-500" },

  // Web Development
  { title: "HTML5", href: "/tutorials/html", color: "bg-orange-400" },
  { title: "CSS3", href: "/tutorials/css", color: "bg-blue-400" },
  { title: "Tailwind CSS", href: "/tutorials/tailwind", color: "bg-teal-400" },
  { title: "DaisyUI", href: "/tutorials/daisyui", color: "bg-purple-400" },
  { title: "React.js", href: "/tutorials/react", color: "bg-cyan-400" },
  { title: "Next.js", href: "/tutorials/nextjs", color: "bg-gray-700" },
  { title: "Node.js", href: "/tutorials/nodejs", color: "bg-green-600" },
  { title: "Express.js", href: "/tutorials/express", color: "bg-gray-600" },

  // Databases
  { title: "MySQL", href: "/tutorials/mysql", color: "bg-blue-600" },
  {
    title: "PostgreSQL",
    href: "/tutorials/postgresql",
    color: "bg-indigo-600",
  },
  { title: "MongoDB", href: "/tutorials/mongodb", color: "bg-green-700" },
  { title: "Firebase", href: "/tutorials/firebase", color: "bg-yellow-600" },

  // DSA
  {
    title: "Arrays & Strings",
    href: "/tutorials/dsa/arrays-strings",
    color: "bg-pink-500",
  },
  {
    title: "Linked Lists",
    href: "/tutorials/dsa/linked-lists",
    color: "bg-purple-500",
  },
  {
    title: "Stacks & Queues",
    href: "/tutorials/dsa/stacks-queues",
    color: "bg-indigo-500",
  },
  {
    title: "Trees & Graphs",
    href: "/tutorials/dsa/trees-graphs",
    color: "bg-green-500",
  },
  {
    title: "Sorting & Searching",
    href: "/tutorials/dsa/sorting-searching",
    color: "bg-blue-500",
  },
  {
    title: "Dynamic Programming",
    href: "/tutorials/dsa/dp",
    color: "bg-red-500",
  },

  // Other Topics
  {
    title: "Machine Learning",
    href: "/tutorials/machine-learning",
    color: "bg-yellow-500",
  },
  { title: "DevOps & Cloud", href: "/tutorials/devops", color: "bg-gray-500" },
  {
    title: "Competitive Programming",
    href: "/tutorials/competitive",
    color: "bg-pink-600",
  },
];

export default function TutorialCards() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Explore All Tutorials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg sm:text-xl"
        >
          Learn programming, web development, databases, and algorithms step by
          step.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {tutorials.map((tutorial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition cursor-pointer`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${tutorial.color}`}
            >
              <span className="text-white font-bold text-lg">
                {tutorial.title[0]}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
            <Link
              href={tutorial.href}
              className="text-blue-400 font-medium hover:underline"
            >
              Start Learning &rarr;
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
