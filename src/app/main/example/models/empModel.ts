import { deflate } from "zlib";

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

export const employees: Employee[] = [
	{ empNum: 824, img: '/src/app/main/example/empImg/824.png', name1: "金　瑩煥", name2: "キム・ヨンファン", name3: "Kim Younghwan", name4: "김영환", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 825, img: '/src/app/main/example/empImg/825.png', name1: "劉　柱恩", name2: "ユ・ジュウン", name3: "Yu Jueun", name4: "유주은", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 826, img: '/src/app/main/example/empImg/826.png', name1: "全　浩辰", name2: "チョン・ホジン", name3: "Yu Jueun", name4: "전호진", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 827, img: '/src/app/main/example/empImg/827.png', name1: "崔　起彰", name2: "チェ・ギチャン", name3: "Choi Gichang", name4: "최기창", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 828, img: '/src/app/main/example/empImg/828.png', name1: "崔　起彰", name2: "イ・ナムヨン", name3: "Lee Namyong ", name4: "이남용", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
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
	{ empNum: 840, img: '/src/app/main/example/empImg/840.png', name1: "崔　峻榮", name2: "チェ・ジュニョン", name3: "Choi Junyoung", name4: "최준영", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 841, img: '/src/app/main/example/empImg/841.png', name1: "李　承峻", name2: "イ・スンジュン", name3: "Lee Seungjun", name4: "최준영", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 842, img: '/src/app/main/example/empImg/842.png', name1: "早川　龍之介", name2: "早川龍之介", name3: "ハヤカワ", name4: "ハヤカワ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 843, img: '/src/app/main/example/empImg/843.png', name1: "RAVI", name2: "ラヴィ", name3: "Ravi", name4: "ラヴィ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 844, img: '/src/app/main/example/empImg/844.png', name1: "NAHDA", name2: "ナーダ", name3: "Nahda", name4: "ナーダ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 845, img: '/src/app/main/example/empImg/845.png', name1: "曺　東煇", name2: "チョ・ドンフィ", name3: "Jo Donghwi", name4: "조동휘", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
	{ empNum: 846, img: '/src/app/main/example/empImg/846.png', name1: "GOBI", name2: "ゴビ", name3: "Gobi", name4: "ゴビ", position: "社員", employmentDate: "2024-04-01", workingYear: "1年" },
];