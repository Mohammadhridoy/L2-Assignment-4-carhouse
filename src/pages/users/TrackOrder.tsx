import { useSingleOrderQuery } from "@/redux/Api/orderApi";
import { useLocation } from "react-router-dom";
import {motion} from "framer-motion"
import { AiOutlineCheck } from "react-icons/ai";



const TrackOrder = () => {

    const {state} = useLocation()

    const {data} = useSingleOrderQuery(state, {refetchOnMountOrArgChange:true})

    const status = data?.data?.orderStatus
    const statusSteps = ["Pending", "Processing", "Shipped", "Delivered"]
    const currentStepIndex = statusSteps.indexOf(status)

return (
        <div>
            <h1 className="font-bold text-2xl  py-8 flex justify-center align-middle">Track Order Status</h1>

            <div className="flex items-center justify-center space-x-4 md:space-x-6 py-4">
           

           <div  >
                   <div className="relative w-full flex flex-col items-center">
                    
                      {/*Steps */}
                    <div className="flex justify-between w-full max-w-lg">
                        {statusSteps.map((step, index)=>(
                            <div key={index}>
                                <div  className="relative flex flex-col items-center ">
                               
                                { index!==0 &&(
                                    <motion.div 
                                    className="absolute top-5 w-full h-1 bg-gray-300"
                                    initial={{width:"0%"}}
                                    animate={{width: index <=currentStepIndex?"170%":"0%",
                                        backgroundColor: index<=currentStepIndex? "rgb(34 197 94)": "rgb(209 213 219)" }}

                                    transition={{duration:1, ease:"easeInOut"}} />
                                )

                                }

                                
                                <motion.div
                                className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10  text-white
                                    font-bold ${index<=currentStepIndex? "bg-green-500": "bg-gray-300"}  `}
                                    initial={{scale:0.8, opacity:0}}
                                    animate={{scale:1, opacity:1}}
                                    transition={{duration:0.5, delay:index*0.3}}>
                                       
                                       { index<=currentStepIndex?<AiOutlineCheck className="text-xl font-bold" /> : index+1}
                                       
                                    </motion.div>
                                   

                                </div>
                                 {/* step label  */}
                                 <p className="mt-3 text-[16px] px-5">{step}</p>

                            </div>
                            
                        ))}
                    </div>

                   
                     
                    {/* index <=currentStepIndex? 1.2: 1, */}


                        
                        
                   </div>
                   
                </div>
                
            
        
        </div>
        </div>
        
        
    );
};

export default TrackOrder;