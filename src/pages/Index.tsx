import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Cpu, Monitor, Zap, Layers, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Index = () => {
  return <div className="min-h-screen bg-gaming-dark overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-20 left-0 w-full h-full">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gaming-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-60 -right-4 w-96 h-96 bg-gaming-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gaming-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center">
            <Badge variant="outline" className="bg-gaming-purple/10 border-gaming-purple/30 text-gaming-purple mb-6 px-4 py-1.5 text-sm">
              INTRODUCING
            </Badge>
            
            <h1 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gaming-purple via-gaming-blue to-gaming-green md:text-8xl">
              NOVA X
            </h1>
            
            <p className="text-xl text-center text-gaming-light/80 mb-6 max-w-2xl mx-auto font-semibold md:text-3xl">THE X FACTOR YOU NEED </p>
            
            <p className="text-xl text-center text-gaming-light/80 mb-6 max-w-2xl mx-auto font-semibold md:text-2xl">Unlimited Customization. Ultimate Performance.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/customize" className="gaming-btn group">
                BUILD YOUR PC
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Button variant="outline" className="border-gaming-purple/50 text-gaming-light hover:bg-gaming-purple/20">
                LEARN MORE
              </Button>
            </div>
          </div>
          
          <div className="relative mt-6 max-w-5xl mx-auto">
            <AspectRatio ratio={16 / 9} className="bg-transparent">
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute w-full h-full bg-gradient-to-r from-gaming-purple/20 via-transparent to-gaming-blue/20 rounded-lg animate-pulse-glow"></div>
                <img src="novaxHomepage.webp" alt="Nova X Gaming PC" className="w-full h-full object-cover object-center rounded-lg neon-border" />
                <div className="absolute bottom-4 right-4">
                  <Badge variant="success" className="mr-2">
                    NEW
                  </Badge>
                  <Badge variant="outline" className="bg-gaming-dark/80 backdrop-blur-sm">
                    PERFORMANCE MONSTER
                  </Badge>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gaming-dark to-[#14171f]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gaming-purple to-gaming-blue bg-clip-text text-transparent">
                ENGINEERED FOR EVERY NEED
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every component meticulously selected and tested for maximum performance and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gaming-card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="h-16 w-16 bg-gaming-purple/20 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-gaming-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">EXTREME PROCESSING</h3>
              <p className="text-gray-400">
                Latest generation CPUs with advanced cooling technology for unmatched performance.
              </p>
            </div>
            
            <div className="gaming-card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="h-16 w-16 bg-gaming-blue/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-gaming-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">LIMITLESS GRAPHICS</h3>
              <p className="text-gray-400">
                Top-tier GPUs that deliver stunning visuals and smooth frame rates at any resolution.
              </p>
            </div>
            
            <div className="gaming-card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="h-16 w-16 bg-gaming-green/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-gaming-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ROCK-SOLID RELIABILITY</h3>
              <p className="text-gray-400">
                Premium components backed by extensive testing and a comprehensive warranty.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Showcase Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gaming-blue to-gaming-purple bg-clip-text text-transparent">
                DESIGNED FOR VICTORY
              </span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="gaming-card p-6">
                    <AspectRatio ratio={16 / 9}>
                      <img src="/placeholder.svg" alt="Nova X RGB Lighting" className="object-cover w-full h-full rounded-lg" />
                    </AspectRatio>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold mb-2">RGB LIGHTING SYSTEM</h3>
                      <p className="text-gray-400">Fully customizable RGB lighting with dynamic effects.</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="gaming-card p-6">
                    <AspectRatio ratio={16 / 9}>
                      <img src="/placeholder.svg" alt="Nova X Cooling System" className="object-cover w-full h-full rounded-lg" />
                    </AspectRatio>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold mb-2">ADVANCED COOLING</h3>
                      <p className="text-gray-400">Multi-zone thermal design keeps components cool under pressure.</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="gaming-card p-6">
                    <AspectRatio ratio={16 / 9}>
                      <img src="/placeholder.svg" alt="Nova X Expansion" className="object-cover w-full h-full rounded-lg" />
                    </AspectRatio>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold mb-2">EXPANDABLE DESIGN</h3>
                      <p className="text-gray-400">Room to grow with your gaming needs and future upgrades.</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#14171f] to-gaming-dark">
        <div className="container mx-auto text-center">
          <div className="gaming-card max-w-4xl mx-auto p-12 bg-gradient-to-r from-gaming-purple/20 to-gaming-blue/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">FORGE YOUR GAMING LEGEND</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Build your custom Nova X gaming rig today and experience gaming like never before.
            </p>
            <Link to="/customize" className="gaming-btn text-lg px-8 py-4 group">
              START BUILDING
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gaming-purple/30">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>© 2025 Nova X Gaming Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Index;