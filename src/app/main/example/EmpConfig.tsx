import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const EmpApp = lazy(() => import('./EmpApp'));

const EmpConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'emp',
			element: <EmpApp />
		}
	]
};

export default EmpConfig;
