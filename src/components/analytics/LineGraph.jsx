import React, { useEffect, useState } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, ResponsiveContainer } from 'recharts';
import Papa from 'papaparse';
import { motion } from 'framer-motion';

const groupByVal = (Data, cols) => {
  const counts = {};
  Data.forEach((row) => {
    const vals = parseFloat(row[cols]);
    if (!isNaN(vals)) {
      const rounded = vals.toFixed(0);
      counts[rounded] = (counts[rounded] || 0) + 1;
    }
  });

  return Object.entries(counts).map(([value, count]) => ({
    value,
    count,
  }));
};

const LineGraph = () => {
  const [chartData, setChartData] = useState([]);
  const [dataset, setDataset] = useState([]);
  const [selectedCol, setSelectedCol] = useState('Model_Year');
  const [numericCols, setNumericCols] = useState([]);

  useEffect(() => {
    Papa.parse('Electric_Vehicles_Population_Data.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        setDataset(data);

        const sampleRow = data.find(row => Object.values(row).some(val => val));
        const numericKeys = sampleRow
          ? Object.keys(sampleRow).filter(key => !isNaN(parseFloat(sampleRow[key])))
          : [];

        setNumericCols(numericKeys);
        const grouped = groupByVal(data, selectedCol);
        setChartData(grouped);
      },
    });
  }, []);

  useEffect(() => {
    if (dataset.length) {
      const grouped = groupByVal(dataset, selectedCol);
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
        Line graph for Distribution of <span className='text-indigo-400'>{selectedCol}</span>
      </h2>

      <div className='mb-4'>
        <label className='text-gray-300 mr-2'>Select Numeric Column:</label>
        <select
          value={selectedCol}
          onChange={(e) => setSelectedCol(e.target.value)}
          className='bg-gray-700 text-white rounded px-2 py-1 border border-gray-600'
        >
          {numericCols.map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>
      </div>

      <div className='h-80'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart data={chartData.sort((a, b) => a.value - b.value)}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey={'value'} stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Line
              type='monotone'
              dataKey='count'
              stroke='#6366F1'
              strokeWidth={3}
              dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default LineGraph;
