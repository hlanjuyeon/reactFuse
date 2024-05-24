import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import FuseLoading from '@fuse/core/FuseLoading';
import { useGetProjectDashboardWidgetsQuery } from '../../../ProjectDashboardApi';
import ScheduleDataType from './types/ScheduleDataType';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

/**
 * The ScheduleWidget widget.
 */
function ScheduleWidget() {
	const { data: widgets, isLoading } = useGetProjectDashboardWidgetsQuery();

	const widget = widgets?.schedule as ScheduleDataType;

	if (isLoading) {
		return <FuseLoading />;
	}

	if (!widget) {
		return null;
	}

	{/* GithubIssuesWidget.tsx에서 주석 확인 : mock-api.json 확인하는 법 */ }
	const { series, ranges } = widget;
	const [tabValue, setTabValue] = useState(0);
	const currentRange = Object.keys(ranges)[tabValue];

	const [showModal, setShowModal] = useState(false);

	const handleButtonClick = () => {
		setShowModal(true);
	};

	return (
		<Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
			<div className="flex flex-col sm:flex-row items-start justify-between">
				{/* Title */}
				<Typography className="text-lg font-medium tracking-tight leading-6 truncate">Schedule</Typography>
				{/* GithubIssuesWidget.tsx에서 주석 확인 */}
				<div className="mt-12 sm:mt-0 sm:ml-8">
					{/* today / tomorrow */}
					<Tabs
						value={tabValue}
						onChange={(ev, value: number) => setTabValue(value)}
						indicatorColor="secondary"
						textColor="inherit"
						variant="scrollable"
						scrollButtons={false}
						className="-mx-16 min-h-40"
						classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
						TabIndicatorProps={{
							children: (
								<Box
									sx={{ bgcolor: 'text.disabled' }}
									className="w-full h-full rounded-full opacity-20"
								/>
							)
						}}
					>
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
			<List className="py-0 mt-8 divide-y">
				{/* seriesd에서 현재 Range에 따른 데이터 출력 */}
				{series[currentRange].map((item, index) => (
					<ListItem
						key={index}
						className="px-0"
					>
						<ListItemText
							classes={{ root: 'px-8', primary: 'font-medium' }}
							// 일정 title
							primary={item.title}
							secondary={
								<span className="flex flex-col sm:flex-row sm:items-center -ml-2 mt-8 sm:mt-4 space-y-4 sm:space-y-0 sm:space-x-12">
									{/* 출력중인 일정 title에 대한 time 데이터가 있다면 출력 */}
									{item.time && (
										<span className="flex items-center">
											<FuseSvgIcon
												size={20}
												color="disabled"
											>
												heroicons-solid:clock
											</FuseSvgIcon>
											<Typography
												component="span"
												className="mx-6 text-md"
												color="text.secondary"
											>
												{item.time}
											</Typography>
										</span>
									)}

									{/* 출력중인 일정 title에 대한 location 데이터가 있다면 출력 */}
									{item.location && (
										<span className="flex items-center">
											<FuseSvgIcon
												size={20}
												color="disabled"
											>
												heroicons-solid:location-marker
											</FuseSvgIcon>
											<Typography
												component="span"
												className="mx-6 text-md"
												color="text.secondary"
											>
												{item.location}
											</Typography>
										</span>
									)}
								</span>
							}
						/>
						{/* 상세보기 아이콘 느낌? : 기능없음 */}
						<ListItemSecondaryAction>
							<IconButton
								aria-label="more"
								size="large"
								onClick={() => {
									handleButtonClick();
								}}
							>
								<FuseSvgIcon>heroicons-solid:chevron-right</FuseSvgIcon>
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>

			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered show={showModal}
				onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter" >
						Schedule Titile
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Schedule Content
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setShowModal(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Paper>
	);
}

export default memo(ScheduleWidget);
