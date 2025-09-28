import { Routes } from '@angular/router';
import { BaseLayout } from './layout/base/base.layout';
import { DashboardPage } from './page/dashboard/dashboard';
import { StatisticPage } from './page/statistic/statistic';

export const routes: Routes = [
	{
		path: '',
		component: BaseLayout,
		children: [
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full'
			},
			{
				path: 'dashboard',
				component: DashboardPage
			},
			{
				path: 'statistics',
				component: StatisticPage
			},
		],
	},
];
