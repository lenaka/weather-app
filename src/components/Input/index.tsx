import React, { FC } from 'react';
import { FieldValues, UseFormRegister, Path } from 'react-hook-form';
import cn from 'classnames';

import { ClassName } from '../../types/className';
import styles from './index.module.css';

type Props<T> = {
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password';
  name: Path<T>;
  disabled?: boolean;
  register: UseFormRegister<T>;
} & ClassName;

export const Input: FC<Props<FieldValues>> = (componentProps) => {
  const {
    placeholder,
    value = '',
    type = 'text',
    className,
    register,
    name,
    ...props
  } = componentProps;

  return (
    <input
      className={cn(styles.input, className)}
      placeholder={placeholder}
      defaultValue={value}
      type={type}
      {...register(name, { ...props })}
    />
  );
};
