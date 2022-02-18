import molecule from '@acide/ui/app';
import { IExtension } from '@acide/ui/app/model/extension';

const removePanel = function (panel) {
  molecule.explorer.removePanel(panel.id);
};

export const ExtendsExplorer: IExtension = {
  id: 'ExtendsExplorer',
  name: 'Extends Explorer',
  activate() {
    molecule.explorer.onRemovePanel(removePanel);
  },

  dispose() {
    // TODO There should remove the onRemovePanel event
    // molecule.explorer.dispose(removePanel);
  },
};
