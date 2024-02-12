import { useTranslation } from 'react-i18next'
import Accordion from '@/components/molecule/Accordion'
import type { AccordionData } from '@/type/PropsType'
import ToggleButton from '@/components/atom/ToggleButton'
import usePricePrefix from '@/hooks/usePricePerfix'
import Button from '@/components/atom/button'
import BarChart from '@/components/molecule/BarChart'
import PieChart from '@/components/molecule/pieChart'

export default function AutoInvest() {
  const { t } = useTranslation()
  const accordionData: AccordionData[] = [
    {
      id: 'a3da9ffd-c927-4179-a69c-91b9ffdfaa9a',
      title: t('Why should I trust this tool?'),
      content: t('Answer for question 1'),
    },
    {
      id: '9154cc67-2faf-49c0-a39d-58539d7db752',
      title: t('What risks are related to investments?'),
      content: t('Answer for question 2'),
    },
    {
      id: '850845cd-cb4c-4c19-8171-fb644f734cc4',
      title: t('What is the Auto-Investment?'),
      content: t('Answer for question 3'),
    },
  ]
  const barChartData = [
    ['', 'fund', 'Rate'],
    ['Jan', 551, 15],
    ['Feb', 5442, 2],
    ['Mar', 5231, 20],
    ['Apr', 5455, 545],
    ['May', 2358, 54],
    ['Jun', 6848, 4156],
    ['Jul', 15, 100],
  ]

  const pieChartData = [
    ['Category', 'Percentage'],
    ['A', 45.7],
    ['B', 51.5],
    ['C', 23.2],
    ['D', 51.5],
  ]
  return (
    <div className="xs:px-3 md:px-10">
      <div className="flex flex-wrap justify-between gap-4 py-8">
        <div>
          <h1 className="text-xl font-bold text-dark dark:text-bodydark2">
            {t('Auto-Investment')}
          </h1>
        </div>

        <ToggleButton />
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="grid grid-cols-6 gap-5 rounded-lg border p-8 ">
          <div className="col-span-6 flex flex-col items-center justify-center gap-3 rounded-md bg-gradient-to-r from-primary-700 to-primary-600 py-10 shadow-md md:col-span-2 lg:col-span-1">
            <p className="text-xs font-bold text-white">{t('Conservative')}</p>
            <div>
              <p className="text-lg font-bold text-white">10-14%</p>
              <p className="text-xxs font-thin text-white">{t('Interest Rate')}</p>
            </div>
          </div>
          <div className="col-span-6 flex w-full flex-col justify-between md:col-span-4 lg:col-span-5">
            <div className="grid grid-cols-3 items-start gap-8 py-4">
              <div className="xs:col-span-3 sm:col-span-1">
                <p className="text-sm font-extrabold text-success-700">{t('Active')}</p>
                <p className="text-xxs text-gray-500 dark:text-bodydark1">{t('status')}</p>
              </div>
              <div className="xs:col-span-3 sm:col-span-1">
                <p className="text-sm font-extrabold text-dark dark:text-bodydark2">
                  {usePricePrefix(5200)}
                </p>
                <p className="text-xxs text-gray-500 dark:text-bodydark1">{t('Max. Investment')}</p>
              </div>
              <div className="xs:col-span-3 sm:col-span-1">
                <p className="text-sm font-extrabold text-dark dark:text-bodydark2">26</p>
                <p className="text-xxs text-gray-500 dark:text-bodydark1">{t('Loans Funded')}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xxs text-gray-400">* {t('note')}</p>
              <div className="flex gap-2">
                <Button btnType="danger" btnClick={() => {}}>
                  {t('Stop')}
                </Button>

                <Button btnType="btn" btnClick={() => {}}>
                  {t('Change setting')}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-lg border p-8">
          <div className="col-span-2 md:col-span-1">
            <BarChart title={t('Invested')} data={barChartData}></BarChart>
          </div>
          <div className="col-span-2 md:col-span-1">
            <PieChart title={t('Loans Funded')} data={pieChartData}></PieChart>
          </div>
        </div>
        <Accordion title={t('You Might Want to Know')} data={accordionData}></Accordion>
      </div>
    </div>
  )
}
