"use client"

import React from "react"
import { motion } from "framer-motion"
import { HelpCircle, MessageSquare, Book, Download, Bug, Lightbulb, Send, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"

// Dark mode context (reuse from main page)
const DarkModeContext = React.createContext<{
  isDark: boolean
  toggleDark: () => void
}>({
  isDark: true,
  toggleDark: () => {},
})

function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    const saved = localStorage.getItem("darkMode")
    if (saved) {
      setIsDark(JSON.parse(saved))
    }
  }, [])

  React.useEffect(() => {
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

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-white dark:from-purple-900 dark:via-purple-800 dark:to-gray-900 opacity-60" />
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
    </div>
  )
}

export default function SupportPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const supportOptions = [
    {
      icon: <Download className="h-6 w-6" />,
      title: "Installation Help",
      description: "Having trouble installing CountText? We'll guide you through the process.",
      action: "Get Installation Help",
      url: "https://support.google.com/chrome_webstore/answer/2664769?hl=en",
      external: true,
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "Report a Bug",
      description: "Found an issue? Let us know and we'll fix it as soon as possible.",
      action: "Report Bug",
      scrollTo: "contact-form",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Feature Request",
      description: "Have an idea for a new feature? We'd love to hear your suggestions.",
      action: "Suggest Feature",
      scrollTo: "contact-form",
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "How to Use",
      description: "Learn how to get the most out of CountText with our guides.",
      action: "View Guides",
      url: "https://github.com/saurabh-23232/CountText/blob/main/README.md",
      external: true,
    },
  ]

  const handleOptionClick = (option: any) => {
    if (option.url) {
      window.open(option.url, "_blank")
    } else if (option.scrollTo) {
      const element = document.getElementById(option.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const faqs = [
    {
      question: "How do I use CountText?",
      answer:
        "Simply select any text on a webpage, right-click, and choose 'Analyze with CountText' from the context menu. You can also click the extension icon and paste text directly.",
    },
    {
      question: "Does CountText work on all websites?",
      answer:
        "CountText works on most websites and also supports PDF files. Some sites with strict security policies may limit functionality.",
    },
    {
      question: "Is my data safe?",
      answer:
        "CountText processes all text locally in your browser. No data is sent to external servers or stored anywhere.",
    },
    {
      question: "Can I use CountText offline?",
      answer: "Yes! CountText works completely offline since all processing happens locally in your browser.",
    },
    {
      question: "How accurate is the reading time calculation?",
      answer:
        "Reading time is calculated based on an average reading speed of 200 words per minute, which is the standard for most adults.",
    },
  ]

  return (
    <DarkModeProvider>
      <DarkModeContext.Consumer>
        {({ isDark, toggleDark }) => (
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar isDark={isDark} toggleDark={toggleDark} />
            <div className="pt-16">
              {/* Add padding-top */}
              <AnimatedBackground />

              {/* Remove the old header section and keep only the main content */}
              <main className="relative z-10 px-4 py-12">
                {/* Hero Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white mb-6">
                    <HelpCircle className="h-8 w-8" />
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
                    Support Center
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Need help with CountText? We're here to assist you with any questions or issues you might have.
                  </p>
                </motion.div>

                {/* Support Options */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {supportOptions.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleOptionClick(option)}
                    >
                      <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <div className="inline-flex p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg mb-4">
                            {option.icon}
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">{option.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{option.description}</p>
                          <Button variant="outline" size="sm" className="w-full">
                            {option.action}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <Card
                      id="contact-form"
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3 text-gray-800 dark:text-gray-200">
                          <MessageSquare className="h-6 w-6" />
                          <span>Send us a Message</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                                Name
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                                Email
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                              Subject
                            </Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                              Message
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              rows={5}
                              className="mt-1"
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* FAQ Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3 text-gray-800 dark:text-gray-200">
                          <Book className="h-6 w-6" />
                          <span>Frequently Asked Questions</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {faqs.map((faq, index) => (
                            <div
                              key={index}
                              className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
                            >
                              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{faq.question}</h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Community & Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-16"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                      <CardContent className="p-8 text-center">
                        <Github className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Open Source</h3>
                        <p className="mb-6 opacity-90">
                          CountText is open source! Check out the code, contribute, or report issues on GitHub.
                        </p>
                        <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                          <a
                            href="https://github.com/saurabh-23232/CountText"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View on GitHub
                          </a>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
                      <CardContent className="p-8 text-center">
                        <Download className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Chrome Web Store</h3>
                        <p className="mb-6 opacity-90">
                          Install CountText directly from the Chrome Web Store with just one click.
                        </p>
                        <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                          <a
                            href="https://chromewebstore.google.com/detail/iijnikolepddgdialgckmpifjkfhofin?utm_source=item-share-cb"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Add to Chrome
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </main>
            </div>
          </div>
        )}
      </DarkModeContext.Consumer>
    </DarkModeProvider>
  )
}
