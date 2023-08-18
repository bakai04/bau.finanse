import React, { isValidElement, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DropDownItem } from "../ui/drop-down/item";
import { DropDownLink } from "../ui/drop-down/link";

export const useArrowControl = (children: ReactNode) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const highlightedIndexRef = useRef(highlightedIndex);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onTogglePopover = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    highlightedIndexRef.current = highlightedIndex;
  }, [highlightedIndex]);

  const indexes = useMemo(
    () =>
      items.reduce<Array<number>>((result, item, index) => {
        if (React.isValidElement(item)) {
          if (!item.props.disabled && (item.type === DropDownItem || item.type === DropDownLink)) {
            result.push(index);
          }
        }
        return result;
      }, []),
    [items]
  );

  const handleClick = () => {
    const item = items[indexes[highlightedIndexRef.current]];
    onTogglePopover();
    if (highlightedIndexRef.current !== -1 && isValidElement(item)) {
      if (item.type === DropDownLink) navigate(item.props.href);
      if (item.props.onClick) item.props.onClick();
    }
  };

  const handleKeyDown = async (ev: KeyboardEvent) => {
    switch (ev.code) {
      case "ArrowRight":
      case "ArrowDown":
        ev.preventDefault();
        ev.stopPropagation();
        setHighlightedIndex((highlightedIndex) => {
          const index = highlightedIndex === indexes.length - 1 ? 0 : highlightedIndex + 1;
          return index;
        });
        break;

      case "ArrowLeft":
      case "ArrowUp":
        ev.preventDefault();
        ev.stopPropagation();
        setHighlightedIndex((highlightedIndex) => {
          const index = highlightedIndex === 0 ? indexes.length - 1 : highlightedIndex - 1;
          return index;
        });
        break;

      case "Enter":
        ev.preventDefault();
        ev.stopPropagation();
        handleClick();
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown, true);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [isOpen]);

  return { indexes, highlightedIndex, setHighlightedIndex, onTogglePopover, isOpen };
};
