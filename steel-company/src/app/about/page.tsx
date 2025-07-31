'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { Menu, Factory, Users, Award, Shield, Target, Heart, Zap, CheckCircle, Calendar, MapPin, Phone, Mail } from 'lucide-react'

export default function About() {
  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]

  const teamMembers = [
    {
      name: "Robert Steel",
      role: "CEO & Founder",
      avatar: "RS",
      experience: "30+ years",
      description: "Visionary leader with three decades of steel industry expertise"
    },
    {
      name: "Maria Rodriguez",
      role: "Chief Engineer",
      avatar: "MR",
      experience: "25+ years",
      description: "Structural engineering expert specializing in complex industrial projects"
    },
    {
      name: "David Chen",
      role: "Operations Director",
      avatar: "DC",
      experience: "20+ years",
      description: "Operations specialist ensuring quality and efficiency in every project"
    },
    {
      name: "Sarah Williams",
      role: "Project Manager",
      avatar: "SW",
      experience: "15+ years",
      description: "Expert project coordinator with a track record of on-time delivery"
    }
  ]

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems" },
    { name: "AWS D1.1", description: "Structural Welding Code" },
    { name: "AISC Certified", description: "Steel Construction Certification" },
    { name: "OSHA Compliant", description: "Safety Standards Certification" }
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to workplace safety and industry standards"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every aspect of our work"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent relationships built on trust and reliability"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing cutting-edge technology and modern fabrication techniques"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Factory className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">SteelCorp</span>
            </Link>

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

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-orange-500 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About SteelCorp
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Three decades of excellence in steel fabrication and industrial construction
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1994, SteelCorp began as a small family-owned business with a simple mission: to provide the highest quality steel fabrication services with unmatched customer service. Over three decades, we've grown into a leading industrial steel contractor while maintaining our core values of integrity, precision, and safety.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we serve clients across multiple industries, from commercial construction to heavy industrial projects. Our state-of-the-art facility and experienced team enable us to handle projects of any scale while maintaining the personal touch that sets us apart.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1994</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl">
                <div className="text-center">
                  <Factory className="h-20 w-20 text-orange-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To deliver exceptional steel fabrication solutions that exceed expectations while building lasting partnerships with our clients through quality, reliability, and innovation.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-l-4 border-l-orange-500">
                  <div className="flex justify-center mb-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full">
                      <Icon className="h-6 w-6" />
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to excellence in steel fabrication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                <Badge variant="outline" className="border-orange-200 text-orange-700 mb-3">
                  {member.experience}
                </Badge>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Committed to the highest industry standards and safety protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 p-6 text-center hover:bg-gray-750 transition-all duration-200 hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full">
                    <CheckCircle className="h-6 w-6" />
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's growth and evolution
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900">1994 - Company Founded</h3>
                <p className="text-gray-600">Started as a small family business with 3 employees and a vision for quality</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900">2005 - Facility Expansion</h3>
                <p className="text-gray-600">Moved to our current 50,000 sq ft facility with state-of-the-art equipment</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900">2015 - Industry Recognition</h3>
                <p className="text-gray-600">Received multiple industry awards for excellence in steel fabrication</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900">2024 - 30 Years Strong</h3>
                <p className="text-gray-600">Celebrating three decades of growth with 75+ employees and 500+ completed projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our experience and expertise can bring your steel fabrication project to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call Us Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-50 hover:text-orange-600 px-8 py-4">
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0 hover:opacity-80 transition-opacity">
              <Factory className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold text-white">SteelCorp</span>
            </Link>
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