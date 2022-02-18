import { classNames } from '@acide/ui/app/common/className';
import React from 'react';
import {
  defaultDividerClassName,
  defaultMenuItemClassName,
  disabledClassName,
} from './base';

const Divider = () => {
  return (
    <li
      className={classNames(defaultMenuItemClassName, disabledClassName)}
      role="separator"
    >
      <a className={defaultDividerClassName} />
    </li>
  );
};

export { Divider };
