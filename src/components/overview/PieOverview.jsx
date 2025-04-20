import { useEffect, useState } from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6", "#EF4444", "#14B8A6", "#F472B6", "#A78BFA"];

const PieOverview = () => {
	const [categoryData, setCategoryData] = useState([]);

	useEffect(() => {
		Papa.parse("Electric_Vehicles_Population_Data.csv", {
			download: true,
			header: true,
			complete: (result) => {
				const data = result.data;
				const makeCounts = {};

				// Count occurrences of each "Make"
				data.forEach((row) => {
					const make = row["Make"];
					if (make) {
						makeCounts[make] = (makeCounts[make] || 0) + 1;
					}
				});

				// Get top 10 makes
				const topMakes = Object.entries(makeCounts)
					.sort((a, b) => b[1] - a[1])
					.slice(0, 10)
					.map(([name, value]) => ({ name, value }));

				setCategoryData(topMakes);
			},
		});
	}, []);

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Top 10 Electric Vehicle Makes</h2>
			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart>
						<Pie
							data={categoryData}
							cx={"50%"}
							cy={"50%"}
							labelLine={false}
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
						>
							{categoryData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default PieOverview;
