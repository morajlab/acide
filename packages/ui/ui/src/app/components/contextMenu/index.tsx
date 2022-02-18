import React from 'react';
import { HTMLElementType } from '@acide/ui/app/common/dom';
import {
  IContextView,
  useContextView,
} from '@acide/ui/app/components/contextView';

export interface IContextMenuProps {
  anchor: HTMLElementType;
  render: () => React.ReactNode;
}

export interface IContextMenu extends IContextView {}

export function useContextMenu(
  props: IContextMenuProps
): IContextMenu | undefined {
  const { anchor, render } = props;

  if (!anchor) {
    return undefined;
  }

  const contextView = useContextView({
    render,
  });

  const onContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    contextView!.show(
      {
        x: e.clientX,
        y: e.clientY,
      },
      render
    );
  };

  anchor.addEventListener('contextmenu', onContextMenu);

  const dispose = () => {
    contextView!.hide();
    anchor.removeEventListener('contextmenu', onContextMenu);
  };

  return { ...contextView, dispose };
}