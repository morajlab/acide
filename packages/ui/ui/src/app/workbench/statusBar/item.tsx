import React from 'react';
import { classNames } from '@acide/ui/app/common/className';
import { IStatusBarItem } from '@acide/ui/app/model/workbench/statusBar';
import { IStatusBarController } from '@acide/ui/app/controller/statusBar';
import { itemClassName } from './base';
import { getDataAttributionsFromProps } from '@acide/ui/app/common/dom';

export function StatusItem(props: IStatusBarItem & IStatusBarController) {
  const {
    className,
    onClick,
    id,
    name,
    data,
    render,
    style,
    role,
    title,
    ...restProps
  } = props;
  const clsName = classNames(itemClassName, className);
  const events = {
    onClick: function (e: React.MouseEvent) {
      onClick?.(e, props);
    },
  };

  const attrProps = getDataAttributionsFromProps(restProps);

  return (
    <div
      className={clsName}
      style={style}
      role={role}
      title={title}
      id={id.toString()}
      {...attrProps}
    >
      <a tabIndex={-1} title={name} {...events}>
        {render ? render(props) : name}
      </a>
    </div>
  );
}