import 'reflect-metadata';
import React from 'react';
import { Float, IStatusBarItem } from '@acide/ui/app/model';
import { Controller } from '@acide/ui/app/react/controller';
import {
  IPanelService,
  PanelService,
  IStatusBarService,
  StatusBarService,
  ILayoutService,
  LayoutService,
  ProblemsService,
  IBuiltinService,
  BuiltinService,
} from '@acide/ui/app/services';
import { singleton, container } from 'tsyringe';
import {
  IMonacoService,
  MonacoService,
} from '@acide/ui/app/monaco/monacoService';
import { QuickTogglePanelAction } from '@acide/ui/app/monaco/quickTogglePanelAction';
import {
  ProblemsPaneView,
  ProblemsStatusBarView,
} from '@acide/ui/app/workbench/problems';
import { connect } from '@acide/ui/app/react';
export interface IProblemsController extends Partial<Controller> {
  onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}
@singleton()
export class ProblemsController
  extends Controller
  implements IProblemsController
{
  private readonly panelService: IPanelService;
  private readonly statusBarService: IStatusBarService;
  private readonly layoutService: ILayoutService;
  private readonly monacoService: IMonacoService;
  private readonly problemsService: ProblemsService;
  private readonly builtinService: IBuiltinService;

  constructor() {
    super();
    this.panelService = container.resolve(PanelService);
    this.statusBarService = container.resolve(StatusBarService);
    this.monacoService = container.resolve(MonacoService);
    this.layoutService = container.resolve(LayoutService);
    this.problemsService = container.resolve(ProblemsService);
    this.builtinService = container.resolve(BuiltinService);
  }

  private showHideProblems() {
    const { panel } = this.layoutService.getState();
    const { current } = this.panelService.getState();
    const { builtInPanelProblems } = this.builtinService.getModules();
    if (builtInPanelProblems) {
      if (panel.hidden || current?.id === builtInPanelProblems.id) {
        this.monacoService.commandService.executeCommand(
          QuickTogglePanelAction.ID
        );
      }

      this.panelService.open(builtInPanelProblems);
    }
  }

  public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
    this.showHideProblems();
  };

  public initView() {
    const { builtInStatusProblems: statusProblems, builtInPanelProblems } =
      this.builtinService.getModules();

    if (statusProblems) {
      statusProblems.render = (item) => <ProblemsStatusBarView {...item} />;
      statusProblems.onClick = this.onClick;

      this.statusBarService.add(statusProblems, Float.left);
    }

    if (builtInPanelProblems) {
      // keep ProblemsPaneView updated to problems' state
      const ProblemsView = connect(this.problemsService, ProblemsPaneView);
      const problemsPanel = builtInPanelProblems;
      problemsPanel.renderPane = () => <ProblemsView />;

      this.panelService.add(problemsPanel);
      this.panelService.setActive(problemsPanel.id);
    }

    const { PROBLEM_MODEL_ID, PROBLEM_MODEL_NAME } =
      this.builtinService.getConstants();

    this.problemsService.setState({
      id: PROBLEM_MODEL_ID,
      name: PROBLEM_MODEL_NAME,
    });
  }
}
