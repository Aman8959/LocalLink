import { useState, useEffect, FormEvent } from 'react';
import {
  Menu,
  X,
  Users,
  BookOpen,
  ShoppingCart,
  Bell,
  Wrench,
  Shield,
  ArrowRight,
  CheckCircle2,
  UserPlus,
  Search,
  MessageCircle,
  TrendingUp,
  Sprout,
  Rocket,
  Brain,
  Handshake,
  Crown,
  Mail,
  MapPin,
  GraduationCap,
  Building2,
  Home,
  Send,
  ChevronRight,
  ExternalLink,
  Linkedin,
  Instagram,
  Twitter,
  Smartphone,
  Star,
  Heart,
  Zap,
  Target,
  Globe,
  Award,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface Post {
  id: string;
  author: string;
  content: string;
  time: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contact', href: '#contact' },
];

const features = [
  {
    icon: MessageCircle,
    title: 'Community Feed',
    description: 'Share updates, discussions, and local news with your community in real-time.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Student Networking',
    description: 'Connect with peers, form study groups, and find project teams effortlessly.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: ShoppingCart,
    title: 'Local Marketplace',
    description: 'Buy and sell books, electronics, furniture, and daily essentials within your community.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Bell,
    title: 'Announcements',
    description: 'Receive important notices, event updates, and community announcements instantly.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wrench,
    title: 'Local Services',
    description: 'Discover nearby tutors, repair services, and local professionals trusted by your community.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Verified Communities',
    description: 'Secure identity verification and trusted interactions for safe community engagement.',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

const problems = [
  {
    icon: MessageCircle,
    text: 'WhatsApp groups become cluttered',
  },
  {
    icon: Search,
    text: 'Community communication is unorganized',
  },
  {
    icon: Users,
    text: 'Students struggle to find local connections',
  },
  {
    icon: ShoppingCart,
    text: 'Buying and selling happen on separate apps',
  },
  {
    icon: Bell,
    text: 'Important announcements are often missed',
  },
  {
    icon: Globe,
    text: 'No single trusted platform for local communities',
  },
];

const solutions = [
  { text: 'Join local communities' },
  { text: 'Share updates' },
  { text: 'Buy and sell products' },
  { text: 'Connect with nearby people' },
  { text: 'Discover local services' },
  { text: 'Access important announcements' },
];

const steps = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'Sign up and build your verified community profile in minutes.',
    icon: UserPlus,
  },
  {
    number: '02',
    title: 'Join Your Community',
    description: 'Connect with your hostel, society, college, or neighborhood.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Connect & Engage',
    description: 'Share, buy, sell, and collaborate with trusted members.',
    icon: MessageCircle,
  },
  {
    number: '04',
    title: 'Grow Together',
    description: 'Build meaningful connections and grow with your community.',
    icon: TrendingUp,
  },
];

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'In Progress',
    icon: Sprout,
    features: [
      'Community Feed',
      'Marketplace',
      'Student Networking',
      'Local Services',
      'Announcements',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    status: 'Planned',
    icon: Rocket,
    features: ['Local Gigs', 'Internship Opportunities', 'Event Management'],
  },
  {
    phase: 'Phase 3',
    title: 'Innovation',
    status: 'Future',
    icon: Brain,
    features: ['AI Recommendations', 'Business Partnerships', 'Premium Services'],
  },
];

