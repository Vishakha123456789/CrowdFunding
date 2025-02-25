import React from 'react';

function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to CrowdApp
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Connect, collaborate, and create with like-minded individuals from around the world.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-500 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CrowdApp?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make our platform unique and powerful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Global Community',
                description: 'Connect with users worldwide and expand your network.',
              },
              {
                title: 'Secure Platform',
                description: 'Your data is protected with enterprise-grade security.',
              },
              {
                title: 'Easy Collaboration',
                description: 'Work together seamlessly with intuitive tools.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home