"use client"

import { useState } from "react"
import { use } from "react"
import Link from "next/link"
import { Star, Clock, Users, BookOpen, CheckCircle, ChevronLeft, Share2, Heart, Download, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoPlayer } from "@/components/courses/video-player"
import { PlaylistSidebar } from "@/components/courses/playlist-sidebar"
import { CourseContent } from "@/components/courses/course-content"
import { lessonNotes } from "./data/lesson-notes"
import { marked } from "marked"
import { useAuth } from "@/components/auth-provider"

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
})

// Mock course data with REAL YouTube videos
const courseData: Record<string, any> = {
  "1": {
    id: "1",
    title: "E-Commerce Website (React + Node.js)",
    description:
      "Full-stack online shopping platform with payment gateway, product management, cart functionality, and admin dashboard. Complete source code with deployment guide included.",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    category: "Web Development",
    rating: 4.9,
    students: 15,
    duration: "7-10 days",
    lessons: 8,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Intermediate",
    language: "English",
    lastUpdated: "January 2026",
    price: 1000,
    currentVideo: {
      id: "v1",
      title: "E-Commerce Project Demo",
      youtubeId: "1u2FvgKH_cs", // React E-commerce demo
      duration: "15:30",
    },
    playlist: [
      {
        id: "v1",
        title: "E-Commerce Project Demo",
        youtubeId: "1u2FvgKH_cs",
        duration: "15:30",
        completed: true,
      },
      {
        id: "v2",
        title: "React Frontend Setup",
        youtubeId: "0riD_TTJhBQ",
        duration: "20:15",
        completed: false,
      },
      {
        id: "v3",
        title: "Node.js Backend API",
        youtubeId: "fgTGADljAeg",
        duration: "18:45",
        completed: false,
      },
      {
        id: "v4",
        title: "Payment Gateway Integration",
        youtubeId: "1r-F3FIONl8",
        duration: "22:30",
        completed: false,
      },
    ],
    content: {
      overview: [
        "Complete React + Node.js e-commerce platform",
        "Payment gateway integration (Razorpay/Stripe)",
        "Product management with image upload",
        "Shopping cart and checkout functionality",
        "Admin dashboard for order management",
        "User authentication and authorization",
        "Responsive design for mobile and desktop",
        "Complete source code and documentation",
      ],
      topics: [
        {
          title: "Frontend Features",
          items: [
            "Product listing with filters and search",
            "Shopping cart functionality",
            "User authentication (Login/Signup)",
            "Product details page",
            "Checkout process",
          ],
        },
        {
          title: "Backend Features",
          items: [
            "REST API with Node.js/Express",
            "MongoDB database integration",
            "Payment gateway APIs",
            "Order management system",
            "Image upload handling",
          ],
        },
        {
          title: "Admin Panel",
          items: [
            "Product CRUD operations",
            "Order tracking and management",
            "User management",
            "Sales analytics dashboard",
          ],
        },
      ],
    },
  },
  "2": {
    id: "2",
    title: "College Management System (PHP + MySQL)",
    description:
      "Complete student, faculty, and course management system with attendance tracking, grade management, and administrative features.",
    thumbnail: "https://www.campusmedicine.com/blog/wp-content/uploads/2017/11/College-Management-Systems.jpg",
    category: "Web Development",
    rating: 4.8,
    students: 15,
    duration: "10-12 days",
    lessons: 6,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Beginner",
    language: "English",
    lastUpdated: "January 2026",
    price: 1000,
    currentVideo: {
      id: "v1",
      title: "College Management System Demo",
      youtubeId: "3d7EqY5-7yM",
      duration: "12:45",
    },
    playlist: [
      {
        id: "v1",
        title: "College Management System Demo",
        youtubeId: "3d7EqY5-7yM",
        duration: "12:45",
        completed: true,
      },
      {
        id: "v2",
        title: "Student Management Module",
        youtubeId: "gvQNOOdB5A4",
        duration: "15:20",
        completed: false,
      },
      {
        id: "v3",
        title: "Faculty Management",
        youtubeId: "HfTXHrWMGVY",
        duration: "13:30",
        completed: false,
      },
      {
        id: "v4",
        title: "Attendance System",
        youtubeId: "vHjcElAVBMc",
        duration: "18:00",
        completed: false,
      },
    ],
    content: {
      overview: [
        "Complete PHP/MySQL college management solution",
        "Student registration and profile management",
        "Faculty and staff management",
        "Course and timetable management",
        "Attendance tracking system",
        "Grade management and report cards",
        "Administrative dashboard",
        "Complete documentation and setup guide",
      ],
      topics: [
        {
          title: "Student Module",
          items: [
            "Student registration and admission",
            "Profile management",
            "Course enrollment",
            "View grades and attendance",
            "Fee payment tracking",
          ],
        },
        {
          title: "Faculty Module",
          items: [
            "Faculty profiles",
            "Course assignments",
            "Attendance marking",
            "Grade entry system",
            "Timetable viewing",
          ],
        },
        {
          title: "Admin Module",
          items: [
            "User management",
            "Course and department setup",
            "Fee structure management",
            "Reports generation",
            "System settings",
          ],
        },
      ],
    },
  },
  "3": {
    id: "3",
    title: "Food Delivery App (React Native + Firebase)",
    description:
      "Cross-platform mobile app with real-time order tracking, payment integration, and restaurant management system.",
    thumbnail: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop",
    category: "Mobile App",
    rating: 4.9,
    students: 10,
    duration: "12-15 days",
    lessons: 7,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Advanced",
    language: "English",
    lastUpdated: "January 2026",
    price: 2000,
    currentVideo: {
      id: "v1",
      title: "Food Delivery App Demo",
      youtubeId: "MoQD7LGN1-0",
      duration: "16:20",
    },
    playlist: [
      {
        id: "v1",
        title: "Food Delivery App Demo",
        youtubeId: "MoQD7LGN1-0",
        duration: "16:20",
        completed: true,
      },
      {
        id: "v2",
        title: "React Native Setup",
        youtubeId: "ANdSdIlgsEw",
        duration: "22:15",
        completed: false,
      },
      {
        id: "v3",
        title: "Firebase Integration",
        youtubeId: "m_u6P5k0vP0",
        duration: "19:45",
        completed: false,
      },
      {
        id: "v4",
        title: "Real-time Order Tracking",
        youtubeId: "bhhP5pwAnXA",
        duration: "25:30",
        completed: false,
      },
    ],
    content: {
      overview: [
        "Cross-platform React Native food delivery app",
        "Real-time order tracking with maps",
        "Payment gateway integration",
        "Restaurant and menu management",
        "User authentication with Firebase",
        "Push notifications for order updates",
        "Rating and review system",
        "Complete source code for iOS and Android",
      ],
      topics: [
        {
          title: "User Features",
          items: [
            "Browse restaurants and menus",
            "Add items to cart",
            "Place and track orders",
            "Multiple payment options",
            "Order history",
          ],
        },
        {
          title: "Restaurant Features",
          items: [
            "Menu management",
            "Order acceptance/rejection",
            "Real-time order notifications",
            "Analytics dashboard",
          ],
        },
        {
          title: "Technical Stack",
          items: [
            "React Native framework",
            "Firebase Firestore database",
            "Firebase Authentication",
            "Google Maps integration",
            "Payment gateway APIs",
          ],
        },
      ],
    },
  },
  "4": {
    id: "4",
    title: "Expense Tracker (Android - Kotlin)",
    description:
      "Native Android app for tracking expenses, budgets, and financial reports with local database.",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    category: "Mobile App",
    rating: 4.7,
    students: 10,
    duration: "8-10 days",
    lessons: 5,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Intermediate",
    language: "English",
    lastUpdated: "January 2026",
    price: 2000,
    currentVideo: {
      id: "v1",
      title: "Expense Tracker Demo",
      youtubeId: "sSQMdGXRzGw",
      duration: "10:15",
    },
    playlist: [
      {
        id: "v1",
        title: "Expense Tracker Demo",
        youtubeId: "sSQMdGXRzGw",
        duration: "10:15",
        completed: true,
      },
      {
        id: "v2",
        title: "Kotlin Android Basics",
        youtubeId: "F9UC9DY-vIU",
        duration: "18:30",
        completed: false,
      },
      {
        id: "v3",
        title: "Room Database Setup",
        youtubeId: "lwAvI3WDXBY",
        duration: "20:45",
        completed: false,
      },
    ],
    content: {
      overview: [
        "Native Android expense tracking app in Kotlin",
        "Room database for local storage",
        "Budget management and tracking",
        "Expense categorization",
        "Visual charts and reports",
        "Export data to CSV/PDF",
        "Material Design UI",
        "Complete source code and APK",
      ],
      topics: [
        {
          title: "Core Features",
          items: [
            "Add/Edit/Delete expenses",
            "Category management",
            "Budget setting and alerts",
            "Monthly/Weekly reports",
            "Search and filter",
          ],
        },
        {
          title: "Technical Implementation",
          items: [
            "Kotlin programming",
            "Room database integration",
            "MVVM architecture",
            "Chart libraries (MPAndroidChart)",
            "Material Design components",
          ],
        },
      ],
    },
  },
  "5": {
    id: "5",
    title: "Face Recognition Attendance (Python + OpenCV)",
    description:
      "AI-powered attendance system using facial recognition with admin panel and attendance reports.",
    thumbnail: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop",
    category: "ML/AI",
    rating: 5.0,
    students: 5,
    duration: "10-12 days",
    lessons: 6,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Advanced",
    language: "English",
    lastUpdated: "January 2026",
    price: 3400,
    currentVideo: {
      id: "v1",
      title: "Face Recognition System Demo",
      youtubeId: "sz25xxF_AVE",
      duration: "14:30",
    },
    playlist: [
      {
        id: "v1",
        title: "Face Recognition System Demo",
        youtubeId: "sz25xxF_AVE",
        duration: "14:30",
        completed: true,
      },
      {
        id: "v2",
        title: "OpenCV Face Detection",
        youtubeId: "oXlwWbU8l2o",
        duration: "22:15",
        completed: false,
      },
      {
        id: "v3",
        title: "Face Recognition Implementation",
        youtubeId: "PmZ29Vta3a8",
        duration: "25:40",
        completed: false,
      },
    ],
    content: {
      overview: [
        "AI-based face recognition attendance system",
        "Real-time face detection and recognition",
        "Automated attendance marking",
        "Admin panel with Flask",
        "Attendance reports and analytics",
        "Student database management",
        "High accuracy recognition",
        "Complete Python source code",
      ],
      topics: [
        {
          title: "ML Features",
          items: [
            "Face detection using Haar Cascades",
            "Face recognition with LBPH",
            "Real-time camera integration",
            "Model training and optimization",
          ],
        },
        {
          title: "Application Features",
          items: [
            "Student registration with photos",
            "Automated attendance marking",
            "Daily/Monthly reports",
            "Export to Excel/PDF",
            "Admin dashboard",
          ],
        },
      ],
    },
  },
  "6": {
    id: "6",
    title: "Disease Prediction System (ML + Flask)",
    description:
      "Machine learning model to predict diseases based on symptoms with web interface and data visualization.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    category: "ML/AI",
    rating: 4.8,
    students: 5,
    duration: "12-14 days",
    lessons: 7,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Advanced",
    language: "English",
    lastUpdated: "January 2026",
    price: 3400,
    currentVideo: {
      id: "v1",
      title: "Disease Prediction Demo",
      youtubeId: "fiz1ORTBGpY",
      duration: "13:20",
    },
    playlist: [
      {
        id: "v1",
        title: "Disease Prediction Demo",
        youtubeId: "fiz1ORTBGpY",
        duration: "13:20",
        completed: true,
      },
      {
        id: "v2",
        title: "Machine Learning Model",
        youtubeId: "7eh4d6sabA0",
        duration: "20:45",
        completed: false,
      },
    ],
    content: {
      overview: [
        "ML-based disease prediction system",
        "Multiple algorithms (Decision Tree, Random Forest, SVM)",
        "Flask web application",
        "Interactive symptom selection",
        "Prediction accuracy visualization",
        "Dataset preprocessing",
        "Model comparison charts",
        "Complete Python project with trained models",
      ],
      topics: [
        {
          title: "Machine Learning",
          items: [
            "Data preprocessing",
            "Feature engineering",
            "Model training (Decision Tree, Random Forest)",
            "Model evaluation and comparison",
            "Hyperparameter tuning",
          ],
        },
        {
          title: "Web Application",
          items: [
            "Flask backend setup",
            "Symptom selection interface",
            "Prediction results display",
            "Data visualization charts",
          ],
        },
      ],
    },
  },
  "7": {
    id: "7",
    title: "Library Management System (Java + MySQL)",
    description:
      "Desktop application for managing books, members, issue/return, fine calculation with reports.",
    thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    category: "Database",
    rating: 4.9,
    students: 12,
    duration: "8-10 days",
    lessons: 6,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Beginner",
    language: "English",
    lastUpdated: "January 2026",
    price: 5000,
    currentVideo: {
      id: "v1",
      title: "Library Management Demo",
      youtubeId: "RdCv9hV2jQI",
      duration: "11:45",
    },
    playlist: [
      {
        id: "v1",
        title: "Library Management Demo",
        youtubeId: "RdCv9hV2jQI",
        duration: "11:45",
        completed: true,
      },
      {
        id: "v2",
        title: "Java Swing GUI",
        youtubeId: "Kmgo00avvEw",
        duration: "18:30",
        completed: false,
      },
    ],
    content: {
      overview: [
        "Complete Java desktop library management system",
        "Book cataloging and management",
        "Member registration and tracking",
        "Issue and return management",
        "Automated fine calculation",
        "Search and filter functionality",
        "Report generation",
        "MySQL database integration",
      ],
      topics: [
        {
          title: "Core Modules",
          items: [
            "Book management (Add/Edit/Delete)",
            "Member management",
            "Issue book module",
            "Return book module",
            "Fine calculation system",
          ],
        },
        {
          title: "Reports & Admin",
          items: [
            "Book availability reports",
            "Issued books tracking",
            "Member history",
            "Fine collection reports",
            "Admin dashboard",
          ],
        },
      ],
    },
  },
  "8": {
    id: "8",
    title: "Hospital Management System (C# + SQL Server)",
    description:
      "Complete hospital management with patient records, appointments, billing, and pharmacy management.",
    thumbnail: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
    category: "Database",
    rating: 5.0,
    students: 12,
    duration: "14-16 days",
    lessons: 8,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Advanced",
    language: "English",
    lastUpdated: "January 2026",
    price: 5000,
    currentVideo: {
      id: "v1",
      title: "Hospital Management Demo",
      youtubeId: "jYM6vG5lHNc",
      duration: "15:50",
    },
    playlist: [
      {
        id: "v1",
        title: "Hospital Management Demo",
        youtubeId: "jYM6vG5lHNc",
        duration: "15:50",
        completed: true,
      },
    ],
    content: {
      overview: [
        "Complete C# hospital management system",
        "Patient registration and records",
        "Doctor and staff management",
        "Appointment scheduling",
        "Billing and payment tracking",
        "Pharmacy inventory management",
        "Laboratory test management",
        "SQL Server database with stored procedures",
      ],
      topics: [
        {
          title: "Patient Management",
          items: [
            "Patient registration",
            "Medical history tracking",
            "Appointment booking",
            "Prescription management",
          ],
        },
        {
          title: "Hospital Operations",
          items: [
            "Doctor and staff management",
            "Department management",
            "Billing and invoicing",
            "Pharmacy stock management",
            "Lab test tracking",
          ],
        },
      ],
    },
  },
  "9": {
    id: "9",
    title: "Portfolio Website (HTML/CSS/JavaScript)",
    description:
      "Responsive personal portfolio with animations, contact form, and project showcase section.",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    category: "Web Development",
    rating: 4.6,
    students: 15,
    duration: "3-5 days",
    lessons: 4,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Beginner",
    language: "English",
    lastUpdated: "January 2026",
    price: 1000,
    currentVideo: {
      id: "v1",
      title: "Portfolio Website Demo",
      youtubeId: "ldwlOzRvYOU",
      duration: "8:30",
    },
    playlist: [
      {
        id: "v1",
        title: "Portfolio Website Demo",
        youtubeId: "ldwlOzRvYOU",
        duration: "8:30",
        completed: true,
      },
    ],
    content: {
      overview: [
        "Modern responsive portfolio website",
        "Smooth animations and transitions",
        "Project showcase section",
        "Skills and experience display",
        "Working contact form",
        "Mobile-first responsive design",
        "SEO optimized",
        "Easy to customize",
      ],
      topics: [
        {
          title: "Sections Included",
          items: [
            "Hero section with intro",
            "About me section",
            "Skills and technologies",
            "Project portfolio gallery",
            "Contact form",
          ],
        },
      ],
    },
  },
  "10": {
    id: "10",
    title: "Chat Application (Flutter + Firebase)",
    description:
      "Real-time messaging app with group chats, media sharing, notifications, and user authentication.",
    thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
    category: "Mobile App",
    rating: 4.9,
    students: 10,
    duration: "10-12 days",
    lessons: 6,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Intermediate",
    language: "English",
    lastUpdated: "January 2026",
    price: 2000,
    currentVideo: {
      id: "v1",
      title: "Chat App Demo",
      youtubeId: "Ts2dlu-7dqo",
      duration: "12:20",
    },
    playlist: [
      {
        id: "v1",
        title: "Chat App Demo",
        youtubeId: "Ts2dlu-7dqo",
        duration: "12:20",
        completed: true,
      },
    ],
    content: {
      overview: [
        "Flutter chat application for iOS and Android",
        "Real-time messaging with Firebase",
        "One-on-one and group chats",
        "Image and file sharing",
        "Push notifications",
        "User authentication",
        "Online/offline status",
        "Complete source code",
      ],
      topics: [
        {
          title: "Features",
          items: [
            "User registration and login",
            "Real-time messaging",
            "Group chat creation",
            "Media sharing (images, files)",
            "Push notifications",
            "User profiles",
          ],
        },
      ],
    },
  },
  "11": {
    id: "11",
    title: "Sentiment Analysis Tool (NLP + Django)",
    description:
      "Natural language processing project for analyzing sentiments in text/reviews with visualization dashboard.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "ML/AI",
    rating: 4.7,
    students: 5,
    duration: "11-13 days",
    lessons: 6,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Advanced",
    language: "English",
    lastUpdated: "January 2026",
    price: 3400,
    currentVideo: {
      id: "v1",
      title: "Sentiment Analysis Demo",
      youtubeId: "vzhNnCFAkwQ",
      duration: "10:15",
    },
    playlist: [
      {
        id: "v1",
        title: "Sentiment Analysis Demo",
        youtubeId: "vzhNnCFAkwQ",
        duration: "10:15",
        completed: true,
      },
    ],
    content: {
      overview: [
        "NLP-based sentiment analysis system",
        "Analyze text for positive/negative/neutral sentiments",
        "Django web application",
        "Interactive visualization dashboard",
        "Support for multiple data sources",
        "Pre-trained models (VADER, TextBlob)",
        "Batch processing capability",
        "Export results to CSV/JSON",
      ],
      topics: [
        {
          title: "NLP Features",
          items: [
            "Text preprocessing",
            "Sentiment classification",
            "Entity recognition",
            "Word cloud generation",
            "Sentiment scoring",
          ],
        },
      ],
    },
  },
  "12": {
    id: "12",
    title: "Inventory Management (Python + PostgreSQL)",
    description:
      "Stock management system with supplier tracking, purchase orders, sales, and inventory reports.",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    category: "Database",
    rating: 4.8,
    students: 12,
    duration: "9-11 days",
    lessons: 6,
    instructor: {
      name: "YourCapstone Team",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "Professional Project Developers",
      students: 3500,
      courses: 12,
    },
    level: "Intermediate",
    language: "English",
    lastUpdated: "January 2026",
    price: 5000,
    currentVideo: {
      id: "v1",
      title: "Inventory Management Demo",
      youtubeId: "xWKpV0d6iLk",
      duration: "13:40",
    },
    playlist: [
      {
        id: "v1",
        title: "Inventory Management Demo",
        youtubeId: "xWKpV0d6iLk",
        duration: "13:40",
        completed: true,
      },
    ],
    content: {
      overview: [
        "Complete Python inventory management system",
        "Product and stock management",
        "Supplier tracking",
        "Purchase order management",
        "Sales and billing",
        "Low stock alerts",
        "Comprehensive reporting",
        "PostgreSQL database",
      ],
      topics: [
        {
          title: "Core Modules",
          items: [
            "Product management",
            "Stock tracking",
            "Purchase orders",
            "Sales management",
            "Supplier management",
          ],
        },
      ],
    },
  },
}

