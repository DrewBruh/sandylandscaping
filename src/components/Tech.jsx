// Import the necessary libraries and components
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

// The Tech component renders a section containing technology icons and their names
const Tech = () => {
  return (
    <>
      {/* Render a header containing the text "Technologies" */}
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      {/* Render a grid of technology icons and their names */}
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* Render the technology icon using the BallCanvas component */}
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

// Export the Tech component wrapped with the SectionWrapper higher-order component
export default SectionWrapper(Tech, "");
