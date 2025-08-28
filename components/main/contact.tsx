"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineMail, HiOutlineExclamation } from "react-icons/hi";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  
  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email.toLowerCase());
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      setSubmitError("");
      
      // Create FormData object
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      if (formData.phone) {
        formDataObj.append('phone', formData.phone);
      }
      formDataObj.append('message', formData.message);
      
      // Send form to formsubmit.co - replace with your own email
      const response = await fetch('https://formsubmit.co/itsmeamitsingh17@gmail.com', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        },
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      // Show success message
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSubmitted(false);
        setSubmitAttempted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to send your message. Please try again or contact directly at itsmeamitsingh17@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      {/* Background Video (z-index: -10) */}
      <div className="w-full h-full absolute pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Section Heading */}
      <div className="flex flex-col items-center justify-center w-full mb-10 z-10">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <h1 className="Welcome-text text-[13px]">GET IN TOUCH</h1>
        </motion.div>
        
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center"
        >
          Contact Me
        </motion.div>
        
        <motion.div
          variants={slideInFromRight(0.5)}
          className="text-[20px] text-gray-200 mb-10 mt-[10px] text-center max-w-[600px]"
        >
          I&apos;m always open to new opportunities and collaborations.
          Let&apos;s connect and create something amazing together!
        </motion.div>
      </div>

      {/* Contact Options (z-index: 10) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[1200px] px-4 relative z-10">
        {/* Email Contact Form */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="bg-[#0300145e] p-8 rounded-xl border border-[#7042f81c] backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#7042f8] p-3 rounded-full">
              <HiOutlineMail className="text-white text-xl" />
            </div>
            <h3 className="text-2xl text-white font-semibold">Send an Email</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* FormSubmit spam protection - this hidden honeypot field prevents spam */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />
            
            {/* Customize subject */}
            <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
            
            {/* Redirect after submission (optional) - uncomment if needed */}
            {/* <input type="hidden" name="_next" value="https://your-website.com/thanks" /> */}
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="text-gray-300 text-sm block mb-1">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-[#121212] border ${errors.name ? 'border-red-500' : 'border-[#7042f84d]'} rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#7042f8]`}
                placeholder="Your Name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                style={{ zIndex: 20 }}
              />
              {errors.name && submitAttempted && (
                <p id="name-error" className="mt-1 text-red-500 text-xs flex items-center">
                  <HiOutlineExclamation className="mr-1" />
                  {errors.name}
                </p>
              )}
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="text-gray-300 text-sm block mb-1">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[#121212] border ${errors.email ? 'border-red-500' : 'border-[#7042f84d]'} rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#7042f8]`}
                placeholder="john.doe@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && submitAttempted && (
                <p id="email-error" className="mt-1 text-red-500 text-xs flex items-center">
                  <HiOutlineExclamation className="mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
            
            {/* Phone Field (Optional) */}
            <div>
              <label htmlFor="phone" className="text-gray-300 text-sm block mb-1">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-[#7042f84d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#7042f8]"
                placeholder="+1 (123) 456-7890"
              />
            </div>
            
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="text-gray-300 text-sm block mb-1">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-[#121212] border ${errors.message ? 'border-red-500' : 'border-[#7042f84d]'} rounded-md p-3 text-white min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#7042f8]`}
                placeholder="Hello, I&apos;d like to discuss a project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && submitAttempted && (
                <p id="message-error" className="mt-1 text-red-500 text-xs flex items-center">
                  <HiOutlineExclamation className="mr-1" />
                  {errors.message}
                </p>
              )}
            </div>
            
            <p className="text-xs text-gray-400 mt-2">
              This will open your email client with a pre-filled message
            </p>
            
            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`relative button-primary py-3 px-6 rounded-md text-white font-medium mt-4 hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-2 ${submitted ? 'bg-green-600 hover:bg-green-700' : ''} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : submitted ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <HiOutlineMail className="text-xl" />
                  <span>Send Message</span>
                </>
              )}
            </button>
            
            {/* Success Message */}
            {submitted && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-500/50 rounded-md">
                <p className="text-green-300 text-sm">
                  Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                </p>
              </div>
            )}
            
            {/* Error Message */}
            {submitError && (
              <div className="mt-4 p-3 bg-red-900/30 border border-red-500/50 rounded-md">
                <p className="text-red-300 text-sm">
                  {submitError}
                </p>
              </div>
            )}
          </form>
        </motion.div>
        
        {/* LinkedIn Connection */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="bg-[#0300145e] p-8 rounded-xl border border-[#7042f81c] backdrop-blur-sm flex flex-col"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#7042f8] p-3 rounded-full">
              <RxLinkedinLogo className="text-white text-xl" />
            </div>
            <h3 className="text-2xl text-white font-semibold">Connect on LinkedIn</h3>
          </div>
          
          <div className="flex-grow flex flex-col justify-between">
            <p className="text-gray-300 mb-6">
              Let&apos;s connect professionally! Follow me on LinkedIn for updates on my latest projects, 
              career milestones, and technology insights. Feel free to send a connection request.
            </p>
            
            <div className="bg-gradient-to-r from-[#7042f88b] to-[#3b82f6] p-[1px] rounded-xl">
              <div className="bg-[#0300145e] p-8 rounded-xl flex flex-col items-center justify-center text-center">
                <RxLinkedinLogo className="text-6xl text-[#3b82f6] mb-4" />
                <h4 className="text-xl text-white font-medium mb-2">Amit Singh</h4>
                <p className="text-gray-300 mb-6">FullStack Developer</p>
                
                {/* LinkedIn Button with proper styling and behaviors */}
                <a 
                  href="https://www.linkedin.com/in/amit-singh-7246002b7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-20 button-primary py-3 px-6 rounded-md text-white font-medium hover:bg-[#0077b5] bg-[#0077b5]/80 transition-all w-full flex items-center justify-center gap-2 group"
                  onClick={() => {
                    // Could add analytics tracking here
                    console.log("LinkedIn profile visited");
                  }}
                >
                  <RxLinkedinLogo className="text-xl group-hover:scale-110 transition-transform" />
                  <span>Visit Profile</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
