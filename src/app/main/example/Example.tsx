import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import EmpMenu from './menu/EmpMenu';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState } from 'react';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.divider
	},
	'& .FusePageSimple-content': {},
	'& .FusePageSimple-sidebarHeader': {},
	'& .FusePageSimple-sidebarContent': {}
}));

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		[theme.breakpoints.up('sm')]: {
			'&:focus': {
				borderRadius: '30px',
				borderWidth: '3px',
				boxShadow: '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
			},
		},
	},
}));

type Employee = {
	empNum: number;
	img: string;
	name1: string;
	name2: string;
	name3: string;
	name4: string;
	position: string;
	employmentDate: string;
	workingYear: string;
};

const empData: Employee[] = [
	{ empNum: 824, img: '/src/app/main/example/empImg/824.png', name1: "金　瑩煥", name2: "キム・ヨンファン", name3: "Kim Younghwan", name4: "김영환", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 825, img: '/src/app/main/example/empImg/825.png', name1: "劉　柱恩", name2: "ユ・ジュウン", name3: "Yu Jueun", name4: "유주은", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 826, img: '/src/app/main/example/empImg/826.png', name1: "全　浩辰", name2: "チョン・ホジン", name3: "Yu Jueun", name4: "전호진", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 827, img: '/src/app/main/example/empImg/827.png', name1: "崔  起彰", name2: "チェ・ギチャン", name3: "Choi Gichang", name4: "최기창", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 828, img: '/src/app/main/example/empImg/828.png', name1: "崔  起彰", name2: "イ・ナムヨン", name3: "Lee Namyong ", name4: "이남용", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 829, img: '/src/app/main/example/empImg/829.png', name1: "徐　周絃", name2: "ソ・ジュヒョン", name3: "Seo Juhyun", name4: "서주현", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 830, img: '/src/app/main/example/empImg/830.png', name1: "盧　廣鎬", name2: "ノ・グァンホ", name3: "Noh Kwangho", name4: "노광호", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 831, img: '/src/app/main/example/empImg/831.png', name1: "孫　遠涵", name2: "ソン・エンカン", name3: "Sun Yuanhan", name4: "ソン", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 832, img: '/src/app/main/example/empImg/832.png', name1: "韓　周延", name2: "ハン・ジュヨン", name3: "Han Juyeon", name4: "한주연", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 833, img: '/src/app/main/example/empImg/833.png', name1: "韓　周延", name2: "パク・フンミョン", name3: "Park Hunmyeong", name4: "박훈명", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 834, img: '/src/app/main/example/empImg/834.png', name1: "姜　濟求", name2: "カン・ジェグ", name3: "Kang Jekoo", name4: "강제구", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 835, img: '/src/app/main/example/empImg/835.png', name1: "張　榮勳", name2: "チャン・ヨンフン", name3: "Jang Younghun", name4: "장영훈", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 836, img: '/src/app/main/example/empImg/836.png', name1: "李　仁睦", name2: "イ・インモク", name3: "Lee Inmok", name4: "이인목", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 837, img: '/src/app/main/example/empImg/837.png', name1: "呉　一凡", name2: "ゴ・イチボン", name3: "Wu Yifan", name4: "ゴ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 838, img: '/src/app/main/example/empImg/838.png', name1: "HO THI HOAI", name2: "ホー・ティ・ホアイ", name3: "Ho Thi Hoai", name4: "ホアイ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 839, img: '/src/app/main/example/empImg/839.png', name1: "金　民成", name2: "キム・ミンソン", name3: "Kim Minsung", name4: "김민성", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 840, img: '/src/app/main/example/empImg/840.png', name1: "崔  峻榮", name2: "チェ・ジュニョン", name3: "Choi Junyoung", name4: "최준영", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 841, img: '/src/app/main/example/empImg/841.png', name1: "李　承峻", name2: "イ・スンジュン", name3: "Lee Seungjun", name4: "최준영", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 842, img: '/src/app/main/example/empImg/842.png', name1: "早川　龍之介", name2: "早川龍之介", name3: "ハヤカワ", name4: "ハヤカワ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 843, img: '/src/app/main/example/empImg/843.png', name1: "RAVI", name2: "ラヴィ", name3: "Ravi", name4: "ラヴィ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 844, img: '/src/app/main/example/empImg/844.png', name1: "NAHDA", name2: "ナーダ", name3: "Nahda", name4: "ナーダ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 845, img: '/src/app/main/example/empImg/845.png', name1: "曺　東煇", name2: "チョ・ドンフィ", name3: "Jo Donghwi", name4: "조동휘", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 846, img: '/src/app/main/example/empImg/846.png', name1: "GOBI", name2: "ゴビ", name3: "Gobi", name4: "ゴビ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
];

function Example() {
	const { t } = useTranslation('examplePage');

	// 검색기능
	const [userInput, setUserInput] = useState<string>('');

	const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
		setUserInput(e.target.value.toLowerCase());
	}

	return (
		<div>
			<div className="leftMenu"
				style={{
					display: 'flex',
					float: 'left', width: '15%',
					justifyContent: 'left', height: '100%',
					boxShadow: '2px 0 0 rgba(0, 0, 0, 0.1)',
				}}
			>
				<EmpMenu />
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column', width: '85%',
					paddingTop: '20px',
					paddingBottom: '20px'
				}}
			>

				<div className="search"
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						verticalAlign: 'middle',
						alignItems: 'center',
						width: '50%',
						float: 'left',
					}}
				>
					<form
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							verticalAlign: 'middle',
							alignItems: 'center',
							width: '100%'
						}}
					>
						<Search
							style={{
								width: '60%',
							}}
						>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search by name or employee number"
								inputProps={{ 'aria-label': 'search' }}
								style={{
									border: '1px solid rgba(0,0,0,0.07)',
									borderRadius: '30px',
									borderWidth: '3px',
								}}

								onChange={getSearchData}
							/>
						</Search>
						<div
							style={{
								fontWeight: 'bold',
								width: '10%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							{empData.length} / {empData.length} 名
						</div>
						<Button
							variant="contained"
							style={{
								width: '20%',
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: '#4F46E5',
								color: 'white',
							}}
						>
							+ Add
						</Button>
					</form>

				</div>
				<br />

				<div className='list'>
					<div className="header"
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							verticalAlign: 'middle',
							alignItems: 'center',
							width: '100%',
							boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.1), 0 2px 0 rgba(0, 0, 0, 0.1)',
							paddingTop: '20px',
							paddingBottom: '20px',
							backgroundColor: '#FAFAFA',
							fontWeight: 'bold',
							color: '#848484',
						}}

					>
						<div
							style={{
								width: '5%',
							}}
						>
						</div>

						<div
							style={{
								width: '10%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							社員番号
						</div>
						<div
							style={{
								width: '15%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							名前&#40;ja&#41;
						</div>
						<div
							style={{
								width: '15%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							名前&#40;en&#41;
						</div>
						<div
							style={{
								width: '10%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							名前&#40;ko&#41;
						</div>
						<div
							style={{
								width: '10%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							役職
						</div>
						<div
							style={{
								width: '10%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							入社日
						</div>
						<div
							style={{
								width: '10%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							勤続年数
						</div>
					</div>
					{empData.map((emp) => (
						<div className="contet"
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-around',
								verticalAlign: 'middle',
								alignItems: 'center',
								width: '100%',
								boxShadow: '0 2px 0 rgba(0, 0, 0, 0.1)',
								paddingTop: '6px',
								paddingBottom: '6px',
							}}
						>
							<div
								style={{
									width: '5%',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								<img src={emp.img}
									style={{
										width: '30px',
										height: '30px',
										borderRadius: '50%',
									}}
								/>
							</div>
							<div
								style={{
									width: '10%',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								{emp.empNum}
							</div>
							<div
								style={{
									width: '15%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'left',
								}}
							>
								<div
									style={{
										fontWeight: 'bold',
									}}
								>
									{emp.name1}
								</div>
								<div>{emp.name2}</div>
							</div>
							<div
								style={{
									width: '15%',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								{emp.name3}
							</div>
							<div
								style={{
									width: '10%',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								{emp.name4}
							</div>
							<div
								style={{
									width: '10%',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								{emp.position}
							</div>
							<div
								style={{
									width: '10%',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								{emp.employmentDate}
							</div>
							<div
								style={{
									width: '10%',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								{emp.workingYear}
							</div>
						</div>
					))}
				</div>
			</div>
		</div >
	);
}

export default Example;
