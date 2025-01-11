import React from 'react';
import { Users, Target, Award, Brain, BookOpen, Code, Laptop, Route, Sparkles, Bot } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Your Personal Learning Journey
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Experience education reimagined with AI-powered personalized learning paths tailored to your unique needs.
          </p>
        </div>

        {/* AI Learning Routes Showcase */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 bg-black border border-yellow-500/20 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-yellow-500/10 p-3 rounded-lg">
                  <Route className="h-6 w-6 text-yellow-400" />
                </div>
                <h2 className="text-2xl font-semibold text-yellow-400">Personalized Learning Routes</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-yellow-400 mt-1" />
                  <p className="text-yellow-100/70">AI analyzes your learning style, pace, and goals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-5 w-5 text-yellow-400 mt-1" />
                  <p className="text-yellow-100/70">Dynamic content adaptation based on performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Bot className="h-5 w-5 text-yellow-400 mt-1" />
                  <p className="text-yellow-100/70">24/7 AI tutoring support tailored to your needs</p>
                </div>
              </div>
            </div>
            <div className="bg-black border border-yellow-500/20 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Learning Analytics</h3>
              <div className="space-y-4">
                <div className="bg-yellow-500/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">95%</div>
                  <div className="text-yellow-100/70 text-sm">Completion Rate</div>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">2x</div>
                  <div className="text-yellow-100/70 text-sm">Learning Speed</div>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">98%</div>
                  <div className="text-yellow-100/70 text-sm">Student Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-black border border-yellow-500/20 p-6 rounded-xl">
            <div className="bg-yellow-500/10 p-3 rounded-lg w-fit mb-4">
              <Brain className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Smart Learning Paths</h3>
            <p className="text-yellow-100/70">
              AI-driven personalized learning routes that adapt to your progress and learning style.
            </p>
          </div>
          <div className="bg-black border border-yellow-500/20 p-6 rounded-xl">
            <div className="bg-yellow-500/10 p-3 rounded-lg w-fit mb-4">
              <Bot className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">AI Tutoring</h3>
            <p className="text-yellow-100/70">
              Get instant help from AI tutors that understand your unique learning needs and challenges.
            </p>
          </div>
          <div className="bg-black border border-yellow-500/20 p-6 rounded-xl">
            <div className="bg-yellow-500/10 p-3 rounded-lg w-fit mb-4">
              <Sparkles className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Adaptive Content</h3>
            <p className="text-yellow-100/70">
              Content that evolves with you, ensuring optimal challenge levels and engagement.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-black border border-yellow-500/20 p-8 rounded-2xl">
            <div className="bg-yellow-500/10 p-3 rounded-lg w-fit mb-6">
              <Target className="h-6 w-6 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Our Vision</h2>
            <p className="text-yellow-100/70">
              To revolutionize education through AI-powered personalized learning, where every student receives 
              a tailored educational experience that adapts to their unique learning style, pace, and goals.
            </p>
          </div>
          <div className="bg-black border border-yellow-500/20 p-8 rounded-2xl">
            <div className="bg-yellow-500/10 p-3 rounded-lg w-fit mb-6">
              <Award className="h-6 w-6 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Our Mission</h2>
            <p className="text-yellow-100/70">
              To leverage advanced AI technology to create dynamic learning paths that evolve with each student,
              ensuring maximum engagement and optimal learning outcomes.
            </p>
          </div>
        </div>

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
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200&h=200'
            ].map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt="Team member"
                  className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105 border-2 border-yellow-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;