const stats = [
  { value: '100+', label: 'Communities Targeted', icon: Building2 },
  { value: '1000+', label: 'Potential Students', icon: GraduationCap },
  { value: '10+', label: 'Community Categories', icon: Award },
  { value: '1', label: 'Unified Platform', icon: Target },
];

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
            <Users className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-secondary-900">
            Local<span className="text-primary-600">Link</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === item.href.slice(1)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary text-sm">
            Join Early Access
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-secondary-600 hover:bg-secondary-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-secondary-100 shadow-lg animate-fade-in-down">
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-secondary-600 hover:bg-secondary-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-sm mt-4"
            >
              Join Early Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const hasRealData = posts.length > 0;

  const addSamplePost = () => {
    setPosts([
      {
        id: String(Date.now()),
        author: 'Aman Yadav',
        content: 'Welcome to LocalLink — this is a demo post to preview the community feed.',
        time: 'Just now',
      },
    ]);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-200/30 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-accent-light/30 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span>Launching Soon - Join the Waitlist</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6 animate-fade-in-up">
              Your Local Community,{' '}
              <span className="gradient-text">All in One Place</span>
            </h1>

            <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
              LocalLink is a hyperlocal community networking platform that helps students,
              residents, and neighborhoods connect, collaborate, buy, sell, and stay informed
              within trusted local communities.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-200">
              <a href="#contact" className="btn-primary text-base group">
                Join Early Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features" className="btn-outline text-base group">
                Explore Features
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-6 animate-fade-in-up animation-delay-300">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-xs font-semibold shadow-md"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-secondary-900">Join 100+ Early Adopters</p>
                <p className="text-secondary-500">Already on the waitlist</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-1 shadow-2xl shadow-primary-500/20">
              <div className="bg-white rounded-[22px] p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-secondary-50 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-secondary-900">Community Feed Active</p>
                      <p className="text-sm text-secondary-500">New updates from your area</p>
                    </div>
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  {hasRealData ? (
                    <div className="space-y-3 max-h-56 overflow-y-auto">
                      {posts.map((post) => (
                        <div key={post.id} className="p-3 bg-white rounded-xl border border-secondary-100">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                              {post.author.split(' ').map((s) => s[0]).slice(0,2).join('')}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-semibold text-secondary-900">{post.author}</div>
                                <div className="text-xs text-secondary-400">{post.time}</div>
                              </div>
                              <p className="text-sm text-secondary-600 mt-1">{post.content}</p>
                              <div className="flex items-center gap-3 mt-3 text-secondary-400">
                                <button className="flex items-center gap-2 text-xs hover:text-primary-600">
                                  <Heart className="w-4 h-4" /> Like
                                </button>
                                <button className="flex items-center gap-2 text-xs hover:text-primary-600">
                                  <Send className="w-4 h-4" /> Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 bg-secondary-50 rounded-2xl text-center">
                      <div className="mb-3">
                        <MessageCircle className="w-10 h-10 text-secondary-400 mx-auto" />
                      </div>
                      <p className="font-medium text-secondary-900">No activity yet</p>
                      <p className="text-sm text-secondary-500 mb-4">Be the first to post in your community.</p>
                      <div className="flex items-center justify-center gap-3">
                        <button className="btn-primary text-sm" onClick={addSamplePost}>
                          Preview with demo post
                        </button>
                        <a href="#contact" className="btn-outline text-sm">
                          Invite Members
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg shadow-orange-500/20 flex items-center justify-center animate-float">
              <Smartphone className="w-12 h-12 text-white" />
            </div>

            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg shadow-green-500/20 flex items-center justify-center animate-bounce-subtle">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-300 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-secondary-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-200 to-transparent" />

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
            Today's Communities Are{' '}
            <span className="text-red-500">Disconnected</span>
          </h2>
          <p className="text-lg text-secondary-600">
            Community members rely on multiple fragmented platforms, leading to chaos,
            missed information, and frustration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card p-6 card-hover group animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-secondary-700 font-medium">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-white" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-radial from-primary-200/20 via-transparent to-transparent -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-semibold mb-4">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
            One Platform,{' '}
            <span className="gradient-text">Infinite Possibilities</span>
          </h2>
          <p className="text-lg text-secondary-600">
            LocalLink combines community networking, student collaboration, local marketplace
            services, and community announcements into one secure platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 sm:p-10 bg-gradient-to-br from-white to-primary-50/20 border-primary-100">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-green-500/20">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-secondary-700 font-medium group-hover:text-secondary-900 transition-colors">
                    {solution.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
            Everything Your Community Needs
          </h2>
          <p className="text-lg text-secondary-600">
            Powerful features designed specifically for local communities, students, and
            neighborhood engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 sm:p-8 card-hover group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="section-padding bg-secondary-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-lg text-secondary-600">
            Join your local community and start connecting with trusted members in minutes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-primary-300 to-primary-200" />
              )}

              <div className="card p-6 text-center card-hover bg-white h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-primary-500/25 group-hover:shadow-xl transition-shadow">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-bold mb-3">
                  Step {step.number}
                </span>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-secondary-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
              About LocalLink
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Building India's Trusted{' '}
              <span className="gradient-text">Community Platform</span>
            </h2>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              LocalLink is a hyperlocal platform built to simplify communication,
              collaboration, and local engagement for students, societies, hostels, and
              neighborhoods across India.
            </p>

            <div className="card p-6 bg-gradient-to-br from-primary-50 to-accent-light border-primary-100 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 mb-1">Our Vision</h4>
                  <p className="text-secondary-600">
                    To become India's trusted digital hub for local communities, enabling
                    seamless connections and empowering local engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary-500/25">
                AY
              </div>
              <div>
                <h4 className="font-bold text-secondary-900">Aman Yadav</h4>
                <p className="text-secondary-600 text-sm">Founder & Creator</p>
                <p className="text-secondary-500 text-sm">Information Technology Student</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl p-8 sm:p-10">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg animate-float flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg animate-bounce-subtle flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>

              <div className="space-y-4">
                {[
                  { icon: GraduationCap, label: 'Students & Colleges', color: 'from-blue-500 to-cyan-500' },
                  { icon: Building2, label: 'Apartment Societies', color: 'from-purple-500 to-pink-500' },
                  { icon: Users, label: 'Hostel Communities', color: 'from-orange-500 to-red-500' },
                  { icon: MapPin, label: 'Neighborhoods', color: 'from-green-500 to-emerald-500' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm animate-fade-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-medium text-secondary-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="section-padding bg-secondary-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-200/20 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
            Our Journey & Future Plans
          </h2>
          <p className="text-lg text-secondary-600">
            Building LocalLink step by step with features that matter most to our communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {roadmapPhases.map((phase, index) => (
            <div
              key={index}
              className="card p-6 sm:p-8 card-hover bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    index === 0
                      ? 'bg-green-50 text-green-600'
                      : index === 1
                      ? 'bg-blue-50 text-blue-600'
                      : 'bg-purple-50 text-purple-600'
                  }`}
                >
                  {phase.status}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs text-primary-600 font-semibold">{phase.phase}</span>
                <h3 className="text-xl font-bold text-secondary-900">{phase.title}</h3>
              </div>

              <ul className="space-y-3">
                {phase.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`w-5 h-5 flex-shrink-0 ${
                        index === 0 ? 'text-green-500' : 'text-secondary-300'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        index === 0 ? 'text-secondary-700' : 'text-secondary-500'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/10 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-primary-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppPreviewSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-50/50 to-white" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
            Mobile App Coming Soon
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
            Experience LocalLink On-the-Go
          </h2>
          <p className="text-lg text-secondary-600">
            Our mobile app will bring your community right to your fingertips, available on
            iOS and Android.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent/20 blur-3xl rounded-full" />
            <div className="relative bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-[3rem] p-3 shadow-2xl">
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-6 bg-secondary-900 rounded-full" />
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-[2.5rem] p-4 min-h-[500px] flex flex-col">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20" />
                      <div>
                        <p className="text-white font-medium text-sm">Good Morning</p>
                        <p className="text-white/60 text-xs">Aman</p>
                      </div>
                    </div>
                    <Bell className="w-5 h-5 text-white/60" />
                  </div>
                  <p className="text-white font-semibold">Your Community Hub</p>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { icon: MessageCircle, label: 'Feed' },
                    { icon: Users, label: 'Network' },
                    { icon: ShoppingCart, label: 'Market' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center"
                    >
                      <item.icon className="w-6 h-6 text-white mx-auto mb-1" />
                      <p className="text-xs text-white/80">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-4 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20" />
                      <div className="flex-1 h-3 bg-white/20 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    communityName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ fullName: '', email: '', communityName: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary-200/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-accent-light/20 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
              Join Early Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Be Among the First to{' '}
              <span className="gradient-text">Experience LocalLink</span>
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Join our waitlist and be the first to know when we launch in your community.
              Early adopters get exclusive benefits and premium features for free.
            </p>

            <div className="space-y-4">
              {[
                'Priority access to new features',
                'Free premium membership for 6 months',
                'Direct feedback channel to the team',
                'Exclusive community founder badge',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-secondary-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 sm:p-8 bg-white shadow-large border-primary-100/50">
            {isSubmitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">You're on the list!</h3>
                <p className="text-secondary-600">
                  Thanks for joining early access. We'll notify you when we launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="communityName"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    College / Community Name
                  </label>
                  <input
                    type="text"
                    id="communityName"
                    required
                    value={formData.communityName}
                    onChange={(e) =>
                      setFormData({ ...formData, communityName: e.target.value })
                    }
                    className="input-field"
                    placeholder="e.g., XYZ College, ABC Society"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Join Waitlist
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-secondary-700/50">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Local<span className="text-primary-400">Link</span>
              </span>
            </div>
            <p className="text-secondary-400 mb-6 max-w-md">
              Building the Future of Connected Communities in India. Join us in creating
              trusted local networks for students, societies, and neighborhoods.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-secondary-400">
                <Mail className="w-5 h-5" />
                <span>hello@locallink.in</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-400">
                <MapPin className="w-5 h-5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-500 text-sm text-center sm:text-left">
            © 2026 LocalLink. All Rights Reserved.
          </p>
          <p className="text-secondary-500 text-sm">
            Built with passion by <span className="text-primary-400 font-medium">Aman Yadav</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AboutSection />
        <RoadmapSection />
        <StatsSection />
        <AppPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
