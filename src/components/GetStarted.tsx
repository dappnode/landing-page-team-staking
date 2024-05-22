import { motion } from "framer-motion";
import Button from "./Button";
import Button2 from "./Button2";
export default function GetStarted() {
  const steps: { value: string; icon: React.ReactElement }[] = [
    {
      value: "Get in touch and let us know your needs",
      icon: <div className="h-10 w-10 rounded-full bg-black/10"></div>,
    },
    {
      value:
        "We co-create a full turnkey solution for you, bringing in the right partners per each situation",
      icon: <div className="h-10 w-10 rounded-full bg-black/10"></div>,
    },
    {
      value:
        "Kickstart with workshops and start your Team Staking journey immediately",
      icon: <div className="h-10 w-10 rounded-full bg-black/10"></div>,
    },
    {
      value: "Be supported all along the way by us and our partners",
      icon: <div className="h-10 w-10 rounded-full bg-black/10"></div>,
    },
  ];

  return (
    <motion.div
      className=" flex  w-full flex-col gap-5 px-5 lg:gap-10 lg:px-20 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h3>Staking, simplified</h3>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col gap-5 lg:w-1/2">
          <h2>Get started with Team Staking</h2>
          <div className="flex flex-row gap-5">
            <Button>Learn More</Button>
            <Button2>Sign Up</Button2>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-10 lg:w-1/2 lg:pl-10 lg:pt-0">
          {steps.map((step, i) => {
            return (
              <div key={i} className="flex flex-row gap-5 lg:gap-10">
                <div className="flex flex-col items-center gap-5">
                  <div>{step.icon}</div>
                  {i < steps.length - 1 && (
                    <div className="h-36 w-1 rounded-md bg-dappnodePurple"></div>
                  )}
                </div>
                <div className="flex flex-col lg:gap-3">
                  <p className="font-bold">Step {i + 1}:</p>
                  <p>{step.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
