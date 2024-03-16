import { useState, useEffect } from "react";
import { gsap } from "gsap";
import splashLogo from "../assets/images/splashLogo.svg";
import "../assets/css/SplashScreen.css";

const SplashScreen = ({ setSplashScreen, splashScreen }) => {
 useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".logo", { duration: 1, scale: 1.5 })
      .to(".logo", { duration: 1, scale: 3,filter: "blur(2px)" }); 

    tl.to(".splash-screen", { duration: 1, opacity: 0, onComplete: () => {
      setSplashScreen(false);
    }});

    return () => tl.kill();
  }, [setSplashScreen]);

  return (
    <div
      className={`splash-screen ${splashScreen ? "animation-complete" : ""}`}
    >
      <div className="logo-container">
        <div className="logo">
          <img className="logo" src={splashLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
