"use client";

import { categories } from "@/data/categories";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCorousal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryData = categories[params.category] || categories["home"];

  if (!categoryData) return notFound(); // invalid category -> 404

  const { slides, products } = categoryData;

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroCarousel slides={slides} />

      {/* Featured Products */}
      <section className="px-6 sm:px-12 lg:px-20 py-12 lg:py-16">
        <h3 className="text-center text-xl sm:text-2xl font-bold mb-10">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                  className="w-[120px] sm:w-[150px]"
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
