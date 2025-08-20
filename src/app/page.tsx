"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  const [products] = useState([
    {
      id: 1,
      title: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "",
    },
    {
      id: 2,
      title: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "",
    },
    {
      id: 3,
      title: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "",
    },
    {
      id: 4,
      title: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "",
    },
  ]);

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      {/* Navbar */}
      <TopHeader/>
      <header className="flex justify-between items-center px-10 py-5 border-b bg-white shadow-sm rounded-tl-4xl rounded-tr-4xl ">
        <h1 className="text-2xl font-bold text-[#7E33E0]">Hekto</h1>
        <nav className="space-x-6 text-gray-600 ">
          <a href="#" className="hover:text-purple-600 font-poppins">
            Home
          </a>
          <a href="#" className="hover:text-purple-600">
            Pages
          </a>
          <a href="#" className="hover:text-purple-600">
            Products
          </a>
          <a href="#" className="hover:text-purple-600">
            Shop
          </a>
          <a href="#" className="hover:text-purple-600">
            Contact
          </a>
        </nav>
        <div className="space-x-4">
          <Button variant="outline">Login</Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex justify-between items-center px-20 py-20 bg-purple-100">
        <div className="max-w-lg">
          <p className="text-sm text-red-500 font-semibold mb-2">
            Best Furniture For Your Castle...
          </p>
          <h2 className="text-4xl font-bold mb-4">
            New Furniture Collection Trends in 2020
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600">Shop Now</Button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image src="/sofa.png" alt="Chair" width={400} height={400} />
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="px-20 py-16">
        <h3 className="text-center text-2xl font-bold mb-10">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="rounded-2xl shadow hover:shadow-lg transition"
            >
              <CardContent className="p-6 flex flex-col items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                />
                <h4 className="mt-4 text-lg font-semibold">{product.title}</h4>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-purple-600 font-bold">
                    {product.price}
                  </span>
                  <span className="line-through text-gray-400">
                    {product.oldPrice}
                  </span>
                </div>
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700 w-full">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
