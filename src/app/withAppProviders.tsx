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

		/*
			useMemo

			: 렌더링 될 때마다 불필요한 재호출 방지 -> 성능 최적화
			: 동일한 결과값을 반복 호출해야 하는 경우, 
				사용할 때마다 과정 반복을 거치지 않고
				처음 실행될 때 그 값을 메모리에 저장하고
				필요할 때마다 과정 실행없이 메모리에서 꺼내서 재사용
		*/
		// 라우트 불러오기
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
					{/* 날짜/시간 전달하는 최상위 부모 컴포넌트 느낌? */}
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						{/* Redux 스토어를 React에 주입 */}
						<Provider store={store}>
							{/* 
								스타일링 엔진의 우선순위 결정
								
								injectFirst : 다른 스타일 시트보다 우선 적용
							*/}
							<StyledEngineProvider injectFirst>
								{/* 
									외부에서 전달된 컴포넌트

									...props : <Component />에 전달한 추가적인 속성
								*/}
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
