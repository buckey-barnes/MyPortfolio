"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown, Palette, Laptop, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const portfolioItems = [
    {
      title: "E-commerce Redesign",
      description: "Complete overhaul of an e-commerce platform focusing on user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["UX Design", "UI Design", "E-commerce"],
      link: "/project/ecommerce"
    },
    {
      title: "Banking App",
      description: "Modern banking application with focus on accessibility and security.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile App", "FinTech", "UI Design"],
      link: "/project/banking"
    },
    {
      title: "Healthcare Platform",
      description: "Patient-centric healthcare platform designed for ease of use and accessibility.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Healthcare", "Web Design", "UX Research"],
      link: "/project/healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-background gradient-bg">
      {/* Hero Section with enhanced gradient */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-primary/5 to-purple-500/10 opacity-20 z-0" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-primary to-purple-500">
              Design that Matters
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Creating meaningful digital experiences through thoughtful design and user-centered solutions.
            </p>
            <Button size="lg" className="animate-bounce">
              View My Work <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Card className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/50">
              <Palette className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">UI Design</h3>
              <p className="text-muted-foreground">Creating beautiful, intuitive interfaces that users love to interact with.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/50">
              <Laptop className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">UX Design</h3>
              <p className="text-muted-foreground">Crafting seamless user experiences through research and testing.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/50">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Prototyping</h3>
              <p className="text-muted-foreground">Bringing ideas to life with interactive prototypes and animations.</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/5 via-blue-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden group backdrop-blur-sm bg-white/50">
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href={item.link}>
                        <Button variant="secondary" size="sm">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}