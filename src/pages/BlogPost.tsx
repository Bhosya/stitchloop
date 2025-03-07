import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Share2 } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The True Cost of Fast Fashion',
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

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-[#5C4033]">{post.author.name}</h3>
              <p className="text-sm text-[#666666]">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center text-[#666666]">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{post.date}</span>
          </div>
        </div>

        <h1 className="text-4xl font-serif font-bold text-[#8B4513] mb-6">{post.title}</h1>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-[#666666] mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-[#E2D5C3]">
          <button className="inline-flex items-center px-4 py-2 rounded-md bg-[#8B4513] text-white hover:bg-[#5C4033] transition-colors">
            <Share2 className="h-5 w-5 mr-2" />
            Share Article
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;