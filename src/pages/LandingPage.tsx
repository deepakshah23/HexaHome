import HeroSection from "../LandingPage/HeroSection";
import Services from "../LandingPage/Services";



const LandingPage=()=>{
  
    return(
       <div>
        <HeroSection/>
        <div className="mb-10 mx-10">
            <div className="text-2xl font-bold p-10">Our Excelent Services</div>
            <Services/>
        </div>
       </div>
        
    )
}
export default LandingPage;