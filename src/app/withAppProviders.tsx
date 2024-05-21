// import createGenerateClassName from '@mui/styles/createGenerateClassName';
// import jssPreset from '@mui/styles/jssPreset';
// import { create } from 'jss';
// import jssExtend from 'jss-plugin-extend';
// import rtl from 'jss-rtl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StyledEngineProvider } from '@mui/material/styles';
import routes from 'app/configs/routesConfig';
import { useMemo } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from '@fuse/utils/ErrorBoundary';
import AppContext from './AppContext';
import store from './store/store';

type ComponentProps = {
	name?: string;
};

/**
 * A Higher Order Component that provides the necessary context providers for the app.
 */
// App 컴포넌트를 제공하는 함수
function withAppProviders(Component: React.ComponentType<ComponentProps>) {
	/**
	 * The component that wraps the provided component with the necessary context providers.
	 */
	function WithAppProviders(props: React.PropsWithChildren<ComponentProps>) {
		/**
		 * The value to pass to the AppContext provider.
		 */

		// !!!!!!!!!!!!!!!!!!!! useMemo?
		// 라우팅 설정
		const val = useMemo(
			() => ({
				routes
			}),
			[routes]
		);

		return (
			// error는 언제 어디서나 발생 가능하므로, 가장 상위 컴포넌트로
			<ErrorBoundary>
				{/* routes를 받는 컴포넌트 : routes */}
				<AppContext.Provider value={val}>
					{/*  */}
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<Provider store={store}>
							<StyledEngineProvider injectFirst>
								<Component {...props} />
							</StyledEngineProvider>
						</Provider>
					</LocalizationProvider>
				</AppContext.Provider>
			</ErrorBoundary>
		);
	}

	return WithAppProviders;
}

export default withAppProviders;
