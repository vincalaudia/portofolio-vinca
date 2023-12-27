import { TypeAnimation } from "react-type-animation";

const TextEffects = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "A Coder",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "A UX Researcher",
        1500,
        "A Product Designer",
        1500,
        "A Data Analyst",
        1500,
      ]}
      speed={50}
      className="text-[3rem] md:text-[6rem] text-[#ffffff] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffects;
