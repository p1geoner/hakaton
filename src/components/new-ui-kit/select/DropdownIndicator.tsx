import { components, DropdownIndicatorProps } from 'react-select';

import IcArrow from '@/assets/new-icons/ui-kit/ic_select-arrow-small.svg';

export const DropdownIndicator = (
  props: DropdownIndicatorProps<typeof components.DropdownIndicator>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <IcArrow />
    </components.DropdownIndicator>
  );
};
