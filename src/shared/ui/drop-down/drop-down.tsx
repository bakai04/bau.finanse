import React, { cloneElement, isValidElement, useRef, useEffect, useState } from "react";
import { ArrowContainer, Popover, PopoverAlign, PopoverPosition } from "react-tiny-popover";
import { DropDownDivider } from "./divider";
import styles from "./drop-down.module.scss";
import { DropDownItem } from "./item/drop-down-item";
import { DropDownLink } from "./link";
import { DropDownSection } from "./section";
import { useArrowControl } from "../../lib/use-arrow-control";
import { useAutoPosition } from "../../lib/use-auto-position";

export interface IDropDown {
  positions: PopoverPosition[];
  children: React.ReactNode;
  triggerButton: React.ReactNode;
  arrow?: boolean;
  align?: PopoverAlign;
  width?: number;
  defaultSelected?: number;
}

interface PopoverItemProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLLIElement>> {
  active?: boolean;
  onMouseEnter?: () => void;
}

export const DropDown = (props: IDropDown) => {
  const [selectedIndex, setSelectedIndex] = useState((props?.defaultSelected && props?.defaultSelected >= 0) || -1);
  const container = useRef(null);
  const listRef = useRef(null);
  const position = useAutoPosition(listRef, container, props.positions);
  const { highlightedIndex, setHighlightedIndex, indexes, onTogglePopover, isOpen } = useArrowControl(props.children, setSelectedIndex);

  return (
    <>
      <Popover
        isOpen={isOpen}
        positions={position}
        ref={container}
        containerClassName={styles.popover}
        clickOutsideCapture={true}
        onClickOutside={onTogglePopover}
        padding={5}
        align={props.align ? props.align : "start"}
        content={({ position, childRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={"var(--accents-2)"}
            arrowSize={props.arrow ? 8 : 0}
            arrowClassName={styles.arrow}
          >
            <ul ref={listRef} className={styles.popover_inner} style={{ width: props.width + "px" }}>
              {React.Children.map(props.children, (child, index) => {
                if (isValidElement(child)) {
                  return cloneElement(child, {
                    active: index === indexes[highlightedIndex],
                    selected: index === selectedIndex,
                    handleClick: () => { setSelectedIndex(index); setHighlightedIndex(indexes.indexOf(index)) },
                    onMouseEnter: () => setHighlightedIndex(indexes.indexOf(index)),
                  } as Partial<PopoverItemProps>);
                }
              })}
            </ul>
          </ArrowContainer>
        )}
      >
        <div onClick={onTogglePopover}>{props.triggerButton}</div>
      </Popover>
    </>
  );
};

DropDown.Item = DropDownItem;
DropDown.Link = DropDownLink;
DropDown.Section = DropDownSection;
DropDown.Divider = DropDownDivider;
