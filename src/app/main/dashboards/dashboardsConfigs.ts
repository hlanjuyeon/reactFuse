import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
// import AnalyticsDashboardAppConfig from './analytics/AnalyticsDashboardAppConfig';
// import FinanceDashboardAppConfig from './finance/FinanceDashboardAppConfig';
// import CryptoDashboardAppConfig from './crypto/CryptoDashboardAppConfig';

import ProjectDashboardAppConfig from './project/ProjectDashboardAppConfig';

/**
 * Dashboards
 */
const dashboardsConfigs: FuseRouteConfigsType = [
	// AnalyticsDashboardAppConfig,
	// FinanceDashboardAppConfig,
	// CryptoDashboardAppConfig,
	ProjectDashboardAppConfig,
];

export default dashboardsConfigs;
