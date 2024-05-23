import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import FuseLoading from '@fuse/core/FuseLoading';
import { useGetProjectDashboardWidgetsQuery } from '../../../ProjectDashboardApi';
import WidgetDataType, { RangeType } from './types/WidgetDataType';

/**
 * The SummaryWidget widget.
 */
function SummaryWidget() {
	// /mock-api.json 에서 project_dashboard_widgets 에서 element 확인 가능
	const { data: widgets, isLoading } = useGetProjectDashboardWidgetsQuery();

	const widget = widgets?.summary as WidgetDataType;

	if (isLoading) {
		return <FuseLoading />;
	}

	if (!widget) {
		return null;
	}

	// ranges : Yesterday, Today(default), Tomorrow
	const { data, ranges, currentRange: currentRangeDefault } = widget;

	// RangeType = 'DY' | 'DT' | 'DTM';

	// 이런 설정은 /mock-api.json 에서 project_dashboard_widgets에서
	// RangeType의 이름들로 데이터를 받아 저장하고 있기 때문
	const [currentRange, setCurrentRange] = useState<RangeType>(currentRangeDefault as RangeType);


	// select를 통해 선택시 value값이 저장되므로, 
	// 그것을 RangeType를 설정함으로써, 조회를 용이하게 함
	function handleChangeRange(event: SelectChangeEvent<string>) {
		setCurrentRange(event.target.value as RangeType);
	}

	return (
		<Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
			<div className="flex items-center justify-between px-8 pt-12">
				{/* ranges의 선택에 따라 데이터 출력 */}
				<Select
					className="mx-16"
					classes={{ select: 'py-0 flex items-center' }}
					value={currentRange}
					// ranges 변경 함수
					onChange={handleChangeRange}
					inputProps={{
						name: 'currentRange'
					}}
					variant="filled"
					size="small"
				>
					{Object.entries(ranges).map(([key, n]) => {
						return (
							<MenuItem
								key={key}
								value={key}
							>
								{n}
							</MenuItem>
						);
					})}
				</Select>
				{/* Menu 버튼 : 작동 안함 */}
				<IconButton
					aria-label="more"
					size="large"
				>
					<FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
				</IconButton>
			</div>
			{/* Due Tasks 데이터 출력 */}
			<div className="text-center mt-8">
				<Typography className="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-blue-500">
					{data.count[currentRange]}
				</Typography>
				<Typography className="text-lg font-medium text-blue-600 dark:text-blue-500">{data.name}</Typography>
			</div>
			{/* Completed 데이터 출력 */}
			<Typography
				className="flex items-baseline justify-center w-full mt-20 mb-24"
				color="text.secondary"
			>	
				<span className="truncate">{data.extra.name}</span>:
				<b className="px-8">{data.extra.count[currentRange]}</b>
			</Typography>
		</Paper>
	);
}

export default memo(SummaryWidget);
