import React from "react";

export default function Button2({
  children,
  onClick = () => undefined,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="decoration-dappodePurple group  flex h-10  flex-row items-center  gap-3 pt-1 text-dappnodePurple transition-all duration-300 ease-in-out "
      onClick={() => onClick()}
    >
      <div className="mt-2  text-xl">
        {children}
        <span className=" block h-0.5 max-w-0 rounded-lg bg-dappnodePurple transition-all duration-300 group-hover:max-w-full"></span>
      </div>
    </button>
  );
}
