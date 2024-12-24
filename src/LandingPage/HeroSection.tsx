import { Divider, Tooltip } from "@mantine/core";
import NavBar from "../LandingPage/NavBar";
import { IconChevronCompactDown, IconCurrentLocation, IconHomeFilled, IconMapPinFilled } from "@tabler/icons-react";
const HeroSection=()=>{
    return(
        <div className="hero-section text-white text-center ">
       <NavBar/>
       <div className="font-bold text-3xl mt-10 ">
        <div>Ghar Aapka... Khoz hamari</div>
        <div>TRUSTED PLACE TO BUY, SELL, OR RENT PROPERTIES IN INDIA</div>
       </div>
       <div className="font-bold  p-3 bg-blue-900 bg-opacity-70  flex gap-5 justify-center mt-5 rounded-full max-w-[40%] mx-auto">
       <Tooltip label="Buy">
      <button>Buy</button>
    </Tooltip>
    <Tooltip label="Plots">
      <button>Plots/Lands</button>
    </Tooltip>
    <Tooltip label="Rent">
      <button>Rent</button>
    </Tooltip>
    <Tooltip label="PG">
      <button>PG/Hostel</button>
    </Tooltip>
    <Tooltip label="Projects">
      <button>Projects</button>
    </Tooltip>
    <Tooltip label="commercial">
      <button>Commercial</button>
    </Tooltip>
       </div>
       <div className="pt-3 pb-[200px]">
       <div className="p-1 rounded-full bg-white  text-black flex justify-between max-w-[50%] mx-auto h-[70px] items-center">
        <div className="flex gap-2 justify-center"><IconHomeFilled />Apartments, Buildings, Homes,PG <IconChevronCompactDown  /> </div>
        <Divider orientation="vertical" size='md'/>
        <div className="flex gap-2">
            <IconMapPinFilled/>
            <input type="text" placeholder="Type to search city, locality and Area" />  
        </div>
        <div className="flex gap-2 items-center"><IconCurrentLocation stroke={2} />
        <div className="p-3 rounded-full w-[100px] bg-blue-600 text-2xl text-white font-bold ">Search</div></div>

       </div>
       </div>
       </div>
        
    )
}
export default HeroSection;