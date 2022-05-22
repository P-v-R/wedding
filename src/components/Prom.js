import React from "react";
import { motion } from "framer-motion";

function Prom() {
  return (
    <div>
      <div className="md:w-1/2 mx-auto rounded-md px-10 pb-10">
        <p className="text-gray-400 md:mx-2 py-4">5/24/11, 5:28 PM</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="border w-3/4 md:w-2/3 p-2 rounded-xl text-left my-2 bg-lightPink"
        >
          yeaah i am! i dont have a date since i broke up with my boyfriend, but
          i hope i can find one in time haha. either way im excited
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="border w-3/4 md:w-2/3 p-2 rounded-xl text-left ml-auto my-2 bg-skyBlue"
        >
          Oh im sure you can. It cant be to hard for you to find a prom date!
          dont worry about it, whatever happens it will be awesome!
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7 }}
          className="border w-3/4 md:w-2/3 p-2 rounded-xl text-left my-2 bg-lightPink"
        >
          haha youre sweet thanks! you would be surprised! haha you would think
          it would be easy, but there are so few people at my school its nearly
          impossible. plus all of my friends are in relationships
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 10 }}
          className="border w-3/4 md:w-2/3 p-2 rounded-xl text-left ml-auto my-2 bg-skyBlue"
        >
          Yeah i know how the whole friends in relationships is. it sucks but
          you will find the perfect date just keep looking!
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 13 }}
          className="border w-3/4 md:w-2/3 p-2 rounded-xl text-left my-2 bg-lightPink"
        >
          haha oh thanks! We were trying to come up with dates for me and my
          sister mentioned you... probably why you were in my dream??
          hahahahahaha
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 15 }}
          className="border w-3/4 md:w-2/3 p-2 rounded-xl text-left ml-auto my-2 bg-skyBlue"
        >
          yeah when ever I talk to someone before bed i tend to dream about
          them! Your prom date is all your decision=]
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 18 }}
          className="border w-3/4 md:w-2/3 p-2 rounded-xl text-left my-2 bg-lightPink"
        >
          haha i do too! all of the time! well in that case, want to go?
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 20 }}
          className="border w-3/4 md:w-2/3 p-2 rounded-xl text-left ml-auto my-2 bg-skyBlue"
        >
          I would be honored!
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 22 }}
          className="border w-3/4 md:w-2/3 p-2 rounded-xl text-left my-2 bg-lightPink"
        >
          haha oh im so glad! its next thursday
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 23 }}
          className="border w-3/4 md:w-2/3 p-2 pb-1 rounded-xl text-left ml-auto my-2 bg-skyBlue"
        >
          What you doin this weekend??
        </motion.div>
      </div>
    </div>
  );
}

export default Prom;
