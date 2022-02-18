import 'reflect-metadata';
import { connect } from '@acide/ui/app/react';
import { ActivityBarController } from '@acide/ui/app/controller';

import ActivityBar from './activityBar';
import { container } from 'tsyringe';
import { ActivityBarService } from '@acide/ui/app/services';
export * from './activityBar';
export { ActivityBarItem } from './activityBarItem';

const activityBarService = container.resolve(ActivityBarService);
const activityBarController = container.resolve(ActivityBarController);

export const ActivityBarView = connect(
  activityBarService,
  ActivityBar,
  activityBarController
);
