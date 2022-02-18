import 'reflect-metadata';
import { container } from 'tsyringe';
import { connect } from '@acide/ui/app/react';
import { IPanelService, PanelService } from '@acide/ui/app/services';
import Panel from './panel';
import { PanelController } from '@acide/ui/app/controller/panel';

const panelService = container.resolve<IPanelService>(PanelService);
const panelController = container.resolve(PanelController);

const PanelView = connect(panelService, Panel, panelController);

export { PanelView };
