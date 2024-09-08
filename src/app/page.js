"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';
import styles from "./page.module.css";
import company_logo from "./assets/company_logo.png";
import './CSS/home.css'
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import React, { useState, useEffect } from "react";
import Clients from "./static/Clients";
import { HardHat, Truck, Building, CheckCircle, Award, MapPin, Phone, Mail, AwardIcon, MapIcon, PhoneIcon, MailIcon, ShieldCheck, KeyRound, Leaf } from 'lucide-react';
import BlurFade from "@/components/magicui/blur-fade";
import TypingAnimation from "@/components/magicui/typing-animation";
import NumberTicker from "@/components/magicui/number-ticker";
import Marquee from "@/components/magicui/marquee";
import MarqueeCard from "./Components/Marquee";
import WorkingAreas from "./static/WorkingAreas";
import SlideCard from "./Components/SlideCard";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";

const Maps = dynamic(() => import('./map'), {
  ssr: false
});

export default function Home() {
  const [map, setMap] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Building the Future, One Project at a Time",
      description: "LTPS INFRA PVT. LTD. - Your trusted partner in infrastructure development",
      buttonText: "Get Started",
      image: img1,
      page: "Services",
    },
    {
      title: "Expert Infrastructure Solutions",
      description: "Delivering quality projects for over 15 years",
      buttonText: "Learn More",
      image: img2,
      page: "Projects",
    },
    {
      title: "Innovative Engineering Services",
      description: "Committed to safety, quality, and sustainability",
      buttonText: "Contact Us",
      image: img3,
      page: "Contact",
    },
  ];

  // Function to move to the next or previous slide
  const moveSlide = (direction) => {
    const newSlide = (currentSlide + direction + slides.length) % slides.length;
    setCurrentSlide(newSlide);
  };

  // Effect to auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]);

  return (
    <div className="container">

   <Navbar  />

    <div className="hero">
        <div className="carousel-container">
        {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? "active" : ""}`}
            >
              <div className="hero-content">
                <TypingAnimation
                  className="text-4xl font-bold text-black dark:text-white"
                  text={slide.title}
                />
                <p>{slide.description}</p>
                <a href={slide.page} className="hero-button">{slide.buttonText}</a>
                {/* Add the image with lower opacity */}
                <Image src={slide.image} alt={slide.title} className="carousel-image" />
              </div>
            </div>
          ))}
          {/* <div className="carousel-buttons">
            <button className="prev-btn" onClick={() => moveSlide(-1)}>
              &#10094;
            </button>
            <button className="next-btn" onClick={() => moveSlide(1)}>
              &#10095;
            </button>
          </div> */}
        </div>
      </div>


<BlurFade delay={0.25} inView>
<div className="info">
        <div className="info-container">
            
            <p>Over 15 years of experience, we specialize in providing high-quality construction solutions for residential, commercial, and industrial projects. Our team of skilled professionals is committed to delivering excellence, safety, and innovation in every project we undertake. LTPS INFRA PVT. LTD. We believe in building not only structures but also long-lasting relationships with our clients. Trust us to turn your dreams into reality and make your construction journey seamless and rewarding. 
                <br></br>
                <br></br>
                Contact us today to discuss your upcoming project, and let's build a future together!</p>
            <div className="info-btn">
            <Button text={"Start Now!"}></Button>

            </div>
            </div>
    </div>
</BlurFade>
    

<BlurFade delay={0.25} inView>
    <div className="services">
        <div className="services-container">
            <h2>Our Services</h2>
            <div className="service-cards">
                <div className="service-card">
                    <div className="icon">
                      <HardHat />
                    </div>
                    <h3>Earth Works</h3>
                    <p>Earth-filling, excavation, and hill cutting</p>
                </div>
                <div className="service-card">
                    <div className="icon">
                      <Truck />
                    </div>
                    <h3>Transportation</h3>
                    <p>Heavy duty transportation of soil, murum, and sand</p>
                </div>
                <div className="service-card">
                    <div className="icon">
                      <Building/>
                    </div>
                    <h3>Infrastructure</h3>
                    <p>Roads, highways, dams, and canals</p>
                </div>
            </div>
        </div>
    </div>
</BlurFade>

<BlurFade delay={0.25} inView>
    <div className="projects">
        <div className="projects-container">
            <h2>Featured Projects</h2>
            <div className="project-cards">
                <div className="project-card">
                    <h3>Lake Beautification</h3>
                    <p>Development and beautification of Lendale Lake</p>
                </div>
                <div className="project-card">
                    <h3>Road Construction</h3>
                    <p>Construction of concrete roads in Panvel Municipal Corporation</p>
                </div>
                <div className="project-card">
                    <h3>Railway Station Maintenance</h3>
                    <p>Cleaning and sanitation services for multiple railway stations</p>
                </div>
            </div>
        </div>
    </div>
</BlurFade>

<BlurFade delay={0.25} inView>
    <div className="testimonials">
        <div className="testimonials-container">
            <h2>Our Customers</h2>
            <MarqueeCard/>
            
        </div>
    </div>
</BlurFade>

<BlurFade delay={0.25} inView>
    <div className="testimonials">
        <div className="testimonials-container">
            <h2>Our Working Areas</h2>
            <SlideCard works={WorkingAreas} />
            
        </div>
    </div>
</BlurFade>

<BlurFade delay={0.25} inView>
    <div className="about-us">
        <div className="about-us-container">
            <h2>Why Choose Us</h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <div className="icon"><CheckCircle/></div>
                    <h3>Quality Assurance</h3>
                    <p>Committed to delivering projects on time, within budget, and exceeding client expectations</p>
                </div>
                <div className="feature-card">
                    <div className="icon"><AwardIcon/></div>
                    <h3><NumberTicker value={15}></NumberTicker>+ Years Experience</h3>
                    <p>Over a decade of expertise in infrastructure development</p>
                </div>
            </div>

<br></br>
            <div className="feature-cards">
                <div className="feature-card">
                    <div className="icon"><KeyRound/></div>
                    <h3>Safety</h3>
                    <p>We prioritize the safety of our employees, subcontractors, and the
                    public on every project. </p>
                </div>
                <div className="feature-card">
                    <div className="icon"><Leaf/></div>
                    <h3>Sustainability</h3>
                    <p>We are committed to incorporating sustainable practices and
                    materials into our projects whenever possible </p>
                </div>
            </div>

           
        </div>
    </div>
</BlurFade>
  
<BlurFade delay={0.25} inView>
    <div className="contact">
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-sub-container">
            <div className="map">
               <Maps/>
            </div>
            <div className="contact-info">
                <div className="sub-contact-info">
                    <div className="icon"><MapIcon/></div>
                    <p>
                        113, A-Wing, Sai Arcade, Opp. Panvel ST Stand, Panvel, Dist. Raigad
                    </p>
                  
                    
                </div>
                <div className="sub-contact-info">
                    <div className="icon"><PhoneIcon/></div>
                    <p>9323823009 / 9537577777</p>
                </div>
                <div className="sub-contact-info">
                    <div className="icon"><MailIcon/></div>
                    <p>ltpsinfra@gmail.com</p>
                </div>
            </div>
            </div>
            
        </div>
    </div>
</BlurFade>

    <footer className="footer">
        <div className="footer-container">
            <p>&copy; 2024 LTPS INFRA PVT. LTD. All rights reserved.</p>
        </div>
    </footer>
</div>
  );
}
