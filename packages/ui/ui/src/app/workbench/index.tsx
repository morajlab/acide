export { WorkbenchView as Workbench } from './workbench';
export { ActivityBar } from './activityBar';
export { ActivityBarItem } from './activityBar/activityBarItem';
export { Editor } from './editor/editor';
export { EditorGroup } from './editor/group';
export { MenuBar } from './menuBar/menuBar';
export { Panel } from './panel/panel';
export { Sidebar } from './sidebar';
export { StatusBar, StatusItem } from './statusBar';

export type {
  IWorkbench,
  IActivityBar,
  IActivityBarItem,
  IEditor,
  IEditorGroup,
  IMenuBar,
  IPanel,
  ISidebar,
  IStatusBar,
  IStatusBarItem,
  IProblems,
  IProblemsItem,
  INotification,
  INotificationItem,
} from '../model';

export type {
  IActivityBarController,
  ILayoutController,
  IEditorController,
  ISideBarController,
  IMenuBarController,
  ISettingsController,
  INotificationController,
  IPanelController,
  IProblemsController,
  IStatusBarController,
} from '../controller';
