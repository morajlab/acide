import 'reflect-metadata';
import { Controller } from '@acide/ui/app/react/controller';
import { container, singleton } from 'tsyringe';
import {
  BuiltinService,
  IBuiltinService,
  IExtensionService,
} from '@acide/ui/app/services';
import { ExtensionService } from '@acide/ui/app/services/extensionService';
import { CommandQuickAccessViewAction } from '@acide/ui/app/monaco/quickAccessViewAction';
import { SelectColorThemeAction } from '@acide/ui/app/monaco/selectColorThemeAction';
import { QuickAccessSettings } from '@acide/ui/app/monaco/quickAccessSettingsAction';
import { SelectLocaleAction } from '@acide/ui/app/i18n/selectLocaleAction';
import { CommandQuickSideBarViewAction } from '@acide/ui/app/monaco/quickToggleSideBarAction';
import { ID_SIDE_BAR } from '@acide/ui/app/common/id';
import { QuickTogglePanelAction } from '@acide/ui/app/monaco/quickTogglePanelAction';
import { QuickSelectAllAction } from '@acide/ui/app/monaco/quickSelectAllAction';
import { QuickCopyLineUp } from '@acide/ui/app/monaco/quickCopyLineUp';
import { QuickUndo } from '@acide/ui/app/monaco/quickUndo';
import { QuickRedo } from '@acide/ui/app/monaco/quickRedo';
import { QuickCreateFile } from '@acide/ui/app/monaco/quickCreateFile';
import type { Action2 } from '@acide/ui/app/monaco/action';

export interface IExtensionController extends Partial<Controller> {}

@singleton()
export class ExtensionController
  extends Controller
  implements IExtensionController
{
  private readonly extensionService: IExtensionService;
  private readonly builtinService: IBuiltinService;
  constructor() {
    super();
    this.extensionService = container.resolve(ExtensionService);
    this.builtinService = container.resolve(BuiltinService);
  }

  public initView() {
    const {
      quickAcessViewAction,
      quickSelectColorThemeAction,
      quickAccessSettingsAction,
      quickSelectLocaleAction,
      quickTogglePanelAction,
      quickSelectAllAction,
      quickCopyLineUpAction,
      quickUndoAction,
      quickRedoAction,
      quickCreateFileAction,
    } = this.builtinService.getModules();
    (
      [
        [quickAcessViewAction, CommandQuickAccessViewAction],
        [quickSelectColorThemeAction, SelectColorThemeAction],
        [quickAccessSettingsAction, QuickAccessSettings],
        [quickSelectLocaleAction, SelectLocaleAction],
        [ID_SIDE_BAR, CommandQuickSideBarViewAction],
        [quickTogglePanelAction, QuickTogglePanelAction],
        [quickSelectAllAction, QuickSelectAllAction],
        [quickCopyLineUpAction, QuickCopyLineUp],
        [quickUndoAction, QuickUndo],
        [quickRedoAction, QuickRedo],
        [quickCreateFileAction, QuickCreateFile],
      ] as [any, new () => Action2][]
    ).forEach(([key, action]) => {
      if (key) {
        this.extensionService.registerAction(action);
      }
    });
  }
}
