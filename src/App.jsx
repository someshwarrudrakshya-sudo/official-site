// src/App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Scroll2Top from "./components/Scroll2Top";
import PageScroll from "./components/PageScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// pages
import Home from "./pages/Homepage";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import NewsEvents from "./pages/NewsEvents";
import Career from "./pages/Career";

// Schemes
import EasyWithdrawals from "./pages/schemes/Withdrawals";
import FastProcessing from "./pages/schemes/Processing";

// Tools pages
import NepalWidget from "./components/NepalWidgets";
import EmiCalculator from "./components/EmiCalculator";

// About subpages
import MessageFrom from "./pages/about/MessageFrom";
import Mission from "./pages/about/Mission";
import Team from "./pages/about/Team";

// Services subpages
import Saving from "./pages/services/Saving";
import Loan from "./pages/services/Loan";
import Required from "./pages/services/Required";

// Footer-only pages (Membership)
import Benefits from "./membership/Benefits";
import Join from "./membership/Join";
import Resources from "./membership/Resources";
import Training from "./membership/Training";
import SuccessStories from "./membership/SuccessStories";

export default function App() {
  return (
    <main>
      {/* Common Layout Components */}
      <Header />
      <Navbar />
      <Scroll2Top />
      <PageScroll />
      <Sidebar />

      {/* All Page Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About Section */}
        <Route path="/about" element={<About />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/messagefrom" element={<MessageFrom />} />

        {/* Services Section */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/saving" element={<Saving />} />
        <Route path="/services/loan" element={<Loan />} />
        <Route path="/services/required" element={<Required />} />

        {/* Schemes Paths */}
        <Route path="/schemes/withdrawals" element={<EasyWithdrawals />} />
        <Route path="/schemes/fast-processing" element={<FastProcessing />} />

        {/* Other Pages */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/career" element={<Career />} />

        {/* Tools */}
        <Route path="/nepalwidgets" element={<NepalWidget />} />
        <Route path="/emicalculator" element={<EmiCalculator />} />

        {/* Membership Section */}
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/join" element={<Join />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/training" element={<Training />} />
        <Route path="/success-stories" element={<SuccessStories />} />
      </Routes>

      {/* Divider + Footer */}
      <div className="section-divider"></div>
      <Footer />
    </main>
  );
}
