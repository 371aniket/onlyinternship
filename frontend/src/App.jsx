import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import Layout from './components/Layout';
import RecruiterLayout from './components/recruiter/RecruiterLayout';

import IntroPage from './components/IntroPage';
import Home from './components/Home';
import Companies from './components/Companies';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Internships from './pages/Internships';
import Courses from './pages/Courses';
import Subscription from './pages/Subscription';

import RecruiterDashboard from "./pages/RecruiterDashboard";
import PostInternship from "./pages/recruiter/PostInternship";
import PostedInternships from "./pages/recruiter/PostedInternships";

import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Routes>
            {/* Recruiter Routes */}
            <Route path="/recruiter-dashboard" element={
              <RecruiterLayout>
                <RecruiterDashboard />
              </RecruiterLayout>
            } />
            <Route path="/recruiter/post-internship" element={
              <RecruiterLayout>
                <PostInternship />
              </RecruiterLayout>
            } />
            <Route path="/recruiter/posted-internships" element={
              <RecruiterLayout>
                <PostedInternships />
              </RecruiterLayout>
            } />

            {/* General Routes */}
            <Route path="/" element={
              <Layout>
                <Home />
                <IntroPage />
                <Companies />
                <Reviews />
                <CTA />
              </Layout>
            } />
            <Route path="/internships" element={<Layout><Internships /></Layout>} />
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route path="/signup" element={<Layout><Signup /></Layout>} />
            <Route path="/courses" element={<Layout><Courses /></Layout>} />
            <Route path="/subscription" element={<Layout><Subscription /></Layout>} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
