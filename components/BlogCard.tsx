import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category?: string;
  featured?: boolean;
}

export default function BlogCard({ 
  id, 
  title, 
  excerpt, 
  author, 
  date, 
  image, 
  category,
  featured = false 
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <article className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className={`w-full object-cover ${featured ? 'h-64' : 'h-48'}`}
          />
          {category && (
            <span className="absolute top-4 left-4 bg-primary-400 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
          </div>
          
          <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${featured ? 'text-xl' : 'text-lg'}`}>
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-500 font-medium transition-colors group">
            <span>Learn more</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}