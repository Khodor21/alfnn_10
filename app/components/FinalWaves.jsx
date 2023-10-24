import React from "react";
import "../waves.css";
const Waves = () => {
  return (
    <div className="waveWrapper waveAnimation h-60 md:h-28">
      <div className="waveWrapperInner bgTop">
        <div
          className="wave waveMiddle"
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-bot.png?alt=media&token=cbdbb43b-03f6-4f22-954a-77f5c2f4893a&_gl=1*1y73l0z*_ga*ODg4OTgwNDI0LjE2Nzk1Njk4ODQ.*_ga_CW55HF8NVT*MTY5NjU0MDAwNS4zMC4xLjE2OTY1NDAwNDQuMjEuMC4w)`,
          }}
        ></div>
      </div>{" "}
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage:
              " url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-top.png?alt=media&token=64ac48a7-64b8-404d-97cb-1fe6433999b8&_gl=1*kmx3o*_ga*ODg4OTgwNDI0LjE2Nzk1Njk4ODQ.*_ga_CW55HF8NVT*MTY5NzAxOTUzMC4zNS4xLjE2OTcwMTk3MTIuNDcuMC4w')",
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage:
              " url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-top.png?alt=media&token=64ac48a7-64b8-404d-97cb-1fe6433999b8&_gl=1*kmx3o*_ga*ODg4OTgwNDI0LjE2Nzk1Njk4ODQ.*_ga_CW55HF8NVT*MTY5NzAxOTUzMC4zNS4xLjE2OTcwMTk3MTIuNDcuMC4w')",
          }}
        ></div>
      </div>{" "}
    </div>
  );
};

export default Waves;
