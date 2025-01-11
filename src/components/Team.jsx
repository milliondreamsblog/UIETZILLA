import React from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-black">
      {/* Team Preview */}
      <div className="text-center">
        <div className="inline-block bg-yellow-500/10 p-3 rounded-lg mb-6">
          <Users className="h-6 w-6 text-yellow-400" />
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Our Team</h2>
        <p className="text-yellow-100/70 max-w-2xl mx-auto mb-8">
          A dedicated team of AI researchers, education specialists, and learning designers crafting the future of personalized education.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            'https://images.unsplash.com/photo-1',
            'https://images.unsplash.com/photo-2',
            'https://images.unsplash.com/photo-3',
            'https://images.unsplash.com/photo-4',
          ].map((image, index) => (
            <div key={index} className="text-center">
              <img
                src={image}
                alt={`Team member ${index + 1}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-yellow-400 font-semibold">Member {index + 1}</h3>
              <p className="text-yellow-100/70 text-sm">Role {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
