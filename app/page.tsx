import { AboutUs, ContactUs, Features, Hero, Services, Testimonials } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Features />
      <Testimonials />
    </main>
  );
}
