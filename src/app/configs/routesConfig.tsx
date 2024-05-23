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
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';

/*
	페이지 라우팅 설정 : /example, /sign-out, /sign-in, /sign-up

	type FuseRouteConfigType : routes , settings(선택) , auth(선택)

	여기서 속성 routes -> type FuseRoutesType
							-> type FuseRouteItemType[]
								-> type RouteObject + auth(선택) , settings(선택)
*/
const routeConfigs: FuseRouteConfigsType = [
	
	// ExampleConfig, 
	
	SignOutConfig, SignInConfig, SignUpConfig,

	// DocumentationConfig,
	// ...PagesConfigs,
	// ...UserInterfaceConfigs,
	...dashboardsConfigs,
	// ...AppsConfigs,
	// ...authRoleExamplesConfigs
];

/**
 * The routes of the application.
 */
/*
	App 에 관한 전반적인 라우팅 설정 : pages, loading, error

	type FuseRoutesType : FuseRouteItemType[]
							-> type RouteObject + auth(선택) , settings(선택)
*/
const routes: FuseRoutesType = [

	/*
		... : 배열같은 반복 가능한 객체의 원소를 나열한다.

		generateRoutesFromConfigs() ==> 자료형 통일
		: configs와 defaultAuth 파라미터를 받아 allRoutes 배열에 할당하고 반환
		: return allRoutes : type FuseRouteItemType[]

		allRoutes = [...allRoutes, ...this.setRoutes(config, defaultAuth)];
		: ...route(routes), settings, auth 반환 
		: auth = settingsConfig.defaultAuth (즉, ['admin'])
	*/
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
	// 기본 페이지 : 클라이언트가 페이지를 실행하면 바로 나타나는 화면
	// 권한 부여로 이동가능
	{
		path: '/',
		element: <Navigate to="/example" />,
		auth: settingsConfig.defaultAuth	
	},
	// loading
	{
		path: 'loading',
		element: <FuseLoading />
	},
	// error
	{
		path: '404',
		element: <Error404Page />
	},
	// 위에 설정한의 라우팅 이외의 모든 주소 -> error 페이지로 이동
	{
		path: '*',
		element: <Navigate to="404" />
	}
];

export default routes;
