import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: "Email",
      value: "honprajwal9@example.com",
      link: "mailto:honprajwal9@example.com",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9075332236",
      link: "tel:+919075332236",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: "Location",
      value: "Pune, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/bright-prajwal",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/prajwalhon",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-container relative z-10"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="mb-12">
          <h2 className="gradient-heading">
            <span>Get In</span> <span>Touch</span>
          </h2>
          <div className="gradient-underline w-32 mx-auto"></div>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
      </motion.div>

      {/* Centered Content */}
      <div className="max-w-4xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-lg space-y-10 text-center"
        >
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center text-center gap-2 p-5 bg-gray-100 dark:bg-dark-800/60 border border-gray-300 dark:border-purple-500/20 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-purple-600 dark:text-purple-400">
                    {info.icon}
                  </div>

                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {info.label}
                  </div>

                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-gray-700 dark:text-gray-300">
                      {info.value}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
              Follow Me
            </h3>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-dark-800/60 border border-gray-300 dark:border-purple-500/30 rounded-lg text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-600 dark:hover:border-purple-400 transition-all text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;