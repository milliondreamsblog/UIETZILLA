import Brew from './components/Brew'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowWork from './components/HowWork'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetails from '../pages/CourseDetails';
import React from 'react';
import Banner from './components/Banner';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div>
            <Banner />
            <Hero />
            <Brew />
            <HowWork />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;