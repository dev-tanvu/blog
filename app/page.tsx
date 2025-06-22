'use client';

import { useState } from 'react';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Sustainable Future Insights',
    subtitle: 'Discover innovative farming techniques that protect our environment while maximizing yield',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Smart Agriculture Solutions',
    subtitle: 'Explore cutting-edge technology transforming modern farming practices',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Organic Farming Excellence',
    subtitle: 'Learn about organic methods that ensure healthy crops and soil preservation',
  },
];

const trendingArticles = [
  {
    id: '1',
    title: 'Delivery is reschedule for the next available time slot.',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'John Smith',
    date: 'Dec 15, 2024',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Agriculture',
    featured: true,
  },
  {
    id: '2',
    title: 'Sustainable farming practices for better yields',
    excerpt: 'Discover how modern sustainable farming techniques can improve crop yields while protecting the environment.',
    author: 'Sarah Johnson',
    date: 'Dec 14, 2024',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sustainability',
  },
  {
    id: '3',
    title: 'Smart irrigation systems revolutionizing agriculture',
    excerpt: 'Learn about the latest smart irrigation technologies that are helping farmers optimize water usage.',
    author: 'Mike Davis',
    date: 'Dec 13, 2024',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Technology',
  },
  {
    id: '4',
    title: 'Organic pest control methods that actually work',
    excerpt: 'Explore natural and organic pest control solutions that protect crops without harmful chemicals.',
    author: 'Emily Chen',
    date: 'Dec 12, 2024',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Organic',
  },
  {
    id: '5',
    title: 'Climate-resilient crops for changing weather patterns',
    excerpt: 'Understanding how to select and grow crops that can withstand climate change challenges.',
    author: 'David Wilson',
    date: 'Dec 11, 2024',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Climate',
  },
  {
    id: '6',
    title: 'The future of vertical farming in urban areas',
    excerpt: 'How vertical farming is bringing agriculture to cities and revolutionizing food production.',
    author: 'Lisa Brown',
    date: 'Dec 10, 2024',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Innovation',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-200 mb-8 animate-slide-up">
                {heroSlides[currentSlide].subtitle}
              </p>
              <Link href="/blogs" className="btn-primary inline-flex items-center space-x-2 animate-slide-up">
                <span>Learn More</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary-400' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trending Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trending Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common trends. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingArticles.map((article) => (
              <BlogCard key={article.id} {...article} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blogs" className="btn-secondary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using sustainable practices to improve their yields and protect the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-primary-400 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors">
              Get Started Today
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-400 px-8 py-3 rounded-full font-medium transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}