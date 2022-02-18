import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import React from 'react';
import { IActionBarItemProps } from '@acide/ui/app/components/actionBar';
import { Controller } from '@acide/ui/app/react/controller';
import { PanelEvent } from '@acide/ui/app/model/workbench/panel';
import {
  BuiltinService,
  IBuiltinService,
  IPanelService,
  PanelService,
} from '@acide/ui/app/services';
import {
  IMonacoService,
  MonacoService,
} from '@acide/ui/app/monaco/monacoService';
import { QuickTogglePanelAction } from '@acide/ui/app/monaco/quickTogglePanelAction';
import Output from '@acide/ui/app/workbench/panel/output';
import type { UniqueId } from '@acide/ui/app/common/types';

export interface IPanelController extends Partial<Controller> {
  onTabChange?(key: UniqueId): void;
  onToolbarClick?(e: React.MouseEvent, item: IActionBarItemProps): void;
  onClose?(key: UniqueId): void;
}

@singleton()
export class PanelController extends Controller implements IPanelController {
  private readonly panelService: IPanelService;
  private readonly monacoService: IMonacoService;
  private readonly builtinService: IBuiltinService;

  constructor() {
    super();
    this.panelService = container.resolve(PanelService);
    this.monacoService = container.resolve(MonacoService);
    this.builtinService = container.resolve(BuiltinService);
  }

  public initView() {
    const {
      builtInOutputPanel,
      builtInPanelToolbox,
      builtInPanelToolboxResize,
    } = this.builtinService.getModules();
    if (builtInOutputPanel) {
      const output = builtInOutputPanel;
      output.renderPane = (item) => (
        <Output
          onUpdateEditorIns={(instance) => {
            // Please notice the problem about memory out
            // 'Cause we didn't dispose the older instance
            item.outputEditorInstance = instance;
          }}
          {...item}
        />
      );
      this.panelService.add(output);
      this.panelService.setActive(output.id);
    }

    const toolbox = [builtInPanelToolboxResize, builtInPanelToolbox].filter(
      Boolean
    ) as IActionBarItemProps[];

    this.panelService.setState({
      toolbox,
    });
  }

  public readonly onTabChange = (key: UniqueId): void => {
    if (key) {
      this.panelService.setActive(key);
    }
    this.emit(PanelEvent.onTabChange, key);
  };

  public readonly onClose = (key: UniqueId) => {
    if (key) {
      this.emit(PanelEvent.onTabClose, key);
    }
  };

  public readonly onToolbarClick = (
    e: React.MouseEvent,
    item: IActionBarItemProps
  ): void => {
    const { PANEL_TOOLBOX_CLOSE, PANEL_TOOLBOX_RESIZE } =
      this.builtinService.getConstants();
    if (item.id === PANEL_TOOLBOX_CLOSE) {
      this.monacoService.commandService.executeCommand(
        QuickTogglePanelAction.ID
      );
    } else if (item.id === PANEL_TOOLBOX_RESIZE) {
      this.panelService.toggleMaximize();
    }
    this.emit(PanelEvent.onToolbarClick, e, item);
  };
}
