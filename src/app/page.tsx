import CourseSection from "@/components/CourseSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <CourseSection/>
    </main>
  );
}
