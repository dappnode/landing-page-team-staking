import Button from "./Button";
import Button2 from "./Button2";

export default function Benefits() {
  return (
    <div className="flex w-full flex-row px-20">
      <div className="flex  w-1/2 flex-col  justify-center gap-10">
        <p className="text-2xl font-bold">Empower</p>
        <h2 className="text-5xl leading-[4rem]">
          Unlock the Full Potential of Staking
        </h2>
        <p className="text-xl leading-10">
          At Team Staking, we design customized staking solutions tailored to
          your specific needs. With our full accompaniment and support, you'll
          never have to navigate the staking process alone. Benefit from
          improved rewards by joining Smooth, our Smoothing Pool.
        </p>
        <div className="flex flex-row gap-5">
          <Button>Learn More</Button>
          <Button2>Sign Up</Button2>
        </div>
      </div>
      <div className="flex h-[700px] w-1/2 items-center justify-center bg-slate-300">
        image placeholder
      </div>
    </div>
  );
}
