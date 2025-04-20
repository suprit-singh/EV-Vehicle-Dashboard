import React, { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from "recharts";
import Papa from "papaparse";
import { motion } from "framer-motion";


const groupByString = (Data, cols) => {
  const counts = {};
  Data.forEach((row) => {
    const vals = row[cols];
    if (vals && vals.trim() !== "") {
      counts[vals] = (counts[vals] || 0) + 1;
    }
  });

  return Object.entries(counts).map(([value, count]) => ({
    value,
    count,
  }));
};

const BarGraph = () => {
  const [chartData, setChartData] = useState([]);
  const [dataset, setDataset] = useState([]);
  const [selectedCol, setSelectedCol] = useState("City");
  const [availableCols, setAvailableCols] = useState([]);

  useEffect(() => {
    Papa.parse("Electric_Vehicles_Population_Data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        setDataset(data);
        setAvailableCols(Object.keys(data[0] || {}));
        const grouped = groupByString(data, selectedCol);
        setChartData(grouped);
      },
    });
  }, []);

  useEffect(() => {
    if (dataset.length) {
      const grouped = groupByString(dataset, selectedCol);
      setChartData(grouped);
    }
  }, [selectedCol, dataset]);

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>
        Bar graph for Distribution of <span className="text-indigo-400">{selectedCol}</span>
      </h2>

     
      <div className='mb-4'>
        <label className='text-gray-300 mr-2'>Select Column:</label>
        <select
          value={selectedCol}
          onChange={(e) => setSelectedCol(e.target.value)}
          className='bg-gray-700 text-white rounded px-2 py-1 border border-gray-600'
        >
          {availableCols.map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>
      </div>

      <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={chartData.slice(0, 20)}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey='value' stroke='#9ca3af' interval={0} angle={-45} textAnchor="end" />
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

export default BarGraph;
