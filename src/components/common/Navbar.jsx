// import React from "react";
// import { Link } from "react-router-dom";
// import navLogo from "../../assets/images/nanotechnology.png";
// import { Button } from "../../components/ui/Button";
// import { BorderBeam } from "../../components/ui/BorderBeam";

// function NavBar() {
//   return (
//     <div className="fixed z-50 w-screen px-16 py-3 backdrop-blur-md shadow-md flex items-center justify-between">
//       <div className="flex items-center justify-between gap-1">
//         <img src={navLogo} alt="nav-logo" width="27px" />
//         <p className="text-md font-semibold dark:text-cyan-500">SudoGeeks</p>
//       </div>
//       <div className="flex items-center justify-between gap-5  w-130">
//         <div className="w-full">
//           <ul className="flex items-center justify-around text-gray-500">
//             <li>
//               <Link
//                 to="/"
//                 className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/features"
//                 className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
//               >
//                 Features
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="w-35">
//           {/* <Button
//             asChild
//             className="px-7 py-3 bg-[#262626] text-[#FFFFFF] font-semibold rounded-full hover:border-none hover:rounded-full hover:bg-[#FFFFFF] hover:text-black"
//           >
//             <Link to="/login">Sign In →</Link>
//           </Button> */}
          
//           {/* <Button
//             className="relative overflow-hidden text-white border-none"
//             size="lg"
//             variant="outline"
//           >
//             Sign In →
//             <BorderBeam
//               size={40}
//               initialOffset={20}
//               className="from-transparent via-yellow-500 to-transparent"
//               transition={{
//                 type: "spring",
//                 stiffness: 60,
//                 damping: 20,
//               }}
//             />
//           </Button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;


import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../../assets/images/nanotechnology.png";
import { BorderBeam } from "../../components/ui/BorderBeam";

function NavBar() {
  return (
    <div className="fixed z-50 w-screen px-6 py-3 md:px-16 backdrop-blur-md shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={navLogo} alt="nav-logo" width="27px" />
        <p className="text-md font-semibold dark:text-cyan-500">SudoGeeks</p>
      </div>

      <ul className="hidden md:flex items-center gap-6 text-gray-500">
        <li>
          <Link
            to="/"
            className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/features"
            className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="relative ml-4">
        <Link
          to="/login"
          className="relative px-6 py-2 text-sm font-semibold text-white border border-white/30 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Sign In →
          <BorderBeam
            size={40}
            initialOffset={20}
            className="from-transparent via-yellow-500 to-transparent"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
