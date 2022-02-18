import 'reflect-metadata';
import { connect } from '@acide/ui/app/react';

import MenuBar from './menuBar';
import { MenuBarService } from '@acide/ui/app/services';
import { container } from 'tsyringe';
import { MenuBarController } from '@acide/ui/app/controller/menuBar';

const menuBarService = container.resolve(MenuBarService);
const menuBarController = container.resolve(MenuBarController);

const MenuBarView = connect(menuBarService, MenuBar, menuBarController);

export { MenuBar, MenuBarView };
