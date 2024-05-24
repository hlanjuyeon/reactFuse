import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import _ from '@lodash';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import FuseLoading from '@fuse/core/FuseLoading';
import { darken } from '@mui/material/styles';
import { selectUser } from 'src/app/auth/user/store/userSlice';
import { useAppSelector } from 'app/store/hooks';
import { useGetProjectDashboardProjectsQuery } from './ProjectDashboardApi';

/**
 * The ProjectDashboardAppHeader page.
 */
// Dashboard 의 Header
function ProjectDashboardAppHeader({ onSelectedValueChange, onPurpleChange }) {
	// 프로젝트 메뉴 데이터 가지고 오는 쿼리 -> data에 값이 있음
	const { data: projects, isLoading } = useGetProjectDashboardProjectsQuery();

	const user = useAppSelector(selectUser);

	const [selectedProject, setSelectedProject] = useState<{ id: number; menuEl: HTMLElement | null }>({
		id: 1, // 기본값 설정
		menuEl: null
	});

	const [isPurple, setIsPurple] = useState(false); // 스타일 변경을 위한 상태

	// 프로젝트 메뉴 change
	function handleChangeProject(id: number) {
		setSelectedProject({
			id,
			menuEl: null
		});
	}

	// 프로젝트 메뉴 버튼 클릭시 open
	function handleOpenProjectMenu(event: React.MouseEvent<HTMLElement>) {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: event.currentTarget
		});
		console.log("open", selectedProject.id);
	}

	// 프로젝트 메뉴 버튼 클릭시 close
	function handleCloseProjectMenu() {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: null
		});
		console.log("closee", selectedProject.id);
	}

	if (isLoading) {
		return <FuseLoading />;
	}

	const sendIdToParent = (id) => {
		if (onSelectedValueChange) {
			onSelectedValueChange(id); // 부모 컴포넌트의 함수 호출
		}
	};

	// // 버튼 클릭 시 스타일 변경 함수
	// const handleButtonClick = () => {
	// 	setIsPurple(!isPurple);
	// 	onPurpleChange(!isPurple); // 부모 컴포넌트의 함수 호출
	// };

	console.log("purple", isPurple);
	console.log("change id", selectedProject.id);

	return (
		<div className="flex flex-col w-full px-24 sm:px-32">
			<div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
				{/* user 에 대한 기본 정보 : 프로필사진, 이름, 알림(메시지, 업무) */}
				<div className="flex flex-auto items-center min-w-0">
					{/* user 프로필사진 출력 */}
					<Avatar
						sx={{
							background: (theme) => darken(theme.palette.background.default, 0.05),
							color: (theme) => theme.palette.text.secondary
						}}
						className="flex-0 w-64 h-64"
						alt="user photo"
						src={user?.data?.photoURL}
					>
						{user?.data?.displayName?.[0]}
					</Avatar>
					<div className="flex flex-col min-w-0 mx-16">
						{/* user 이름 출력 */}
						<Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
							{`Welcome back, ${user.data.displayName}!`}
						</Typography>

						<div className="flex items-center">
							{/* 알림 아이콘 */}
							<FuseSvgIcon
								size={20}
								color="action"
							>
								heroicons-solid:bell
							</FuseSvgIcon>
							{/* 알림 갯수 출력 : 하드코딩 */}
							<Typography
								className="mx-6 leading-6 truncate"
								color="text.secondary"
							>
								You have 2 new messages and 15 new tasks
							</Typography>
						</div>
					</div>
				</div>
				{/* 버튼 : 메시지, 설정 */}
				<div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
					{/* 메시지 버튼 : 하드코딩 */}
					<Button
						className="whitespace-nowrap"
						variant="contained"
						color="primary"
						startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
					>
						Messages
					</Button>
					{/* 설정 버튼 : 하드코딩 */}
					<Button
						className="whitespace-nowrap"
						variant="contained"
						color="secondary"
						startIcon={<FuseSvgIcon size={20}>heroicons-solid:cog</FuseSvgIcon>}
						onClick={() => {
							// handleButtonClick();
						}}
					>
						Settings
					</Button>
				</div>
			</div>
			{/* 실질 기능 구동 : ProjectDashboardApi.ts */}
			{/* 프로젝트 메뉴 설정 : 하드코딩 -> 메뉴 선택한다고 하위 내용 안 바뀜 */}
			<div className="flex items-center">
				{/* 프로젝트 메뉴 버튼 */}
				{/* ACME Corp. Backend App / ACME Corp. Frontend App / Creapond / Withinpixels */}
				<Button
					onClick={handleOpenProjectMenu}
					className="flex items-center border border-solid border-b-0 rounded-t-xl rounded-b-0 h-40 px-16 text-13 sm:text-16"
					sx={{
						backgroundColor: (theme) => theme.palette.background.default,
						borderColor: (theme) => theme.palette.divider
					}}
					endIcon={
						<FuseSvgIcon
							size={20}
							color="action"
						>
							heroicons-solid:chevron-down
						</FuseSvgIcon>
					}
				>
					{/* 프로젝트 메뉴 선택시 diplay되는 메뉴 */}
					{/* 배열에서 selectProject.id와 같은 id를 찾은 다음 name 반환 */}
					{_.find(projects, ['id', selectedProject.id])?.name}
				</Button>
				{/* 바로 위 프로젝트 메뉴 버튼 클릭 시, 선택가능한 프로젝트 메뉴를 display  */}
				<Menu
					id="project-menu"
					// style 기능 : 배치 등
					anchorEl={selectedProject.menuEl}
					// 하위 메뉴 open
					open={Boolean(selectedProject.menuEl)}
					// 하위 메뉴 clsoe -> 상위 버튼 클릭으로 close 작동
					onClose={handleCloseProjectMenu}
				>

					{/* 하위 메뉴 출력 : 순차적인 배열 출력 */}
					{projects &&
						projects.map((project) => (
							<MenuItem
								key={project.id}
								onClick={() => {
									handleChangeProject(project.id);
									sendIdToParent(project.id);
								}}
							>
								{project.name}
							</MenuItem>
						))}
				</Menu>
			</div>
		</div>
	);
}

export default ProjectDashboardAppHeader;
