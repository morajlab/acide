import 'reflect-metadata';
import { container } from 'tsyringe';
import { localize } from 'monaco-editor/esm/vs/nls';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import { ServicesAccessor } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';

import { KeyMod, KeyCode } from '@acide/ui/app/monaco';
import { KeybindingWeight } from '@acide/ui/app/monaco/common';
import { Action2 } from '@acide/ui/app/monaco/action';
import { constants } from '@acide/ui/app/services/builtinService/const';
import { ISettingsService, SettingsService } from '@acide/ui/app/services';

export class QuickAccessSettings extends Action2 {
  static readonly ID = constants.ACTION_QUICK_ACCESS_SETTINGS;
  static readonly LABEL = localize(
    'quickAccessSettings.label',
    'Open Settings (JSON)'
  );
  private readonly settingsService: ISettingsService;

  constructor() {
    super({
      id: QuickAccessSettings.ID,
      label: QuickAccessSettings.LABEL,
      title: QuickAccessSettings.LABEL,
      alias: 'Open Settings (JSON)',
      precondition: undefined,
      f1: true,
      keybinding: {
        when: undefined,
        weight: KeybindingWeight.WorkbenchContrib,
        // eslint-disable-next-line new-cap
        primary: KeyChord(KeyMod.CtrlCmd | KeyCode.Comma),
      },
    });
    this.settingsService = container.resolve(SettingsService);
  }

  run(accessor: ServicesAccessor) {
    this.settingsService.openSettingsInEditor();
  }
}
