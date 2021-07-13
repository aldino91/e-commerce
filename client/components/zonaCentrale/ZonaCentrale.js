import { CardMain } from "./CardMain";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  scrollY1,
  scrollY2,
  scrollY3,
  scrollY4,
  scrollY5,
  scrollY6,
  scrollY7,
} from "../../utils/scroll";

export const ZonaCentrale = () => {
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
  const [showCard4, setShowCard4] = useState(false);
  const [showCard5, setShowCard5] = useState(false);
  const [showCard6, setShowCard6] = useState(false);
  const [showCard7, setShowCard7] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      scrollY1(setShowCard1);
      scrollY2(setShowCard2);
      scrollY3(setShowCard3);
      scrollY4(setShowCard4);
      scrollY5(setShowCard5);
      scrollY6(setShowCard6);
      scrollY7(setShowCard7);
    });
  });

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-black text-4xl my-9 text-center">
        Componenti La Magique Lumiere
      </h2>
      <div className="h-auto mt-2">
        <Link href="/lavori/bauletti">
          <a className={`mt-2 ${showCard1 === false ? "hidden" : "visible"} `}>
            <CardMain titolo="Bauletti" classCard="classCard1" />
          </a>
        </Link>
      </div>
      <div className="h-auto mt-2">
        <Link href="/lavori/complementi-arredo">
          <a className={`mt-2 ${showCard2 === false ? "hidden" : "visible"} `}>
            <CardMain titolo="Complementi D'Arredo" classCard="classCard2" />
          </a>
        </Link>
      </div>
      <div className="h-auto mt-2">
        <Link href="/lavori/cuadri-lampada">
          <a className={`mt-2 ${showCard3 === false ? "hidden" : "visible"} `}>
            <CardMain titolo="Cuadri Lampada" classCard="classCard3" />
          </a>
        </Link>
      </div>
      <div className="h-auto mt-2">
        <Link href="/lavori/cubotti">
          <a className={`mt-2 ${showCard4 === false ? "hidden" : "visible"} `}>
            <CardMain titolo="Cubotti" classCard="classCard4" />
          </a>
        </Link>
      </div>
      <div className="h-auto mt-2">
        <Link href="/lavori/fette-incise">
          <a className={` mt-2 ${showCard5 === false ? "hidden" : "visible"} `}>
            <CardMain titolo="Fette Incise" classCard="classCard5" />
          </a>
        </Link>
      </div>
      <div className="h-auto mt-2 ">
        <Link href="/lavori/lampade-modellini">
          <a className={`${showCard6 === false ? "hidden" : "visible"} `}>
            <CardMain titolo="Lampade" classCard="classCard6" />
          </a>
        </Link>
      </div>
      <div className="h-96 ">
        <Link href="/lavori/piantane">
          <a
            className={`my-1.5 ${showCard7 === false ? "hidden" : "visible"} `}
          >
            <CardMain titolo="Piantane" classCard="classCard7" />
          </a>
        </Link>
      </div>
    </div>
  );
};
