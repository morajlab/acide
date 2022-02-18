import React, { memo } from 'react';
import { INotification } from '@acide/ui/app/model/notification';
import { INotificationController } from '@acide/ui/app/controller/notification';
import {
  classNames,
  getBEMElement,
  getBEMModifier,
  prefixClaName,
} from '@acide/ui/app/common/className';
import { ActionBar } from '@acide/ui/app/components/actionBar';
import { shadowClassName } from '@acide/ui/app/components/contextView/base';
import { Icon } from '@acide/ui/app/components/icon';
import { localize } from '@acide/ui/app/i18n/localize';

export const defaultNotificationClassName = prefixClaName('notification');
const notificationHeaderClassName = getBEMElement(
  defaultNotificationClassName,
  'header'
);
const notificationBodyClassName = getBEMElement(
  defaultNotificationClassName,
  'body'
);
const notificationCloseClassName = getBEMModifier(
  defaultNotificationClassName,
  'close'
);

export function NotificationPane(
  props: INotification & Partial<INotificationController>
) {
  const {
    data = [],
    actionBar = [],
    showNotifications,
    onActionBarClick,
    onCloseNotification,
  } = props;
  const hasNotifications = data.length > 0;
  const title = hasNotifications
    ? localize('notification.title', 'notifications')
    : localize('notification.title.no', 'no new notifications');
  const display = showNotifications ? 'block' : 'none';

  return (
    <div
      className={classNames(defaultNotificationClassName, shadowClassName)}
      style={{ display }}
    >
      <header className={notificationHeaderClassName}>
        <span>{title}</span>
        <ActionBar data={actionBar} onClick={onActionBarClick} />
      </header>
      <div className={notificationBodyClassName}>
        {data.map((item) => (
          <div key={item.id}>
            {typeof item.render === 'function' ? item.render(item) : item.value}
            <Icon
              title="Clear Notification"
              onClick={() => onCloseNotification?.(item)}
              className={notificationCloseClassName}
              type="close"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(NotificationPane);