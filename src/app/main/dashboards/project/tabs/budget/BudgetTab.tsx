import { motion } from 'framer-motion';
import BudgetDistributionWidget from './widgets/BudgetDistributionWidget';
import WeeklyExpensesWidget from './widgets/WeeklyExpensesWidget';
import MonthlyExpensesWidget from './widgets/MonthlyExpensesWidget';
import YearlyExpensesWidget from './widgets/YearlyExpensesWidget';
import BudgetDetailsWidget from './widgets/BudgetDetailsWidget';

/**
 * The BudgetTab component.
 */
function BudgetTab() {
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
			className="grid grid-cols-1 sm:grid-cols-6 gap-24 w-full min-w-0 p-24"
			variants={container}
			initial="hidden"
			animate="show"
		>	
			{/* Budget Distribution Box */}
			<motion.div
				variants={item}
				className="sm:col-span-3 lg:col-span-4"
			>
				<BudgetDistributionWidget />
			</motion.div>

			{/* 
			
				Weekly Expenses Box / Monthly Expenses / Yearly Expenses : 흐름 비슷

				Weekly Expenses에서 주석 확인
				차트 관련 : GithubIssuesWidget.tsx에서 주석 확인
			*/}
			<div className="sm:col-span-3 lg:col-span-2 grid grid-cols-1 gap-y-24">
				{/* Weekly Expenses Box */}
				<motion.div
					variants={item}
					className="sm:col-span-2"
				>
					<WeeklyExpensesWidget />
				</motion.div>
				{/* Monthly Expenses Box */}
				<motion.div
					variants={item}
					className="sm:col-span-2"
				>
					<MonthlyExpensesWidget />
				</motion.div>
				{/* Yearly Expenses Box */}
				<motion.div
					variants={item}
					className="sm:col-span-2"
				>
					<YearlyExpensesWidget />
				</motion.div>
			</div>

			{/* Budget Details Box */}
			<motion.div
				variants={item}
				className="sm:col-span-6"
			>
				<BudgetDetailsWidget />
			</motion.div>
		</motion.div>
	);
}

export default BudgetTab;
