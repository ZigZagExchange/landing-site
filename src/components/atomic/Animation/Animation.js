import React, { useEffect } from "react";
// import Anime from 'react-anime';
import anime from "animejs";

export const ANIME_DURATION = 2000;
export const ANIME_DELAY_PE = 900;

const Animation = ({
  className = "",
  transOut = false,
  nameSpace = "anime",
  index = 0,
  duration = ANIME_DURATION,
  delay = ANIME_DELAY_PE,
  type,
  children,
}) => {
  const animationRef = React.useRef(null);

  useEffect(() => {
    let options = {
      targets: `#${nameSpace}-${index}`,
      duration: ANIME_DURATION,
      opacity: !transOut ? [0, 1] : [1, 0],
      delay: () => index * delay,
      direction: "normal",
      zIndex: {
        value: [1, 5],
        round: true,
      },
      easing: !transOut ? "easeOutCubic" : "easeInCubic",
    };

    switch (type) {
      case "slide-down":
        options.translateY = !transOut ? ["-10px", "0px"] : ["0px", "-10px"];
        break;
      case "slide-up":
        options.translateY = !transOut ? ["10px", "0px"] : ["0px", "10px"];
        options.opacity = !transOut ? ["0", "1"] : ["1", "0"];
        break;
      case "slide-right":
        options.translateX = !transOut ? ["-10px", "0px"] : ["0px", "-10px"];

        break;
      case "slide-left":
        options.translateX = !transOut ? ["10px", "0px"] : ["0px", "10px"];
        break;
      case "scale-down":
        options.height = !transOut ? [0, "auto"] : ["auto", 0];
        break;
      case "fade":
      default:
        break;
    }

    animationRef.current = anime(options);
    if (transOut) {
      animationRef.current.restart();
    }
  }, [transOut]);

  const AnimeEffect = () => (
    <div
      className={className}
      id={`${nameSpace}-${index}`}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );

  return type ? AnimeEffect() : children;
};

export default Animation;
