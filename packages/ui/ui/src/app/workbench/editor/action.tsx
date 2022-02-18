import React, { useRef } from 'react';
import { memo } from 'react';
import { Icon } from '@acide/ui/app/components/icon';
import { Menu } from '@acide/ui/app/components/menu';
import { DropDown, DropDownRef } from '@acide/ui/app/components/dropdown';
import { IEditorActionsProps, IEditorAction } from '@acide/ui/app/model';
import {
  groupActionItemDisabledClassName,
  groupActionsClassName,
  groupActionsItemClassName,
} from './base';
import { IEditorController } from '@acide/ui/app/controller/editor';
import { classNames } from '@acide/ui/app/common/className';
import Tooltip from '@acide/ui/app/components/tooltip';

export interface IEditorActionProps extends IEditorAction {
  isActiveGroup: boolean;
}

const MAX_ACTIONS_LENGTH = 6;

function splitActions(actions: IEditorActionsProps[]) {
  const outerActions: IEditorActionsProps[] = [];
  const innerActions: IEditorActionsProps[] = [];

  actions.forEach((action) => {
    if (action.place === 'outer') {
      outerActions.push(action);
    } else {
      innerActions.push(action);
    }
  });

  if (outerActions.length > MAX_ACTIONS_LENGTH) {
    const surplusActions = outerActions.splice(
      0,
      MAX_ACTIONS_LENGTH - outerActions.length
    );

    innerActions.concat(surplusActions);
  }

  return [outerActions, innerActions];
}

function EditorAction(props: IEditorActionProps & IEditorController) {
  const { actions = [], isActiveGroup, onClickActions } = props;
  const [outer, inner] = splitActions(actions);

  const childRef = useRef<DropDownRef>(null);

  const handleOnMenuClick = (_, item) => {
    onClickActions(item);
    childRef.current?.dispose();
  };

  const handleActionsClick = (action) => {
    onClickActions(action);
  };

  const overlay =
    inner.length > 0 ? (
      <Menu style={{ width: 200 }} data={inner} onClick={handleOnMenuClick} />
    ) : (
      <span
        style={{
          padding: 15,
          fontSize: 14,
        }}
      >
        No more actions
      </span>
    );

  return (
    <div className={groupActionsClassName}>
      {isActiveGroup &&
        outer.map((action) => (
          <Tooltip key={action.id} overlay={action.title}>
            <div
              onClick={() => handleActionsClick(action)}
              className={classNames(
                groupActionsItemClassName,
                action.disabled && groupActionItemDisabledClassName
              )}
            >
              {action.icon ? (
                typeof action.icon === 'string' ? (
                  <Icon type={action.icon} />
                ) : (
                  action.icon
                )
              ) : (
                action.name
              )}
            </div>
          </Tooltip>
        ))}
      {Boolean(inner.length) && (
        <DropDown
          ref={childRef}
          placement="bottom"
          className={groupActionsItemClassName}
          trigger="click"
          title="More Actions..."
          overlay={overlay}
        >
          <Icon type="ellipsis" />
        </DropDown>
      )}
    </div>
  );
}

export default memo(EditorAction);
