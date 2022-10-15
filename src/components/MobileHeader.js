import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { useState } from "react";
import { motion } from "framer-motion";

function MobileHeader() {
  //state variables for the Modal State
  const [showSideNav, setShowSideNav] = useState(true);

  const handleBtnClick = (e) => {
    console.log("hey!!!");
    setShowSideNav((prev) => !prev);
  };

  if (showSideNav) {
    return (
      <StickyBox className="md:hidden z-10 bg-base">
        <div className="fixed sticky md:border-b md:border-black pt-2 pb-4  text-olive">
          <div className="absolute ml-4 mt-3">
            <div className="text-5xl" onClick={(e) => handleBtnClick(e)}>
              <svg
                className="w-6 h-6 mx-auto"
                viewBox="0 0 85 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.99 40.743C73.6066 40.743 81.4037 32.9459 81.4037 23.3338V22.1946C81.4037 21.6078 81.8786 21.1363 82.462 21.1363H83.7517V62.7288H82.462C81.8792 62.7288 81.4037 62.2533 81.4037 61.6705V60.5313C81.4037 50.9192 73.611 43.1266 63.9989 43.1266H47.1646C45.0329 43.1266 43.3012 44.8583 43.3012 46.99V63.8243C43.3012 73.4364 51.0938 81.2291 60.7059 81.2291H61.854C62.4369 81.2291 62.9123 81.7045 62.9123 82.2874V83.5771H21.3109V82.2874C21.3109 81.704 21.7824 81.2291 22.3692 81.2291H23.5084C33.1205 81.2291 40.9176 73.4319 40.9176 63.8154V46.99C40.9176 44.8585 39.1905 43.1266 37.0542 43.1266H20.2154C10.6032 43.1266 2.81062 50.9192 2.81062 60.5313V61.6705C2.81062 62.2533 2.33515 62.7288 1.75232 62.7288H0.45372V21.1363H1.75232C2.3357 21.1363 2.81062 21.6078 2.81062 22.1946V23.3382C2.81062 32.9503 10.6032 40.743 20.2154 40.743H37.0542C39.1903 40.743 40.9176 39.0157 40.9176 36.8796V20.0452C40.9176 10.4286 33.1204 2.63601 23.5084 2.63601H22.3692C21.783 2.63601 21.3109 2.16165 21.3109 1.57326V0.279114H62.9123V1.57326C62.9123 2.1611 62.4363 2.63601 61.854 2.63601H60.7059C51.0938 2.63601 43.3012 10.4286 43.3012 20.0408V36.8796C43.3012 39.0159 45.0331 40.743 47.1646 40.743H63.99Z"
                  fill="#719259"
                  stroke="#719259"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
          <Link to="/" className="text-4xl md:text-6xl text-olive pb-2">
            Anne & Perry
          </Link>
        </div>
      </StickyBox>
    );
  } else {
    return (
      <StickyBox className="md:hidden z-10 bg-base">
        <div className="fixed sticky md:border-b md:border-black pt-2 pb-4  text-olive">
          <div className="absolute ml-4 mt-3">
            <div className="text-5xl" onClick={(e) => handleBtnClick(e)}>
            <svg
                className="w-6 h-6 mx-auto"
                viewBox="0 0 85 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.99 40.743C73.6066 40.743 81.4037 32.9459 81.4037 23.3338V22.1946C81.4037 21.6078 81.8786 21.1363 82.462 21.1363H83.7517V62.7288H82.462C81.8792 62.7288 81.4037 62.2533 81.4037 61.6705V60.5313C81.4037 50.9192 73.611 43.1266 63.9989 43.1266H47.1646C45.0329 43.1266 43.3012 44.8583 43.3012 46.99V63.8243C43.3012 73.4364 51.0938 81.2291 60.7059 81.2291H61.854C62.4369 81.2291 62.9123 81.7045 62.9123 82.2874V83.5771H21.3109V82.2874C21.3109 81.704 21.7824 81.2291 22.3692 81.2291H23.5084C33.1205 81.2291 40.9176 73.4319 40.9176 63.8154V46.99C40.9176 44.8585 39.1905 43.1266 37.0542 43.1266H20.2154C10.6032 43.1266 2.81062 50.9192 2.81062 60.5313V61.6705C2.81062 62.2533 2.33515 62.7288 1.75232 62.7288H0.45372V21.1363H1.75232C2.3357 21.1363 2.81062 21.6078 2.81062 22.1946V23.3382C2.81062 32.9503 10.6032 40.743 20.2154 40.743H37.0542C39.1903 40.743 40.9176 39.0157 40.9176 36.8796V20.0452C40.9176 10.4286 33.1204 2.63601 23.5084 2.63601H22.3692C21.783 2.63601 21.3109 2.16165 21.3109 1.57326V0.279114H62.9123V1.57326C62.9123 2.1611 62.4363 2.63601 61.854 2.63601H60.7059C51.0938 2.63601 43.3012 10.4286 43.3012 20.0408V36.8796C43.3012 39.0159 45.0331 40.743 47.1646 40.743H63.99Z"
                  fill="#719259"
                  stroke="#719259"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
          {/* <Link to="/us" className="text-4xl md:text-6xl text-olive pb-2 mr-4">
            Us
          </Link> */}
          <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 0.2 }}
          href="/us"
          className="text-4xl md:text-6xl text-olive pb-2 ml-4 cursor-pointer border-b-2 border-base my-auto pt-10"
        >
          us
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 0.3 }}
          href="/lagniappe"
          className="text-4xl md:text-6xl text-olive pb-2 ml-4 cursor-pointer border-b-2 border-base my-auto pt-10 "
        >
          Lagniappe
        </motion.a>
          {/* <Link
            to="/lagniappe"
            className="text-4xl md:text-6xl text-olive pb-2 ml-4"
          >
            Lagniappe
          </Link> */}
        </div>
      </StickyBox>
    );
  }
}

export default MobileHeader;