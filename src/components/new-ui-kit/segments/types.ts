export type TSegment = {
  name: string;
  value: string;
};

export type TSegmentsProps = {
  items: TSegment[];
  currentValue: string;
  onChange: (item: string) => void;
  className?: string;
};
