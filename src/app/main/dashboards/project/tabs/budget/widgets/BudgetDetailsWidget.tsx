import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import Chip from '@mui/material/Chip';
import FuseLoading from '@fuse/core/FuseLoading';
import { useGetProjectDashboardWidgetsQuery } from '../../../ProjectDashboardApi';
import BudgetDetailsDataType from './types/BudgetDetailsDataType';

/**
 * The BudgetDetailsWidget widget.
 */
function BudgetDetailsWidget() {
	const { data: widgets, isLoading } = useGetProjectDashboardWidgetsQuery();

	if (isLoading) {
		return <FuseLoading />;
	}

	const widget = widgets?.budgetDetails as BudgetDetailsDataType;

	if (!widget) {
		return null;
	}

	// 테이블의 형태로 데이터를 출력하기 위해 columns, rows 요소로 데이터 저장
	// columns : TableHead / rows : TableBody
	const { columns, rows } = widget;

	return (
		<Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
			{/* title */}
			<Typography className="text-lg font-medium tracking-tight leading-6 truncate">Budget Details</Typography>

			<div className="table-responsive">
				<Table className="w-full min-w-full">
					{/* table title */}
					<TableHead>
						<TableRow>
							{columns.map((column, index) => (
								<TableCell key={index}>
									<Typography
										color="text.secondary"
										className="font-semibold text-12 whitespace-nowrap"
									>
										{column}
									</Typography>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
							
					{/* table body */}
					<TableBody>
						{rows.map((row, index) => (
							<TableRow key={index}>
								{Object.entries(row).map(([key, value]) => {
									switch (key) {
										case 'type': {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row"
												>	
													{/* Chip 태그 자체에 스타일이 있는 듯? */}
													<Chip
														size="small"
														label={value}
													/>
												</TableCell>
											);
										}
										case 'total':
										case 'expensesAmount':
										case 'remainingAmount': {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row"
												>	
													{/* remainingAmount를 USD 통화로 변환해서 출력 */}
													<Typography>
														{value.toLocaleString('en-US', {
															style: 'currency',
															currency: 'USD'
														})}
													</Typography>
												</TableCell>
											);
										}
										case 'expensesPercentage':
										case 'remainingPercentage': {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row"
												>	
													{/* 특수기호 %를 쓰기 위해 백틱``으로 묶음 */}
													<Typography>{`${value}%`}</Typography>
												</TableCell>
											);
										}
										// key에 대한 case 설정을 전부 했기 때문에, default는 사실상 무의미한 듯
										default: {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row"
												>
													<Typography>{value}</Typography>
												</TableCell>
											);
										}
									}
								})}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</Paper>
	);
}

export default memo(BudgetDetailsWidget);
