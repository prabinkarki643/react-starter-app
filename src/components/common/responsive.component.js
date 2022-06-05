import { useMediaQuery } from "react-responsive";
import { sizes } from "../../theme/theme";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: sizes.desktop });
  return isDesktop ? children : null;
};

export const Laptop = ({ children }) => {
  const isDesktop = useMediaQuery({
    minWidth: sizes.laptop,
    maxWidth: sizes.laptopL,
  });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: sizes.tablet, maxWidth: 991 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: sizes.mobileL });
  return isMobile ? children : null;
};
export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: sizes.laptop });
  return isNotMobile ? children : null;
};
