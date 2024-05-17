import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";
import Button2 from "./Button2";

export default function Hero() {
  return (
    <motion.div
      className=" h-[80vh] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full flex-row ">
        <div className="flex w-1/2 flex-col justify-center gap-10 px-20">
          {" "}
          <h1 className="text-6xl leading-[5rem] ">
            Everything you need to start staking now. <br />
            <span className="text-dappnodePurple"> Do It Yourself</span>, but
            with our support.
          </h1>
          <p className="text-2xl leading-10">
            Team Staking is the premier turnkey solution for Ethereum staking.
            We provide you with everything you need to start staking in-house:
            you'll never be better accompanied to start staking and earning
            rewards.
          </p>
          <div className="flex flex-row gap-8">
            {" "}
            <Button>Learn More</Button>
            <Button2>Sign Up</Button2>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center bg-slate-300">
          {" "}
          placeholder image
        </div>
      </div>
    </motion.div>
  );
}
