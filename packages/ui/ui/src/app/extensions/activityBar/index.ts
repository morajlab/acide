import { IExtension } from '@acide/ui/app/model/extension';
import { IExtensionService } from '@acide/ui/app/services';
import molecule from '@acide/ui/app';
import { CommandQuickSideBarViewAction } from '@acide/ui/app/monaco/quickToggleSideBarAction';

export const ExtendsActivityBar: IExtension = {
  id: 'ExtendsActivityBar',
  name: 'Extend The Default ActivityBar',
  activate(extensionCtx: IExtensionService) {
    molecule.activityBar.onChange((pre, cur) => {
      if (cur !== pre) {
        molecule.activityBar.setActive(cur);
        molecule.sidebar.setActive(cur);

        const { sidebar } = molecule.layout.getState();
        if (sidebar.hidden) {
          extensionCtx.executeCommand(CommandQuickSideBarViewAction.ID, cur);
        }
      } else {
        extensionCtx.executeCommand(CommandQuickSideBarViewAction.ID, cur);
      }
    });
  },

  dispose() {},
};
