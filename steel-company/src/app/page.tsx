'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import { Menu, Factory, Users, Award, TrendingUp, Star, Phone, Mail, MapPin, Clock, Shield } from 'lucide-react'

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const statsSection = document.getElementById('stats-section')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Factory, value: 50, suffix: '+', label: 'Years' },
    { icon: Users, value: 500, suffix: '+', label: 'Clients' },
    { icon: Award, value: 10, suffix: 'M+', label: 'Tons' },
    { icon: Clock, value: 24, suffix: '/7', label: 'Support' }
  ]

  const testimonials = [
    {
      quote: "Outstanding quality and reliability. Their steel solutions exceeded our expectations and delivered on time.",
      name: "Sarah Johnson",
      role: "Construction Manager",
      avatar: "SJ",
      rating: 5
    },
    {
      quote: "Professional service from start to finish. The team's expertise in industrial steel is unmatched.",
      name: "Michael Chen", 
      role: "Project Director",
      avatar: "MC",
      rating: 5
    },
    {
      quote: "Innovative solutions and exceptional craftsmanship. They've been our trusted partner for over a decade.",
      name: "Emily Rodriguez",
      role: "Operations Lead", 
      avatar: "ER",
      rating: 5
    }
  ]

  const partners = [
    "ACME Construction", "Industrial Corp", "BuildTech", "SteelWorks", "MetalCraft", "Precision Engineering"
  ]

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Factory className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">SteelCorp</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
                  Get Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 text-white">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium hover:text-orange-400 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white mt-4">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Steel Solutions
            <span className="block bg-gradient-to-r from-orange-200 to-white bg-clip-text text-transparent">
              Built to Last
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Precision-engineered steel for modern industries
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 rounded-full"
            >
              Get Quote
            </Button>
          </Link>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      </section>

      {/* Stats Section - 4 Column */}
      <section id="stats-section" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="bg-gray-800 border-gray-700 p-6 text-center hover:bg-gray-750 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl">
                  <div className="flex justify-center mb-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full">
                      <Icon className="h-6 w-6" />
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    {isVisible ? <AnimatedCounter end={stat.value} suffix={stat.suffix} /> : '0' + stat.suffix}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - 3 Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders for exceptional quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 h-full bg-white border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - Partner Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Partners</h3>
            <p className="text-gray-600">Working with industry leaders across the nation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1 rounded-xl">
                <div className="h-12 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{partner}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Factory className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold text-white">SteelCorp</span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2024 SteelCorp. All rights reserved.</p>
              <p className="text-sm text-gray-400 mt-1">Building the future with steel excellence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}