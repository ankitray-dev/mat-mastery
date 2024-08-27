import CourseSection from "@/components/CourseSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructorSection";
import StoreSection from "@/components/StoreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <CourseSection/>
      <TestimonialsSection/>
      <InstructorSection/>
      <StoreSection/>
      <Footer/>
    </main>
  );
}
