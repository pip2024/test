'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Scissors } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function FashionDesignPageComponent() {
  // @ts-expect-error: generated code
  const [selectedDesign, setSelectedDesign] = useState<OptionalDesign>(null)

  const designs: { id: number; name: string; description: string; price: string }[]  = [
    { id: 1, name: "Summer Breeze Dress", description: "Light and airy dress perfect for summer days.", price: "$129.99" },
    { id: 2, name: "Urban Chic Jacket", description: "Stylish jacket for the modern city dweller.", price: "$199.99" },
    { id: 3, name: "Elegant Evening Gown", description: "Stunning gown for special occasions.", price: "$299.99" },
    { id: 4, name: "Casual Comfort Jeans", description: "Comfortable jeans for everyday wear.", price: "$79.99" },
    { id: 5, name: "Professional Power Suit", description: "Sharp and confident suit for the workplace.", price: "$249.99" },
    { id: 6, name: "Bohemian Bliss Skirt", description: "Free-spirited skirt with a touch of bohemian flair.", price: "$89.99" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Scissors className="h-6 w-6" />
          <span className="sr-only">Acme Fashion Design</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/designs">
            Designs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Redefining Fashion Design
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Explore our cutting-edge designs that blend style, comfort, and innovation.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Explore Designs</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designs.map((design) => (
                <div key={design.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={design.name}
                    width={300}
                    height={400}
                    className="object-cover w-full h-[400px] transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="bg-white text-black hover:bg-gray-200"
                          onClick={() => setSelectedDesign(design)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{selectedDesign?.name}</DialogTitle>
                          <DialogDescription>{selectedDesign?.description}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Image
                              src={`/placeholder.svg?height=200&width=150`}
                              alt={selectedDesign?.name}
                              width={150}
                              height={200}
                              className="col-span-4 object-cover w-full h-[200px] rounded-md"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <span className="font-semibold">Price:</span>
                            <span className="col-span-3">{selectedDesign?.price}</span>
                          </div>
                        </div>
                        <DialogTrigger asChild>
                          <Button className="w-full">Close</Button>
                        </DialogTrigger>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest fashion trends and exclusive designs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Acme Fashion Design. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

interface OptionalDesign {
  id: number;
  name: string;
  description: string;
  price: string;
}