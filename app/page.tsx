"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Download,
  Zap,
  Users,
  BookOpen,
  Code,
  Edit3,
  FileText,
  Hash,
  Type,
  Scissors,
  CornerDownRight,
  FileCheck,
  Space,
  Clock,
  MousePointer,
  Clipboard,
  Shield,
  FileImage,
  Lock,
  Star,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Github,
  Home,
  HelpCircle,
  ShieldCheck,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

// Dark mode context
const DarkModeContext = React.createContext<{
  isDark: boolean
  toggleDark: () => void
}>({
  isDark: false,
  toggleDark: () => {},
})

function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true) // Changed from false to true

  useEffect(() => {
    const saved = localStorage.getItem("darkMode")
    if (saved) {
      setIsDark(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark))
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const toggleDark = () => setIsDark(!isDark)

  return <DarkModeContext.Provider value={{ isDark, toggleDark }}>{children}</DarkModeContext.Provider>
}

// Animated background component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-white dark:from-purple-900 dark:via-purple-800 dark:to-gray-900 opacity-60" />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-40 left-40 w-80 h-80 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Meet CountText
            </motion.h1>
            <motion.h2
              className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Your Ultimate Text Analyzer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Whether you're writing, coding, or editing, CountText instantly analyzes selected or pasted text for word
              count, character breakdown, sentence stats, and reading time — all inside your browser.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://chromewebstore.google.com/detail/iijnikolepddgdialgckmpifjkfhofin?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Add to Chrome
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">CountText Analysis</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-semibold">Words</div>
                    <div className="text-2xl font-bold">247</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-semibold">Characters</div>
                    <div className="text-2xl font-bold">1,432</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-semibold">Sentences</div>
                    <div className="text-2xl font-bold">12</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-semibold">Reading Time</div>
                    <div className="text-2xl font-bold">1.2m</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// Importance Section
function ImportanceSection() {
  const painPoints = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Hit with word limits?",
      description: "Know before you post.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Struggling with reading time?",
      description: "Stay on pace.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "Need fast stats in a PDF or web page?",
      description: "Right-click and go.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Writers, students, developers",
      description: "We got you covered.",
      color: "from-purple-400 to-pink-500",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">Why CountText?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Solving real problems for real people</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${point.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">{point.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Use Cases Section
function UseCasesSection() {
  const useCases = [
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Students",
      description: "Writing assignments with perfect word counts",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: <Edit3 className="h-12 w-12" />,
      title: "Content Creators",
      description: "Checking Twitter/X limits before posting",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Developers",
      description: "Documenting code with precise metrics",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Bloggers & Authors",
      description: "Analyzing readability and structure",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: "Editors",
      description: "Optimizing content layout and flow",
      color: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Who is CountText for?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Empowering professionals across industries</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group perspective-1000"
            >
              <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex p-6 rounded-full bg-gradient-to-r ${useCase.color} text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const features = [
    { icon: <Hash className="h-6 w-6" />, title: "Words Count", description: "Accurate word counting" },
    {
      icon: <Type className="h-6 w-6" />,
      title: "Characters (with spaces)",
      description: "Complete character analysis",
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Characters (without spaces)",
      description: "Clean character count",
    },
    { icon: <CornerDownRight className="h-6 w-6" />, title: "Lines", description: "Line-by-line breakdown" },
    { icon: <FileCheck className="h-6 w-6" />, title: "Sentences", description: "Sentence structure analysis" },
    { icon: <Space className="h-6 w-6" />, title: "Spaces", description: "Whitespace counting" },
    { icon: <Clock className="h-6 w-6" />, title: "Reading Time (200 WPM)", description: "Estimated reading duration" },
    { icon: <MousePointer className="h-6 w-6" />, title: "Context Menu", description: "Right-click support" },
    { icon: <Clipboard className="h-6 w-6" />, title: "Manual Paste", description: "Popup text analysis" },
    { icon: <Shield className="h-6 w-6" />, title: "Incognito Support", description: "Private browsing compatible" },
    { icon: <FileImage className="h-6 w-6" />, title: "PDF Text Support", description: "Analyze PDF content" },
    { icon: <Lock className="h-6 w-6" />, title: "Fully Offline & Secure", description: "No data leaves your browser" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Powerful Features Built for Productivity
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need in one lightweight extension</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "This is a must-have tool when writing blogs. I use it daily!",
      author: "Aditi S.",
      role: "Blogger",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "CountText keeps me within character limits perfectly.",
      author: "Rohan T.",
      role: "Marketer",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "I love the simplicity. One click and I get all I need.",
      author: "Priya M.",
      role: "Student",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "Essential for my content creation workflow. Highly recommended!",
      author: "Dev K.",
      role: "Content Creator",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Loved by Learners & Creators
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Join thousands of satisfied users</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-2xl">
                  <CardContent className="p-12">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-8 italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <Image
                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].author}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-bold text-gray-800 dark:text-gray-200">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">{testimonials[currentTestimonial].role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-purple-500 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Install CTA Section
function InstallCTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">Try CountText Today</h2>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">One click to unlock instant stats in your browser</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://chromewebstore.google.com/detail/iijnikolepddgdialgckmpifjkfhofin?utm_source=item-share-cb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧩 Add to Chrome Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Section
function FooterSection() {
  const { isDark, toggleDark } = React.useContext(DarkModeContext)

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Hash className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">CountText</h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              CountText is a lightweight, powerful Chrome extension designed to instantly analyze text from any source —
              web, PDF, or notes.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex flex-wrap gap-6">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </a>
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Privacy</span>
              </a>
              <a
                href="/support"
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Support</span>
              </a>
              <a
                href="https://github.com/saurabh-23232/CountText"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Dark mode</span>
              <button
                onClick={toggleDark}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-600 fill-red-600" />
            <span>© Saurabh</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
export default function CountTextLanding() {
  return (
    <DarkModeProvider>
      <DarkModeContext.Consumer>
        {({ isDark, toggleDark }) => (
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar isDark={isDark} toggleDark={toggleDark} />
            <div className="pt-16">
              {" "}
              {/* Add padding-top to account for fixed navbar */}
              <AnimatedBackground />
              <HeroSection />
              <ImportanceSection />
              <UseCasesSection />
              <FeaturesSection />
              <TestimonialsSection />
              <InstallCTASection />
              <FooterSection />
            </div>
          </div>
        )}
      </DarkModeContext.Consumer>
    </DarkModeProvider>
  )
}
