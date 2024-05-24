import Paper from '@mui/material/Paper';
import { lighten, useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { memo, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Box from '@mui/material/Box';
import { ApexOptions } from 'apexcharts';
import FuseLoading from '@fuse/core/FuseLoading';
import GithubIssuesDataType from './types/GithubIssuesDataType';
import { useGetProjectDashboardWidgetsQuery } from '../../../ProjectDashboardApi';

/**
 * The GithubIssuesWidget widget.
 */
function GithubIssuesWidget() {
	const theme = useTheme();
	const [awaitRender, setAwaitRender] = useState(true);
	const [tabValue, setTabValue] = useState(0);


	console.log("tabValue",tabValue);

	const { data: widgets, isLoading } = useGetProjectDashboardWidgetsQuery();

	if (isLoading) {
		return <FuseLoading />;
	}

	const widget = widgets?.githubIssues as GithubIssuesDataType;

	if (!widget) {
		return null;
	}

	// overview : this-week & last-week 에 따른 overview의 하위 위젯에 대한 데이터
	// series : chart data (tab에 따른 New issues & Closed issues 데이터)
	// ranges : this-week, last-week
	// labels : 요일 (Mon ~ Sun)
	const { overview, series, ranges, labels } = widget;

	// 현재 선택된 currentRange
	const currentRange = Object.keys(ranges)[tabValue];

	console.log("currentRange", currentRange);

	// chart 설정
	/*
		데이터를 끌고 오는 방식 : 자료형에서 확인 가능

		ApexOptions
		-> series?: ApexAxisChartSeries | ApexNonAxisChartSeries
		-> ApexAxisChartSeries => name, type, data 속성 존재
	*/
	const chartOptions: ApexOptions = {
		chart: {
			fontFamily: 'inherit',
			foreColor: 'inherit',
			height: '100%',
			// chart의 형태 설정
			type: 'line',
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			}
		},
		colors: [theme.palette.primary.main, theme.palette.secondary.main],
		labels,
		// mock-api.json에서 차트 데이터의 labels을 끌고 오는 코드
		dataLabels: {
			enabled: true,
			enabledOnSeries: [0],
			background: {
				borderWidth: 0
			}
		},
		grid: {
			borderColor: theme.palette.divider
		},
		legend: {
			show: false
		},
		plotOptions: {
			bar: {
				columnWidth: '50%'
			}
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.75
				}
			}
		},
		stroke: {
			width: [3, 0]
		},
		tooltip: {
			followCursor: true,
			theme: theme.palette.mode
		},
		xaxis: {
			axisBorder: {
				show: false
			},
			axisTicks: {
				color: theme.palette.divider
			},
			labels: {
				style: {
					colors: theme.palette.text.secondary
				}
			},
			tooltip: {
				enabled: false
			}
		},
		yaxis: {
			labels: {
				offsetX: -16,
				style: {
					colors: theme.palette.text.secondary
				}
			}
		}
	};

	// 렌더링 제어
	useEffect(() => {
		setAwaitRender(false);
	}, []);

	if (awaitRender) {
		return null;
	}

	return (
		<Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
			<div className="flex flex-col sm:flex-row items-start justify-between">
				{/* Title */}
				<Typography className="text-lg font-medium tracking-tight leading-6 truncate">
					Github Issues Summary
				</Typography>
				<div className="mt-12 sm:mt-0 sm:ml-8">
					{/* This Week / Last Week */}
					{/* bug : 바로 차트가 안 나옴 */}
					<Tabs
						value={tabValue}
						onChange={(ev, value: number) => setTabValue(value)}
						indicatorColor="secondary"
						textColor="inherit"
						variant="scrollable"
						scrollButtons={false}
						className="-mx-4 min-h-40"
						classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
						// Tabs 스타일 지정
						TabIndicatorProps={{
							children: (	
								<Box
									sx={{ bgcolor: 'text.disabled' }}
									className="w-full h-full rounded-full opacity-20"
								/>
							)
						}}
					>	
						{/* 
							ranges 객체가 { a: 1, b: 2 }라면, Object.entries(ranges)는 [ ['a', 1], ['b', 2] ]를 반환합니다.
						*/}
						{Object.entries(ranges).map(([key, label]) => (
							<Tab
								className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
								disableRipple
								key={key}
								label={label}
							/>
						))}
					</Tabs>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-24 w-full mt-32 sm:mt-16">
				{/* New vs. Closed Box */}
				<div className="flex flex-col flex-auto">
					<Typography
						className="font-medium"
						color="text.secondary"
					>
						New vs. Closed
					</Typography>
					{/* Chart */}
					{/* serites에서 현재 Range에 해당하는 데이터 출력 */}
					<div className="flex flex-col flex-auto">
						<ReactApexChart
							className="flex-auto w-full"
							options={chartOptions}
							series={series[currentRange]}
							height={320}
						/>
					</div>
				</div>
				{/* OVerview Box */}
				<div className="flex flex-col">
					<Typography
						className="font-medium"
						color="text.secondary"
					>
						Overview
					</Typography>
					{/* 
						데이터를 끌고 오는 코드가 상이한 이유

						{overview[currentRange]['closed-issues']} : 특수기호(-)가 있기 때문에 대괄호
						{overview[currentRange].fixed} : 일반적
					
					*/}
					<div className="flex-auto grid grid-cols-4 gap-16 mt-24">
						{/* New Issues */}
						<div className="col-span-2 flex flex-col items-center justify-center py-32 px-4 rounded-2xl bg-indigo-50 text-indigo-800">
							{/* overview에서 현재 Range에 해당하는 요소들 중 new-issues 데이터 출력 */}
							<Typography className="text-5xl sm:text-7xl font-semibold leading-none tracking-tight">
								{overview[currentRange]['new-issues']}
							</Typography>
							<Typography className="mt-4 text-sm sm:text-lg font-medium">New Issues</Typography>
						</div>
						{/* Closed */}
						<div className="col-span-2 flex flex-col items-center justify-center py-32 px-4 rounded-2xl bg-green-50 text-green-800">
							{/* overview에서 현재 Range에 해당하는 요소들 중 closed-issues 데이터 출력 */}
							<Typography className="text-5xl sm:text-7xl font-semibold leading-none tracking-tight">
								{overview[currentRange]['closed-issues']}
							</Typography>
							<Typography className="mt-4 text-sm sm:text-lg font-medium">Closed</Typography>
						</div>
						{/* Fixed */}
						<Box
							sx={{
								backgroundColor: (_theme) =>
									_theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
							className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl"
						>	
							{/* overview에서 현재 Range에 해당하는 요소들 중 fixed 데이터 출력 */}
							<Typography className="text-5xl font-semibold leading-none tracking-tight">
								{overview[currentRange].fixed}
							</Typography>
							<Typography className="mt-4 text-sm font-medium text-center">Fixed</Typography>
						</Box>
						{/* Won't Fix */}
						<Box
							sx={{
								backgroundColor: (_theme) =>
									_theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
							className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl"
						>	
							{/* overview에서 현재 Range에 해당하는 요소들 중 wont-fix 데이터 출력 */}
							<Typography className="text-5xl font-semibold leading-none tracking-tight">
								{overview[currentRange]['wont-fix']}
							</Typography>
							<Typography className="mt-4 text-sm font-medium text-center">Won't Fix</Typography>
						</Box>
						{/* Re-opened */}
						<Box
							sx={{
								backgroundColor: (_theme) =>
									_theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
							className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl"
						>	
							{/* overview에서 현재 Range에 해당하는 요소들 중 re-opened 데이터 출력 */}
							<Typography className="text-5xl font-semibold leading-none tracking-tight">
								{overview[currentRange]['re-opened']}
							</Typography>
							<Typography className="mt-4 text-sm font-medium text-center">Re-opened</Typography>
						</Box>
						{/* Needs Triage */}
						<Box
							sx={{
								backgroundColor: (_theme) =>
									_theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
							className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl"
						>	
							{/* overview에서 현재 Range에 해당하는 요소들 중 needs-triage 데이터 출력 */}
							<Typography className="text-5xl font-semibold leading-none tracking-tight">
								{overview[currentRange]['needs-triage']}
							</Typography>
							<Typography className="mt-4 text-sm font-medium text-center">Needs Triage</Typography>
						</Box>
					</div>
				</div>
			</div>
		</Paper>
	);
}

export default memo(GithubIssuesWidget);
