"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
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
    </div>
  )
}

export default function PrivacyPage() {
  const privacySections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Data Collection",
      content:
        "CountText does not collect, store, or transmit any personal data. All text analysis happens locally in your browser.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Local Processing",
      content:
        "Your text never leaves your device. All counting and analysis is performed entirely within your browser using JavaScript.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "No Storage",
      content:
        "We don't store any of your analyzed text, browsing history, or usage patterns. Each session is completely independent.",
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Permissions",
      content:
        "CountText only requests the minimum permissions needed: activeTab for context menu functionality and storage for settings.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security",
      content:
        "The extension runs in a sandboxed environment and follows Chrome's security best practices. No external connections are made.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Updates",
      content:
        "This privacy policy may be updated occasionally. Any changes will be reflected in the extension's Chrome Web Store listing.",
    },
  ]

  return (
    <DarkModeProvider>
      <DarkModeContext.Consumer>
        {({ isDark, toggleDark }) => (
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar isDark={isDark} toggleDark={toggleDark} />
            <div className="pt-16">
              <AnimatedBackground />

              {/* Remove the old header section and keep only the main content */}
              <main className="relative z-10 px-4 py-12">
                <div className="container mx-auto max-w-4xl">
                  {/* Hero Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white mb-6">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
                      Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      Your privacy is our priority. Learn how CountText protects your data and respects your privacy.
                    </p>
                  </motion.div>

                  {/* Last Updated */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center mb-12"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: December 26, 2024</p>
                  </motion.div>

                  {/* Privacy Sections */}
                  <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {privacySections.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-3">
                              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                                {section.icon}
                              </div>
                              <span className="text-gray-800 dark:text-gray-200">{section.title}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{section.content}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Key Points */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white mb-16"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-center">Key Privacy Points</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold mb-2">100%</div>
                        <div className="text-sm opacity-90">Local Processing</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">0</div>
                        <div className="text-sm opacity-90">Data Collected</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">∞</div>
                        <div className="text-sm opacity-90">Privacy Protection</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-center"
                  >
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                          Questions About Privacy?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          If you have any questions about this privacy policy or how CountText handles your data, we're
                          here to help.
                        </p>
                        <Link href="/support">
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full">
                            Contact Support
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </main>
            </div>
          </div>
        )}
      </DarkModeContext.Consumer>
    </DarkModeProvider>
  )
}
