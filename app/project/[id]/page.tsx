"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

const projects = {
  "ecommerce-redesign": {
    title: "E-commerce Redesign",
    description: "Complete overhaul of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    challenge: "The existing e-commerce platform suffered from poor conversion rates and high cart abandonment. Users found the checkout process confusing and product discovery was difficult.",
    solution: "We reimagined the entire user journey, implementing a streamlined checkout process, enhanced search functionality, and personalized product recommendations.",
    results: [
      "40% increase in conversion rate",
      "25% reduction in cart abandonment",
      "60% improvement in user satisfaction scores"
    ],
    technologies: ["Figma", "React", "Next.js", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    mockups: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "banking-app": {
    title: "Banking App",
    description: "Modern banking application with focus on accessibility and security.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    challenge: "Traditional banking apps were difficult to navigate and lacked modern features that users expect.",
    solution: "We created a user-friendly interface with biometric authentication, smart notifications, and intuitive transaction management.",
    results: [
      "90% user adoption rate",
      "50% reduction in support tickets",
      "4.8/5 app store rating"
    ],
    technologies: ["Swift", "Kotlin", "Firebase", "Figma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    mockups: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "healthcare-platform": {
    title: "Healthcare Platform",
    description: "Patient-centric healthcare platform designed for ease of use and accessibility.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    challenge: "Healthcare providers needed a better way to manage patient information and communicate with patients.",
    solution: "We developed a comprehensive platform that streamlines patient management, appointment scheduling, and secure messaging.",
    results: [
      "30% reduction in administrative time",
      "95% patient satisfaction rate",
      "20% increase in appointment attendance"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    mockups: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background gradient-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/20 to-transparent opacity-60" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4">
              <Link href="/">
                <Button variant="outline" className="mb-8 backdrop-blur-sm">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Button>
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/80 max-w-2xl"
              >
                {project.description}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container px-4 py-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground mb-8">{project.challenge}</p>

              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-muted-foreground mb-8">{project.solution}</p>

              <h2 className="text-2xl font-bold mb-4">Key Results</h2>
              <ul className="list-disc list-inside text-muted-foreground mb-8">
                {project.results.map((result, index) => (
                  <li key={index} className="mb-2">{result}</li>
                ))}
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.mockups.map((mockup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    <img
                      src={mockup}
                      alt={`${project.title} mockup ${index + 1}`}
                      className="rounded-lg shadow-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full backdrop-blur-sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live Site
                  </a>
                </Button>
                <Button variant="outline" className="w-full backdrop-blur-sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Source Code
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}