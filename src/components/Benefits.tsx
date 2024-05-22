export default function Benefits() {
  const benefits: { value: string; icon: React.ReactElement }[] = [
    {
      value: "Customized staking solutions for your unique needs",
      icon: <div className="h-10 w-10 rounded-full bg-black/10"></div>,
    },
    {
      value: "Full accompaniment and support throughout the staking journey",
      icon: <div className="h-10 w-10 rounded-full bg-black/10"></div>,
    },
    {
      value: "Join Smooth, our Smoothing Pool for up to +120% more rewards",
      icon: <div className="h-10 w-10 rounded-full bg-black/10"></div>,
    },
  ];
  return (
    <div
      className="flex w-full flex-col gap-10 px-5 lg:flex-row lg:gap-0 lg:px-20"
      id="benefits"
    >
      <div className="flex  flex-col justify-center  gap-10 lg:w-1/2">
        <div className="flex flex-col gap-5 lg:gap-10">
          <h3>Empower</h3>
          <h2>Unlock the Full Potential of Staking</h2>
        </div>
        <p className="leading-10 lg:pr-10">
          At Team Staking, we design customized staking solutions tailored to
          your specific needs. With our full accompaniment and support, you'll
          never have to navigate the staking process alone. Benefit from
          improved rewards by joining Smooth, our Smoothing Pool.
        </p>
        <div className="flex flex-col gap-10">
          {benefits.map((benefit, i) => {
            return (
              <div className="flex flex-row items-center" key={i}>
                {benefit.icon}
                <p className="pl-5 text-lg lg:text-xl">{benefit.value}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex min-h-[500px] flex-1  items-center justify-center bg-slate-300 lg:w-1/2">
        image placeholder
      </div>
    </div>
  );
}
