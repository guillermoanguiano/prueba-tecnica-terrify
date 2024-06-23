import { useEffect, useRef } from "react";
import Artplayer from "artplayer";
import Option from "artplayer/types/option";

type PlayerProps = {
  option: Omit<Option, "container"> ;
  getInstance?: (art: Artplayer) => void;
  [key: string]: any;
};

export function ArtPlayer({ option, getInstance, ...rest }: PlayerProps) {
  const artRef = useRef<any>();

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current,
    });
    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={artRef} {...rest}></div>;
}
