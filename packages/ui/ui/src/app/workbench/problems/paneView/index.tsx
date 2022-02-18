import React, { memo } from 'react';
import { getBEMElement, prefixClaName } from '@acide/ui/app/common/className';
import TreeView from '@acide/ui/app/components/tree';
import { localize } from '@acide/ui/app/i18n/localize';
import { Icon, Scrollable } from '@acide/ui/app/components';
import { IProblems, MarkerSeverity } from '@acide/ui/app/model';

const defaultClassName = prefixClaName('problems');
const treeClassName = getBEMElement(defaultClassName, 'treeview');
const treeNodeClassName = getBEMElement(treeClassName, 'treeNode');
const treeNodeBadgeClassName = getBEMElement(treeNodeClassName, 'badge');
const treeLeafClassName = getBEMElement(treeClassName, 'treeLeaf');
const treeLeafSubInfoClassName = getBEMElement(treeLeafClassName, 'subInfo');

function ProblemsPaneView(props: IProblems) {
  const { data } = props;
  if (!data?.length) {
    return (
      <div style={{ margin: '0 18px', userSelect: 'none' }}>
        {localize(
          'panel.problems.empty',
          'No problems have been detected in the workspace.'
        )}
      </div>
    );
  }

  const getIcon = (status: number) => {
    switch (status) {
      case MarkerSeverity.Error: {
        return <Icon type="error" />;
      }
      case MarkerSeverity.Warning: {
        return <Icon type="warning" />;
      }
      case MarkerSeverity.Info: {
        return <Icon type="info" />;
      }
      default: {
        return '';
      }
    }
  };

  return (
    <Scrollable>
      <div className={defaultClassName}>
        <TreeView
          className={treeClassName}
          data={data}
          renderTitle={({ children, name, value }, _, isLeaf) => {
            return !isLeaf ? (
              <span className={treeNodeClassName}>
                {value.code}
                <span className={treeNodeBadgeClassName}>
                  {children?.length}
                </span>
              </span>
            ) : (
              <span className={treeLeafClassName}>
                {getIcon(value.status)}
                <span>{value.message}</span>
                <span className={treeLeafSubInfoClassName}>{value.code}</span>
                <span className={treeLeafSubInfoClassName}>
                  [{value.startLineNumber}, {value.startColumn}]
                </span>
              </span>
            );
          }}
        />
      </div>
    </Scrollable>
  );
}

export default memo(ProblemsPaneView);
