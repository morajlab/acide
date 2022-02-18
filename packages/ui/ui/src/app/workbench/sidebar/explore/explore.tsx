import React from 'react';
import { Collapse } from '@acide/ui/app/components/collapse';
import { Header, Content } from '@acide/ui/app/workbench/sidebar';
import { IExplorer } from '@acide/ui/app/model/workbench/explorer/explorer';
import { IExplorerController } from '@acide/ui/app/controller/explorer/explorer';
import { Toolbar } from '@acide/ui/app/components/toolbar';
import { defaultExplorerClassName } from './base';
import { localize } from '@acide/ui/app/i18n/localize';

type IExplorerProps = IExplorer & IExplorerController;

export const Explorer: React.FunctionComponent<IExplorerProps> = (
  props: IExplorerProps
) => {
  const {
    data = [],
    headerToolBar,
    onClick,
    onActionsContextMenuClick,
    onCollapseChange,
    onToolbarClick,
  } = props;
  return (
    <div className={defaultExplorerClassName}>
      <Header
        title={localize('sidebar.explore.title', 'Explorer')}
        toolbar={
          <Toolbar
            data={[headerToolBar!]}
            onClick={onClick}
            onContextMenuClick={onActionsContextMenuClick}
          />
        }
      />
      <Content>
        <Collapse
          data={data}
          onCollapseChange={onCollapseChange}
          onToolbarClick={onToolbarClick}
        />
      </Content>
    </div>
  );
};
