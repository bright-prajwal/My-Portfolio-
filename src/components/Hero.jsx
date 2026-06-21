import { useEffect, useRef } from "react";
import { FiDownload, FiMail, FiBriefcase } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animations without GSAP
    const elements = [
      logoRef.current,
      greetingRef.current,
      nameRef.current,
      roleRef.current,
      descRef.current,
    ].filter(Boolean);

    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
          el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 100);
      }
    });

    // Buttons animation
    if (buttonsRef.current) {
      Array.from(buttonsRef.current.children).forEach((btn, index) => {
        btn.style.opacity = "0";
        btn.style.transform = "scale(0.8)";
        setTimeout(
          () => {
            btn.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            btn.style.opacity = "1";
            btn.style.transform = "scale(1)";
          },
          1000 + index * 100,
        );
      });
    }

    // Social icons animation
    if (socialRef.current) {
      Array.from(socialRef.current.children).forEach((icon, index) => {
        icon.style.opacity = "0";
        setTimeout(
          () => {
            icon.style.transition = "opacity 0.5s ease";
            icon.style.opacity = "1";
          },
          1200 + index * 100,
        );
      });
    }

    // Illustration animation
    if (illustrationRef.current) {
      illustrationRef.current.style.opacity = "0";
      illustrationRef.current.style.transform = "scale(0.5)";
      setTimeout(() => {
        illustrationRef.current.style.transition =
          "opacity 1s ease, transform 1s ease";
        illustrationRef.current.style.opacity = "1";
        illustrationRef.current.style.transform = "scale(1)";
      }, 500);
    }

    // Scroll indicator animation
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
      setInterval(() => {
        scrollIndicator.style.transform = "translateY(10px)";
        setTimeout(() => {
          scrollIndicator.style.transform = "translateY(0)";
        }, 1500);
      }, 3000);
    }
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center section-container pt-20 sm:pt-24 md:pt-32 lg:pt-40 relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Logo/Initials */}
            <div
              ref={logoRef}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8"
            >
              PH
            </div>

            {/* Greeting */}
            <div ref={greetingRef}>
              <p className="text-purple-600 dark:text-purple-400 text-base sm:text-lg md:text-xl mb-2">
                Hello, I'm
              </p>
            </div>

            {/* Name */}
            <div ref={nameRef}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-gray-900 dark:text-white">Prajwal</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 dark:from-purple-400 dark:via-pink-500 dark:to-purple-600 bg-clip-text text-transparent">
                  Hon
                </span>
              </h1>
            </div>

            {/* Role */}
            <div ref={roleRef}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                Full Stack Developer
              </h2>{" "}
              {/* 
            Full Stack Developer | .NET Developer | Java Developer | Python Developer
            */}
            </div>

            {/* Description */}
            <div ref={descRef}>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I create elegant solutions to complex problems through clean,
                efficient, and maintainable code. Specializing in full-stack
                development with expertise in modern technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4"
            >
              <button
                onClick={scrollToProjects}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-purple-500/50 flex items-center gap-2 text-sm sm:text-base"
              >
                <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                View Portfolio
              </button>
              <button
                onClick={scrollToContact}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
              >
                <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div
              ref={socialRef}
              className="flex justify-center lg:justify-start gap-3 sm:gap-4 pt-4"
            >
              {[
                { icon: FaGithub, href: "https://github.com/bright-prajwal" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/prajwalhon",
                },
                // { icon: FaTwitter, href: 'https://twitter.com' },
                // { icon: FaInstagram, href: 'https://instagram.com' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 dark:bg-dark-800/60 border border-gray-300 dark:border-purple-500/30 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-600 dark:hover:border-purple-400 transition-all hover:scale-110"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Illustration Area */}
          <div className="hidden lg:flex items-center justify-center relative mt-8 lg:mt-0">
            <div ref={illustrationRef} className="relative w-full max-w-md">
              {/* Gradient Circle Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 opacity-30 blur-3xl animate-pulse" />

              {/* Placeholder for illustration */}
              <div className="relative z-10 flex items-center justify-center">
                {/* <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-4 border-purple-500/30 flex items-center justify-center backdrop-blur-sm"> */}
                {/* <div className="text-8xl"> */}
                <img
                  className="w-100 h-104 md:w-80 md:h-90 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-4 border-purple-500/30 flex items-center justify-center backdrop-blur-sm"
                  src="my img.jpg"
                  alt="boy in a jacket"
                />
                {/* </div> */}
                {/* <img src={heroImage} alt="Hero" className="w-full h-full object-cover" /> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center scroll-indicator">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
            Scroll Down
          </p>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
