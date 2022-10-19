import React, { useCallback } from 'react';
import { noop } from 'lodash';
import cx from 'classnames';
import b_ from 'b_';

import { CalendarFormState } from '../Calendar/context/context';

import './BaseTextarea.scss';

const b = b_.with('base-textarea');

export interface BaseTextareaProps {
  name: keyof Omit<CalendarFormState, 'date'>;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (
    name: keyof Omit<CalendarFormState, 'date'>,
    value: string,
  ) => void;
}

const BaseTextarea = (props: BaseTextareaProps) => {
  const {
    name,
    value,
    placeholder,
    disabled,
    className,
    onChange = noop,
  } = props;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      onChange(name, e.target.value),
    [name, onChange],
  );

  return (
    <textarea
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={cx(b(), className)}
      onChange={handleChange}
    />
  );
};

export default BaseTextarea;
