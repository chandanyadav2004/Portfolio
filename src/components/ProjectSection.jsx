import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hotel Management Website",
    description:
      "Responsive booking system with room listings and Razorpay integration.",
    image: "/images/Project1.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "AJAX"],
    demoUrl: "#",
    githubUrl: "https://github.com/chandanyadav2004/Hotel-Management-Website",
  },
  {
    id: 2,
    title: "PrepWise – AI Interview Q&A",
    description:
      "AI interview simulator with real-time feedback using ChatGPT & Gemini.",
    image: "/images/Project2.png",
    tags: ["Next.js", "Firebase", "Vapi AI", "ChatGPT", "Gemini"],
    demoUrl: "#",
    githubUrl: "https://github.com/chandanyadav2004/prepwise",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "A modern shopping website using HTML, CSS, and JavaScript. Features include product listing cards, shopping cart functionality, responsive design, and clean UI, ideal for small online stores or front-end portfolios.",
    image: "/images/Project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/chandanyadav2004/E-commerce-Website",
  },
  {
    id: 4,
    title: "Streamfiy – Real-Time Chat",
    description:
      "MERN chat app with live messaging, 32+ themes, avatar generator.",
    image: "/images/Project4.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "Avatar Generator"],
    demoUrl: "#",
    githubUrl: "https://github.com/chandanyadav2004/streamfiy",
  },
  {
    id: 5,
    title: "News App API",
    description:
      "Live news headlines app with API integration and responsive design.",
    image: "/images/Project5.png",
    tags: ["HTML", "CSS", "JavaScript", "News API"],
    demoUrl: "#",
    githubUrl: "https://github.com/chandanyadav2004/News-App-Api",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feature <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to details, performance , and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-1">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/chandanyadav2004"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
