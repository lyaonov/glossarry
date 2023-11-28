import { useState, useCallback } from "react";

interface Translate {
  x: number;
  y: number;
}

type ContainerRefCallback = (containerElem: HTMLElement | null) => void;

export const useCenteredTree = (
  defaultTranslate: Translate = { x: 0, y: 0 }
): [Translate, ContainerRefCallback] => {
  const [translate, setTranslate] = useState<Translate>(defaultTranslate);

  const containerRef = useCallback<ContainerRefCallback>(
    (containerElem) => {
      if (containerElem !== null) {
        const { width, height } = containerElem.getBoundingClientRect();
        setTranslate({ x: width / 2, y: height / 5 });
      }
    },
    []
  );

  return [translate, containerRef];
};
