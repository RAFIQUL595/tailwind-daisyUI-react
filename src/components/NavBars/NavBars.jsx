import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const NavBars = () => {
  const [open, setOper] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Not Found", path: "*" },
  ];
  return (
    <nav>
      <div className="text-3xl md:hidden p-4" onClick={() => setOper(!open)}>
        {open === true ? <IoMdClose></IoMdClose> : <HiMenuAlt1></HiMenuAlt1>}
      </div>
      <ul
        className={`md:flex absolute p-5 duration-200
        ${open ? "top-7" : "-top-60"}
        `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBars;
