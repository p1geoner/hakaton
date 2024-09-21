'use client';

import ru from 'date-fns/locale/ru';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import MaskedInput from 'react-input-mask';

import { TextField } from '@/components/new-ui-kit';
import { datePickerDateFormatting } from '@/components/new-ui-kit/date-picker/utils';

import { IDatePickerProps } from './types';

import 'react-datepicker/dist/react-datepicker.css';
import IcCalendar from '@/assets/new-icons/forms/ic_calendar.svg';
import './DatePicker.scss';
import './CustomDatePickerDates.scss';

export const DatePicker: FC<IDatePickerProps> = ({
  value,
  name,
  label,
  onChange,
  customDayClassName,
  className = '',
  ...props
}) => {
  const refTextField = useRef(null);

  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const isMobile = windowWidth < 1000;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const openDatePicker = () => {
    setOpen((prev) => !prev);
  };

  const clickOutside = (e: any) => {
    if (e.target.id !== 'calendarIcon') setOpen(false);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };

  const onSelectDate = (date: Date) => {
    setOpen(false);

    if (typeof onChange === 'function') {
      const formattingDate = datePickerDateFormatting(date);

      if (value === formattingDate) onChange('');
      else onChange(formattingDate);
    }
  };

  const getDayClasses = (date: Date) => {
    const todayDate = new Date();
    const formattingDate = datePickerDateFormatting(date);
    const classes = [];

    if (formattingDate === value)
      classes.push('custom-datepicker__day--selected');
    else if (date.toDateString() === todayDate.toDateString())
      classes.push('custom-datepicker__day--today');

    if (customDayClassName) return customDayClassName({ date, classes });
    return classes.join(' ');
  };

  return (
    <>
      <MaskedInput mask='99.99.9999' value={value} onChange={onChangeText}>
        {
          // @ts-ignore:next-line
          () => (
            <TextField
              label={label}
              reference={refTextField}
              value={value}
              onChange={onChangeText}
              rightIcon={
                isMobile
                  ? undefined
                  : {
                      icon: <IcCalendar id='calendarIcon' />,
                      type: 'fill',
                      onClick: openDatePicker,
                    }
              }
              {...props}
            />
          )
        }
      </MaskedInput>

      {!isMobile && (
        <ReactDatePicker
          showYearDropdown
          dateFormatCalendar='MMMM'
          popperPlacement='bottom-start'
          yearDropdownItemNumber={150}
          scrollableYearDropdown
          locale={ru}
          open={open}
          dayClassName={getDayClasses}
          onClickOutside={clickOutside}
          onChange={onSelectDate}
          popperModifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 48],
              },
            },
          ]}
          minDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 70))
          }
          {...props}
        />
      )}
    </>
  );
};
