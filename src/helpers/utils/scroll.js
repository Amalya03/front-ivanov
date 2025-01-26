export const handleScroll = (setScrollingDown, setScrollY) => {
  setScrollY(window.scrollY);
  if (window.scrollY > 200) {
    setScrollingDown(true);
  } else {
    setScrollingDown(false);
  }
};
