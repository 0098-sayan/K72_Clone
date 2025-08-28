// HomeHeroText.jsx
import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center text-white">
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
        L'étincelle
      </div>

      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-start justify-center gap-[1vw]">
        <span>qui</span>

        {/* Important: clipping + compositing */}
        <div
          className="relative h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden
                     [transform:translateZ(0)] [will-change:transform] z-[14]
                     [-webkit-mask-image:-webkit-radial-gradient(white,black)]"
        >
          <Video className="absolute inset-0 h-full w-full object-cover block" />
        </div>

        <span>génère</span>
      </div>

      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
