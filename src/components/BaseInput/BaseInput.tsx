import React, { useCallback } from 'react';
import { noop } from 'lodash';
import cx from 'classnames';
import b_ from 'b_';

import './BaseInput.scss';
import { CalendarFormStateNames } from '../Calendar/context/context';

const b = b_.with('base-input');

export interface BaseInputProps {
  name: CalendarFormStateNames;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (name: CalendarFormStateNames, value: string) => void;
}

const BaseInput = (props: BaseInputProps) => {
  const {
    name,
    value,
    placeholder,
    disabled,
    className,
    onChange = noop,
  } = props;

  const type = name === 'date' ? 'date' : 'text';

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onChange(name, e.target.value),
    [name, onChange],
  );

  return (
    <input
      type={type}
      max="2999-12-31" // for type date
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={cx(b({ type }), className)}
      onChange={handleChange}
    />
  );
};

export default BaseInput;
