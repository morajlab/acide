import 'reflect-metadata';
import { container } from 'tsyringe';

import { localize } from '@acide/ui/app/i18n/localize';
import {
  KeyMod,
  KeyCode,
  Uri,
  editor as MonacoEditor,
} from '@acide/ui/app/monaco';
import { EditorService, IEditorService } from '@acide/ui/app/services';
import { KeybindingWeight } from '@acide/ui/app/monaco/common';
import { Action2 } from '@acide/ui/app/monaco/action';
import { constants } from '@acide/ui/app/services/builtinService/const';

export class QuickRedo extends Action2 {
  static readonly ID = constants.ACTION_QUICK_REDO;
  static readonly LABEL = localize('menu.redo', 'Redo');
  static readonly DESC = 'Redo';
  private readonly editorService: IEditorService;

  constructor() {
    super({
      id: QuickRedo.ID,
      title: {
        value: QuickRedo.LABEL,
        original: QuickRedo.DESC,
      },
      label: QuickRedo.LABEL,
      alias: QuickRedo.DESC,
      f1: true,
      keybinding: {
        when: undefined,
        weight: KeybindingWeight.WorkbenchContrib,
        // eslint-disable-next-line new-cap
        primary: KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KeyZ,
      },
    });
    this.editorService = container.resolve(EditorService);
  }

  isTextdom(ele: Element): ele is HTMLInputElement {
    return typeof (ele as HTMLInputElement).selectionStart === 'number';
  }

  run(accessor, ...args) {
    const focusinEle = args[0];
    const currentFocusinEle: Element | null =
      focusinEle || document.activeElement;
    if (
      currentFocusinEle &&
      this.isTextdom(currentFocusinEle) &&
      !currentFocusinEle.className.includes('monaco')
    ) {
      // native dom use the native methods
      document.execCommand('redo');
    } else {
      // monaco component should use the method from instance
      const editorInstance = this.editorService.editorInstance;
      if (editorInstance) {
        const currentActiveGroup = this.editorService.getState().current;
        if (currentActiveGroup) {
          const tab = this.editorService.getTabById(
            currentActiveGroup.activeTab!,
            currentActiveGroup.id!
          );
          editorInstance?.focus();
          const model = MonacoEditor.getModel(Uri.parse(tab!.id!.toString()))!;
          (model as any).redo();
        }
      }
    }
  }
}