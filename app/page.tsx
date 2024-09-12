import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg mb-8">This is a simple  page built with Next.js.</p>
        <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More 
        </Link>
      </header>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p>Description of feature 1 goes here.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p>Description of feature 2 goes here.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p>Description of feature 3 goes here.</p>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
} 
