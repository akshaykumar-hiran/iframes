"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroCarousel({ slides }: { slides: any[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  const slide = slides[current];

  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 lg:px-20 py-12 lg:py-20 bg-purple-100 text-center lg:text-left min-h-[70vh]">
      <motion.div
        key={slide.id}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg"
      >
        <p className="text-sm text-red-500 font-semibold mb-2">{slide.subtitle}</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{slide.title}</h2>
        <p className="text-gray-600 mb-6">{slide.description}</p>
        <Button className="bg-pink-500 hover:bg-pink-600">Shop Now</Button>
      </motion.div>

      <motion.div
        key={slide.image}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 lg:mt-0"
      >
        <Image
          src={slide.image}
          alt={slide.title}
          width={350}
          height={350}
          className="mx-auto lg:w-[400px]"
        />
      </motion.div>
    </section>
  );
}
