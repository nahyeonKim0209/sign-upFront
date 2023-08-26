interface TextScreenProps {
  padding?: string;
  margin?: string;
  color?: string;
  border?: string;
  width?: string;
  textDecorationLine?: string;
  cursor?: string;
  fontWeight?: string;
  fontSize?: string;
  fontFamily?: string;
  lineHeight?: string;
  select?: boolean;
  textAlign?: string;
  whiteSpace?: string;
  overflow?: string;
  textOverflow?: string;
  maxFontSize?: string;
  maxLineHeight?: string;
  maxPadding?: string;
  zIndex?: string;
}
interface DivScreenProps {
  width?: string;
  height?: string;
  boxShadow?: string;
  backGround?: string;
  backgroundColor?: string;
  hoverColor?: string;
  color?: string;
  bottom?: string;
  left?: string;
  top?: string;

  fontWeight?: string;
  fontSize?: string;

  border?: string;
  borderBottom?: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderRadius?: string;

  disPlay?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;

  position?: string;
  padding?: string;
  paddingRight?: string;
  paddingLeft?: string;
  paddingTop?: string;
  paddingBottom?: string;

  margin?: string;
  marginLeft?: string;
  marginTop?: string;

  borderColor?: string;
  borderWidth?: string;

  overflow?: string;
  overflowY?: string;
  overflowDisPlay?: string;

  content?: string;
  zIndex?: string;
  transform?: string;
  opacity?: string;
  select?: boolean;
  cursor?: string;
}

interface ButtonScreenProps {
  backgroundColor?: string | boolean;
  background?: string;
  color?: string;
  border?: string;
  padding?: string;
  margin?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  justifyContent?: string;
  hoverSelected?: string;
  select?: boolean;
  width?: string;
  height?: string;
}
export type { TextScreenProps, DivScreenProps, ButtonScreenProps };
