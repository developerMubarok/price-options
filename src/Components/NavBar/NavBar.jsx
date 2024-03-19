import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu ,IoCloseSharp } from "react-icons/io5";




const NavBar = () => {
  const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/contact', name: 'Contact' }
      ];
      
    return (
        <nav className="text-black p-6">
           <div className="md:hidden text-3xl " onClick={()=> setOpen(!open)}>
            {
              open === true ? <IoCloseSharp></IoCloseSharp> :
              <IoMenu className=""></IoMenu>
            }
          
           </div>
          <ul className={`md:flex duration-1000 absolute md:static
          ${open ? 'top-16' : '-top-60'}
          bg-orange-500 px-6 `}>
          {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
          </ul>
        </nav>
    );
};

export default NavBar;