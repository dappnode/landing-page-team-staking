import { motion } from "framer-motion";
import Button from "./Button";
import Button2 from "./Button2";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-10 flex h-full flex-col lg:mt-0 xl:flex-row">
        <div className="flex flex-col justify-center gap-8 px-5 lg:w-5/6 lg:px-20 xl:w-1/2 xl:py-32">
          <h1>
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
        <div className="mt-20 flex flex-1 items-center justify-center bg-slate-300 p-32 xl:mt-0 xl:w-1/2">
          {" "}
          placeholder image
        </div>
      </div>
    </motion.div>
  );
}
