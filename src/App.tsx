import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Basics from "./components/Basics";
import Benefits from "./components/Benefits";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FAQs from "./components/FAQs";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle theme function simplified
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Effect for handling the theme change
  useEffect(() => {
    // Apply the dark class to the html element based on theme state
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]); // Dependencies array has `theme`, so this runs every time `theme` changes

  const handleScroll = () => {
    const position = window.scrollY;
    setShowScrollTop(position > 28);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        "App flex min-h-screen flex-col bg-dappnodeBgLightLayout dark:bg-dappnodeBgDarkLayout"
      }
    >
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main className="flex flex-1 flex-col gap-24 lg:gap-36 xl:gap-52">
        <Hero />
        <Basics />
        <GetStarted />
        <Benefits />
        <FAQs />
        <About />
      </main>
      <Footer />
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-10 cursor-pointer rounded-full bg-purple-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-purple-700 "
        >
          <FiArrowUp className="text-4xl" />
        </button>
      )}
    </div>
  );
};

export default App;
