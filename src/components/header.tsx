export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <header className="sticky top-0 max-w-[720px] mx-auto p-2 flex justify-between">
          {/*Logo & Name*/}
          <a
            href="/"
            className="btn btn-ghost text-xl dark:text-slate-50 underline"
          >
            CodeRoyalty
          </a>
          {/*Navigation Bar*/}
          <nav className="max-md:fixed bottom-0 left-0 right-0">
            <ul className="flex justify-center join gap-2 p-2 max-md:bg-slate-800">
              <li className="text-base font-normal join-item">
                <a href="#about" className="btn btn-ghost">
                  About
                </a>
              </li>
              <li className="text-base font-normal join-item">
                <a href="#projects" className="btn btn-ghost">
                  Projects
                </a>
              </li>
              <li className="text-base font-normal join-item">
                <a href="#portfolio" className="btn btn-ghost">
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
