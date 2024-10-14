import Image from "next/image";

export default function SkillBox({ skillText, showSkills, image, altText }) {
  return (
    <div class="container">
      <div class={`flip ${showSkills ? "flip-clicked" : ""}`}>
        <div className="front bg-[#00203FFF] flex justify-center items-center">
          <Image src={image} alt={altText} /> {/* Dynamic image */}
        </div>
        <div className="back bg-[#ADEFD1FF] flex justify-center items-center">
          <span className="lg:text-lg text-base font-bold text-[#00203FFF]">{skillText}</span>
        </div>
      </div>
    </div>
  );
}

// export default function SkillBox({ skillNumber, skillText, showSkills }) {
//   return (
//     <div class="container">
//       <div class={`flip ${showSkills ? "flip-clicked" : ""}`}>
//         <div className="front bg-[#00203FFF] flex justify-center items-center">
//           <span className="lg:text-lg text-base font-bold text-[#ADEFD1FF] ">{skillNumber}</span>
//         </div>
//         <div className="back bg-[#ADEFD1FF] flex justify-center items-center">
//           <span className="lg:text-lg text-base font-bold text-[#00203FFF]">{skillText}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
