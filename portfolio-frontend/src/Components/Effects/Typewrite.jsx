// import React, { useEffect, useState } from "react";

// const Typewrite = () => {
//   const line = [
//     "Software Engineer",
//     "MERN Stack Developer",
//     "Programmer",
//     "Tech Enthusiast",
//   ];

//   const [currentLine, setCurrentLine] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [removeLine, setRemoveLine] = useState(false);

//   useEffect(() => {
//     const fullText = line[currentLine];
//     let speed = removeLine ? 100 : 150;

//     const timeout = setTimeout(() => {
//       if (!removeLine) {
//         setDisplayText(fullText.substring(0, displayText.length + 1));

//         if (displayText === fullText) {
//           setRemoveLine(true);
//           // pause before deleting
//           speed = 2000;
//         }
//       } else {
//         setDisplayText(fullText.substring(0, displayText.length - 1));

//         if (displayText === "") {
//           setRemoveLine(false);
//           setCurrentLine((prev) => (prev + 1) % line.length);
//         }
//       }
//     }, speed);

//     return () => clearTimeout(timeout);
//   }, [displayText, removeLine, currentLine]);

//   return (
//     <div className="text-4xl font-bold whitespace-pre text-blue-500">
//       {displayText}
//       <span>|</span>
//     </div>
//   );
// };

// export default Typewrite;
