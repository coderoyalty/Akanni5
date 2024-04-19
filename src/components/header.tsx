export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <header className="sticky top-0 max-w-[720px] mx-auto p-2 flex justify-between">
          {/*Logo & Name*/}
          <h1 className="text-xl dark:text-slate-50 underline">CodeRoyalty</h1>
          {/*Navigation Bar*/}
          <nav className="max-md:fixed bottom-0 left-0 right-0">
            <ul className="flex justify-center gap-2 p-2 max-md:bg-slate-800">
              <li className="text-base font-normal">
                <a href="#about">About</a>
              </li>
              <li className="text-base font-normal">
                <a href="#services">Services</a>
              </li>
              <li className="text-base font-normal">
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
