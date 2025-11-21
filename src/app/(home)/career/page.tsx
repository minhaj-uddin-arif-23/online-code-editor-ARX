import React from "react";

const CareerPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Careers in Python Programming</h1>
      <p className="mb-6">
        Welcome to the Careers section! This guide is designed to help you
        explore career opportunities in Python development, structured in a
        clear and informative way similar to educational resources.
      </p>

      {/* Introduction */}
      <section id="introduction" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Introduction to Python Careers
        </h2>
        <p>
          Python is one of the most in-demand programming languages today. It
          powers everything from web applications to data science, machine
          learning, automation, and more. A career in Python can be rewarding,
          with opportunities in various industries like tech, finance,
          healthcare, and entertainment.
        </p>
        <h3 className="text-2xl font-medium mt-6 mb-2">
          Why Choose a Career in Python?
        </h3>
        <ul className="list-disc pl-6">
          <li>High demand for Python developers worldwide.</li>
          <li>Competitive salaries and job security.</li>
          <li>Versatile applications across multiple fields.</li>
          <li>Community support and continuous learning opportunities.</li>
          <li>Remote work possibilities and flexible roles.</li>
        </ul>
      </section>

      {/* Job Roles */}
      <section id="job-roles" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Popular Job Roles</h2>
        <p>Here are some common career paths for Python professionals:</p>
        <h3 className="text-2xl font-medium mt-6 mb-2">Python Developer</h3>
        <p>
          Builds and maintains software applications using Python. Focuses on
          backend development, APIs, and scripting.
        </p>
        <h3 className="text-2xl font-medium mt-6 mb-2">
          Data Scientist/Analyst
        </h3>
        <p>
          Uses Python libraries like Pandas, NumPy, and Scikit-learn to analyze
          data and derive insights.
        </p>
        <h3 className="text-2xl font-medium mt-6 mb-2">
          Machine Learning Engineer
        </h3>
        <p>Develops AI models using frameworks like TensorFlow or PyTorch.</p>
        <h3 className="text-2xl font-medium mt-6 mb-2">DevOps Engineer</h3>
        <p>
          Automates infrastructure and deployment using Python tools like
          Ansible or Docker.
        </p>
        <h3 className="text-2xl font-medium mt-6 mb-2">Web Developer</h3>
        <p>Creates web apps with frameworks like Django or Flask.</p>
      </section>

      {/* Skills Required */}
      <section id="skills" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Essential Skills</h2>
        <p>To succeed in a Python career, you should master these skills:</p>
        <ul className="list-disc pl-6">
          <li>Proficiency in Python syntax and concepts.</li>
          <li>Knowledge of data structures and algorithms.</li>
          <li>Experience with version control (e.g., Git).</li>
          <li>Familiarity with databases (SQL/NoSQL).</li>
          <li>Problem-solving and debugging abilities.</li>
          <li>Soft skills like communication and teamwork.</li>
        </ul>
        <h3 className="text-2xl font-medium mt-6 mb-2">Advanced Skills</h3>
        <ul className="list-disc pl-6">
          <li>Frameworks: Django, Flask, FastAPI.</li>
          <li>Data Tools: Pandas, Matplotlib, Seaborn.</li>
          <li>ML/AI: TensorFlow, Keras, Scikit-learn.</li>
          <li>Cloud Platforms: AWS, Azure, Google Cloud.</li>
        </ul>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">How to Get Started</h2>
        <p>Steps to launch your Python career:</p>
        <ol className="list-decimal pl-6">
          <li>
            Learn Python basics through tutorials (like our Python section).
          </li>
          <li>Build projects to apply your knowledge.</li>
          <li>Get certified (e.g., Python Institute certifications).</li>
          <li>Create a portfolio on GitHub.</li>
          <li>
            Network on platforms like LinkedIn, Reddit, or Stack Overflow.
          </li>
          <li>Apply for entry-level jobs or internships.</li>
        </ol>
      </section>

      {/* Salary and Outlook */}
      <section id="salary" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Salary and Job Outlook</h2>
        <p>
          Python developers enjoy strong job prospects. Average salaries vary by
          location and experience:
        </p>
        <ul className="list-disc pl-6">
          <li>Entry-level: $60,000 - $90,000 USD annually.</li>
          <li>Mid-level: $90,000 - $120,000 USD.</li>
          <li>Senior: $120,000+ USD.</li>
        </ul>
        <p>
          The field is growing, with demand expected to increase due to AI and
          data-driven decisions.
        </p>
      </section>

      {/* Resources */}
      <section id="resources" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Additional Resources</h2>
        <p>For more information:</p>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://www.python.org/jobs/"
              className="text-blue-600 hover:underline"
            >
              Python.org Jobs
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/jobs/"
              className="text-blue-600 hover:underline"
            >
              LinkedIn Jobs
            </a>
          </li>
          <li>
            <a
              href="https://realpython.com/"
              className="text-blue-600 hover:underline"
            >
              Real Python
            </a>
          </li>
          <li>
            <a
              href="https://www.coursera.org/courses?query=python"
              className="text-blue-600 hover:underline"
            >
              Coursera Python Courses
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CareerPage;
