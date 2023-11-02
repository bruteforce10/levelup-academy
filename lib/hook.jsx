import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MyContext } from "./context/AppContext";

function useSectionView(section, threshold = 0.5) {
  const { ref, inView } = useInView({ threshold: threshold });

  const { setActiveSection } = MyContext();

  useEffect(() => {
    if (inView) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, section]);

  return {
    ref,
  };
}

export default useSectionView;
