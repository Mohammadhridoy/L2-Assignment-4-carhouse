import { GoVerified } from "react-icons/go";
import { FaCarSide } from "react-icons/fa6"
import { MdLocalOffer } from "react-icons/md"
import { FaCodeCompare } from "react-icons/fa6";

const Extra = () => {



 const  extra = [
    {
    icon:<GoVerified />,
    title: "India’s #1",
    description:"Largest Auto portal"

    },
    {
    icon:<FaCarSide />,
    title:" Car Sold",
    description:"Every 4 minute"
    },

    {
    icon:<MdLocalOffer />,
    title: "Offers",
    description:"Stay updated pay less"
    },
    {
    icon:<FaCodeCompare />,
    title: "Compare",
    description:"Decode the right car"
    },


]



    return (
        <div className="  flex  flex-wrap align-middle lg:px-14 py-10  flex-row lg:gap-36" >
           {
            extra?.map((item)=>
                <div className="flex  justify-start align-middle gap-5" key={item?.title}>
                    <div className="text-4xl lg:text-6xl font-bold">{item?.icon}</div>
                <div>
                    <h1 className="text-xl lg:text-2xl font-bold ">{item?.title}</h1>
                    <h4>{item?.description}</h4>
                </div>
                </div>
            
            )
           }
            
        </div>
    );
};

export default Extra;