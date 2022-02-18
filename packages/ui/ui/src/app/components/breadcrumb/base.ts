import { prefixClaName, getBEMElement } from '@acide/ui/app/common/className';

export const defaultBreadcrumbClassName = prefixClaName('breadcrumb');
export const breadcrumbItemClassName = getBEMElement(
  defaultBreadcrumbClassName,
  'item'
);
export const breadcrumbLabelClassName = getBEMElement(
  defaultBreadcrumbClassName,
  'label'
);
