"use client"

import { useState } from "react"
import { Search, Plus, TrendingUp, MessageCircle, Users, Clock, Sparkles, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DiscussionCard } from "@/components/community/discussion-card"
import { CommunitySidebar } from "@/components/community/community-sidebar"
import { CreatePostDialog } from "@/components/community/create-post-dialog"

const discussions = [
  {
    id: "1",
    title: "Amazing E-Commerce Project - Delivered Before Deadline!",
    content:
      "Just received my capstone e-commerce project from YourCapstone. The quality is outstanding! Complete React frontend with Node.js backend, payment integration working perfectly. Got it 2 days before my submission deadline. Highly recommend! 🌟",
    author: {
      name: "Rahul Mehta",
      avatar: "https://i.pravatar.cc/150?img=11",
      reputation: 1250,
    },
    category: "Web Development",
    tags: ["React", "Node.js", "E-Commerce"],
    replies: 24,
    views: 456,
    likes: 38,
    createdAt: "2 hours ago",
    isHot: true,
    isPinned: false,
  },
  {
    id: "2",
    title: "ML Face Recognition Project - Exceeded Expectations",
    content:
      "The face recognition attendance system I ordered is simply perfect. Python code is well-documented, OpenCV implementation is smooth, and the accuracy is impressive. Even got help with my presentation. Worth every rupee!",
    author: {
      name: "Priya Sharma",
      avatar: "https://i.pravatar.cc/150?img=26",
      reputation: 890,
    },
    category: "ML/AI",
    tags: ["Python", "OpenCV", "Machine Learning"],
    replies: 18,
    views: 312,
    likes: 27,
    createdAt: "5 hours ago",
    isHot: true,
    isPinned: false,
  },
  {
    id: "3",
    title: "Best Project Service - Hospital Management System Success",
    content:
      "YourCapstone team delivered an excellent Hospital Management System for my final year project. Complete with patient records, appointments, billing - everything working flawlessly. Java code is clean and MySQL database is perfectly normalized. Documentation is comprehensive. Got A+ grade! 🎉\n\nFeatures delivered:\n1. Patient Registration & Records\n2. Doctor Management\n3. Appointment Scheduling\n4. Billing System\n5. Admin Dashboard\n6. Report Generation\n\nThank you YourCapstone team!",
    author: {
      name: "Amit Kumar",
      avatar: "https://i.pravatar.cc/150?img=33",
      reputation: 2340,
    },
    category: "Database",
    tags: ["Java", "MySQL", "Desktop App"],
    replies: 45,
    views: 1234,
    likes: 89,
    createdAt: "1 day ago",
    isHot: false,
    isPinned: true,
  },
  {
    id: "4",
    title: "React Native Chat App - Professional Quality",
    content:
      "Ordered a WhatsApp-style chat application for my capstone project. The React Native code is top-notch with Firebase backend. Real-time messaging works perfectly, media sharing is smooth. Even my professor was impressed with the code quality!",
    author: {
      name: "Neha Gupta",
      avatar: "https://i.pravatar.cc/150?img=45",
      reputation: 450,
    },
    category: "Mobile App",
    tags: ["React Native", "Firebase", "Chat App"],
    replies: 32,
    views: 567,
    likes: 41,
    createdAt: "3 hours ago",
    isHot: true,
    isPinned: false,
  },
  {
    id: "5",
    title: "Library Management System - Complete Package",
    content:
      "Perfect desktop application for my project. C# with SQL Server - exactly what I needed. Book issue/return, member management, fine calculation all working great. Plus got complete project report and PPT. Lifesaver!",
    author: {
      name: "Vikram Singh",
      avatar: "https://i.pravatar.cc/150?img=52",
      reputation: 720,
    },
    category: "Desktop App",
    tags: ["C#", ".NET", "SQL Server"],
    replies: 15,
    views: 234,
    likes: 19,
    createdAt: "6 hours ago",
    isHot: false,
    isPinned: false,
  },
  {
    id: "6",
    title: "Student Portal Web App - Full Stack Excellence",
    content:
      "Ordered a student management portal with Angular + Spring Boot. The implementation is solid - authentication, dashboards, grade management all perfect. Clean code with detailed documentation. Delivered 3 days early!",
    author: {
      name: "Rajesh Pandey",
      avatar: "https://i.pravatar.cc/150?img=68",
      reputation: 1100,
    },
    category: "Web Development",
    tags: ["Angular", "Spring Boot", "Full Stack"],
    replies: 28,
    views: 445,
    likes: 35,
    createdAt: "12 hours ago",
    isHot: false,
    isPinned: false,
  },
  {
    id: "7",
    title: "Blockchain Project - Modern & Well-Documented",
    content:
      "Got a blockchain voting system for my final project. The Solidity smart contracts are well-written and the React frontend is responsive. Even explained how everything works. Great value for money!",
    author: {
      name: "Ananya Reddy",
      avatar: "https://i.pravatar.cc/150?img=23",
      reputation: 1560,
    },
    category: "Blockchain",
    tags: ["Blockchain", "Solidity", "Web3"],
    replies: 22,
    views: 389,
    likes: 52,
    createdAt: "8 hours ago",
    isHot: false,
    isPinned: false,
  },
  {
    id: "8",
    title: "Android Expense Tracker - Professional Code Quality",
    content:
      "YourCapstone delivered an awesome Android expense tracker app. Kotlin code is clean, Room database integration is perfect, and the UI is modern. Got my desired grade! Highly satisfied with the service.",
    author: {
      name: "Arjun Patel",
      avatar: "https://i.pravatar.cc/150?img=14",
      reputation: 980,
    },
    category: "Mobile App",
    tags: ["Android", "Kotlin", "Room Database"],
    replies: 19,
    views: 298,
    likes: 24,
    createdAt: "4 hours ago",
    isHot: false,
    isPinned: false,
  },
]

