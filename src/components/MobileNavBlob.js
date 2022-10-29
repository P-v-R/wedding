import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MobileNavBlob() {
  return (
    <div>
      <div className="bg-skyBlue py-20 md:hidden ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="my-20"
        >
          <Link to="/us" className=" z-40 text-darkGreen text-4xl border-b-2 p-4">
            Our Story
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default MobileNavBlob;
