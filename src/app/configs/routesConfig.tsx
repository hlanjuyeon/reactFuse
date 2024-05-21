import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import { FuseRouteConfigsType, FuseRoutesType } from '@fuse/utils/FuseUtils';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import Error404Page from '../main/404/Error404Page';
import ExampleConfig from '../main/example/ExampleConfig';

// 라우팅 이름 설정 (페이지)
const routeConfigs: FuseRouteConfigsType = [ExampleConfig, SignOutConfig, SignInConfig, SignUpConfig];

/**
 * The routes of the application.
 */
// App 에 관한 일반적인 라우팅 설정 : loading, error
const routes: FuseRoutesType = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
	// 기본 페이지 : 클라이언트가 페이지를 실행하면 바로 나타나는 화면
	{
		path: '/',
		element: <Navigate to="/example" />,
		auth: settingsConfig.defaultAuth
	},
	// 로딩
	{
		path: 'loading',
		element: <FuseLoading />
	},
	// 에러
	{
		path: '404',
		element: <Error404Page />
	},
	// 위에 설정한 3개의 라우팅 이외의 모든 주소 -> error로 출력
	{
		path: '*',
		element: <Navigate to="404" />
	}
];

export default routes;
