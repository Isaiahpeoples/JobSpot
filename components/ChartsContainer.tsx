'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { useQuery } from '@tanstack/react-query';
import { getChartsDataAction } from '@/utils/actions';
function ChartsContainer() {
  const { data, isPending } = useQuery({
    queryKey: ['charts'],
    queryFn: () => getChartsDataAction(),
  });

  if (isPending) return <h2 className='text-xl font-medium'>Please wait...</h2>;
  if (!data || data.length < 1) return null;
  return (
    <section className="mt-16">
      <h1 className="text-4xl font-semibold text-center">
        Monthly Applications
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip
            wrapperStyle={{
              color: '#000',
              border: '1px solid #000',
              borderRadius: 3,
            }}
          />
          <Bar dataKey="count" fill="#FACC15" barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}
export default ChartsContainer;