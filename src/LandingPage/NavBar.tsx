
import { Badge, Button } from "@mantine/core";
import Hamburger from "./Hamburger";
import { IconChevronCompactDown, IconDeviceMobile } from '@tabler/icons-react';

const NavBar=()=>{
  
    return(
        <div className=" flex p-4 justify-between items-center">

        <div className="flex gap-3">
        <div><img src="/HexaLogo.svg" alt="logo"/></div>
        
   <Button variant="white" radius='xl' >Buy in noida <IconChevronCompactDown  /></Button>
   
        </div>
   <div className="flex font-semibold ">
   <Button variant="transparent" color="white" size="md" radius="xl" >For Byers</Button>
   <Button variant="transparent" color="white" size="md" radius="xl">For Tenants</Button>
   <Button variant="transparent" color="white" size="md" radius="xl">For Owners</Button>
   <Button variant="transparent" color="white" size="md" radius="xl"><IconDeviceMobile/>Download App</Button>
   
   </div>
   <div className="flex gap-3 items-center">
    
   <div className="px-2 py-1 rounded-3xl bg-white text-amber-900 ">Post Property <Badge color="green">Free</Badge></div>
   <Button variant="transparent" color="white" size="md" radius="xl">Login <IconChevronCompactDown  /></Button>
    <Hamburger/>
   </div>
        </div>
        
    )
}
export default NavBar;