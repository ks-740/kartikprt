import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Palette, Database, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://effulgent-sunflower-99bc2f.netlify.app/",
      githubUrl: "https://github.com/Kartik0516/e-commerce-web"
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and optimized for performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://kartikprt.vercel.app/",
      githubUrl: "https://github.com/ks-740/kartikprt"
    },
    {
      title: "Flash Card Generator",
      description: "A dynamic flashcard application that helps users create, study, and manage custom flashcards. Features include card creation with questions and answers, interactive study mode with flip animations, and local storage for persistence. Built with vanilla JavaScript and modern CSS for smooth user interactions.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      image: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://prismatic-croquembouche-8366d7.netlify.app/",
      githubUrl: "https://github.com/Kartik0516/flashcard_generator"
    }
  ];

  const skills = [
    { category: "Frontend", items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 }
    ]},
    { category: "Backend", items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 85 }
    ]},
    { category: "Tools & Others", items: [
      { name: "Git/GitHub", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Responsive Design", level: 92 },
      { name: "Problem Solving", level: 88 }
    ]}
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">Kartikay Seth</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {['home', 'about', 'portfolio', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-4 capitalize text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Kartikay Seth
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Full-Stack Web Developer passionate about creating exceptional digital experiences 
                that combine innovative technology with intuitive design.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-semibold"
                >
                  View My Work
                </button>
              </div>
              <div className="flex space-x-6 pt-4">
                <a
                  href="https://github.com/Kartik0516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kartik-seth-76720724b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:sethkartikay59@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                <Code size={120} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                My journey into web development started during my computer science studies, where I discovered 
                the perfect blend of logical problem-solving and creative expression. What began as curiosity 
                about how websites work has evolved into a deep passion for crafting digital solutions that 
                make a real difference.
              </p>
              <p>
                As a recent graduate, I specialize in full-stack development with a strong foundation in 
                modern JavaScript frameworks, particularly React and Node.js. My approach combines technical 
                expertise with user-centered design thinking, ensuring that every project not only functions 
                flawlessly but also provides an exceptional user experience.
              </p>
              <p>
                I'm actively seeking opportunities as a full-stack developer where I can contribute my fresh 
                perspective, enthusiasm for learning, and dedication to creating impactful web applications. 
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                open-source projects, or hiking through the beautiful California landscapes.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => {
                    // Create a simple resume PDF download
                    const link = document.createElement('a');
                    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCgoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDEyIFRmCjcyIDcyMCBUZApBS2FydGlrYXkgU2V0aCAtIFJlc3VtZSBURQpFVAplbmRzdHJlYW0KZW5kb2JqCgp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYKMDAwMDAwMDAwOSAwMDAwMCBuCjAwMDAwMDAwNTggMDAwMDAgbgowMDAwMDAwMTE1IDAwMDAwIG4KMDAwMDAwMDE5NCAwMDAwMCBuCnRyYWlsZXIKPDwKL1NpemUgNQovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKMjg5CiUlRU9G';
                    link.download = 'Kartikay_Seth_Resume.pdf';
                    link.click();
                  }}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Code size={40} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-gray-600 text-sm">Writing maintainable and scalable code</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg text-center">
                <Palette size={40} className="text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">UI/UX Design</h3>
                <p className="text-gray-600 text-sm">Creating intuitive user experiences</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <Database size={40} className="text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Database Design</h3>
                <p className="text-gray-600 text-sm">Efficient data architecture</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Globe size={40} className="text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Web Solutions</h3>
                <p className="text-gray-600 text-sm">Full-stack development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              UI/UX design, and problem-solving abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels in various 
              programming languages, frameworks, and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {skillCategory.category}
                </h3>
                <div className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:sethkartikay59@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      sethkartikay59@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Linkedin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/kartik-seth-76720724b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Github className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">GitHub</h4>
                    <a 
                      href="https://github.com/Kartik0516"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      View my repositories
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Kartikay Seth</h3>
            <p className="text-gray-400 mb-6">Full-Stack Web Developer</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://github.com/Kartik0516"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kartik-seth-76720724b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sethkartikay59@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Kartikay Seth. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;