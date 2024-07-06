import Services from "../Services/Services";
import AboutComponent from "./AboutComponent";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutComponent/>
            <Services/>
        </div>
    );
};

export default Home;