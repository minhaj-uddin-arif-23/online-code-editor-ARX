"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-5 gap-10 text-center md:text-left">
        {/* --- Brand / Intro --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white">CodeSphere</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            The next-generation online compiler and learning platform. Write,
            debug, and execute code directly in your browser — for free.
          </p>
        </motion.div>

        {/* --- Languages --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Languages</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/languages/python" className="hover:text-blue-400">
                Python
              </Link>
            </li>
            <li>
              <Link
                href="/languages/javascript"
                className="hover:text-blue-400"
              >
                JavaScript
              </Link>
            </li>
            <li>
              <Link href="/languages/cpp" className="hover:text-blue-400">
                C++
              </Link>
            </li>
            <li>
              <Link href="/languages/java" className="hover:text-blue-400">
                Java
              </Link>
            </li>
            <li>
              <Link href="/languages/c" className="hover:text-blue-400">
                C
              </Link>
            </li>
            <li>
              <Link href="/languages/go" className="hover:text-blue-400">
                Go
              </Link>
            </li>
            <li>
              <Link href="/languages/rust" className="hover:text-blue-400">
                Rust
              </Link>
            </li>
            <li>
              <Link href="/languages/php" className="hover:text-blue-400">
                PHP
              </Link>
            </li>
            <li>
              <Link
                href="/languages/typescript"
                className="hover:text-blue-400"
              >
                TypeScript
              </Link>
            </li>
            <li>
              <Link href="/languages/kotlin" className="hover:text-blue-400">
                Kotlin
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* --- Tutorials --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Tutorials</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/tutorials/frontend" className="hover:text-blue-400">
                Frontend Development
              </Link>
            </li>
            <li>
              <Link href="/tutorials/backend" className="hover:text-blue-400">
                Backend Development
              </Link>
            </li>
            <li>
              <Link href="/tutorials/database" className="hover:text-blue-400">
                Database Management
              </Link>
            </li>
            <li>
              <Link href="/tutorials/devops" className="hover:text-blue-400">
                DevOps & Cloud
              </Link>
            </li>
            <li>
              <Link href="/tutorials/dsa" className="hover:text-blue-400">
                Data Structures & Algorithms
              </Link>
            </li>
            <li>
              <Link
                href="/tutorials/machine-learning"
                className="hover:text-blue-400"
              >
                Machine Learning
              </Link>
            </li>
            <li>
              <Link href="/tutorials/react" className="hover:text-blue-400">
                React.js
              </Link>
            </li>
            <li>
              <Link href="/tutorials/nodejs" className="hover:text-blue-400">
                Node.js
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* --- Company --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-blue-400">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-blue-400">
                Press & Media
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-blue-400">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-400">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* --- Resources --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/docs" className="hover:text-blue-400">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/resources/api" className="hover:text-blue-400">
                API Reference
              </Link>
            </li>
            <li>
              <Link href="/resources/compiler" className="hover:text-blue-400">
                Online Compiler
              </Link>
            </li>
            <li>
              <Link href="/resources/editor" className="hover:text-blue-400">
                Live Code Editor
              </Link>
            </li>
            <li>
              <Link href="/resources/community" className="hover:text-blue-400">
                Community Forum
              </Link>
            </li>
            <li>
              <Link href="/resources/support" className="hover:text-blue-400">
                Support
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* --- Footer Bottom --- */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <div className="flex justify-center space-x-6 text-xl mb-4">
          <Link href="https://github.com" className="hover:text-blue-400">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com" className="hover:text-blue-400">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com" className="hover:text-blue-400">
            <FaTwitter />
          </Link>
          <Link href="https://youtube.com" className="hover:text-blue-400">
            <FaYoutube />
          </Link>
          <Link href="https://codesphere.dev" className="hover:text-blue-400">
            <FaGlobe />
          </Link>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()} CodeSphere — Crafted with ❤️ by{" "}
          <span className="text-blue-400 font-medium">Minhaj Uddin Arif</span>.
          All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
