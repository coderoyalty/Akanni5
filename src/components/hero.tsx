import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import React from "react";
function Hero() {
  const heroRef = React.useRef<HTMLDivElement>(null!);
  return (
    <>
      <section
        ref={heroRef}
        className="hero min-h-screen bg-base-200/25 relative bg-gradient-to-br from-black/20 via-slate-900/20 to-zinc-800/20"
      >
        <div className="hero-content flex-col text-center z-10">
          <div className="space-y-2">
            <h1 className="max-w-3xl bg-gradient-to-br from-blue-800 to-purple-500 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
              Hello, I'm Akanni Emmanuel
            </h1>
            <p className="text-xl sm:text-3xl md:text-3xl">
              I'm a{" "}
              <span className="font-medium animate-pulse text-fuchsia-600">
                Software Engineer
              </span>
            </p>
            <div className="join mt-2">
              <a
                href="https://github.com/coderoyalty"
                className="btn btn-circle btn-ghost join-item"
              >
                <GitHubLogoIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/akanni-emmanuel/"
                className="btn btn-circle btn-ghost join-item"
              >
                <LinkedInLogoIcon className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/coderoyalty"
                className="btn btn-circle btn-ghost join-item"
              >
                <TwitterLogoIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
