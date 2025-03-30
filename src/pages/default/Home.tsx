import Banner from "@/component/Banner/Banner";
import Extra from "@/component/Extra";
import FeaturedProduct from "@/component/Featured/FeaturedProduct";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <Extra></Extra>
        </div>
    );
};

export default Home;