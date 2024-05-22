import { motion } from "framer-motion";
import Button from "./Button";
import Button2 from "./Button2";

export default function Basics() {
  return (
    <motion.div
      className="flex w-full flex-col gap-20 px-5 text-center lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-[700px] items-center justify-center bg-slate-300">
        {" "}
        image placeholder
      </div>
      <div className="flex h-2/5 flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-5 lg:gap-10">
          <h3>Unlock the Power of Staking with Team Staking</h3>
          <h2>
            A Complete Modular Solution <br />
            Provided by Team Staking
          </h2>
        </div>
        <p className="leading-10 lg:w-2/3 xl:w-1/2">
          Team Staking offers a comprehensive solution for teams and communities
          looking to start staking on Ethereum. Our full stack of operations
          includes everything you need, from hardware to ETH procurement, along
          with ongoing support and educational workshops. With Team Staking, you
          can unlock the power of staking and maximize your earnings in the
          world of cryptocurrency. Join us today and take your staking game to
          the next level.
        </p>
        <div className="flex flex-row gap-5">
          <Button>Learn More</Button>
          <Button2>Sign Up</Button2>
        </div>
      </div>
    </motion.div>
  );
}
