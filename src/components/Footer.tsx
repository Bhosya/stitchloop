import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#8B4513] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-8">
            <h3 className="text-lg font-serif font-semibold">About StitchLoop</h3>
            <p className="text-sm">
              Where sustainability meets style. Join our community of conscious fashion lovers making a difference, one garment at a time.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#E2D5C3]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#E2D5C3]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#E2D5C3]">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#E2D5C3]">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Shop</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">New Arrivals</a></li>
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">Best Sellers</a></li>
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">Categories</a></li>
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">Brands</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Learn</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">Sustainability</a></li>
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Help</h3>
            <ul className="space-y-4">
              <li><a href="/customer-service" className="text-sm hover:text-[#E2D5C3]">FAQs</a></li>
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">Shipping</a></li>
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">Returns</a></li>
              <li><a href="#" className="text-sm hover:text-[#E2D5C3]">Size Guide</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[#E2D5C3] pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} StitchLoop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;