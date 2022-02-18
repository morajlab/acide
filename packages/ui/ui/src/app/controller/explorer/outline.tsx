import 'reflect-metadata';
import { Controller } from '@acide/ui/app/react/controller';
import { container, singleton } from 'tsyringe';
import React from 'react';
import {
  BuiltinService,
  ExplorerService,
  IBuiltinService,
  IExplorerService,
} from '@acide/ui/app/services';

export interface IOutlineController extends Partial<Controller> {}

@singleton()
export class OutlineController
  extends Controller
  implements IOutlineController
{
  private readonly explorerService: IExplorerService;
  private readonly builtinService: IBuiltinService;

  constructor() {
    super();
    this.explorerService = container.resolve(ExplorerService);
    this.builtinService = container.resolve(BuiltinService);
  }

  public initView() {
    const { builtInExplorerOutlinePanel } = this.builtinService.getModules();

    if (builtInExplorerOutlinePanel) {
      this.explorerService.addPanel(builtInExplorerOutlinePanel);
    }
  }

  public readonly onClick = (event: React.MouseEvent) => {
    // console.log('onClick:', panelService);
  };
}
