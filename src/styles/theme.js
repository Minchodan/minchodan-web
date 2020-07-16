import baseStyled, {
  css,
  CSSProp,
  ThemedStyledInterface,
} from "styled-components";

const sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

const media = {
  mobile: (...args) => undefined,
  tablet: (...args) => undefined,
  desktop: (...args) => undefined,
};

// acc: 누적값, label: 현재값, 함수2번째 인자: 초기값
Object.keys(sizes).reduce((acc, label) => {
  switch (label) {
    case "desktop":
      acc.desktop = (...args) => css`
        @media only screen and (min-width: ${sizes.desktop}px) {
          ${args}
        }
      `;
      break;
    case "tablet":
      acc.tablet = (...args) => css`
        @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    case "mobile":
      acc.mobile = (...args) => css`
        @media only screen and (max-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  mainColor: "#ff5a5a",
  subColor: "#fca800",
  textDarkColor: "#333",
  textLightDarkColor: "#999999",
  whiteColor: "#ffffff",
  greyColor: "#D8D8D8",
  moreLightGreyColor: "#fafafa",
  lightGreyColor: "#f5f5f5",
  darkGreyColor: "#999",
  naverColor: "#41b649",
  facebookColor: "#3b5a9b",
  kakaoColor: "#fbee2c",
};

const secondaryColors = {};
const fontSizes = [];

const theme = { colors, fontSizes, secondaryColors, media };

export const styled = baseStyled;
export default theme;
