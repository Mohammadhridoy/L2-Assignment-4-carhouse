import { LoginForm } from '@/components/ui/login-form';
import carImage from '../../assets/carimage6.png'





const Banner = () => {
    return (
        <div>
<section
  >
    {/* image section*/}

<div className="relative h-[300px] md:h-[546px] ">
    <img  className="bg-auto h-full" src={carImage}  ></img>
    

<div className=" hidden px-6 md:px-8 lg:px-12 lg:block ">

<LoginForm  className='  lg:w-[24%]  lg:absolute top-12 left-28'/>

</div>
</div> 
  




</section>




        </div>
         
        
    );
};

export default Banner;