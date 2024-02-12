import { Chart } from 'react-google-charts'
import type { ChartProps } from '@/type/PropsType'

const defaultOptions = {
  colors: ['#2D91FE', '#4BDFFF'],
  bars: 'vertical',
  chartArea: {
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    width: '50%',
    height: '50%',
  },
  legend: {
    position: 'none',
    textStyle: {
      fontSize: 5,
    },
  },
  hAxis: {
    title: 'Total Funds',

    textStyle: {
      fontSize: 5,
    },
  },
  vAxis: {
    title: 'Months',
    textStyle: {
      fontSize: 5,
    },
    format: 'short',
  },
  bar: { groupWidth: '90%' },
  alwaysOutside: true,
}

function BarChart({ title, data, options }: ChartProps) {
  return (
    <div className="size-full rounded-lg border p-2">
      <p className="pb-4 text-sm font-bold text-dark dark:text-bodydark2">{title}</p>
      <Chart chartType="Bar" data={data} options={options ?? defaultOptions} />
    </div>
  )
}

export default BarChart
