
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  Clock, 
  Phone, 
  ChevronRight, 
  ChevronLeft,
  MessageCircle, 
  Star, 
  X, 
  ArrowRight,
  Menu,
  ArrowDown,
  Award,
  ExternalLink,
  Globe,
  User,
  Scissors,
  Calendar,
  CheckCircle2,
  ArrowUp,
  Heart,
  Link as LinkIcon,
  UserPlus,
  Grid,
  PlaySquare,
  UserSquare,
  MoreHorizontal,
  Sparkles,
  Crown,
  Wind,
  Droplets,
  Brush
} from "lucide-react";
import { translations, Language } from "./translations";

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<number[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const t = translations[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    service: '',
    branch: '',
    date: '',
    time: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Luxury Booking Request:
Full Name: ${bookingForm.name}
Phone: ${bookingForm.phone}
Service: ${bookingForm.service}
Branch: ${bookingForm.branch}
Date: ${bookingForm.date}
Time: ${bookingForm.time}`;
    
    const whatsappUrl = `https://wa.me/201222370261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsBookingSuccess(true);
    setTimeout(() => {
      setIsBookingSuccess(false);
      setIsBookingModalOpen(false);
    }, 3000);
  };

  const portfolioItems = [
    { type: 'image', src: "https://i.postimg.cc/JnckJqW0/557392561-17973169655935947-4217654392088916470-n.jpg" },
    { type: 'image', src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop" },
    { type: 'video', src: "https://player.vimeo.com/video/1178491338?autoplay=1&loop=1&muted=1&background=1&quality=1080p" },
    { type: 'image', src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop" },
    { type: 'image', src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2000&auto=format&fit=crop" },
    { type: 'image', src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2000&auto=format&fit=crop" },
    { type: 'image', src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" },
    { type: 'image', src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=2000&auto=format&fit=crop" },
    { type: 'image', src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2000&auto=format&fit=crop" },
    { type: 'image', src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop" }
  ];

  const instagramPosts = [
    { type: 'reel', src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop", videoUrl: "https://www.instagram.com/reel/DWLr8_zATIo/embed", likes: "12.5K", comments: "450" },
    { type: 'reel', src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop", videoUrl: "https://www.instagram.com/reel/DWut_Xzin5Q/embed", likes: "8.9K", comments: "230" },
    { type: 'reel', src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop", videoUrl: "https://www.instagram.com/reel/DWmxdpxDXqT/embed", likes: "21.1K", comments: "1.2K" },
    { type: 'reel', src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1000&auto=format&fit=crop", videoUrl: "https://www.instagram.com/reel/DWMVRRzAJ-U/embed", likes: "15.4K", comments: "670" },
    { type: 'reel', src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop", videoUrl: "https://www.instagram.com/reel/DV_7x-xjQkD/embed", likes: "34.2K", comments: "2.4K" },
    { type: 'reel', src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop", videoUrl: "https://www.instagram.com/reel/DVg1DxIjVxy/embed", likes: "9.4K", comments: "340" },
    { type: 'image', src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2000&auto=format&fit=crop", link: "https://www.instagram.com/mohamedgaberbeautysalon/?hl=ar", likes: "18.1K", comments: "890" },
    { type: 'image', src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop", link: "https://www.instagram.com/mohamedgaberbeautysalon/?hl=ar", likes: "27.3K", comments: "1.5K" },
    { type: 'image', src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop", link: "https://www.instagram.com/mohamedgaberbeautysalon/?hl=ar", likes: "11.2K", comments: "420" },
  ];

  const instagramVideos = [
    "https://www.instagram.com/reel/DWLr8_zATIo/embed",
    "https://www.instagram.com/reel/DWut_Xzin5Q/embed",
    "https://www.instagram.com/reel/DWmxdpxDXqT/embed",
    "https://www.instagram.com/reel/DWMVRRzAJ-U/embed",
    "https://www.instagram.com/reel/DV_7x-xjQkD/embed",
    "https://www.instagram.com/reel/DVg1DxIjVxy/embed",
  ];

  const instagramHighlights = [
    { label: 'Makeup', icon: <Sparkles size={24} strokeWidth={1} className="text-white" /> },
    { label: 'Our clients', icon: <Heart size={24} strokeWidth={1} className="text-white" /> },
    { label: 'Brides', icon: <Crown size={24} strokeWidth={1} className="text-white" /> },
    { label: 'Hair Styling', icon: <Wind size={24} strokeWidth={1} className="text-white" /> },
    { label: 'Nail Care', icon: <Droplets size={24} strokeWidth={1} className="text-white" /> },
    { label: 'Hair Cut', icon: <Scissors size={24} strokeWidth={1} className="text-white" /> },
    { label: 'Hair Coloring', icon: <Brush size={24} strokeWidth={1} className="text-white" /> },
  ];

  return (
    <div 
      className={`min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black ${isRtl ? 'rtl' : 'ltr'}`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <span className="font-display text-xl md:text-2xl tracking-[0.3em] font-medium text-white uppercase">MOHAMED GABER</span>
            <span className="text-[8px] md:text-[9px] tracking-[0.5em] uppercase text-gold-500 mt-1 font-medium">International Beauty Artist</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {Object.entries(t.nav).filter(([key]) => key !== 'book').map(([key, label]) => (
                <a key={key} href={`#${key}`} className="text-[10px] tracking-[0.4em] uppercase hover:text-gold-500 transition-colors duration-500 font-medium">
                  {label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 border border-white/20 text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-medium"
              >
                <Globe size={12} />
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-3 bg-gold-500 text-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white transition-all duration-500"
              >
                {t.nav.book}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleLang} className="text-[10px] uppercase tracking-widest border border-white/20 px-3 py-1">
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {Object.entries(t.nav).map(([key, label]) => (
              <button 
                key={key} 
                onClick={() => {
                  if (key === 'book') {
                    setIsBookingModalOpen(true);
                  } else {
                    const el = document.getElementById(key);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="text-3xl font-display tracking-widest uppercase hover:text-gold-500"
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
          <iframe
            src="https://player.vimeo.com/video/1178474912?autoplay=1&loop=1&muted=1&autopause=0&background=1&quality=1080p"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Luxury Brand Campaign"
          ></iframe>
        </div>

        {/* Text Content Overlay */}
        <div className="relative z-20 text-center px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="group relative w-full sm:w-auto px-20 py-6 bg-white text-black text-[10px] tracking-[0.6em] uppercase font-bold transition-all duration-700 hover:bg-gold-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
            >
              <span className="relative z-10">{t.hero.book}</span>
            </button>
            <a 
              href="#portfolio"
              className="group relative w-full sm:w-auto px-20 py-6 border border-white/20 text-[10px] tracking-[0.6em] uppercase font-bold transition-all duration-700 hover:border-gold-500 hover:text-gold-500 hover:scale-105"
            >
              <span className="relative z-10">{t.hero.explore}</span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/40"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-32 px-6 bg-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden relative group bg-zinc-900">
              <iframe 
                src="https://player.vimeo.com/video/1178491338?autoplay=1&loop=1&muted=0&quality=1080p" 
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.3]"
                frameBorder="0" 
                allow="autoplay; fullscreen" 
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000 pointer-events-none" />
            </div>
            <div className={`absolute -bottom-12 ${isRtl ? '-left-12' : '-right-12'} w-64 h-64 border border-gold-500/30 hidden md:block`} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-8"
          >
            <span className="text-gold-500 text-xs tracking-[0.6em] uppercase font-bold">The Artist</span>
            <h2 className="font-display text-5xl md:text-7xl leading-tight uppercase">
              {t.story.title}
            </h2>
            <div className="w-24 h-px bg-gold-500" />
            <p className="text-lg md:text-2xl text-gray-400 leading-relaxed font-light italic">
              "{t.story.content}"
            </p>
            
            {/* Certifications Badge */}
            <div className="mt-12 glass-card group overflow-hidden relative min-h-[200px] flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200" 
                  alt="L'Oréal Professional Hair Color"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-700" />
              </div>

              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 w-full">
                <div className="w-20 h-20 shrink-0 rounded-full border border-gold-500/40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <Award size={32} className="text-gold-500" />
                </div>
                <div className="flex-1 text-center md:text-start">
                  <h4 className="font-display text-2xl mb-3 uppercase tracking-[0.2em] text-white group-hover:text-gold-300 transition-colors">
                    {t.certifications.badge}
                  </h4>
                  <p className="text-sm text-gray-300 tracking-wider leading-relaxed font-light max-w-2xl">
                    {t.certifications.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold-500 text-xs tracking-[0.6em] uppercase font-bold mb-4 block"
            >
              Exclusivity
            </motion.span>
            <h2 className="font-display text-5xl md:text-8xl uppercase mb-6">{t.branches.title}</h2>
            <div className="w-24 h-px bg-gold-500/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((num) => {
              const branch = (t.branches as any)[`branch${num}`];
              const images = [
                "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000&auto=format&fit=crop",
                "https://i.postimg.cc/KvpBkLqJ/mdynty.jpg"
              ];
              const isMain = num === 2;

              return (
                <motion.div 
                  key={num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: num * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col bg-black border border-white/5 hover:border-gold-500/20 transition-all duration-700"
                >
                  {/* Branch Image & Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={images[num-1]} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      alt={branch.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700" />
                    
                    {isMain && (
                      <div className="absolute top-6 right-6 bg-gold-500 text-black text-[8px] tracking-[0.3em] uppercase font-bold px-4 py-2 rounded-full shadow-xl">
                        {t.branches.mainBranch}
                      </div>
                    )}

                    <div className="absolute bottom-6 left-6 flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={10} className="fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                  </div>

                  {/* Map Embed */}
                  <div className="p-1 border-b border-white/5 relative group/map">
                    <a 
                      href={branch.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 cursor-pointer"
                      title={t.branches.maps}
                    ></a>
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(branch.embedQuery)}&output=embed`}
                      width="100%"
                      height="200"
                      className="grayscale invert contrast-[0.8] opacity-60 group-hover/map:opacity-100 group-hover/map:grayscale-0 group-hover/map:invert-0 transition-all duration-1000 pointer-events-none"
                      style={{ border: 0, borderRadius: '0px' }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>

                  {/* Branch Info */}
                  <div className="p-10 flex-1 flex flex-col">
                    <span className="text-[9px] tracking-[0.4em] uppercase text-gold-500/60 font-bold mb-3 block">{branch.tag}</span>
                    <h3 className="font-display text-2xl mb-6 uppercase tracking-widest leading-tight">{branch.name}</h3>
                    
                    <div className="space-y-4 mb-10 mt-auto">
                      <div className="flex items-center gap-4 text-gray-400 text-xs tracking-widest">
                        <Clock size={14} className="text-gold-500/40" />
                        <span>{branch.hours}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <a 
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 py-5 bg-white text-black text-[9px] tracking-[0.4em] uppercase font-bold transition-all duration-700 hover:bg-gold-500 hover:scale-[1.02]"
                      >
                        <MapPin size={12} />
                        {t.branches.maps}
                      </a>
                      <a 
                        href={`https://wa.me/201222370261?text=${encodeURIComponent(lang === 'en' ? `Hello, I would like to inquire about booking an appointment at the ${branch.name}. Could you please provide more information on availability?` : `مرحباً، أود الاستفسار عن حجز موعد في ${branch.name}. هل يمكنك تزويدي بمزيد من المعلومات حول المواعيد المتاحة؟`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 py-5 border border-white/10 text-[9px] tracking-[0.4em] uppercase font-bold transition-all duration-700 hover:border-gold-500 hover:text-gold-500 hover:scale-[1.02]"
                      >
                        <MessageCircle size={12} className="text-gold-500" />
                        {t.branches.whatsapp}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Infinite Marquee */}
      <section id="portfolio" className="py-32 bg-black overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="text-gold-500 text-xs tracking-[0.6em] uppercase font-bold mb-4 block">Artistry</span>
              <h2 className="font-display text-5xl md:text-8xl uppercase">{t.portfolio.title}</h2>
            </div>
            <div className="hidden md:block w-1/3 h-px bg-white/10" />
          </div>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -2500] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...portfolioItems, ...portfolioItems].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  if (item.type === 'video') {
                    setSelectedVideo(item.src);
                  } else {
                    setSelectedImage(item.src);
                  }
                }}
                className="relative w-[300px] md:w-[500px] aspect-[3/4] group cursor-none overflow-hidden bg-zinc-900 flex-shrink-0"
              >
                {item.type === 'video' ? (
                  <div className="absolute inset-0 pointer-events-none">
                    <iframe 
                      src={item.src} 
                      className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.5]"
                      frameBorder="0" 
                    ></iframe>
                  </div>
                ) : (
                  <img 
                    src={item.src} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    alt={`Portfolio ${idx}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.5em] uppercase border border-white px-8 py-4">{t.portfolio.view}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section id="instagram" className="py-24 px-6 bg-[#000000] text-white border-t border-[#262626]">
        <div className="max-w-[935px] mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20 mb-12 px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 mx-auto md:mx-0"
            >
              <div className="w-24 h-24 md:w-[150px] md:h-[150px] rounded-full overflow-hidden border border-[#262626]">
                <img 
                  src="https://i.postimg.cc/gkCqsxCz/643551645-18562411015057910-2358905608758800092-n.jpg" 
                  className="w-full h-full object-cover"
                  alt="Mohamed Gaber Beauty Salon"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <div className="flex-1 flex flex-col w-full">
              {/* Row 1: Username & Buttons */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-medium tracking-wide">mohamedgaberbeautysalon</h2>
                  <MoreHorizontal size={20} className="text-white cursor-pointer ml-2" />
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://www.instagram.com/mohamedgaberbeautysalon/?hl=ar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-6 py-1.5 bg-[#0095f6] hover:bg-[#1877f2] text-white text-sm font-semibold rounded-lg transition-colors text-center"
                  >
                    {t.instagram.button}
                  </a>
                  <a 
                    href="#" 
                    className="flex-1 md:flex-none px-6 py-1.5 bg-[#363636] hover:bg-[#262626] text-white text-sm font-semibold rounded-lg transition-colors text-center"
                  >
                    {t.instagram.message}
                  </a>
                  <button className="p-1.5 bg-[#363636] hover:bg-[#262626] text-white rounded-lg transition-colors">
                    <UserPlus size={18} />
                  </button>
                </div>
              </div>
              
              {/* Row 2: Stats (Desktop) */}
              <div className="hidden md:flex gap-10 mb-6">
                <div className="text-base">
                  <span className="font-semibold">{t.instagram.posts}</span> {t.instagram.postsLabel}
                </div>
                <div className="text-base">
                  <span className="font-semibold">{t.instagram.followers}</span> {t.instagram.followersLabel}
                </div>
                <div className="text-base">
                  <span className="font-semibold">{t.instagram.following}</span> {t.instagram.followingLabel}
                </div>
              </div>

              {/* Row 3: Bio */}
              <div className="text-sm">
                <div className="font-semibold mb-1">{t.instagram.name}</div>
                <div className="text-[#A8A8A8] mb-2">{t.instagram.category}</div>
                <div className="whitespace-pre-line mb-2 leading-relaxed">
                  {t.instagram.bio}
                </div>
                <a href="#" className="text-[#E0F1FF] hover:underline block mb-2">{t.instagram.mention}</a>
                <a href="#" className="flex items-center gap-1 font-semibold text-[#E0F1FF] hover:underline">
                  <LinkIcon size={14} className="rotate-45" />
                  {t.instagram.link} <span className="font-normal">{t.instagram.linkText}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Stats (Mobile) */}
          <div className="flex md:hidden justify-around border-t border-[#262626] py-3 mb-4">
            <div className="text-center flex flex-col">
              <span className="font-semibold text-sm">{t.instagram.posts}</span>
              <span className="text-xs text-[#A8A8A8]">{t.instagram.postsLabel}</span>
            </div>
            <div className="text-center flex flex-col">
              <span className="font-semibold text-sm">{t.instagram.followers}</span>
              <span className="text-xs text-[#A8A8A8]">{t.instagram.followersLabel}</span>
            </div>
            <div className="text-center flex flex-col">
              <span className="font-semibold text-sm">{t.instagram.following}</span>
              <span className="text-xs text-[#A8A8A8]">{t.instagram.followingLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-32 px-6 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25rem] font-display uppercase tracking-tighter whitespace-nowrap">
            GABER
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <span className="text-gold-500 text-xs tracking-[0.6em] uppercase font-bold mb-4 block">Reservation</span>
              <h2 className="font-display text-5xl md:text-7xl uppercase mb-12 leading-tight">{t.booking.title}</h2>
              
              <div className="space-y-12">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-gray-500 block mb-1">{t.contact.phone}</span>
                    <span className="text-2xl font-display">+20 122 237 0261</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-gray-500 block mb-1">{t.contact.hours}</span>
                    <span className="text-2xl font-display">08:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="bg-black p-12 border border-white/5 shadow-2xl">
              <div className="grid grid-cols-1 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] tracking-widest uppercase text-gray-500">{t.booking.name}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-gold-500 outline-none transition-colors text-lg"
                    onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] tracking-widest uppercase text-gray-500">{t.booking.phone}</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-gold-500 outline-none transition-colors text-lg"
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] tracking-widest uppercase text-gray-500">{t.booking.service}</label>
                    <select 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-gold-500 outline-none transition-colors appearance-none text-lg"
                      onChange={(e) => setBookingForm({...bookingForm, service: e.target.value})}
                    >
                      <option value="" className="bg-black">Select Service</option>
                      {t.booking.services.map(s => <option key={s} value={s} className="bg-black">{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                   <div className="space-y-3">
                    <label className="text-[10px] tracking-widest uppercase text-gray-500">{t.booking.branch}</label>
                    <select 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-gold-500 outline-none transition-colors appearance-none text-lg"
                      onChange={(e) => setBookingForm({...bookingForm, branch: e.target.value})}
                    >
                      <option value="" className="bg-black">Select Branch</option>
                      <option value="New Cairo" className="bg-black">{t.branches.branch1.name}</option>
                      <option value="Nasr City" className="bg-black">{t.branches.branch2.name}</option>
                      <option value="Heliopolis" className="bg-black">{t.branches.branch3.name}</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] tracking-widest uppercase text-gray-500">{t.booking.date}</label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-gold-500 outline-none transition-colors text-lg"
                      onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] tracking-widest uppercase text-gray-500">{t.booking.time}</label>
                    <input 
                      required
                      type="time" 
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-gold-500 outline-none transition-colors text-lg"
                      onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full mt-16 py-7 bg-gold-500 text-black text-[11px] tracking-[0.6em] uppercase font-bold transition-all duration-700 hover:bg-white hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] active:scale-95"
              >
                {t.booking.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Reputation Section */}
      <section className="py-32 px-6 bg-black border-y border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex justify-center gap-2 text-gold-500 mb-10">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={28} fill="currentColor" />)}
          </div>
          <p className="text-3xl md:text-5xl font-display italic text-gray-300 mb-6 leading-relaxed">
            "{t.reputation.text}"
          </p>
          <span className="text-[11px] tracking-[0.5em] uppercase text-gold-500 font-bold">Verified Excellence</span>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-32 px-6 bg-black relative">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <h2 className="font-display text-5xl md:text-8xl uppercase">{t.articles.title}</h2>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollCarousel(isRtl ? 'right' : 'left')}
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Previous"
              >
                {isRtl ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
              </button>
              <button 
                onClick={() => scrollCarousel(isRtl ? 'left' : 'right')}
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Next"
              >
                {isRtl ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
              </button>
            </div>
          </div>

          <motion.div 
            ref={carouselRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="flex overflow-x-auto gap-8 md:gap-16 pb-12 snap-x snap-mandatory no-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {instagramVideos.map((videoUrl, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                whileHover={{ y: -15 }}
                className="group min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-center"
              >
                <div className="aspect-[9/16] overflow-hidden mb-10 relative bg-zinc-900 rounded-2xl border border-white/10">
                  <iframe 
                    src={videoUrl}
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`Video ${idx + 1}`}
                  />
                </div>
                <h3 className="font-display text-3xl mb-6 uppercase group-hover:text-gold-500 transition-colors leading-tight">{(t.articles as any)[`item${idx + 1}`] || 'Instagram Reel'}</h3>
                <div className="flex items-center gap-4 text-gold-500 text-[11px] tracking-[0.5em] uppercase font-bold">
                  <span>Watch on Instagram</span>
                  <Instagram size={16} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 px-6 bg-gold-500 text-black text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10"
        >
          <h2 className="font-display text-5xl md:text-[7rem] uppercase mb-16 leading-none tracking-tight">{t.cta.title}</h2>
          <a 
            href="#booking"
            className="inline-block px-24 py-8 border border-black text-[12px] tracking-[0.6em] uppercase font-bold transition-all duration-700 hover:bg-black hover:text-white hover:scale-105 hover:shadow-2xl"
          >
            {t.cta.button}
          </a>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-black">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-20">
            <h2 className="font-display text-7xl uppercase">{t.contact.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-5">
                <span className="text-gold-500 text-[11px] tracking-[0.5em] uppercase font-bold">{t.contact.phone}</span>
                <p className="text-3xl font-display">+20 122 237 0261</p>
              </div>
              <div className="space-y-5">
                <span className="text-gold-500 text-[11px] tracking-[0.5em] uppercase font-bold">{t.contact.hours}</span>
                <p className="text-3xl font-display">{t.contact.hoursValue}</p>
              </div>
              <div className="space-y-5 md:col-span-2">
                <span className="text-gold-500 text-[11px] tracking-[0.5em] uppercase font-bold">{t.contact.location}</span>
                <p className="text-3xl font-display">{t.contact.locationValue}</p>
              </div>
            </div>

            <div className="flex gap-10">
              <a href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="h-[700px] bg-white/5 border border-white/10 relative grayscale group overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-10">
              <MapPin size={64} className="text-gold-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-4xl mb-6 uppercase">Visit Our Flagship</h3>
              <p className="text-gray-400 mb-12 max-w-md text-lg leading-relaxed">Experience luxury in the heart of New Cairo. Our main branch offers an unparalleled beauty sanctuary.</p>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                className="px-20 py-6 border border-gold-500/30 text-[11px] tracking-[0.5em] uppercase transition-all duration-700 font-bold text-gold-500 hover:bg-gold-500 hover:text-black hover:border-gold-500"
              >
                {t.branches.maps}
              </a>
            </div>
            <div className="absolute inset-0 bg-black/60 z-0" />
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-30"
              alt="Map Background"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Floating Back to Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gold-500 text-black flex items-center justify-center rounded-full shadow-2xl hover:bg-white transition-all duration-500"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-3xl tracking-[0.3em] text-white uppercase">MOHAMED GABER</span>
            <span className="text-[10px] tracking-[0.6em] uppercase text-gray-700 mt-3 font-bold">International Beauty Artist</span>
          </div>
          
          <div className="text-[11px] tracking-[0.5em] uppercase text-gray-700 font-medium">
            &copy; {new Date().getFullYear()} Mohamed Gaber. All rights reserved.
          </div>

          <div className="flex gap-16 text-[11px] tracking-[0.5em] uppercase text-gray-700 font-bold">
            <a href="#" className="hover:text-white transition-colors duration-500">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-500">Terms</a>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {(selectedImage || selectedVideo) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => {
              setSelectedImage(null);
              setSelectedVideo(null);
            }}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-gold-500 transition-all duration-500 z-[110]"
              onClick={() => {
                setSelectedImage(null);
                setSelectedVideo(null);
              }}
            >
              <X size={48} />
            </button>
            
            {selectedImage && (
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                src={selectedImage} 
                alt="Portfolio Enlarged" 
                className="max-w-full max-h-full object-contain shadow-[0_0_150px_rgba(0,0,0,0.8)]"
                referrerPolicy="no-referrer"
              />
            )}

            {selectedVideo && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-5xl aspect-video bg-black shadow-2xl"
              >
                <iframe 
                  src={selectedVideo.replace('background=1', 'background=0').replace('muted=1', 'muted=0')} 
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="autoplay; fullscreen" 
                  allowFullScreen
                ></iframe>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Booking Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className={`fixed bottom-8 ${isRtl ? 'left-8' : 'right-8'} z-[40] hidden md:block`}
          >
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-gold-500 text-black px-10 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:bg-white transition-all duration-700 flex items-center gap-4 group"
            >
              <span>{t.nav.book}</span>
              <div className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-gold-500 transition-all duration-500 ${isRtl ? 'rotate-180' : ''}`}>
                <ArrowRight size={14} />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Booking Bar */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 left-0 w-full z-[40] md:hidden px-4 pb-6"
          >
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full bg-gold-500 text-black py-5 rounded-xl font-bold uppercase tracking-[0.3em] text-[10px] shadow-[0_0_50px_rgba(212,175,55,0.3)] flex items-center justify-center gap-4 active:scale-95 transition-transform"
            >
              <span>{t.nav.book}</span>
              <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsBookingModalOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-zinc-900 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-20"
              >
                <X size={32} strokeWidth={1} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5 h-full max-h-[90vh] overflow-y-auto">
                {/* Modal Sidebar */}
                <div className="hidden lg:flex lg:col-span-2 bg-black p-12 flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" 
                      className="w-full h-full object-cover opacity-30 grayscale"
                      alt="Luxury Salon"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-display uppercase tracking-tighter rotate-90">
                      GABER
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-gold-500 text-xs tracking-[0.6em] uppercase font-bold mb-4 block">Reservation</span>
                      <h2 className="font-display text-4xl uppercase mb-8 leading-tight">{t.booking.title}</h2>
                      <p className="text-gray-400 font-light italic leading-relaxed">
                        Step into a world of elegance and professional care. Your transformation begins here.
                      </p>
                    </motion.div>
                  </div>

                  <div className="relative z-10 space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500">
                        <Phone size={16} />
                      </div>
                      <span className="text-sm font-display">+20 122 237 0261</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500">
                        <Clock size={16} />
                      </div>
                      <span className="text-sm font-display">08:00 AM - 10:00 PM</span>
                    </motion.div>
                  </div>
                </div>

                {/* Modal Form */}
                <div className="lg:col-span-3 p-8 md:p-16 relative">
                  <AnimatePresence mode="wait">
                    {isBookingSuccess ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20"
                      >
                        <div className="w-24 h-24 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                          <CheckCircle2 size={48} strokeWidth={1.5} />
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-display text-4xl uppercase tracking-wider">{lang === 'en' ? 'Thank You' : 'شكراً لك'}</h3>
                          <p className="text-gray-400 max-w-xs mx-auto">
                            {t.booking.success}
                          </p>
                        </div>
                        <div className="w-12 h-px bg-gold-500/30" />
                        <p className="text-[10px] tracking-[0.4em] uppercase text-gray-500">Redirecting...</p>
                      </motion.div>
                    ) : (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleBookingSubmit} 
                        className="space-y-10"
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="space-y-3 group"
                        >
                          <div className="flex items-center gap-2 text-gray-500 group-focus-within:text-gold-500 transition-colors">
                            <User size={12} />
                            <label className="text-[10px] tracking-widest uppercase">{t.booking.name}</label>
                          </div>
                          <input 
                            required
                            type="text" 
                            className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold-500 outline-none transition-all text-lg font-light placeholder:text-white/5"
                            placeholder="Your full name"
                            onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                          />
                        </motion.div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-3 group"
                          >
                            <div className="flex items-center gap-2 text-gray-500 group-focus-within:text-gold-500 transition-colors">
                              <Phone size={12} />
                              <label className="text-[10px] tracking-widest uppercase">{t.booking.phone}</label>
                            </div>
                            <input 
                              required
                              type="tel" 
                              className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold-500 outline-none transition-all text-lg font-light"
                              onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                            />
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-3 group"
                          >
                            <div className="flex items-center gap-2 text-gray-500 group-focus-within:text-gold-500 transition-colors">
                              <Scissors size={12} />
                              <label className="text-[10px] tracking-widest uppercase">{t.booking.service}</label>
                            </div>
                            <select 
                              required
                              className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold-500 outline-none transition-all appearance-none text-lg font-light"
                              onChange={(e) => setBookingForm({...bookingForm, service: e.target.value})}
                            >
                              <option value="" className="bg-zinc-900">Select Service</option>
                              {t.booking.services.map(s => <option key={s} value={s} className="bg-zinc-900">{s}</option>)}
                            </select>
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="space-y-3 group"
                          >
                            <div className="flex items-center gap-2 text-gray-500 group-focus-within:text-gold-500 transition-colors">
                              <MapPin size={12} />
                              <label className="text-[10px] tracking-widest uppercase">{t.booking.branch}</label>
                            </div>
                            <select 
                              required
                              className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold-500 outline-none transition-all appearance-none text-lg font-light"
                              onChange={(e) => setBookingForm({...bookingForm, branch: e.target.value})}
                            >
                              <option value="" className="bg-zinc-900">Select Branch</option>
                              <option value="New Cairo" className="bg-zinc-900">{t.branches.branch1.name}</option>
                              <option value="Nasr City" className="bg-zinc-900">{t.branches.branch2.name}</option>
                              <option value="Heliopolis" className="bg-zinc-900">{t.branches.branch3.name}</option>
                            </select>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="space-y-3 group"
                          >
                            <div className="flex items-center gap-2 text-gray-500 group-focus-within:text-gold-500 transition-colors">
                              <Calendar size={12} />
                              <label className="text-[10px] tracking-widest uppercase">{t.booking.date}</label>
                            </div>
                            <input 
                              required
                              type="date" 
                              className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold-500 outline-none transition-all text-lg font-light"
                              onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                            />
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="space-y-3 group"
                          >
                            <div className="flex items-center gap-2 text-gray-500 group-focus-within:text-gold-500 transition-colors">
                              <Clock size={12} />
                              <label className="text-[10px] tracking-widest uppercase">{t.booking.time}</label>
                            </div>
                            <input 
                              required
                              type="time" 
                              className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold-500 outline-none transition-all text-lg font-light"
                              onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                            />
                          </motion.div>
                        </div>

                        <motion.button 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1 }}
                          type="submit"
                          className="w-full bg-gold-500 text-black py-6 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all duration-700 shadow-[0_20px_50px_rgba(212,175,55,0.15)] relative overflow-hidden group"
                        >
                          <span className="relative z-10">{t.booking.submit}</span>
                          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
