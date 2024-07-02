import React from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HowItWorks = () => {
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  const videoRef = useRef();
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br />A monster win for gaming
          </h2>

          <p className="hiw-subtitle">
            It's here the biggest redesign in the history of apple's GPU's
          </p>
        </div>

        <div className="mt-10 md:mt-20  mb-14">
          <div className="relative flex-center  h-full">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative  z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                muted
                preload="none"
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray font-semibold mt-3 text-center">
            Honkai:Star Rail
          </p>

          <div className="hiw-text-container">
            <div className="flex-1 flex justify-center  flex-col">
              <p className="hiw-text fadeIn">
                A17 Pro is an entirely new class of iPhone chip that delivers
                our {"  "}
                <span className="text-white">
                  best graphic performance by far
                </span>
              </p>
            </div>

            <p className="hiw-text g_fadeIn">
              Mobile{"  "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              with incredibly detailed environments and characters.
            </p>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;