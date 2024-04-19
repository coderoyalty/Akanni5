import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col text-center">
          <div className="space-y-2">
            <h1>
              Hello, I'm{" "}
              <span className="inline-block bg-pink-700 max-sm:bg-transparent hover:bg-transparent hover:text-pink-600 transition-all delay-200">
                Akanni Emmanuel
              </span>
            </h1>
            <p>
              I'm a{" "}
              <span className="text-2xl font-medium animate-pulse text-fuchsia-600">
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
      </div>
    </>
  );
}

export default Hero;