const categories = [
  { id: "all", label: "All Testimonials", count: discussions.length },
  { id: "web-development", label: "Web Development", count: 3 },
  { id: "mobile-app", label: "Mobile Apps", count: 2 },
  { id: "ml-ai", label: "ML/AI", count: 1 },
  { id: "database", label: "Database", count: 2 },
]

const trendingTags = [
  { name: "React", count: 156 },
  { name: "Python", count: 134 },
  { name: "Node.js", count: 98 },
  { name: "Java", count: 87 },
  { name: "MySQL", count: 76 },
  { name: "Machine Learning", count: 65 },
]

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreatePost, setShowCreatePost] = useState(false)

  const filteredDiscussions = discussions.filter((d) => {
    const matchesCategory = selectedCategory === "all" || d.category.toLowerCase() === selectedCategory
    const matchesSearch =
      !searchQuery ||
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    if (a.isHot && !b.isHot) return -1
    if (!a.isHot && b.isHot) return 1
    return 0
  })

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-float-fast" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>300+ Happy Clients</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              See what our clients say about their capstone project experience with YourCapstone
            </p>
          </div>
          <Button
            onClick={() => setShowCreatePost(true)}
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 shadow-lg shadow-neon-blue/25 transition-all duration-300 hover:shadow-neon-blue/40 hover:scale-105 group"
          >
            <Plus className="w-4 h-4 mr-2 transition-transform group-hover:rotate-90" />
            Share Review
          </Button>
        </div>

        <div className="relative mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-blue/20 rounded-2xl blur-xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 p-2 glass rounded-2xl border border-white/10">
            {[
              { icon: MessageCircle, label: "Reviews", value: "3,567", color: "neon-blue" },
              { icon: Users, label: "Happy Clients", value: "300+", color: "neon-purple" },
              { icon: TrendingUp, label: "Projects Done", value: "100+", color: "green-500" },
              { icon: Clock, label: "Avg Delivery", value: "7-10 days", color: "amber-500" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="group relative rounded-xl p-4 flex items-center gap-4 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-${stat.color}/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-xl bg-${stat.color}/20 flex items-center justify-center transition-transform group-hover:scale-110`}
                    >
                      <Icon className={`w-6 h-6 text-${stat.color}`} />
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-lg" />
              <div className="relative glass rounded-2xl p-5 border border-white/10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-neon-blue" />
                    <Input
                      type="text"
                      placeholder="Search reviews, projects, or technologies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 bg-white/5 border-white/10 rounded-xl focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 transition-all"
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="h-12 px-6 border-white/10 hover:bg-white/5 hover:border-neon-blue/50 rounded-xl bg-transparent"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Search
                  </Button>
                </div>
              </div>
            </div>

            <Tabs defaultValue="latest" className="mb-6">
              <TabsList className="glass p-1.5 h-auto rounded-xl border border-white/10">
                {["latest", "top-rated", "all-reviews"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="rounded-lg px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-neon-blue/20 data-[state=active]:to-neon-purple/20 data-[state=active]:text-neon-blue transition-all capitalize"
                  >
                    {tab === "top-rated" && <Zap className="w-4 h-4 mr-1.5" />}
                    {tab.replace("-", " ")}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Discussions List */}
            <div className="space-y-4">
              {sortedDiscussions.length > 0 ? (
                sortedDiscussions.map((discussion, index) => (
                  <div
                    key={discussion.id}
                    className="animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: "backwards" }}
                  >
                    <DiscussionCard discussion={discussion} />
                  </div>
                ))
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-xl" />
                  <div className="relative glass rounded-2xl p-12 text-center border border-white/10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-neon-blue/20 flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-neon-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">No discussions found</h3>
                    <p className="text-muted-foreground mb-6">Be the first to start a discussion!</p>
                    <Button
                      onClick={() => setShowCreatePost(true)}
                      className="bg-gradient-to-r from-neon-blue to-neon-purple"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Start Discussion
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80">
            <div className="sticky top-24 space-y-6">
              <CommunitySidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                trendingTags={trendingTags}
              />
            </div>
          </aside>
        </div>
      </div>

      <CreatePostDialog open={showCreatePost} onOpenChange={setShowCreatePost} />
    </div>
  )
}
