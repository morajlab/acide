import 'reflect-metadata';
import React from 'react';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane';
import { container } from 'tsyringe';

import {
  classNames,
  getFontInMac,
  prefixClaName,
  getBEMModifier,
  getBEMElement,
} from 'mo/common/className';

import { EditorView } from 'mo/workbench/editor';
import { SidebarView } from 'mo/workbench/sidebar';
import { MenuBarView } from 'mo/workbench/menuBar';
import { ActivityBarView } from 'mo/workbench/activityBar';
import { StatusBarView } from 'mo/workbench/statusBar';
import { PanelView } from 'mo/workbench/panel';
import { ID_APP } from 'mo/common/id';
import { APP_PREFIX } from 'mo/common/const';

import { connect } from 'mo/react';

import { ILayoutController, LayoutController } from 'mo/controller/layout';
import { LayoutService } from 'mo/services';
import { ILayout, MenuBarMode } from 'mo/model/workbench/layout';

import { IWorkbench } from 'mo/model';
import { Display } from 'mo/components';

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const compositeBarClassName = prefixClaName('compositeBar');
const appClassName = classNames(APP_PREFIX, getFontInMac());
const workbenchWithHorizontalMenuBarClassName = getBEMModifier(
  workbenchClassName,
  'with-horizontal-menuBar'
);
const withHiddenStatusBar = getBEMModifier(
  workbenchClassName,
  'with-hidden-statusBar'
);
const displayActivityBarClassName = getBEMElement(
  workbenchClassName,
  'display-activityBar'
);

const layoutController = container.resolve(LayoutController);
const layoutService = container.resolve(LayoutService);

export function WorkbenchView(props: IWorkbench & ILayout & ILayoutController) {
  const {
    activityBar,
    menuBar,
    panel,
    sidebar,
    statusBar,
    onPaneSizeChange,
    onHorizontalPaneSizeChange,
    splitPanePos,
    horizontalSplitPanePos,
  } = props;

  const getContent = (panelMaximized: boolean, panelHidden: boolean) => {
    const editor = (
      <Pane
        key="editorView"
        initialSize={panelHidden ? '100%' : horizontalSplitPanePos[0]}
        maxSize="100%"
        minSize="10%"
      >
        <EditorView />
      </Pane>
    );

    const panel = (
      <Pane key="panelView">
        <PanelView />
      </Pane>
    );

    if (panelHidden) {
      return editor;
    }
    if (panelMaximized) {
      return panel;
    }
    return [editor, panel];
  };

  const isMenuBarVertical =
    !menuBar.hidden && menuBar.mode === MenuBarMode.vertical;
  const isMenuBarHorizontal =
    !menuBar.hidden && menuBar.mode === MenuBarMode.horizontal;
  const horizontalMenuBar = isMenuBarHorizontal
    ? workbenchWithHorizontalMenuBarClassName
    : null;
  const hideStatusBar = statusBar.hidden ? withHiddenStatusBar : null;
  const workbenchFinalClassName = classNames(
    workbenchClassName,
    horizontalMenuBar,
    hideStatusBar
  );

  return (
    <div id={ID_APP} className={appClassName} tabIndex={0}>
      <div className={workbenchFinalClassName}>
        <Display visible={isMenuBarHorizontal}>
          <MenuBarView mode={MenuBarMode.horizontal} />
        </Display>
        <div className={mainBenchClassName}>
          <div className={compositeBarClassName}>
            <Display visible={isMenuBarVertical}>
              <MenuBarView mode={MenuBarMode.vertical} />
            </Display>
            <Display
              visible={!activityBar.hidden}
              className={displayActivityBarClassName}
            >
              <ActivityBarView />
            </Display>
          </div>
          <SplitPane
            split="vertical"
            primary="first"
            allowResize={true}
            onChange={onPaneSizeChange as any}
          >
            <Pane
              minSize="170px"
              initialSize={splitPanePos[0]}
              maxSize="80%"
              className={sidebar.hidden ? 'hidden' : ''}
            >
              <SidebarView />
            </Pane>
            <SplitPane
              primary="first"
              split="horizontal"
              allowResize={true}
              // react-split-pane onChange: (newSizes: [size, ratio]) => void；
              onChange={onHorizontalPaneSizeChange as any}
            >
              {getContent(!!panel.panelMaximized, !!panel.hidden)}
            </SplitPane>
          </SplitPane>
        </div>
      </div>
      <Display visible={!statusBar.hidden}>
        <StatusBarView />
      </Display>
    </div>
  );
}

export const Workbench = connect(
  layoutService,
  WorkbenchView,
  layoutController
);