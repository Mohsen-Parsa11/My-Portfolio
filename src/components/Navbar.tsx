import { NavLink } from "react-router-dom";
import Container from "./Container";
import menu from "../assets/menu.jpg";
import { useEffect, useRef } from "react";

function Navbar() {

  const Ref= useRef <HTMLDivElement>(null);
  
  const handleOpenMenu = () => {
    Ref.current?.classList.toggle("hidden")
    }
    useEffect(()=>{
      Ref.current?.classList.add("hidden")
    },[])

  return (
    <>
      <div className="bg-cyan-950 shadow py-4 sticky top-0 z-50">
        <Container>
          <div className="flex px-4 lg:px-0 justify-between items-center text-white">
            <div>
              <h1 className="text-2xl font-bold">
                Mohsen Parsa<span className="text-3xl text-orange-500">.</span>
              </h1>
            </div>
            <div className="hidden lg:flex lg:pl-96 space-x-6 text-white">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-sky-500" : "text-white"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-sky-500" : "text-white"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "text-sky-500" : "text-white"
                }
              >
                Education
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-sky-500" : "text-white"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "text-sky-500" : "text-white"
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-sky-500" : "text-white"
                }
              >
                Contact
              </NavLink>
            </div>

            <button  onClick={handleOpenMenu}>
              <img
                src={menu}
                alt=""
                className="lg:hidden w-8 rounded active:scale-95 cursor-pointer"
              />
            </button>
          </div>
        </Container>
      </div>

      {/* humburgur menu */}
      <div ref={Ref}>
      <div className=" lg:hidden flex flex-col space-y-6 justify-center top-16 left-10 right-10 items-center pt-10 pb-20 bg-cyan-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-sky-500" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-sky-500" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive ? "text-sky-500" : "text-white"
          }
        >
          Education
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-sky-500" : "text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-sky-500" : "text-white"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-sky-500" : "text-white"
          }
        >
          Contact
        </NavLink>
      </div>
      </div>
    </>
  );
}

export default Navbar;
