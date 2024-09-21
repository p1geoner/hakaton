export interface IHoverWrapperProps {
  wrapperClassName?: string;
  button: TStaticButton | TDynamicButton;
}

export type TStaticButton = {
  type: 'static';
  text: string;
  position: TButtonCoords;
  className?: string;
};

export type TDynamicButton = {
  type: 'dynamic';
  position: TButtonCoords;
  isFull?: boolean;
  className?: string;
};

type TButtonCoords = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};
