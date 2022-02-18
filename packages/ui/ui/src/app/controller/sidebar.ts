import 'reflect-metadata';
import { Controller } from '@acide/ui/app/react/controller';
import { container, singleton } from 'tsyringe';
import { ISidebarService, SidebarService } from '@acide/ui/app/services';

export interface ISideBarController extends Partial<Controller> {}

@singleton()
export class SidebarController
  extends Controller
  implements ISideBarController
{
  private readonly sidebarService: ISidebarService;

  constructor() {
    super();
    this.sidebarService = container.resolve(SidebarService);
  }

  public initView() {}

  public readonly onClick = (event: React.MouseEvent) => {
    console.log('onClick:', this.sidebarService);
  };
}
