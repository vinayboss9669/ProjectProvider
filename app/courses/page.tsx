"use client"

import { useState, useMemo } from "react"
import { Search, Grid3X3, List, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CourseCard } from "@/components/courses/course-card"
import { CategoryFilter } from "@/components/courses/category-filter"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const allCourses = [
  {
    id: "1",
    title: "E-Commerce Website (React + Node.js)",
    description: "Full-stack online shopping platform with payment gateway, product management, cart, and admin dashboard.",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    category: "web-development",
    rating: 4.9,
    students: 15,
    duration: "7-10 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Intermediate",
    price: 1000,
  },
  {
    id: "2",
    title: "College Management System (PHP + MySQL)",
    description: "Complete student, faculty, and course management system with attendance tracking and grade management.",
    thumbnail: "https://www.campusmedicine.com/blog/wp-content/uploads/2017/11/College-Management-Systems.jpg",
    category: "web-development",
    rating: 4.8,
    students: 15,
    duration: "10-12 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Beginner",
    price: 1000,
  },
  {
    id: "3",
    title: "Food Delivery App (React Native + Firebase)",
    description: "Cross-platform mobile app with real-time order tracking, payment integration, and restaurant management.",
    thumbnail: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop",
    category: "mobile-app",
    rating: 4.9,
    students: 10,
    duration: "12-15 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Advanced",
    price: 2000,
  },
  {
    id: "4",
    title: "Expense Tracker (Android - Kotlin)",
    description: "Native Android app for tracking expenses, budgets, and financial reports with local database.",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    category: "mobile-app",
    rating: 4.7,
    students: 10,
    duration: "8-10 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Intermediate",
    price: 2000,
  },
  {
    id: "5",
    title: "Face Recognition Attendance (Python + OpenCV)",
    description: "AI-powered attendance system using facial recognition with admin panel and attendance reports.",
    thumbnail: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop",
    category: "ml-ai",
    rating: 5.0,
    students: 5,
    duration: "10-12 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Advanced",
    price: 3400,
  },
  {
    id: "6",
    title: "Disease Prediction System (ML + Flask)",
    description: "Machine learning model to predict diseases based on symptoms with web interface and data visualization.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    category: "ml-ai",
    rating: 4.8,
    students: 5,
    duration: "12-14 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Advanced",
    price: 3400,
  },
  {
    id: "7",
    title: "Library Management System (Java + MySQL)",
    description: "Desktop application for managing books, members, issue/return, fine calculation with reports.",
    thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    category: "database",
    rating: 4.9,
    students: 12,
    duration: "8-10 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Beginner",
    price: 5000,
  },
  {
    id: "8",
    title: "Hospital Management System (C# + SQL Server)",
    description: "Complete hospital management with patient records, appointments, billing, and pharmacy management.",
    thumbnail: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
    category: "database",
    rating: 5.0,
    students: 12,
    duration: "14-16 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Advanced",
    price: 5000,
  },
  {
    id: "9",
    title: "Portfolio Website (HTML/CSS/JavaScript)",
    description: "Responsive personal portfolio with animations, contact form, and project showcase section.",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    category: "web-development",
    rating: 4.6,
    students: 15,
    duration: "3-5 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Beginner",
    price: 1000,
  },
  {
    id: "10",
    title: "Chat Application (Flutter + Firebase)",
    description: "Real-time messaging app with group chats, media sharing, notifications, and user authentication.",
    thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
    category: "mobile-app",
    rating: 4.9,
    students: 10,
    duration: "10-12 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Intermediate",
    price: 2000,
  },
  {
    id: "11",
    title: "Sentiment Analysis Tool (NLP + Django)",
    description: "Natural language processing project for analyzing sentiments in text/reviews with visualization dashboard.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "ml-ai",
    rating: 4.7,
    students: 5,
    duration: "11-13 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Advanced",
    price: 3400,
  },
  {
    id: "12",
    title: "Inventory Management (Python + PostgreSQL)",
    description: "Stock management system with supplier tracking, purchase orders, sales, and inventory reports.",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    category: "database",
    rating: 4.8,
    students: 12,
    duration: "9-11 days",
    lessons: 0,
    instructor: "YourCapstone Team",
    level: "Intermediate",
    price: 5000,
  },
]

const categories = [
  { id: "all", label: "All Projects", count: allCourses.length },
  {
    id: "web-development",
    label: "Web Development",
    count: allCourses.filter((c) => c.category === "web-development").length,
  },
  {
    id: "mobile-app",
    label: "Mobile Apps",
    count: allCourses.filter((c) => c.category === "mobile-app").length,
  },
  {
    id: "ml-ai",
    label: "ML/AI Projects",
    count: allCourses.filter((c) => c.category === "ml-ai").length,
  },
  {
    id: "database",
    label: "Database Projects",
    count: allCourses.filter((c) => c.category === "database").length,
  },
]

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredCourses = useMemo(() => {
    let courses = [...allCourses]

    // Filter by category
    if (selectedCategory !== "all") {
      courses = courses.filter((c) => c.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      courses = courses.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.instructor.toLowerCase().includes(query),
      )
    }

    // Sort
    switch (sortBy) {
      case "popular":
        courses.sort((a, b) => b.students - a.students)
        break
      case "rating":
        courses.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        courses.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
        break
      case "duration":
        courses.sort((a, b) => Number.parseInt(a.duration) - Number.parseInt(b.duration))
        break
    }

    return courses
  }, [selectedCategory, searchQuery, sortBy])

  const FilterSidebar = () => (
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
    />
  )

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Our Project Services</span>
          </h1>
          <p className="text-muted-foreground">Browse our completed capstone projects and get yours done today</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="glass rounded-xl p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search projects by technology, type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/5 border-glass-border"
                  />
                </div>

                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline" className="border-glass-border bg-transparent">
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[280px] bg-background/95 backdrop-blur-xl border-glass-border">
                    <div className="mt-6">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] bg-white/5 border-glass-border">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-glass-border">
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="flex items-center gap-1 p-1 bg-white/5 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4 text-sm text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredCourses.length}</span> sample projects
            </div>

            {/* Projects Grid */}
            {filteredCourses.length > 0 ? (
              <div
                className={
                  viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-4"
                }
              >
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="glass rounded-xl p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
