import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { Controller } from '@acide/ui/app/react/controller';
import { ILayoutService, LayoutService } from '@acide/ui/app/services';

export interface ILayoutController extends Partial<Controller> {
  onPaneSizeChange?: (splitPanePos: string[]) => void;
  onHorizontalPaneSizeChange?: (horizontalSplitPanePos: string[]) => void;
}

@singleton()
export class LayoutController extends Controller implements ILayoutController {
  private readonly layoutService: ILayoutService;

  constructor() {
    super();
    this.layoutService = container.resolve(LayoutService);
  }

  public initView() {}

  public onPaneSizeChange = (splitPanePos: string[]) => {
    this.layoutService.setPaneSize(splitPanePos);
  };

  public onHorizontalPaneSizeChange = (horizontalSplitPanePos: string[]) => {
    this.layoutService.setHorizontalPaneSize(horizontalSplitPanePos);
  };
}
