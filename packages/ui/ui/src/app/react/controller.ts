import { GlobalEvent } from '@acide/ui/app/common/event';

export abstract class Controller extends GlobalEvent {
  public abstract initView(): void;
}
