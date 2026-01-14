"use client"

import type React from "react"

import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Globe,
  HelpCircle,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "projects@yourcapstone.com",
    description: "Send detailed capstone requirements",
    color: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Phone,
    title: "Call/WhatsApp",
    value: "+91 98765 43210",
    description: "Instant help? WhatsApp karein!",
    color: "from-neon-purple to-pink-500",
    shadowColor: "shadow-purple-500/20",
  },
  {
    icon: MapPin,
    title: "Available Hours",
    value: "Mon-Sat: 9 AM - 9 PM",
    description: "Sunday: 10 AM - 6 PM IST",
    color: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-emerald-500/20",
  },
]

const faqItems = [
  {
    question: "Kya aap meri specific technology mein project kar sakte ho?",
    answer:
      "Haan! Hum almost sabhi technologies mein kaam karte hain - Web (React, PHP, Django), Mobile (Flutter, Android), Desktop (Java, Python), ML/AI. Agar koi specific tech chahiye, pehle confirm kar lein.",
    icon: "💡",
  },
  {
    question: "Project kitne din mein complete hoga?",
    answer:
      "Simple projects 3-5 days, moderate 5-8 days, aur complex projects 10-15 days mein deliver hote hain. Urgent delivery bhi available hai with extra charges.",
    icon: "🎓",
  },
  {
    question: "Kya source code milega?",
    answer: "Haan, bilkul! Aapko complete source code with comments, documentation, database files, aur PPT milega. Full ownership aapki.",
    icon: "📱",
  },
  {
    question: "Payment kaise hoti hai?",
    answer:
      "50% advance payment project start karne se pehle, aur 50% completion ke baad. UPI, Bank Transfer, Paytm - sab accepted hai.",
    icon: "👨‍🏫",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    technology: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      technology: "",
      message: "",
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-neon-blue/8 rounded-full blur-[150px] animate-float-1" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-neon-purple/8 rounded-full blur-[130px] animate-float-2" />
        <div className="absolute top-2/3 right-1/3 w-[300px] h-[300px] bg-neon-blue/5 rounded-full blur-[100px] animate-float-3" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <MessageCircle className="w-4 h-4 text-neon-purple" />
              <span className="text-sm text-muted-foreground">24/7 Support Available</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Request Your <span className="gradient-text">Project</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Fill karo details, hum 24 hours mein response denge. Apni project ki puri details share karein.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-neon-blue/50" />
              <div className="w-2 h-2 rounded-full bg-neon-purple" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-neon-purple/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <div
                  key={info.title}
                  className={`group relative glass rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:${info.shadowColor} hover:shadow-xl border border-transparent hover:border-white/10`}
                >
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r ${info.color} rounded-b-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300`}
                  />

                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity`}
                    />
                    <div
                      className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${info.color} bg-opacity-20 flex items-center justify-center border border-white/10`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 text-lg">{info.title}</h3>
                  <p className="text-neon-blue font-medium mb-2">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-blue/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

              <div className="relative glass rounded-2xl p-8 border border-white/10">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                    <Send className="w-5 h-5 text-neon-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Project Request Form</h2>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Request Received! Hum jaldi hi aapse contact karenge.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Your Name</label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-white/10 focus:border-neon-blue/50 transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-white/10 focus:border-neon-blue/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number (WhatsApp preferred)</label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/5 border-white/10 focus:border-neon-blue/50 transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Project Type</label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 focus:border-neon-blue/50">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-background/95 backdrop-blur-xl border-white/10">
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="mobile">Mobile App</SelectItem>
                          <SelectItem value="desktop">Desktop Application</SelectItem>
                          <SelectItem value="ml">ML/AI Project</SelectItem>
                          <SelectItem value="database">Database Project</SelectItem>
                          <SelectItem value="mini">Mini Project/Assignment</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Technology/Language Required</label>
                    <Input
                      placeholder="e.g., React.js, Python, Flutter, Java, etc."
                      value={formData.technology}
                      onChange={(e) => setFormData({ ...formData, technology: e.target.value })}
                      className="bg-white/5 border-white/10 focus:border-neon-blue/50 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Details & Requirements</label>
                    <Textarea
                      placeholder="Apni project ki puri details likho - features, functionality, deadline, budget range, aur koi special requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 focus:border-neon-blue/50 transition-colors min-h-[150px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 h-12 text-base font-medium group/btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Project Request
                        <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple/20 to-pink-500/20 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-neon-purple" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className={`group glass rounded-xl overflow-hidden transition-all duration-300 border border-transparent hover:border-white/10 cursor-pointer ${expandedFaq === index ? "border-white/10" : ""}`}
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="p-5">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <h3 className="font-semibold text-foreground flex-1">{item.question}</h3>
                        <ArrowRight
                          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${expandedFaq === index ? "rotate-90" : ""}`}
                        />
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? "max-h-40 mt-3" : "max-h-0"}`}
                      >
                        <p className="text-sm text-muted-foreground pl-9">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Support */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple/20 to-pink-500/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

                <div className="relative glass rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-neon-purple" />
                    <h3 className="font-semibold text-foreground">Need More Help?</h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: MessageCircle, label: "Live Chat Support", badge: "Online" },
                      { icon: Globe, label: "Help Center", badge: "100+ articles" },
                      { icon: Clock, label: "Response Time", badge: "<24 hours" },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group/item"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-muted-foreground group-hover/item:text-neon-blue transition-colors" />
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-neon-purple/20 text-neon-purple">
                          {item.badge}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
