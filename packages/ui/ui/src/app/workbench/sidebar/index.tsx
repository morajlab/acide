import 'reflect-metadata';
export * from './sidebar';
import { Sidebar } from './sidebar';
import { connect } from '@acide/ui/app/react';
import { SidebarService } from '@acide/ui/app/services';
import { container } from 'tsyringe';
import { SidebarController } from '@acide/ui/app/controller/sidebar';

const sidebarService = container.resolve(SidebarService);
const sidebarController = container.resolve(SidebarController);

export const SidebarView = connect(sidebarService, Sidebar, sidebarController);
