"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Zap,
  Users,
  Globe,
  Rocket,
  Shield,
  Heart,
  Award,
} from "lucide-react";

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [particles, setParticles] = useState<
    Array<{ left: number; top: number; duration: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 50 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Code2 className="w-20 h-20 mx-auto text-blue-400" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About CodeSpace
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering developers worldwide with a seamless, powerful, and
              accessible coding environment right in your browser
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <Section dark={false}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To democratize coding education and make programming accessible to
              everyone, anywhere, without barriers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Globe className="w-12 h-12" />}
              title="Global Accessibility"
              description="No installation required. Code from any device, anywhere in the world. All you need is a browser and an internet connection."
              delay={0.2}
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12" />}
              title="Lightning Fast"
              description="Instant compilation and execution. Get real-time feedback on your code without waiting. Optimize your learning and productivity."
              delay={0.3}
            />
            <FeatureCard
              icon={<Shield className="w-12 h-12" />}
              title="Secure Environment"
              description="Safe and isolated execution environment. Your code runs securely in sandboxed containers, protecting your system and data."
              delay={0.4}
            />
            <FeatureCard
              icon={<Heart className="w-12 h-12" />}
              title="Community Driven"
              description="Built by developers, for developers. We listen to your feedback and continuously improve based on community needs."
              delay={0.5}
            />
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section dark={true}>
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                CodeSpace was born from a simple frustration: setting up
                development environments shouldn't be this hard. We've all been
                there - spending hours configuring tools, installing
                dependencies, and troubleshooting compatibility issues before
                writing a single line of code.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                In 2023, our team of passionate developers decided to change
                that. We envisioned a platform where anyone could start coding
                immediately, where the barrier to entry was removed, and where
                learning programming became about writing code, not fighting
                with configurations.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Today, CodeSpace serves thousands of developers, students, and
                educators worldwide. From beginners taking their first steps in
                programming to experienced developers quickly testing ideas, our
                platform has become a trusted companion in countless coding
                journeys.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section dark={false}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            What We Stand For
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Rocket className="w-10 h-10" />}
              title="Innovation"
              description="Constantly pushing boundaries to deliver cutting-edge features and performance improvements."
            />
            <ValueCard
              icon={<Users className="w-10 h-10" />}
              title="Inclusivity"
              description="Creating a welcoming environment where developers of all skill levels can thrive and grow."
            />
            <ValueCard
              icon={<Award className="w-10 h-10" />}
              title="Excellence"
              description="Committed to delivering the highest quality coding experience with attention to every detail."
            />
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section dark={true}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50K+" label="Active Users" delay={0.1} />
            <StatCard number="25+" label="Languages" delay={0.2} />
            <StatCard number="1M+" label="Code Executions" delay={0.3} />
            <StatCard number="99.9%" label="Uptime" delay={0.4} />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark={false}>
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Coding?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of developers who are already coding smarter, not
              harder
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-shadow"
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  dark?: boolean;
}

function Section({ children, dark = false }: SectionProps) {
  return (
    <section className={`relative ${dark ? "bg-slate-900/50" : ""}`}>
      {children}
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="inline-block text-purple-400 mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  delay: number;
}

function StatCard({ number, label, delay }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.2, type: "spring" }}
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
      >
        {number}
      </motion.div>
      <div className="text-gray-400 text-lg">{label}</div>
    </motion.div>
  );
}
