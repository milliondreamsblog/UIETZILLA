import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users } from 'lucide-react';

const courseData = {
  'mozohack-5': {
    title: 'MOZOHACK 5.0',
    description: 'Continuing the legacy of our past iterations, we have come back with even more grit, more challenge and most of all more fun. SRMKZILLA invites you to the most anticipated hackathon of the year - MOZOHACK 5.0',
    image: '/Card1st.png',
    startDate: 'March 15, 2024',
    duration: '48 hours',
    maxParticipants: 500,
    price: 'Free',
    curriculum: [
      'Team Formation and Ideation',
      'Project Development Phase',
      'Mentorship Sessions',
      'Final Presentations',
      'Judging and Awards'
    ]
  },
  'mozfest-24': {
    title: 'MOZFEST \'24',
    description: 'It\'s time to break free from the mundane and dive into the ultimate adventure, we\'re bringing you MOZOFEST\'24! Get ready to turn up the energy and join us for an epic experience that\'ll leave you buzzing with excitement',
    image: '/Card2nd.png',
    startDate: 'April 1, 2024',
    duration: '2 days',
    maxParticipants: 1000,
    price: '$20',
    curriculum: [
      'Opening Ceremony',
      'Tech Talks',
      'Workshops',
      'Networking Sessions',
      'Closing Ceremony'
    ]
  },
  // Add other courses similarly
};

function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courseId ? courseData[courseId] : null;
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Course not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Courses
      </button>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-300 mb-6">{course.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="text-blue-500" />
                <span>{course.startDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-blue-500" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-blue-500" />
                <span>{course.maxParticipants} participants</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Curriculum</h2>
              <ul className="space-y-2">
                {course.curriculum.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between bg-gray-800 p-6 rounded-lg">
              <div>
                <p className="text-gray-400">Price</p>
                <p className="text-2xl font-bold">{course.price}</p>
              </div>
              <button 
                className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                onClick={() => {
                  // Handle enrollment logic here
                  alert('Thank you for enrolling! We\'ll contact you with further details.');
                }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;