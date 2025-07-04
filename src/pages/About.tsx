import React, { useEffect, useRef } from "react";
import { CheckCircle, Target, Compass, Flag, User, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const heroRef = useRef(null);
  const visionMissionRef = useRef(null);
  const strategicGoalsRef = useRef(null);
  const storyRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    document.title = "About Us | VORTEXX";

    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, delay: 1.2, ease: "power3.out" }
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: -0.8 }
      );

    // Vision, Mission, Goals cards
    gsap.fromTo(
      ".vision-mission-card",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: visionMissionRef.current,
          start: "top 80%",
        },
      }
    );

    // Strategic Goals
    gsap.fromTo(
      ".strategic-goal-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: strategicGoalsRef.current,
          start: "top 75%",
        },
      }
    );

    // Story section
    gsap.fromTo(
      ".story-content",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".story-image",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
        },
      }
    );

    // Timeline items
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 60%",
        },
      }
    );

    // Values cards
    gsap.fromTo(
      ".value-card",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 70%",
        },
      }
    );

    // Team cards with futuristic animations
    gsap.fromTo(
      ".team-card",
      { 
        opacity: 0, 
        y: 60, 
        scale: 0.8,
        rotationY: -15,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      }
    );

    // Team icon animations
    gsap.fromTo(
      ".team-icon",
      { 
        opacity: 0, 
        scale: 0.5,
        rotation: -180
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      }
    );



    // CTA section
    gsap.fromTo(
      ".cta-content",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "top 40%",
        },
      }
    );

    gsap.fromTo(
      ".cta-image",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "top 40%",
        },
      }
    );

    // Section headers animation
    gsap.fromTo(
      ".section-header",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-header",
          start: "top 85%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const teamMembers = [
    {
      name: "Kamugisha Ali",
      position: "CEO & Founder",
      bio: "Kamugisha is a visionary leader with a passion for technology and innovation. He is the founder of VORTEXX and has been instrumental in the company's growth and success.",
      icon: User,
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Asiima Crisen",
      position: "CTO",
      bio: "Asiima is the technical mastermind behind VORTEXX, overseeing all development projects and ensuring the highest standards of quality and innovation.",
      icon: User,
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Kategere Ian Victor",
      position: "COO",
      bio: "Kategere is responsible for the day-to-day operations of VORTEXX, ensuring that projects run smoothly and efficiently while maintaining high client satisfaction.",
      icon: User,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Nassuuna Gloria Christine",
      position: "CFO",
      bio: "Gloria manages the financial health of VORTEXX, overseeing budgeting, forecasting, and financial planning to ensure sustainable growth.",
      icon: User,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Mungufeni Marvin",
      position: "Mobiliser & Infrastructure Manager",
      bio: "Marvin is the backbone of our infrastructure, ensuring that our systems are robust, secure, and scalable to meet the demands of our clients.",
      icon: User,
      color: "from-indigo-500 to-blue-600",
    },
    {
      name: "Tukamuhembwa Newton",
      position: "Secretary & Developer",
      bio: "Newton is a versatile developer who plays a key role in both our software development and administrative functions, ensuring seamless communication and project execution.",
      icon: User,
      color: "from-emerald-500 to-green-600",
    },
    {
      name: "Sekimpi Ibrahim",
      position: "Marketer & Developer",
      bio: "Ibrahim combines his skills in marketing and development to create effective digital strategies that enhance our clients' online presence.",
      icon: User,
      color: "from-rose-500 to-pink-600",
    },
    {
      name: "Nakibinge Collins",
      position: "Developer",
      bio: "Collins is a talented developer specializing in front-end technologies, creating beautiful and user-friendly interfaces.",
      icon: User,
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const milestones = [
    {
      year: "November, 2024",
      title: "Foundation",
      description:
        "VORTEXX was founded with a focus on web development services. The team consisted of ten passionate tech students led by Kamugisha Ali.",
    },
    {
      year: "January, 2025",
      title: "Expansion",
      description:
        "Expanded services to include systems development and design. This allowed VORTEXX to offer comprehensive solutions to clients.",
    },
    {
      year: "March, 2025",
      title: "Growth",
      description:
        "Diversified into digital marketing and infrastructure management and taking on new clients across various sectors.",
    },
    {
      year: "June, 2025",
      title: "Innovation",
      description:
        "Launched dedicated AI and machine learning division. This division focuses on developing AI agents and automation solutions for clients.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
      title: "Excellence",
      description:
        "We are committed to the highest standards of quality in everything we do.",
    },
    {
      title: "Client Focus",
      description:
        "We build partnerships with our clients, focusing on their unique needs and goals.",
    },
    {
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical business practices.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both internally and with our clients.",
    },
    {
      title: "Adaptability",
      description:
        "We embrace change and continuously evolve our approaches to stay ahead.",
    },
  ];

  const strategicGoals = [
    {
      title: "Global Expansion",
      description:
        "Establish VORTEXX presence in key markets across Uganda by 2026.",
    },
    {
      title: "Innovation Leadership",
      description:
        "Maintain position at the forefront of technological innovation through continuous Research and development investment.",
    },
    {
      title: "Sustainable Growth",
      description:
        "Achieve 30% year-over-year growth while maintaining high client satisfaction rates.",
    },
    {
      title: "Talent Development",
      description:
        "Build and nurture a world-class team through comprehensive training and development programs.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section
        ref={heroRef}
        className="bg-primary-900 py-20 text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)), url(https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center h-[60vh]">
            <h1 className="hero-title mb-6 text-6xl font-bold text-white pt-[120px]">
              About VORTEXX
            </h1>
            <p className="hero-subtitle mb-8 text-xl text-gray-300">
              We're a team of passionate technologists dedicated to transforming
              businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goals section */}
      <section ref={visionMissionRef} className="section bg-gray-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Vision */}
            <div className="vision-mission-card card p-8">
              <div className="mb-6 flex h-18 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading creative technology company that empowers
                businesses and communities through smart web solutions,
                innovative mobile applications, impactful graphics designs and
                efficient information management systems.
              </p>
            </div>

            {/* Mission */}
            <div className="vision-mission-card card p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Compass className="h-8 w-8" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="text-gray-600">
                To innovatively deliver AI powered user focused systems that
                drive success and inclusivity.
              </p>
            </div>

            {/* Goals */}
            <div className="vision-mission-card card p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Flag className="h-8 w-8" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Goals</h2>
              <p className="text-gray-600">
                To provide top notch quality services, to deliver high quality
                projects and to achieve clients' satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals section */}
      <section ref={strategicGoalsRef} className="section">
        <div className="container">
          <div className="section-header mb-12 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              Strategic Goals
            </span>
            <h2 className="mb-4 text-4xl font-bold">We Build for the Future</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our strategic objectives guide our growth and development as we
              work to create lasting impact in the technology industry.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {strategicGoals.map((goal, index) => (
              <div
                key={index}
                className="strategic-goal-card card p-6 hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-bold">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story section */}
      <section ref={storyRef} className="section">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="story-content">
              <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                Our Story
              </span>
              <h2 className="mb-6 text-4xl font-bold">
                From Startup to Industry Leader
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Founded in 2024, VORTEXX began as a small web development agency
                with a team of just ten passionate tech students. Our founder,
                Kamugisha Ali, envisioned a company that would not just build
                websites, but create transformative digital experiences that
                drive business growth and commitment.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                As we gained the trust of our early clients, we expanded our
                services to include systems development, graphic design, digital
                marketing, and infrastructure management. Today, VORTEXX has
                grown into a comprehensive technology solutions provider.
              </p>
              <p className="text-lg text-gray-600">
                Our journey has been defined by a relentless commitment to
                innovation, excellence, and our clients' success. We continue to
                evolve and adapt to the changing technological landscape while
                staying true to our core mission: empowering businesses to
                thrive in the digital age.
              </p>
            </div>

            <div className="story-image relative">
              <img
                src="img/About.jpg"
                alt="VORTEX Team"
                className="h-full w-full rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="mt-20">
            <div className="section-header mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Journey</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                A timeline of key milestones in our growth and evolution
              </p>
            </div>

            <div className="relative">
              {/* Timeline line - hidden on small devices */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary-100"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`
                      relative flex flex-col md:flex-row 
                      ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                    `}
                  >
                    {/* Empty spacer - only on md and up */}
                    <div className="hidden md:block mx-auto w-1/2 px-10"></div>

                    {/* Center Dot */}
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg">
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div
                      className={`
                      mx-auto w-full md:w-1/2 px-4 md:px-10
                      ${index % 2 === 0 ? "md:text-right" : "md:text-left"}
                    `}
                    >
                      <div className="card p-6 bg-white shadow-md rounded-lg">
                        <div className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                          {milestone.year}
                        </div>
                        <h3 className="mb-2 text-xl font-bold">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our values section */}
      <section ref={valuesRef} id="values" className="section bg-gray-50">
        <div className="container">
          <div className="section-header mb-12 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              Our Values
            </span>
            <h2 className="mb-4 text-4xl font-bold">What Drives Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our core values guide everything we do, from how we develop
              solutions to how we interact with our clients and each other.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="value-card card p-6 hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section ref={teamRef} id="team" className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="section-header mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Our Team
            </span>
            <h2 className="mb-6 text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
              The talented individuals driving our vision and leading our
              company forward with innovation and excellence.
            </p>
          </div>
          
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-10 blur-3xl"></div>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={40}
              slidesPerView={2}
              slidesPerGroup={2}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                640: { slidesPerView: 2, slidesPerGroup: 2 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 2, slidesPerGroup: 2 },
                1280: { slidesPerView: 2, slidesPerGroup: 2 },
              }}
              className="team-swiper relative"
            >
              {teamMembers.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <SwiperSlide key={index}>
                    <div className="team-card group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden h-96">
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Circular icon container */}
                      <div className="relative z-10 mb-6 flex justify-center">
                        <div className={`team-icon relative w-28 h-28 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                          <IconComponent className="w-14 h-14 text-white" />
                          {/* Glowing effect */}
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 text-center">
                        <h3 className="mb-3 text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary-100 to-purple-100 px-4 py-2 text-sm font-semibold text-primary-700 border border-primary-200">
                          {member.position}
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {member.bio}
                        </p>
                      </div>

                      {/* Decorative corner elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom navigation buttons */}
            <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-black rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex items-center justify-center cursor-pointer">
              
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-black rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex items-center justify-center cursor-pointer">
              
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
