import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";
function Hero() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null!);
  const heroRef = React.useRef<HTMLDivElement>(null!);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const banner = heroRef.current;

    const ctx = canvas.getContext("2d")!;

    let dots: { x: number; y: number; size: number; color: string }[] = [];
    let arrayColors = ["#ded", "#54f4d4", "#a96f91", "#ed5a68", "#694337"];
    for (let index = 0; index < 20; index++) {
      dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random() * 5)],
      });
    }
    const drawDots = () => {
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    drawDots();

    const onMouseMove = (event: MouseEvent) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
      let mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top,
      };
      dots.forEach((dot) => {
        let distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const onMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    const onWindowResize = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;

      dots = [];
      for (let index = 0; index < 50; index++) {
        dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * 5)],
        });
      }
      drawDots();
    };

    banner.addEventListener("mousemove", onMouseMove);
    banner.addEventListener("mouseout", onMouseOut);
    window.addEventListener("resize", onWindowResize);

    return () => {
      banner.removeEventListener("mousemove", onMouseMove);
      banner.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <>
      <div ref={heroRef} className="hero min-h-screen bg-base-200 relative">
        <div className="hero-content flex-col text-center z-10">
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

        <canvas
          ref={canvasRef}
          className="absolute w-full h-full top-0 left-0 z-0 pointer-events-none"
        ></canvas>
      </div>
    </>
  );
}

export default Hero;
