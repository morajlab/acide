import 'reflect-metadata';
import { container } from 'tsyringe';
import { connect } from '@acide/ui/app/react';
import { StatusBar } from './statusBar';
import { StatusBarService } from '@acide/ui/app/services';
import { StatusBarController } from '@acide/ui/app/controller/statusBar';

export * from './statusBar';
export * from './item';

const statusBarService = container.resolve(StatusBarService);
const statusBarController = container.resolve(StatusBarController);

export const StatusBarView = connect(
  statusBarService,
  StatusBar,
  statusBarController
);
