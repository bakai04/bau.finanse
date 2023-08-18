import React, { useEffect, useRef, useState } from "react";
const BTN_DROPDOWN_GAP = 5;

type Position = Array<"top" | "right" | "bottom" | "left">;

export function useAutoPosition(
  dropDownRef: React.RefObject<HTMLDivElement>,
  buttonRef: React.RefObject<HTMLButtonElement>,
  initialPosition: Position
) {
  const [popoverPosition, setPopoverPosition] = useState(initialPosition);

  function handleScroll() {
    const dropDownRect = dropDownRef.current?.getBoundingClientRect();
    const buttonRect = buttonRef.current?.getBoundingClientRect();

    if (buttonRect && dropDownRect) {
      const bottomPosition = buttonRect.y + dropDownRect.height + buttonRect.height + BTN_DROPDOWN_GAP;
      if (dropDownRect.bottom >= window.innerHeight) {
        setPopoverPosition(["top"]);
      }
      if (bottomPosition <= window.innerHeight) {
        setPopoverPosition(initialPosition);
      }
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return popoverPosition;
}