// Fallback for unknown course IDs
const getDefaultCourse = (id: string) => ({
  id: id,
  title: "Project Not Found",
  description: "This project is not available in our catalog.",
  thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  category: "General",
  rating: 0,
  students: 0,
  duration: "0 days",
  lessons: 0,
  instructor: {
    name: "YourCapstone Team",
    avatar: "https://i.pravatar.cc/150?img=68",
    title: "Professional Project Developers",
    students: 3500,
    courses: 12,
  },
  level: "Unknown",
  language: "English",
  lastUpdated: "January 2026",
  price: 0,
  currentVideo: {
    id: "v1",
    title: "No demo available",
    youtubeId: "dQw4w9WgXcQ",
    duration: "0:00",
  },
  playlist: [],
  content: {
    overview: ["Project not found. Please check our services page for available projects."],
    topics: [],
  },
})

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = use(params)
  const { user } = useAuth()
  const course = courseData[resolvedParams.id] || getDefaultCourse(resolvedParams.id)
  const [currentVideoId, setCurrentVideoId] = useState(course.currentVideo?.id)
  const [isLiked, setIsLiked] = useState(false)

  // Filter playlist for unauthenticated users (hide progress)
  const displayPlaylist = user
    ? course.playlist
    : course.playlist?.map((item: any) => ({ ...item, completed: false }))

  // Get the current video from playlist based on selected ID
  const currentVideo = course.playlist?.find((v: any) => v.id === currentVideoId) || course.playlist?.[0]
  const currentYouTubeId = currentVideo?.youtubeId || course.currentVideo?.youtubeId

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <VideoPlayer videoId={currentYouTubeId} title={currentVideo?.title || ""} />

            {/* Course Info Bar */}
            <div className="glass rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Badge className="bg-neon-blue/20 text-neon-blue border-none">{course.category}</Badge>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-foreground font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">({course.students?.toLocaleString()} students)</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? "text-red-500" : "text-muted-foreground"}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Course Title and Description */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{course.title}</h1>
              <p className="text-muted-foreground">{course.description}</p>
            </div>

            {/* Course Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{course.level}</span>
              </div>
              <span>Last updated: {course.lastUpdated}</span>
            </div>

            {/* Instructor Info */}
            <div className="glass rounded-xl p-4 flex items-center gap-4">
              <img
                src={course.instructor?.avatar || "/placeholder.svg"}
                alt={course.instructor?.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-foreground">{course.instructor?.name}</h3>
                <p className="text-sm text-muted-foreground">{course.instructor?.title}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {course.instructor?.students?.toLocaleString()} students • {course.instructor?.courses} courses
                </p>
              </div>
            </div>

            {/* Tabs for Content */}
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="glass w-full justify-start gap-2 p-1 h-auto flex-wrap">
                <TabsTrigger
                  value="content"
                  className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
                >
                  Course Content
                </TabsTrigger>
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="notes"
                  className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
                >
                  Notes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-6">
                <CourseContent topics={course.content?.topics} />
              </TabsContent>

              <TabsContent value="overview" className="mt-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">What you'll learn</h3>
                  <ul className="space-y-3">
                    {course.content?.overview?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="mt-6">
                <div className="glass rounded-xl p-6">
                  {user ? (
                    <div
                      className="markdown-content"
                      dangerouslySetInnerHTML={{
                        __html: marked.parse(
                          currentVideo?.notes ||
                          (currentVideo
                            ? `## ${currentVideo.title}\n\nNotes for this lesson are coming soon. Check back later!`
                            : course.content?.notes || "No notes available for this lesson."),
                        ),
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                        <Lock className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Sign in to access course notes</h3>
                      <p className="text-muted-foreground max-w-md mb-6">
                        Unlock comprehensive lesson notes, copy-paste code examples, and track your learning progress —
                        completely free!
                      </p>
                      <Link href="/login">
                        <Button size="lg" className="bg-neon-blue hover:bg-neon-blue/90 text-white cursor-pointer">
                          Sign In to Continue
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Playlist Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <PlaylistSidebar
                playlist={displayPlaylist || []}
                currentVideoId={currentVideoId}
                onSelectVideo={setCurrentVideoId}
                courseName={course.title}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
