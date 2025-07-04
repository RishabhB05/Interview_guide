"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testmonial";


export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-12"> Powerful Features for Your Career Growth</h2>
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {features.map((feature, index) => {
                  return(
                   <Card key={index} className={"border-2 hover:border-primary transition-colors duration-300"}>
                      <CardContent className={"pt-6 text-center flex flex-col items-center"}>
                        <div className="flex flex-col items-center justify-center">
                          {feature.icon}
                           <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                           <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
             </div>
        </section>


       <section className="w-full py-12 md:py-24  bg-muted/50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-4xl font-bold">50+</h3>
                  <p className="text-muted-foreground">Industries Covered</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-4xl font-bold">1000+</h3>
                  <p className="text-muted-foreground">Interview Questions</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-4xl font-bold">95%</h3>
                  <p className="text-muted-foreground">Success Rate</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-4xl font-bold">24/7</h3>
                  <p className="text-muted-foreground">AI support</p>
                </div>
          </div>
         </div>
       </section>

       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4"> How It Works</h2>
              <p className="text-muted-foreground">Four Simple steps to accelerate your career growth</p>
              </div>
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {howItWorks.map((item, index) => {
                  return(
                    <div key = {index}
                      className="flex flex-col items-center text-center space-y-4">
                       <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"> {item.icon} </div>
                       <div className="font-semibold text-xl">{item.title}</div>
                       <div className="text-muted-foreground">{item.description}</div>
                    </div>
                  );
                })}
              </div>
             </div>
        </section>

         <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What our users say</h2>
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {testimonial.map((testi, index) => {
                  return(
                   <Card key={index} className={"bg-background"}>
                      <CardContent className={"pt-6 "}>
                        <div >
                          <div className="flex items-center space-x-4" >
                            <div >
                               <Image className="rounded-full object-cover border-2 border-primary/20" width={40} height={40} src={testi.image} alt= {testi.author} />
                              </div>
                            <div>
                              <p className="font-semibold">{testi.author}</p>
                              <p className="text-sm text-muted-foreground">{testi.role}</p>
                              <p className="text-sm text-primary">{testi.company}</p>
                            </div>
                          </div>
                          <blockquote></blockquote>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
             </div>
        </section>


        </div>
    </div>
  );
}