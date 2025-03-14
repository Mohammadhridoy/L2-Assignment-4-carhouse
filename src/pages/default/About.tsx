import carImage2 from "../../assets/car4.png"
import carImage3 from "../../assets/carimages3.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const About = () => {
    return (
        <div>
            {/* Top section */}
            <div className="relative ">
                <img className="brightness-100" src={carImage2} alt="" />
                <h1 className=" absolute  left-[40rem] top-24 text-white font-bold text-8xl">LET'S </h1>
                  <h1 className=" font-serif absolute  left-[22rem] top-48 text-white font-bold text-9xl">  GO PLACES </h1> 
             
            </div>

            {/* middle section */}
            <div className="bg-[#eeece5] pb-6">
                <div className="pt-28 ">
                    <h1 className="text-center font-bold text-7xl">Inspired by what’s </h1>
                    <h1 className="text-center font-bold text-7xl mt-3 font-serif"> possible</h1>
                    
                    <div className="w-full  mt-10 md:flex justify-center align-middle ">
                   < p className="text-center w-2/5   font-mono font-medium " >Our passion is about giving people the freedom to explore their world and reach their full potential. Whether physically, through our dependable vehicles and innovative mobility solutions, or emotionally, 
                    through inspiring design and intimate experiences—our ever-evolving desire to help will never end.</p>
                    </div>
                </div>

                {/* accordin and images section */}
                <div className="md:mt-36 flex  justify-end align-middle gap-20">
                    <div>
                    <h1 className=" md:ml-20 font-bold text-7xl">NEW CAR PHILOSOPHY</h1>
                    {/* accordin */}
                        <div className="md:ml-20 md:w-2/3">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-xl">You are what drives us</AccordionTrigger>
                                <AccordionContent className="md:w-2/4 font-thin  ">
                                We create vehicles by listening and responding to you. Why? Because it’s our belief that our cars should 
                                do more than help you go places on the road; they should also help you go places in life.
                                </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                <AccordionTrigger className="text-xl">Built for how you live</AccordionTrigger>
                                <AccordionContent className="md:w-2/4 font-thin  ">
                                We make vehicles that respond to, and anticipate,
                                 your needs for the way you live. Find out more about how our advanced safety technologies
                                 and operations are improving the world we live in today, and long into tomorrow.
                                </AccordionContent>

                                </AccordionItem>
                                <AccordionItem value="item-3">

                                <AccordionTrigger className="text-xl">Drive change, your way</AccordionTrigger>
                                <AccordionContent className="md:w-2/4 font-thin  ">
                                Beyond Zero is Toyota’s vision to reach beyond carbon
                                 neutrality with our products, services, and operations; and
                                  find new ways to make a positive impact on our planet and society.
                                   We currently offer more low and zero emissions vehicles
                                </AccordionContent>
                                </AccordionItem>
                            
                            </Accordion>


                        </div>

                    </div>


                    {/* image section */}
                    <div>
                    <img className="md:w-3/4  rounded-lg" src={carImage3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;