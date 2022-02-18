import React from 'react';
import { useCallback } from 'react';
import { IActivityMenuItemProps } from '@acide/ui/app/model';
import { IMenuItemProps, Menu } from '@acide/ui/app/components/menu';
import { ID_ACTIVITY_BAR } from '@acide/ui/app/common/id';
import {
  IActivityBar,
  IActivityBarItem,
} from '@acide/ui/app/model/workbench/activityBar';

import { ActivityBarItem } from './activityBarItem';
import { Scrollable } from '@acide/ui/app/components/scrollable';
import { IActivityBarController } from '@acide/ui/app/controller/activityBar';

import {
  containerClassName,
  defaultClassName,
  globalItemsClassName,
  itemClassName,
  normalItemsClassName,
} from './base';
import { useContextView } from '@acide/ui/app/components';
import { UniqueId } from '@acide/ui/app/common/types';

export function ActivityBar(props: IActivityBar & IActivityBarController) {
  const {
    data = [],
    contextMenu = [],
    selected,
    onClick,
    onChange,
    onContextMenuClick,
  } = props;

  const onClickBar = (key: UniqueId, item: IActivityBarItem) => {
    if (onClick) onClick(key, item);
    if (onChange) {
      // only normal item trigger onChange event
      if (item.type !== 'global') {
        onChange(selected, key);
      }
    }
  };

  const normalBarItems = data.filter(
    (item) => item.type !== 'global' && !item.hidden
  );
  const globalBarItems = data.filter(
    (item) => item.type === 'global' && !item.hidden
  );

  const renderItems = (item: IActivityBarItem, index: number) => {
    return (
      <ActivityBarItem
        key={item.id}
        {...item}
        onContextMenuClick={onContextMenuClick}
        onClick={onClickBar}
        data-index={index}
        checked={selected === item.id}
      />
    );
  };

  const renderContextMenu = () => (
    <Menu role="menu" onClick={onClickMenuItem} data={contextMenu} />
  );

  const contextView = useContextView({
    render: renderContextMenu,
  });

  const onClickMenuItem = useCallback(
    (e: React.MouseEvent, item: IMenuItemProps | undefined) => {
      onContextMenuClick?.(e, item);
      contextView?.hide();
    },
    [contextMenu]
  );

  const handleRightClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const doms = document.elementsFromPoint(e.pageX, e.pageY);
    const itemDom = doms.find((dom) => dom.classList.contains(itemClassName));
    if (itemDom) {
      const rect = itemDom.getBoundingClientRect();
      const extraContextMenu = contextMenu.concat();
      const targetContextMenu = contextMenu.find(
        (menu) => menu.id === itemDom?.id
      );
      targetContextMenu &&
        extraContextMenu.unshift(
          ...([
            {
              id: itemDom.id,
              icon: 'check',
              name: targetContextMenu.name,
            },
            {
              type: 'divider',
            },
          ] as IActivityMenuItemProps[])
        );
      contextView.show(
        {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height,
        },
        () => (
          <Menu role="menu" onClick={onClickMenuItem} data={extraContextMenu} />
        )
      );
    } else {
      contextView.show({ x: e.pageX, y: e.pageY });
    }
  };

  return (
    <div
      className={defaultClassName}
      onContextMenu={handleRightClick}
      id={ID_ACTIVITY_BAR}
    >
      <div className={containerClassName}>
        <Scrollable className={normalItemsClassName}>
          <ul>{normalBarItems.map(renderItems)}</ul>
        </Scrollable>
        <ul className={globalItemsClassName}>
          {globalBarItems.map(renderItems)}
        </ul>
      </div>
    </div>
  );
}

export default ActivityBar;
