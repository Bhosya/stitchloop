import React from 'react';
import { Link } from 'react-router-dom';
import { User, Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The True Cost of Fast Fashion',
    excerpt: 'Discover the environmental impact of fast fashion and how sustainable choices can make a difference.',
    content: `The fashion industry is one of the largest polluters in the world. Fast fashion, characterized by rapid production of inexpensive clothing to meet the latest trends, has significant environmental and social impacts.

    The true cost of fast fashion extends far beyond the price tag. From water pollution and textile waste to poor working conditions and unfair wages, the industry's practices affect both people and the planet.

    However, there are ways to make a difference. By choosing sustainable fashion, supporting ethical brands, and embracing circular fashion practices, we can help create positive change in the industry.`,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: 'March 15, 2025',
    author: {
      name: 'Emma Thompson',
      role: 'Sustainable Fashion Expert',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    },
  },
  {
    id: 2,
    title: 'Upcycling: Give Your Clothes a Second Life',
    excerpt: 'Learn creative ways to transform your old clothes into new fashion statements.',
    content: `Upcycling is more than just a trend – it's a sustainable approach to fashion that helps reduce waste and gives new life to old garments. By transforming existing pieces into something new and unique, we can extend the lifecycle of our clothes and express our creativity.

    In this guide, we'll explore various upcycling techniques, from basic alterations to complete transformations. Whether you're a beginner or an experienced sewist, there's a project for everyone.

    We'll also share inspiring examples of upcycled fashion and tips for starting your own upcycling journey.`,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: 'March 10, 2025',
    author: {
      name: 'Alex Rivera',
      role: 'DIY Fashion Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    },
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-[#8B4513] mb-8">Sustainable Fashion Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <Link to={`/blog/${post.id}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-xl font-serif font-bold text-[#8B4513] mt-2 mb-3">
                  {post.title}
                </h2>
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-[#5C4033]">{post.author.name}</p>
                    <p className="text-xs text-[#666666]">{post.date}</p>
                  </div>
                </div>
                <p className="text-[#666666] mb-4">{post.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;