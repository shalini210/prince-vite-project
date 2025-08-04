import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-100 to-blue-100 flex flex-col items-center justify-start px-4 py-12 animate-fadeIn">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-700">
        About Us
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center mb-8">
        We are a passionate team dedicated to building modern, responsive, and engaging web applications using the latest technologies.
      </p>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-16">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 text-center transform transition hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Our Mission Section */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">🎯 Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn">
          Our mission is to empower individuals and businesses by providing accessible and high-quality tech solutions. We believe in continuous learning, user-first design, and collaboration to build tools that matter.
        </p>
        <blockquote className="mt-6 italic text-blue-600 font-medium">“Tech for everyone, crafted with passion.”</blockquote>
      </div>
    </div>
  );
};

// Sample team data
const team = [
  {
    name: 'Shalini Rathore',
    role: 'Frontend Developer',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Amit Sharma',
    role: 'Backend Developer',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Priya Verma',
    role: 'UI/UX Designer',
    image: 'https://i.pravatar.cc/150?img=3',
  },
];

export default About;
