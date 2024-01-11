export type TSeoSvg = {
  svgOriginal: string;
  svgInverted: string;
};

export type TSeoArr = {
  title: string;
  price?: number;
  keyPoints: string[];
  svgLinks?: TSeoSvg;
};
