

const SummaryCard = () => {
    return (
        <div >
        < div className="w-64 h-52 shadow-sm rounded-lg bg-white">
         <h1 className="p-4  text-xl font-semibold border-b border-gray-300">Summary</h1>

        <div className="px-3 flex  justify-between font-semibold ">
        <h1 className=" py-2  text-gray-400 font-semibold   ">Price</h1>
        <h1 className="  py-2   ">dddddd</h1>
        </div>

        <div className="px-3 flex border-b-2 pb-2  justify-between font-semibold ">
        <h1 className=" py-2  text-gray-400 font-semibold   ">Quantity</h1>
        <h1 className="  py-2   ">dddddd</h1>
        </div>

        <div className="px-3 flex  justify-between font-semibold ">
        <h1 className=" py-2  text-gray-400 font-semibold   ">Total Price</h1>
        <h1 className="  py-2   ">dddddd</h1>
        </div>

        

         </div>
         
     </div>
    );
};

export default SummaryCard;