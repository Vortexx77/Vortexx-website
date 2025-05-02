import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Laptop, 
  Code, 
  Palette, 
  LineChart, 
  Server,
  Search
} from 'lucide-react';

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = 'Careers | VORTEX';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'marketing', name: 'Marketing', icon: LineChart },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server }
  ];

  const positions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'development',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We\'re looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.',
      responsibilities: [
        'Design and implement scalable web applications',
        'Write clean, maintainable, and efficient code',
        'Collaborate with cross-functional teams',
        'Mentor junior developers'
      ],
      requirements: [
        'Experience with React, Node.js, and TypeScript',
        'Strong understanding of web technologies and best practices',
        'Experience with cloud platforms (AWS/GCP)',
        'Excellent problem-solving skills'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our design team to create beautiful and intuitive user experiences for our clients\' digital products.',
      responsibilities: [
        'Create user-centered designs',
        'Develop UI mockups and prototypes',
        'Conduct user research and testing',
        'Collaborate with developers'
      ],
      requirements: [
        'Strong portfolio demonstrating UI/UX skills',
        'Proficiency in design tools (Figma, Adobe XD)',
        'Understanding of design systems',
        'Experience with user research'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      department: 'marketing',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead our digital marketing initiatives and help clients achieve their marketing goals through data-driven strategies.',
      responsibilities: [
        'Develop marketing strategies',
        'Manage social media campaigns',
        'Analyze marketing metrics',
        'Create content strategies'
      ],
      requirements: [
        'Experience in digital marketing',
        'Knowledge of SEO and analytics',
        'Strong communication skills',
        'Project management experience'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'infrastructure',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help us build and maintain robust infrastructure solutions for our growing client base.',
      responsibilities: [
        'Manage cloud infrastructure',
        'Implement CI/CD pipelines',
        'Monitor system performance',
        'Ensure security compliance'
      ],
      requirements: [
        'Experience with AWS/GCP',
        'Knowledge of Docker and Kubernetes',
        'Scripting and automation skills',
        'Security best practices'
      ]
    }
  ];

  const filteredPositions = positions.filter(position => {
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section 
        className="bg-primary-900 py-20 text-white"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)), url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-white">Join Our Team</h1>
            <p className="mb-8 text-xl text-gray-300">
              Be part of a team that's shaping the future of technology. We're always 
              looking for talented individuals who share our passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why join us section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              Why VORTEX?
            </span>
            <h2 className="mb-4 text-4xl font-bold">Benefits & Culture</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We offer competitive benefits and foster a culture of innovation, 
              collaboration, and continuous learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Laptop className="h-8 w-8" />,
                title: 'Modern Tech Stack',
                description: 'Work with cutting-edge technologies and tools'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Collaborative Culture',
                description: 'Join a team that values creativity and teamwork'
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: 'Flexible Hours',
                description: 'Balance your work and personal life'
              }
            ].map((benefit, index) => (
              <div key={index} className="card p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions section */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              Open Positions
            </span>
            <h2 className="mb-4 text-4xl font-bold">Current Opportunities</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Find your next career opportunity at VORTEX
            </p>
          </div>

          {/* Search and filter */}
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            >
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          {/* Position listings */}
          <div className="space-y-6">
            {filteredPositions.map(position => (
              <div key={position.id} className="card overflow-hidden">
                <div className="border-b border-gray-100 bg-white p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-xl font-bold">{position.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="flex items-center text-sm text-gray-600">
                          <MapPin className="mr-1 h-4 w-4" /> {position.location}
                        </span>
                        <span className="flex items-center text-sm text-gray-600">
                          <Briefcase className="mr-1 h-4 w-4" /> {position.type}
                        </span>
                        <span className="flex items-center text-sm text-gray-600">
                          <Clock className="mr-1 h-4 w-4" /> {position.experience}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/contact?position=${encodeURIComponent(position.title)}`}
                      className="btn btn-primary"
                    >
                      Apply Now
                    </Link>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                </div>
                <div className="bg-gray-50 p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1 text-primary-600">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1 text-primary-600">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="rounded-lg bg-gray-50 p-8 text-center">
              <p className="text-lg text-gray-600">
                No positions found matching your criteria. Please try different search terms or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application process section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              How to Apply
            </span>
            <h2 className="mb-4 text-4xl font-bold">Application Process</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our hiring process is designed to be transparent and efficient
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Application',
                description: 'Submit your application through our careers portal'
              },
              {
                step: '02',
                title: 'Initial Review',
                description: 'Our team reviews your application and qualifications'
              },
              {
                step: '03',
                title: 'Interviews',
                description: 'Technical and cultural fit interviews with the team'
              },
              {
                step: '04',
                title: 'Decision',
                description: 'Final decision and offer discussion'
              }
            ].map((step, index) => (
              <div key={index} className="card p-6">
                <div className="mb-4 text-4xl font-bold text-primary-200">{step.step}</div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;