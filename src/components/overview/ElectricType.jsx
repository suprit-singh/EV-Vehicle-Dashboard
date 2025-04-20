import React from "react";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from "recharts";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Group by string value instead of rounding numbers
const groupByCategory = (data, col) => {
  const counts = {};
  data.forEach((row) => {
    const val = row[col];
    if (val && val.trim() !== "") {
      counts[val] = (counts[val] || 0) + 1;
    }
  });

  return Object.entries(counts).map(([value, count]) => ({
    value,
    count,
  }));
};

const ElectricType = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    Papa.parse("Electric_Vehicles_Population_Data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        const typeDistribution = groupByCategory(data, "Electric_Vehicle_Type");
        setChartData(typeDistribution);
      },
    });
  }, []);

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Distribution of Electric Vehicle Types</h2>

      <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey='value' stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Bar dataKey='count' fill='#6366F1' barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ElectricType;
