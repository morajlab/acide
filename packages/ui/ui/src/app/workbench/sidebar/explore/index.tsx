import 'reflect-metadata';
import { connect } from '@acide/ui/app/react';
import { container } from 'tsyringe';
import { FolderTreeService } from '@acide/ui/app/services';
import { Explorer } from './explore';
import FolderTree from './folderTree';
import { FolderTreeController } from '@acide/ui/app/controller/explorer/folderTree';
import { EditorTree } from './editorTree';

const folderTreeService = container.resolve(FolderTreeService);
const folderTreeController = container.resolve(FolderTreeController);

const FolderTreeView = connect(
  folderTreeService,
  FolderTree,
  folderTreeController
);

export { Explorer, FolderTreeView, FolderTree, EditorTree };
