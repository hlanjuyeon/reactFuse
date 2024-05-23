import FusePageSimple from '@fuse/core/FusePageSimple';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import ProjectDashboardAppHeader from './ProjectDashboardAppHeader';
import HomeTab from './tabs/home/HomeTab';
import TeamTab from './tabs/team/TeamTab';
import BudgetTab from './tabs/budget/BudgetTab';
import { useGetProjectDashboardWidgetsQuery } from './ProjectDashboardApi';
import BackendProject from './ProjectPage/BackendProject';
import CreapondProject from './ProjectPage/CreapondProject';
import FrontendProject from './ProjectPage/FrontendProject';
import WithinpixelsProject from './ProjectPage/WithinpixelsProject';

let isPurpleValue = false;

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: isPurpleValue ? `#BF00FF` : theme.palette.background.paper,
		boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`
	}
}));

/**
 * The ProjectDashboardApp page.
 */
function ProjectDashboardApp() {
	const { isLoading } = useGetProjectDashboardWidgetsQuery();

	const [tabValue, setTabValue] = useState(0);

	const [selectedValue, setSelectedValue] = useState(1); // 자식 컴포넌트로부터 받을 데이터 상태
	const [isPurpleValue, setIsPurpleValue] = useState(false); // 자식 컴포넌트로부터 받을 데이터 상태

	function handleChangeTab(event: React.SyntheticEvent, value: number) {
		setTabValue(value);
	}

	if (isLoading) {
		return <FuseLoading />;
	}

	// 자식 컴포넌트로부터 데이터를 받기 위한 함수
	function handleSelectedValueChange(value) {
		setSelectedValue(value);
	}

	function handlePurpleChange(value) {
		setIsPurpleValue(value);
	}

	return (
		<Root
			header={<ProjectDashboardAppHeader 
				onSelectedValueChange={handleSelectedValueChange} 
				onPurpleChange={handlePurpleChange}
				/>}
			content={
				<div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
					{/* Dashboard Page 변경 */}
					<Tabs
						value={tabValue}
						onChange={handleChangeTab}
						indicatorColor="secondary"
						textColor="inherit"
						variant="scrollable"
						scrollButtons={false}
						className="w-full px-24 -mx-4 min-h-40"
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
						<Tab
							className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
							disableRipple
							label="Home"
						/>
						<Tab
							className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
							disableRipple
							label="Budget"
						/>
						<Tab
							className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
							disableRipple
							label="Team"
						/>
					</Tabs>
					{/* && 연산자 왼쪽이 참이라면, 오른쪽 반환 */ }
					{selectedValue === 1 &&
						<>
						{tabValue === 0 && <HomeTab />}
						{tabValue === 1 && <BudgetTab />}
						{tabValue === 2 && <TeamTab />}
						</>
					}
					{selectedValue === 2 && <FrontendProject />}
					{selectedValue === 3 && <CreapondProject />}
					{selectedValue === 4 && <WithinpixelsProject />}
				</div>
			}
		/>
	);
}

export default ProjectDashboardApp;
