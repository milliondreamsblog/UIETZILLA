import React from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  // Team data with roles and images
  const teamMembers = [
    {
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQGrMoSl5jrSpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707457555874?e=1741824000&v=beta&t=yUXiUCSWk4AM_ipLDMf1shiK-ErBlW53PFioW1ybRgA',
      name: 'Member 1',
      roles: ['UX Designer', 'Front-end Developer'],
    },
    {
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQHb5N4w4DbKqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684263458341?e=1741824000&v=beta&t=P6U0Hq_N34IZdSVKYd72FX8VdyAwALJ2ymrjgvoyUZ8',
      name: 'Member 2',
      roles: ['Back-end Developer'],
    },
    {
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQHSBrR10HyzuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704621714877?e=1741824000&v=beta&t=lBznE6GoUfTTCxqEqmzFQDT8am1UrZielZdpIKTOzfc',
      name: 'Member 3',
      roles: ['Data Scientist'],
    },
    {
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQFfkFWHZE9EDw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705660187305?e=1741824000&v=beta&t=GUWnMjwcoToAHRbKSb_udYN2AhVZJfFXE6o2JukgmLM',
      name: 'Member 4',
      roles: ['Project Manager', 'AI Engineer'],
    },
  ];

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
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={`Team member ${index + 1}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-yellow-400 font-semibold">{member.name}</h3>
              {member.roles.map((role, roleIndex) => (
                <p key={roleIndex} className="text-yellow-100/70 text-sm">
                  {role}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
