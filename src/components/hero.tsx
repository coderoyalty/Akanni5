function Hero() {
  return (
    <>
      <div className="min-h-[100dvh] flex justify-center items-center">
        <main className="space-y-2">
          <h1>
            Hello, I'm{" "}
            <span className="inline-block bg-pink-700 max-sm:bg-transparent hover:bg-transparent hover:text-pink-600 transition-all delay-200">
              Akanni Emmanuel
            </span>
          </h1>
          <p>
            I'm a{" "}
            <span className="text-xl font-medium animate-pulse text-fuchsia-600">
              Backend Developer
            </span>
          </p>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white inline-block cursor-pointer">
            View My Work
          </button>
        </main>
      </div>
    </>
  );
}

export default Hero;
