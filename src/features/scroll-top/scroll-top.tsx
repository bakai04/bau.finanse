import { Button, Icon, SpeedDial } from "../../shared/ui";
import React, { useEffect, useState } from 'react'
import style from "./scroll-top.module.scss";

interface ScrollTop {

}

export const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;

      if (window.scrollY > scrollThreshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if(!showButton) {
    return <></>
  }

  return (
    <SpeedDial>
      <button className={style.scroll_top__button} onClick={scrollToTop}>
        <Icon.Arrow className={style.arrow}></Icon.Arrow>
      </button>
    </SpeedDial>
  )
}
