import { motion } from "framer-motion";

const BubbleBackground = () => {
  return (
    <>
      {/* Fixed Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-purple-600 -z-10" />
      
      {/* Animated Bubbles */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        {/* Static floating bubbles */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white rounded-full opacity-10 animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-full opacity-15 animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white rounded-full opacity-10 animate-float-fast" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-white rounded-full opacity-20 animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/2 w-18 h-18 bg-white rounded-full opacity-12 animate-float-medium" />
        
        {/* Rising bubbles */}
        <div className="absolute left-[10%] w-8 h-8 bg-white rounded-full bubble-rise bubble-1" />
        <div className="absolute left-[25%] w-12 h-12 bg-white rounded-full bubble-rise bubble-2" />
        <div className="absolute left-[40%] w-6 h-6 bg-white rounded-full bubble-rise bubble-3" />
        <div className="absolute left-[55%] w-10 h-10 bg-white rounded-full bubble-rise bubble-4" />
        <div className="absolute left-[70%] w-14 h-14 bg-white rounded-full bubble-rise bubble-5" />
        <div className="absolute left-[85%] w-8 h-8 bg-white rounded-full bubble-rise bubble-6" />
        <div className="absolute left-[15%] w-16 h-16 bg-white rounded-full bubble-rise bubble-7" />
        <div className="absolute left-[60%] w-7 h-7 bg-white rounded-full bubble-rise bubble-8" />
      </div>
    </>
  );
};

export default BubbleBackground;
