'use client';
import { default as ReactSelect, GroupBase } from 'react-select';

import { DropdownIndicator } from './DropdownIndicator';

import { FieldWrapper, Prompt } from '@/components/new-ui';

import { useScreenDetector } from '@/hooks/useScreenDetector';

import { SelectTheme, TSelectProps } from './types';

import styles from './select.module.scss';

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  icon,
  isDisabled,
  noOptionsMessage,
  selectTheme = SelectTheme.DARK,
  placeholder = '',
  selectClassName = '',
  // FieldWrapperProps
  label,
  subTitle,
  error,
  fieldWrapperClassName,
  fieldWrapperRef,
  typePrompt = null,
  ...props
}: TSelectProps<Option, IsMulti, Group>) => {
  const fieldWrapperProps = {
    subTitle,
    error,
    fieldWrapperRef,
    fieldWrapperClassName,
  };

  const { isMobile } = useScreenDetector();

  const customStyles = {
    control: (provided: any, state: any) => {
      return {
        ...provided,
        height: isMobile ? 46 : 54,
        width: '100%',
        borderRadius: 6,
        paddingLeft: 15,
        paddingRight: 8,
        cursor: 'pointer',
        background: error
          ? 'var(--red-extra-light)'
          : selectTheme === SelectTheme.DARK
          ? 'var(--blue-extra-light)'
          : 'var(--white-background)',
        border: isDisabled
          ? '1px solid var(--grey-light)'
          : state.isFocused
          ? '1px solid var(--blue-default)'
          : error
          ? '1px solid var(--red-default)'
          : '1px solid var(--blue-extra-light)',
        boxShadow: 'none',
        transition: 'all 0.15s ease-in-out',
      };
    },
    dropdownIndicator: (provided: any, state: any) => {
      return {
        ...provided,
        padding: 4,
        transition: 'all 0.3s ease-out',
        transform: `rotate(${
          state.selectProps.menuIsOpen ? '0deg' : '180deg'
        })`,
      };
    },
    valueContainer: (provided: any) => ({
      ...provided,
      flexWrap: 'nowrap',
      padding: 0,
    }),
    multiValue: (styles: any) => {
      return {
        ...styles,
        backgroundColor: 'transparent',
        minWidth: 'fit-content',
        color: 'var(--black-default)',
        svg: {
          display: 'none',
        },
        '&:nth-last-child(2)': {
          'div::after': {
            content: '""',
          },
        },
        padding: 0,
      };
    },
    multiValueLabel: (styles: any) => {
      const stylesWithComma = {
        ...styles,
        fontSize: 16,
        padding: 0,
        paddingLeft: 2,
        color: 'var(--black-default)',
        '&::after': {
          content: '","',
        },
      };
      if (props.isMulti) {
        // @ts-ignore
        if (props.value.length === 1) {
          delete stylesWithComma['&::after'];
        }
      }
      return stylesWithComma;
    },
    multiValueRemove: (styles: any) => ({
      ...styles,
      color: 'red',
      display: 'none',
      ':hover': {
        color: 'white',
      },
    }),
    indicatorSeparator: () => ({
      isDisabled: true,
    }),
    menu: (provided: any) => ({
      ...provided,
      overflow: 'hidden',
      marginTop: 4,
      borderRadius: 12,
      padding: 4,
      zIndex: 10,
      border: '1px solid var(--blue-extra-light)',
    }),
    menuList: (provided: any) => ({
      ...provided,
      padding: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      ...icon,
      color: 'var(--black-default)',
      fontFamily: 'var(--font-family)',
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '-0.01em',
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      ...icon,
      fontSize: '16px !important',
      color: isDisabled ? 'var(--grey-light)' : 'var(--grey-dark)',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      cursor: 'pointer',
      padding: '12px 16px',
      borderRadius: 8,
      transition: 'all .3s ease-out',

      fontFamily: 'var(--font-family)',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '22px',
      letterSpacing: '-0.01em',

      color: state.isSelected ? 'var(--white-default)' : 'var(--black-default)',

      backgroundColor: state.isSelected
        ? 'var(--blue-default)'
        : state.isFocused
        ? 'var(--blue-extra-light)'
        : 'transparent',
    }),
    input: (provided: any) => ({
      ...provided,
      ...icon,
      fontSize: '16px !important',
      fontFamily: 'var(--font-family)',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      color: isDisabled
        ? 'var(--grey-light) !important'
        : 'var(--grey-dark) !important',
      cursor: isDisabled ? 'not-allowed' : 'cursor',
    }),
    noOptionsMessage: (provided: any) => ({
      ...provided,
      borderRadius: 8,
      padding: '12px 16px',
      color: 'var(--grey-dark)',
      fontFamily: 'var(--font-family)',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '22px',
      letterSpacing: '-0.006px',
      textAlign: 'center',
    }),
  };

  const noAsyncNoOptionsMessage = () => 'Ничего не найдено';

  return (
    <FieldWrapper {...fieldWrapperProps}>
      {label && (
        <label className={styles.label}>
          {label}
          {typePrompt && <Prompt type={typePrompt} />}
        </label>
      )}
      <ReactSelect
        maxMenuHeight={204}
        isDisabled={isDisabled}
        placeholder={placeholder}
        className={selectClassName}
        // @ts-ignore
        components={{ DropdownIndicator }}
        noOptionsMessage={
          noOptionsMessage ? noOptionsMessage : noAsyncNoOptionsMessage
        }
        styles={
          props.styles ? { ...customStyles, ...props.styles } : customStyles
        }
        {...props}
      />
    </FieldWrapper>
  );
};
