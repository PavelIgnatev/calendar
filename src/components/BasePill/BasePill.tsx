import React, { useCallback } from 'react';
import cx from 'classnames';
import b_ from 'b_';

import './BasePill.scss';

const b = b_.with('base-pill');

export interface BasePillProps {
  day: string;
  id: string;
  onClick: (day: string, id: string) => void;
  children?: React.ReactNode;
  className?: string;
}

const BasePill = (props: BasePillProps) => {
  const { id, day, children, className, onClick } = props;

  const handleClick = useCallback(() => {
    onClick(day, id);
  }, [id, day, onClick]);

  return (
    <button type="button" className={cx(b(), className)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default BasePill;
