import React from 'react';
import { Icon } from '@acide/ui/app/components/icon';
import { IStatusBarItem } from '@acide/ui/app/model/workbench/statusBar';

export function ProblemsStatusBarView(props: IStatusBarItem) {
  const { data = { errors: 0, warnings: 0, infos: 0 } } = props;
  return (
    <>
      <Icon type="error" />
      {` ${data.errors} `}
      <Icon type="warning" />
      {` ${data.warnings} `}
      <Icon type="info" />
      {` ${data.infos}`}
    </>
  );
}
export default React.memo(ProblemsStatusBarView);
