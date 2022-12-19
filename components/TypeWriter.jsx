import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div className="flex items-center">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '"TAKE EVERY DAY AS A CHANCE TO BECOME A BETTER MUSLIM"'
            )
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
};

export default TypeWriter;
