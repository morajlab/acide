import React, { memo } from 'react';

import { prefixClaName } from '@acide/ui/app/common/className';

const defaultClassName = prefixClaName('settings');

export function Settings() {
  return <div className={defaultClassName}>Settings</div>;
}

export default memo(Settings);
