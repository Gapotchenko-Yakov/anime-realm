export interface IColorTokensGroup {
  [index: number]: string;
}

export interface IColorTokensAll {
  [index: string]: IColorTokensGroup;
  // primary: IColorTokensGroup;
  // secondary: IColorTokensGroup;
}
