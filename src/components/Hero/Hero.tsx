import React, {useRef} from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Designer", "Python Developer"],
    loop: 0,
    typeSpeed: 80,
  });

  const waveRef = useRef()

  useGSAP(() => {
    gsap.to(waveRef.current, {
        rotate:60,
        duration:1.5,
        repeat:-1,
        yoyo: true
    })
  })

  return (
    <section className="p-6 h-screen bg-gradient-to-bl from-[#242424] via-[#111111]">
      <div className="w-3/4 mt-48 mx-20  font-semibold text-white">
        <div className="flex gap-10 items-center">
          <h2 className="text-7xl font-montserrat ml-1">Hi</h2>
          <img
            ref={waveRef}
            className="rotate-[25deg] h-12"
            src="/portfolio/assets/icons/wave.png"
            alt=""
          />
        </div>

        <h2 className="text-7xl font-montserrat mb-5 ml-1">I'm Pavlo</h2>
        <div className="flex">
          <h1 className="uppercase text-9xl font-bold font-josefin text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-red-400 to-pink-700">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
}
