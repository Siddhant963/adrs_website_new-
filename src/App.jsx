import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import OurTeam from './pages/OurTeam'
import OurMission from './pages/OurMission'
import Product  from './pages/Product'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CareerD from './components/Career';
import PrivacyPolicy from './policy/PrivacyPolicy'
import TermsOfService from './policy/TermsOfService'
import CookiesPolicy from './policy/CookiesPolicy'
import Workshop from './pages/Workshop'
import ScrollToTop from './components/ScrollToTop';


// 🔥 Spark Pages
import SparkLayout from './spark/SparkLayout';
import SparkHome from './spark/pages/SparkHome';
import AllCoursesPage from './spark/pages/AllCoursesPage';
import CoursePage from './spark/pages/CoursePage';
import Blog from './spark/pages/Blog';
import WhyAdrsSpark from './spark/pages/WhyAdrsSpark';
import Registration from './spark/components/Registration';
import NotFound from './spark/pages/NotFound';


const App = () => {
  return (

    <>
    <ScrollToTop></ScrollToTop>
    <Routes>
      {/* Main Website Routes */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
      <Route path="/our-team" element={<><Navbar /><OurTeam /><Footer /></>} />
      <Route path="/our-mission" element={<><Navbar /><OurMission /><Footer /></>} />
      <Route path="/product" element={<><Navbar /><Product /><Footer /></>} />
      <Route path="/gallery" element={<><Navbar /><Gallery /><Footer /></>} />
      <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
      <Route path="/career" element={<><Navbar /><CareerD /><Footer /></>} />
      <Route path="/privacy-policy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
      <Route path="/terms" element={<><Navbar /><TermsOfService /><Footer /></>} />
      <Route path="/cookies-policy" element={<><Navbar /><CookiesPolicy /><Footer /></>} />
       <Route path="/workshop" element={<><Navbar /><Workshop /><Footer /></>} />


      {/* 🔥 ADRS Spark Routes */}
      <Route path="/spark" element={<SparkLayout />}>
        <Route index element={<SparkHome />} />
        <Route path="/spark/allcourses" element={<AllCoursesPage />} />
        <Route path="/spark/courses/:id" element={<CoursePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="why-adrs-spark" element={<WhyAdrsSpark />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

</>
 
 );
};

export default App