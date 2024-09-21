import clsx from 'clsx';
import { useState } from 'react';

import {
  TSegment,
  TSegmentsProps,
} from '@/components/new-ui-kit/segments/types';

import styles from './Segments.module.scss';

export const Segments = ({
  items,
  onChange,
  currentValue,
  className,
}: TSegmentsProps) => {
  const [activeItem, setActiveItem] = useState(currentValue);
  const onSegmentChange = (item: TSegment) => {
    onChange(item.value);
    setActiveItem(item.value);
  };

  const getSegmentStyle = (value: string) =>
    clsx(styles.button, {
      [styles.active]: value === activeItem,
    });

  return (
    <div className={clsx(styles.wrapper, className)}>
      {items?.map((item) => (
        <button
          className={getSegmentStyle(item.value)}
          key={item.value}
          onClick={() => onSegmentChange(item)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
