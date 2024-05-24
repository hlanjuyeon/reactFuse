import { motion } from 'framer-motion';
import SummaryWidget from './widgets/SummaryWidget';
import OverdueWidget from './widgets/OverdueWidget';
import IssuesWidget from './widgets/IssuesWidget';
import FeaturesWidget from './widgets/FeaturesWidget';
import GithubIssuesWidget from './widgets/GithubIssuesWidget';
import TaskDistributionWidget from './widgets/TaskDistributionWidget';
import ScheduleWidget from './widgets/ScheduleWidget';

/**
 * The HomeTab component.
 */
function HomeTab() {
	const container = {
		show: {
			transition: {
				staggerChildren: 0.04
			}
		}
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
			variants={container}
			initial="hidden"
			animate="show"
		>	
			{/* 
				Due Tasks / Overdue / Issues / Features : 동작 흐름 비슷
			
				Due Tasks의 주석을 통해 확인 가능
			*/}
			{/* Due Tasks Box */}
			<motion.div variants={item}>
				<SummaryWidget />
			</motion.div>
			{/* Overdue Box */}
			<motion.div variants={item}>
				<OverdueWidget />
			</motion.div>
			{/* Issues Box */}
			<motion.div variants={item}>
				<IssuesWidget />
			</motion.div>
			{/* Features Box */}
			<motion.div variants={item}>
				<FeaturesWidget />
			</motion.div>

			{/* 
				Github Issues / Task Distribution : 동작 흐름 비슷
			
				Github Issues의 주석을 통해 확인 가능
			*/}
			{/* Github Issues Summary Box */}
			<motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-4"
			>
				<GithubIssuesWidget />
			</motion.div>
			{/* Task Distribution Box */}
			<motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-4 lg:col-span-2"
			>
				<TaskDistributionWidget />
			</motion.div>

			{/* Schedule Box */}
			<motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-4 lg:col-span-2"
			>
				<ScheduleWidget />
			</motion.div>
		</motion.div>
	);
}

export default HomeTab;
