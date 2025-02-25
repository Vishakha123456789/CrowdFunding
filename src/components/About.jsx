import React from 'react';

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're on a mission to connect people and foster collaboration across the globe.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2025, CrowdApp began with a simple idea: make collaboration easier and more accessible for everyone. 
                What started as a small project has grown into a global platform used by millions.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and build features that help our community connect, 
                create, and achieve their goals together.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'We constantly push boundaries to create better solutions.',
                },
                {
                  title: 'Community',
                  description: 'We believe in the power of people working together.',
                },
                {
                  title: 'Trust',
                  description: 'We build relationships based on transparency and reliability.',
                },
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About