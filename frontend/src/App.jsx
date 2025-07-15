import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/Navbar'
import IntroPage from './components/IntroPage'
import Home from './components/Home'
import Companies from './components/Companies'
import Reviews from './components/Reviews'
// import AboutUs from './components/AboutUs'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Internships from './pages/Internships';
import './App.css'
import Courses from './pages/Courses';
import Subscription from './pages/Subscription';
import { UserProvider } from './context/UserContext';
import RecruiterDashboard from './pages/RecruiterDashboard';
import RecruiterNavbar from './components/recruiter/RecruiterNavbar';
import PostInternship from './pages/recruiter/PostInternship';
import PostedInternships from './pages/recruiter/PostedInternships';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          {/* Show recruiter navbar for recruiter routes, else show main navbar */}
          <Routes>
            <Route path="/recruiter-dashboard" element={<><RecruiterNavbar /><RecruiterDashboard /></>} />
            <Route path="/recruiter/post-internship" element={<><RecruiterNavbar /><PostInternship /></>} />
            <Route path="/recruiter/posted-internships" element={<><RecruiterNavbar /><PostedInternships /></>} />
            <Route path="*" element={<><Navbar /><MainRoutes /></>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  )
}

// Extract main routes for student/general
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Home />
          <IntroPage />
          <Companies />
          <Reviews />
          {/* <AboutUs /> */}
          <CTA />
        </>
      } />
      <Route path="/internships" element={<Internships />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
  );
}

export default App
