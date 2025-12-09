"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define routes
const ROUTES = {
  HOME: "/",
  NOIDUNG: "/noi-dung-chinh",
  ONTAP: "/on-tap-quiz"
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMasthead, setShowMasthead] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setShowMasthead(isHomePage && window.scrollY === 0);
  }, [pathname, isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowMasthead(isHomePage && currentScrollY === 0);
    };

    const throttledHandleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [isHomePage]);

  return (
    <motion.nav 
      className="w-full fixed z-50 bg-white/80 backdrop-blur-md border-b-2 border-black"
      initial={false}
    >
      <div className="h-1 w-full bg-[#A61F2B]"></div>
    
      <div className="absolute top-12 left-16 w-32 h-32 bg-[#A61F2B]/10 rounded-full blur-2xl"></div>
      <div className="absolute top-8 right-16 w-24 h-24 bg-black/5 rounded-full blur-xl"></div>
      
      <motion.div
        className="overflow-hidden"
        animate={{ 
          height: showMasthead ? "auto" : 0,
          opacity: showMasthead ? 1 : 0,
          marginBottom: showMasthead ? 0 : 0
        }} 
        transition={{
          height: {
            duration: 0.35,
            ease: [0.1, 0.9, 0.2, 1]
          },
          opacity: { 
            duration: showMasthead ? 0.3 : 0.15
          }
        }}
      >
        <div className="container mx-auto py-6 px-4 border-b border-black/40 relative">
          <div className="flex flex-col md:flex-row items-center justify-between text-center relative z-10">
            <p className="text-xs uppercase tracking-widest mb-3 md:mb-0 font-medium">Lịch Sử Việt Nam</p>

            {/* Centered Title */}
            <Link href="/" className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 group mb-3 md:mb-0">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-wider uppercase text-center inline-block relative">
                <span className="text-black">ĐƯỜNG LỐI </span>
                <span className="text-[#A61F2B]">1930-1945</span>
                <span className="absolute -top-2 -right-2 text-[#A61F2B] text-xs">®</span>
              </h1>
            </Link>

            <p className="text-xs uppercase tracking-widest font-medium">Cách Mạng Việt Nam</p>
          </div>
        </div>
      </motion.div>

      {/* Main navbar content */}
      <motion.div 
        className="container mx-auto px-4 lg:px-6 relative z-10"
        animate={{ 
          y: showMasthead ? 0 : 5,
          transition: {
            duration: 0.35,
            ease: [0.1, 0.9, 0.2, 1]
          }
        }}
      >
        <div className="flex justify-between items-center h-16 border-b border-black/20">
          {/* Black line decoration and brand name */}
          <div className="hidden md:flex items-center">
            <div className="w-16 h-[1px] bg-black/60"></div>
            <motion.div
              className="ml-4"
              animate={{
                opacity: showMasthead ? 0 : 1,
                x: showMasthead ? -20 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.1, 0.9, 0.2, 1]
              }}
            >
              <Link href="/" className="group">
                <h1 className="font-bold text-lg tracking-wider uppercase inline-block relative whitespace-nowrap">
                  <span className="text-black">ĐƯỜNG LỐI </span>
                  <span className="text-[#A61F2B]">1930-1945</span>
                  <span className="absolute -top-1 -right-1 text-[#A61F2B] text-[8px]">®</span>
                </h1>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 mx-auto">
            {[
              { name: "Trang chủ", path: ROUTES.HOME },
              { name: "Nội dung chính", path: ROUTES.NOIDUNG },
              { name: "Video Tổng Hợp", path: ROUTES.ONTAP }
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className={`group relative px-2 py-1 transition-colors font-medium tracking-widest text-xs ${
                  pathname === item.path ? 'text-[#A61F2B]' : 'text-black hover:text-[#A61F2B]'
                }`}
              >
                <span className="relative">
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#A61F2B] transition-all duration-300 ${
                    pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </span>
                {index < 2 && (
                  <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-black/40">/</span>
                )}
              </Link>
            ))}
          </div>

          {/* Right side elements */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Vietnamese Logo */}
            <div className="flex items-center">
              <div className="w-8 h-3 bg-[#A61F2B]/10 flex items-center justify-center">
                <Image
                                src="/image.png"
                                alt="Vietnamese Flag"
                                width={200}
                                height={160}
                                className="mx-auto mb-2"
                              />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-black/80 hover:text-[#A61F2B]"
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation with Glassmorphism */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-black/10 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile menu items */}
              <div className="space-y-0">
                {[
                  { name: "Trang chủ", path: ROUTES.HOME },
                  { name: "Nội dung chính", path: ROUTES.NOIDUNG },
                  { name: "Ôn tập", path: ROUTES.ONTAP }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`flex items-center py-3 border-b border-black/10 font-medium ${
                      pathname === item.path ? 'text-[#A61F2B]' : 'text-black hover:text-[#A61F2B]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3 text-[#A61F2B]">—</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Mobile right side elements */}
              <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-black/10">
                {/* Vietnamese Logo */}
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#A61F2B]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#A61F2B] font-bold text-xs">VN</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
