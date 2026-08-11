import Image from "next/image";
import Link from "next/link";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh container mx-auto flex flex-col pt-6">
      <header>
        <Link className="w-full flex items-center gap-1" href="/">
          <Image
            src="/logos/flowbase.svg"
            alt="Brand logo"
            width={30}
            height={30}
          />

          <span className="text-2xl font-medium text-zinc-700 hover:text-zinc-900 tracking-normal">
            flowbase
          </span>
        </Link>
      </header>
      {children}
    </div>
  );
}

export default AuthLayout;
