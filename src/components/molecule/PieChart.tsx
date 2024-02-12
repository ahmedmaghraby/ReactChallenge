import { Chart } from 'react-google-charts'
import type { ChartProps } from '@/type/PropsType'

const defaultOptions = {
  pieHole: 0.4,
  colors: ['#2D91FE', '#FF6769', '#4BDFFF', '#FFC359'],

  legend: {
    alignment: 'center',
    position: 'right',
  },
  pieSliceText: 'none',
  tooltip: {
    text: 'percentage',
  },
}

function pieChart({ title, data, options }: ChartProps) {
  return (
    <div className="size-full rounded-lg border p-2">
      <p className="pb-4 text-sm font-bold text-dark dark:text-bodydark2">{title}</p>
      <Chart chartType="PieChart" data={data} options={options ?? defaultOptions} />
    </div>
  )
}

export default pieChart
