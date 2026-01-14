"use client"

import { useState } from "react"
import { Search as SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const faqCategories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "pricing", label: "Pricing & Payment" },
    { id: "delivery", label: "Delivery & Support" },
    { id: "technical", label: "Technical" },
]

const faqs = [
    {
        category: "general",
        question: "What is YourCapstone?",
        answer:
            "YourCapstone is a professional capstone and academic project development service for students. Hum final year capstone projects, college assignments, aur technical projects deliver karte hain with complete source code, documentation, and presentation support.",
    },
    {
        category: "general",
        question: "Kya aap meri specific technology mein project kar sakte ho?",
        answer:
            "Haan! Hum almost sabhi technologies mein kaam karte hain - Web Development (React, Angular, PHP, Django), Mobile Apps (Flutter, React Native, Android), Desktop Applications (Java, Python, C#), ML/AI projects, aur Database systems. Agar koi specific technology chahiye, pehle confirm kar lein.",
    },
    {
        category: "delivery",
        question: "Project kitne din mein complete hoga?",
        answer:
            "Project delivery time complexity pe depend karta hai. Simple projects 3-5 days, moderate complexity 5-8 days, aur complex final year projects 10-15 days mein deliver hote hain. Urgent delivery bhi available hai with additional charges.",
    },
    {
        category: "pricing",
        question: "Payment kaise hoti hai?",
        answer:
            "Payment process simple hai: 50% advance payment project start karne se pehle, aur remaining 50% project completion ke baad. Hum UPI, Bank Transfer, Paytm, aur other digital payment methods accept karte hain.",
    },
    {
        category: "technical",
        question: "Kya source code milega?",
        answer:
            "Haan, bilkul! Aapko complete source code with detailed comments, project documentation, database files (if applicable), screenshots, user manual, aur presentation PPT milega. Full ownership aapki hogi after complete payment.",
    },
    {
        category: "delivery",
        question: "Agar mujhe changes chahiye toh?",
        answer:
            "Har package mein free revisions included hain (package ke according). Agar aapko koi changes chahiye, requirements clearly batao, hum implement kar denge. Major changes ke liye additional charges apply ho sakte hain.",
    },
    {
        category: "general",
        question: "Kya project original hoga? Plagiarism toh nahi?",
        answer:
            "100% original aur custom-made projects. Hum har project scratch se banate hain according to your specific requirements. Plagiarism-free guarantee hai.",
    },
    {
        category: "delivery",
        question: "Kya documentation bhi milega?",
        answer:
            "Haan! Complete project documentation included hai jisme project abstract, introduction, system design, ER diagrams, flowcharts, code explanation, screenshots, testing reports - sab kuch milega jo college submission ke liye chahiye.",
    },
    {
        category: "delivery",
        question: "College mein presentation dene mein help milegi?",
        answer:
            "Haan, hum presentation PPT dete hain with complete project overview. Agar doubts ho ya explanation chahiye toh wo bhi provide karte hain taaki aap confidently present kar sako.",
    },
    {
        category: "general",
        question: "Meri information safe rahegi?",
        answer:
            "100% confidential. Hum client privacy ko seriously lete hain. Aapki personal information, project details - kuch bhi share nahi karte. Complete privacy guaranteed.",
    },
    {
        category: "pricing",
        question: "Refund policy kya hai?",
        answer:
            "Agar aap satisfied nahi ho aur humne discussed requirements meet nahi kiye, toh refund available hai. Terms & Conditions apply. Details ke liye contact karein.",
    },
    {
        category: "pricing",
        question: "Project ki cost kaise decide hoti hai?",
        answer:
            "Cost project complexity, technology stack, features, aur timeline pe depend karta hai. Basic projects ₹999 se start hote hain. Exact quote ke liye apni requirements share karein.",
    },
]

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    const filteredFaqs = faqs.filter((faq) => {
        const matchesSearch =
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8">
                        Sabhi common questions aur unke answers. Koi doubt ho toh pooch sakte ho!
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative mb-8">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-12 bg-background/50 border-glass-border focus-visible:ring-neon-blue rounded-xl text-lg"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {faqCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    selectedCategory === category.id
                                        ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/20"
                                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="glass rounded-2xl p-8 min-h-[400px]">
                    {filteredFaqs.length > 0 ? (
                        <Accordion type="single" collapsible className="w-full">
                            {filteredFaqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-lg font-medium hover:text-neon-blue transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">No questions found matching your search.</p>
                            <Button
                                variant="link"
                                onClick={() => {
                                    setSearchQuery("")
                                    setSelectedCategory("all")
                                }}
                                className="text-neon-blue mt-2"
                            >
                                Clear filters
                            </Button>
                        </div>
                    )}
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Still have questions? Abhi bhi koi doubt hai?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        Contact Us / WhatsApp Karein
                    </a>
                </div>
            </div>
        </div>
    )
}
