/*
JavaScript: #F7DF1E (yellow)
Python: #3776AB (blue)
Java: #007396 (dark blue)
Ruby: #CC342D (red)
PHP: #4F5D95 (indigo)
C#: #68217A (purple)
Swift: #FFAC45 (orange)
Go: #00ADD8 (turquoise)
TypeScript: #3178C6 (azure)
Rust: #000000 (black)
*/

const stacks = [
  ["JavaScript & TypeScript", "bg-red-700 text-yellow-400"],
  ["C/C++", "bg-orange-400 text-green-300"],
  ["Node.js", "bg-yellow-300 text-blue-500"],
  ["Python", "bg-green-600 text-indigo-800"],
  ["React", "bg-blue-600 text-yellow-400"],
  ["Express.js, Flask", "bg-indigo-800 text-green-400"],
  ["MongoDB, PostgreSQL, MySQL", "bg-violet-600 text-red-800"],
];

const TechStack = () => {
  return (
    <>
      <div className="mockup-code mx-auto text-left mt-4">
        {stacks.map(([stack, code], idx) => {
          return (
            <pre
              data-prefix="$"
              className={`${code} text-xl font-bold`}
              key={idx}
            >
              <code>{stack}</code>
            </pre>
          );
        })}
      </div>
    </>
  );
};

export default TechStack;
