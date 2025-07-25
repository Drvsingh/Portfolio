import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail, Rocket, Terminal, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Terminal className="h-5 w-5" />
            <span>Dhruv Singh</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Resume
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex mb-2" variant="outline">
                    BCA Student & Developer
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m Dhruv Singh
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I build innovative web applications and software solutions. Passionate about creating elegant,
                    user-friendly experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Me
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-full border bg-muted md:w-[350px] lg:w-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Dhruv Singh"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who I Am</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;m a BCA student with a passion for creating innovative digital solutions. My journey in tech
                  started with curiosity and has evolved into a dedicated pursuit of excellence in software development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Education</h3>
                      <p className="text-muted-foreground">
                        Bachelor of Computer Applications (BCA), focusing on software development, algorithms, and
                        modern web technologies.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Interests</h3>
                      <p className="text-muted-foreground">
                        Web development, mobile applications, UI/UX design, and exploring emerging technologies like AI
                        and blockchain.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Goals</h3>
                      <p className="text-muted-foreground">
                        To create impactful digital solutions that solve real-world problems and enhance user
                        experiences.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="About Dhruv Singh"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A showcase of my projects, ranging from web applications to software solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="project-card glass-card hover-card-effect hover-glow">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Project 1"
                      width={500}
                      height={300}
                      className="card-image object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="card-content p-6">
                  <CardTitle className="text-xl">E-Commerce Platform</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    A full-stack e-commerce solution with user authentication, product management, and payment
                    integration.
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="badge-hover">
                      React
                    </Badge>
                    <Badge variant="secondary" className="badge-hover">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="badge-hover">
                      MongoDB
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
              <Card className="project-card glass-card hover-card-effect hover-glow">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Project 2"
                      width={500}
                      height={300}
                      className="card-image object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="card-content p-6">
                  <CardTitle className="text-xl">Task Management App</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    A productivity application with task tracking, reminders, and collaborative features.
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="badge-hover">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="badge-hover">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="secondary" className="badge-hover">
                      Supabase
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
              <Card className="project-card glass-card hover-card-effect hover-glow">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Project 3"
                      width={500}
                      height={300}
                      className="card-image object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="card-content p-6">
                  <CardTitle className="text-xl">AI Content Generator</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    A tool that leverages AI to generate content for blogs, social media, and marketing materials.
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="badge-hover">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="badge-hover">
                      Flask
                    </Badge>
                    <Badge variant="secondary" className="badge-hover">
                      OpenAI API
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="gap-1">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My internships and courses that have shaped my skills and knowledge.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="internships" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="internships">Internships</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                </TabsList>
                <TabsContent value="internships" className="mt-6 space-y-8">
                  <div className="rounded-lg glass-card experience-card p-6 transition-all">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">Web Development Intern</h3>
                        <p className="text-muted-foreground">TechSolutions Inc.</p>
                      </div>
                      <Badge variant="outline">Jun 2023 - Aug 2023</Badge>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                        Developed responsive web applications using React and Node.js
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                        Collaborated with the design team to implement UI/UX improvements
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                        Participated in code reviews and agile development processes
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg glass-card experience-card p-6 transition-all">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">Software Development Intern</h3>
                        <p className="text-muted-foreground">InnovateTech</p>
                      </div>
                      <Badge variant="outline">Dec 2022 - Feb 2023</Badge>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                        Assisted in developing a mobile application using Flutter
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                        Implemented backend APIs using Express.js and MongoDB
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                        Created documentation for code and user guides
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="courses" className="mt-6 space-y-8">
                  <div className="rounded-lg glass-card experience-card p-6 transition-all">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">Full Stack Web Development</h3>
                        <p className="text-muted-foreground">Udemy</p>
                      </div>
                      <Badge variant="outline">Completed: May 2023</Badge>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Built
                      multiple projects including an e-commerce platform and social media application.
                    </p>
                  </div>
                  <div className="rounded-lg glass-card experience-card p-6 transition-all">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">UI/UX Design Fundamentals</h3>
                        <p className="text-muted-foreground">Coursera</p>
                      </div>
                      <Badge variant="outline">Completed: Jan 2023</Badge>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Learned principles of user interface and experience design, wireframing, prototyping, and user
                      testing. Created multiple design projects using Figma and Adobe XD.
                    </p>
                  </div>
                  <div className="rounded-lg glass-card experience-card p-6 transition-all">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">Python for Data Science</h3>
                        <p className="text-muted-foreground">edX</p>
                      </div>
                      <Badge variant="outline">Completed: Nov 2022</Badge>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Covered Python programming fundamentals, data manipulation with Pandas, data visualization with
                      Matplotlib, and basic machine learning with scikit-learn.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The technologies and tools I work with to bring ideas to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card skill-card transition-all hover-glow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <CardTitle>Frontend Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#61DAFB] text-black badge-hover">React</Badge>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-black text-white badge-hover">Next.js</Badge>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#38B2AC] text-white badge-hover">Tailwind CSS</Badge>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#F7DF1E] text-black badge-hover">JavaScript</Badge>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#3178C6] text-white badge-hover">TypeScript</Badge>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="glass-card skill-card transition-all hover-glow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    <CardTitle>Backend Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#339933] text-white badge-hover">Node.js</Badge>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#000000] text-white badge-hover">Express</Badge>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#4479A1] text-white badge-hover">MySQL</Badge>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#47A248] text-white badge-hover">MongoDB</Badge>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#3776AB] text-white badge-hover">Python</Badge>
                      <span className="text-sm text-muted-foreground">Basic</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="glass-card skill-card transition-all hover-glow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    <CardTitle>Tools & Others</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#F05032] text-white badge-hover">Git</Badge>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#2496ED] text-white badge-hover">Docker</Badge>
                      <span className="text-sm text-muted-foreground">Basic</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#FF9900] text-white badge-hover">AWS</Badge>
                      <span className="text-sm text-muted-foreground">Basic</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#FF4088] text-white badge-hover">Figma</Badge>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="bg-[#764ABC] text-white badge-hover">Redux</Badge>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <Card className="glass-card hover-card-effect">
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="flex flex-col gap-8">
                <Card className="glass-card hover-card-effect">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">dhruv.singh@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Social Profiles</p>
                        <div className="mt-1 flex gap-2">
                          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                            <span className="sr-only">Twitter</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-primary text-primary-foreground glass-card hover-card-effect">
                  <CardHeader>
                    <CardTitle>Let&apos;s Work Together</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-foreground/90">
                      I&apos;m currently available for freelance projects, internships, and full-time positions. If you
                      have an exciting project or opportunity, don&apos;t hesitate to reach out!
                    </p>
                    <Button variant="secondary" className="mt-4">
                      View My Resume
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Dhruv Singh. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
