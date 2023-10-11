import React from "react";
import "../waves.css";
const Waves = () => {
  return (
    <div className="waveWrapper waveAnimation h-60 md:h-28">
      <div className="waveWrapperInner bgTop">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage:
              " url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-mid.png?alt=media&token=522340dc-b440-4ad9-955c-48e1e96f7c5a&_gl=1*1jeoc7*_ga*ODg4OTgwNDI0LjE2Nzk1Njk4ODQ.*_ga_CW55HF8NVT*MTY5NjgzMzY3Ni4zMy4xLjE2OTY4MzM2OTEuNDUuMC4w')",
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-bot.png?alt=media&token=cbdbb43b-03f6-4f22-954a-77f5c2f4893a&_gl=1*1y73l0z*_ga*ODg4OTgwNDI0LjE2Nzk1Njk4ODQ.*_ga_CW55HF8NVT*MTY5NjU0MDAwNS4zMC4xLjE2OTY1NDAwNDQuMjEuMC4w)`,
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage:
              " url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-mid.png?alt=media&token=522340dc-b440-4ad9-955c-48e1e96f7c5a&_gl=1*1jeoc7*_ga*ODg4OTgwNDI0LjE2Nzk1Njk4ODQ.*_ga_CW55HF8NVT*MTY5NjgzMzY3Ni4zMy4xLjE2OTY4MzM2OTEuNDUuMC4w')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Waves;
