import { motion } from "framer-motion";
import { useState } from "react";

interface faq {
  question: string;
  answer: string;
}

export default function FAQs() {
  const faqs: faq[] = [
    {
      question: "What is Ethereum staking?",
      answer:
        "Ethereum staking is the process of participating in the Ethereum network by holding and validating ETH tokens. It helps secure the network and earn rewards.",
    },
    {
      question: "How to stake Ethereum?",
      answer:
        "To stake Ethereum, you need to have a certain amount of ETH and use a staking service like Team Staking. They provide the hardware, ETH, and support needed for staking.",
    },
    {
      question: "What are the rewards?",
      answer:
        "By staking Ethereum, you can earn rewards in the form of additional ETH tokens. The amount of rewards depends on the amount of ETH you stake and the network's performance.",
    },
    {
      question: "Is staking safe?",
      answer:
        "Staking Ethereum is generally considered safe, but it does come with some risks. It's important to choose a reputable staking service like Team Staking to minimize these risks.",
    },
    {
      question: "What is Team Staking?",
      answer:
        "Team Staking is a turnkey solution that provides companies and communities with everything they need to start staking on Ethereum. This includes hardware, ETH, and educational workshops.",
    },
    {
      question: "How to get started?",
      answer:
        "To get started with staking on Ethereum using Team Staking, simply sign up on their website and follow their step-by-step instructions. They will guide you through the process.",
    },
    {
      question: "What is the minimum amount of ETH required to stake?",
      answer:
        "The minimum amount of ETH required to stake depends on the staking service you choose. Team Staking offers flexible options to accommodate different budgets.",
    },
    {
      question: "Can I unstake my ETH anytime?",
      answer:
        "Yes, you can unstake your ETH at any time. However, there may be a waiting period before you can access your funds again, depending on the staking service's terms.",
    },
    {
      question: "What happens if I unstake my ETH?",
      answer:
        "When you unstake your ETH, it will no longer be used for validating transactions on the Ethereum network. You will stop earning rewards, but you can access your funds.",
    },
    {
      question: "Is staking better than mining?",
      answer:
        "Staking and mining are two different ways to participate in the Ethereum network. Staking is considered more energy-efficient and accessible for individual users.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-10 px-5 lg:px-20" id="faqs">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <p className="text-center md:w-3/4 xl:w-1/2">
        Find answers to common questions about Ethereum staking and using Team
        Staking's services.
      </p>
      <div className=" mt-10 grid w-full grid-cols-1 gap-x-10 lg:grid-cols-2">
        {faqs.map((faq, i) => {
          return <div key={i}>{FaqCard(faq)}</div>;
        })}
      </div>
      ;
    </div>
  );
}

function FaqCard(faq: faq) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex w-full cursor-pointer flex-col gap-5 border-t-4 border-dappnodePurple py-10"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="flex flex-row justify-between">
        <h3>{faq.question}</h3>
        <p
          className={`mr-2  text-4xl ${isOpen ? "rotate-90" : "-rotate-90"} transition duration-300 ease-in-out`}
        >
          {"<"}
        </p>
      </div>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {faq.answer}
        </motion.p>
      )}
    </div>
  );
}
