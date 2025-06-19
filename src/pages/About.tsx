import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, Target, Compass, Flag } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    document.title = 'About Us | VORTEX';

    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo('.hero-title', 
        { x: -300, opacity: 0 }, 
        { x: 0, 
        opacity: 1,
        duration: 1.2, 
        delay: 1.2,
        ease: 'power3.out', }
      )
      .fromTo('.hero-subtitle', 
        { x: 300, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: -0.8 }
      );

    // Vision, Mission, Goals cards
    gsap.fromTo('.vision-mission-card', 
      { x: -100, opacity: 0, scale: 0.8 }, 
      { 
        x: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: visionMissionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    // Strategic Goals
    gsap.fromTo('.strategic-goal-card', 
      { y: 60, opacity: 0, rotationX: 30 }, 
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 0.8, 
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: strategicGoalsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    // Story section
    gsap.fromTo('.story-content', 
      { x: -250, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    gsap.fromTo('.story-image', 
      { x: 150, opacity: 0, scale: 0.8 }, 
      { 
        x: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1.2, 
        ease: 'elastic.out(1, 0.8)',
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    // Timeline items
    gsap.fromTo('.timeline-item', 
      { 
        x: (index) => index % 2 === 0 ? -200 : 200,
        opacity: 0,
        scale: 0.7
      }, 
      { 
        x: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1, 
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    // Values cards
    gsap.fromTo('.value-card', 
      { y: 100, opacity: 0, rotationY: 45 }, 
      { 
        y: 0, 
        opacity: 1, 
        rotationY: 0,
        duration: 1, 
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    // Team cards
    gsap.fromTo('.team-card', 
      { y: 120, opacity: 0, scale: 0.9 }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        ease: 'back.out(1.5)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 75%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    // CTA section
    gsap.fromTo('.cta-content', 
      { x: -100, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    gsap.fromTo('.cta-image', 
      { x: 100, opacity: 0, rotationY: 15 }, 
      { 
        x: 0, 
        opacity: 1, 
        rotationY: 0,
        duration: 1.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    // Section headers animation
    gsap.fromTo('.section-header', 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section-header',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          scrub: true
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in the tech industry, Sarah founded VORTEX with a vision to transform how businesses leverage technology.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'David Chen',
      position: 'CTO',
      bio: 'David leads our technical team, bringing 15+ years of experience in software architecture and systems development.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Olivia Rodriguez',
      position: 'Creative Director',
      bio: 'Olivia oversees all design projects, bringing her award-winning design expertise and eye for detail to every client project.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Marcus Johnson',
      position: 'Marketing Director',
      bio: 'Marcus leads our digital marketing strategies, helping clients achieve remarkable growth through data-driven approaches.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'VORTEX was founded with a focus on web development services.'
    },
    {
      year: '2013',
      title: 'Expansion',
      description: 'Expanded services to include systems development and design.'
    },
    {
      year: '2016',
      title: 'Growth',
      description: 'Opened second office and reached 50 employees milestone.'
    },
    {
      year: '2019',
      title: 'Innovation',
      description: 'Launched dedicated AI and machine learning division.'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Expanded to international markets with clients in 15+ countries.'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as a top tech solutions provider worldwide.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'
    },
    {
      title: 'Excellence',
      description: 'We are committed to the highest standards of quality in everything we do.'
    },
    {
      title: 'Client Focus',
      description: 'We build partnerships with our clients, focusing on their unique needs and goals.'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical business practices.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, both internally and with our clients.'
    },
    {
      title: 'Adaptability',
      description: 'We embrace change and continuously evolve our approaches to stay ahead.'
    }
  ];

  const strategicGoals = [
    {
      title: 'Global Expansion',
      description: 'Establish VORTEX presence in key markets across North America, Europe, and Asia by 2026.'
    },
    {
      title: 'Innovation Leadership',
      description: 'Maintain position at the forefront of technological innovation through continuous R&D investment.'
    },
    {
      title: 'Sustainable Growth',
      description: 'Achieve 30% year-over-year growth while maintaining high client satisfaction rates.'
    },
    {
      title: 'Talent Development',
      description: 'Build and nurture a world-class team through comprehensive training and development programs.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section 
        ref={heroRef}
        className="bg-primary-900 py-20 text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)), url(https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center h-[60vh]">
            <h1 className="hero-title mb-6 text-6xl font-bold text-white pt-[120px]">About VORTEXX</h1>
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
                To be the global leader in innovative technology solutions, driving digital 
                transformation and empowering businesses to thrive in an ever-evolving 
                digital landscape.
              </p>
            </div>

            {/* Mission */}
            <div className="vision-mission-card card p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Compass className="h-8 w-8" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="text-gray-600">
                To deliver exceptional technology solutions that drive innovation, 
                efficiency, and growth for our clients through expertise, dedication, 
                and unwavering commitment to excellence.
              </p>
            </div>

            {/* Goals */}
            <div className="vision-mission-card card p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Flag className="h-8 w-8" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Goals</h2>
              <p className="text-gray-600">
                To continuously innovate, expand our global reach, and maintain our 
                position as a trusted technology partner while fostering sustainable 
                growth and development.
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
              Our strategic objectives guide our growth and development as we work 
              to create lasting impact in the technology industry.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {strategicGoals.map((goal, index) => (
              <div key={index} className="strategic-goal-card card p-6 hover:shadow-lg">
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
              <h2 className="mb-6 text-4xl font-bold">From Startup to Industry Leader</h2>
              <p className="mb-6 text-lg text-gray-600">
                Founded in 2010, VORTEX began as a small web development agency with a team of just five passionate tech enthusiasts. 
                Our founder, Sarah Mitchell, envisioned a company that would not just build websites, but create transformative digital 
                experiences that drive business growth.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                As we gained the trust of our early clients, we expanded our services to include systems development, graphic design, 
                digital marketing, and infrastructure management. Today, VORTEX has grown into a comprehensive technology solutions 
                provider with a team of over 100 experts serving clients across industries worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Our journey has been defined by a relentless commitment to innovation, excellence, and our clients' success. 
                We continue to evolve and adapt to the changing technological landscape while staying true to our core mission: 
                empowering businesses to thrive in the digital age.
              </p>
            </div>
            
            <div className="story-image relative">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="VORTEX Team" 
                className="h-full w-full rounded-xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg md:max-w-xs">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <div className="text-xl font-bold">100+</div>
                    <div className="text-gray-600">Team Members</div>
                  </div>
                </div>
              </div>
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
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary-100"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`timeline-item relative flex ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="mx-auto w-1/2 px-10">
                      {/* Empty div for spacing on alternating sides */}
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute left-1/2 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    
                    <div className={`mx-auto w-1/2 px-10 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <div className="card p-6">
                        <div className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                          {milestone.year}
                        </div>
                        <h3 className="mb-2 text-xl font-bold">{milestone.title}</h3>
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
              Our core values guide everything we do, from how we develop solutions 
              to how we interact with our clients and each other.
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
      <section ref={teamRef} id="team" className="section">
        <div className="container">
          <div className="section-header mb-12 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              Our Team
            </span>
            <h2 className="mb-4 text-4xl font-bold">Meet Our Leadership</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The talented individuals driving our vision and leading our company forward.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="team-card card group overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <div className="mb-4 text-primary-600">{member.position}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="mx-auto mb-6 max-w-2xl text-lg">
              Our full team includes over 100 talented individuals across development, design, 
              marketing, infrastructure, and support roles.
            </p>
            <Link to="/careers" className="btn btn-primary">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section ref={ctaRef} id="careers" className="section bg-primary-900 text-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="cta-content">
              <h2 className="mb-4 text-4xl font-bold">Join Our Team</h2>
              <p className="mb-6 text-lg text-gray-300">
                We're always looking for talented individuals to join our growing team. 
                At VORTEX, you'll work with cutting-edge technologies, collaborate with 
                industry experts, and help solve challenging problems for our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-2 mt-1 text-primary-400">✓</div>
                  <p>Competitive compensation and benefits</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 text-primary-400">✓</div>
                  <p>Professional development opportunities</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 text-primary-400">✓</div>
                  <p>Flexible work arrangements</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 text-primary-400">✓</div>
                  <p>Collaborative and inclusive culture</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/careers" className="btn bg-white text-primary-900 hover:bg-gray-100">
                  View Open Positions
                </Link>
              </div>
            </div>
            
            <div className="cta-image flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;