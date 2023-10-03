'use client'

import { useState } from 'react'

import { Container } from '@/components/Container'
export function PrimaryFeatures() {

  const [savings, setSavings] = useState(50000)
  const [monthlyContribution, setContribution] = useState(10000)
  const [sakinsContribution, setSakinsContribution] = useState(4)
  const [numOfYears, setNumOfYears] = useState(25)
  const [interestRate, setInterestRate] = useState(4.0)

  const anuity = (1 - Math.pow(1 + interestRate / 100 / 12, -numOfYears * 12)) / (interestRate / 100 / 12)
  const budget = (savings + monthlyContribution * anuity) / (1 - sakinsContribution / 100)
  const budgetDecimal = budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  const monthlyContributionDecimal = monthlyContribution.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden pb-28 pt-20 sm:py-32"
    >

      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center ">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            How it works
          </h2>

          <form className='mx-auto pt-7'>
            <div className="mx-auto sm:grid sm:grid-cols-2  gap-x-4 sm:items-start  py-6">
              <label htmlFor="savings" className=" text-right font-bold block text-sm leading-6 text-gray-900 sm:pt-1.5">
                Savings (AED):
              </label>
              <div className="mt-2  sm:mt-0">
                <input
                  type="text"
                  name="savings"
                  id="savings"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600  sm:text-sm sm:leading-6"
                  defaultValue={savings}
                  value={savings}
                  onChange={(e) => setSavings(parseInt(e.target.value) || 0)}

                />
              </div>
            </div>
            <div className="mx-auto sm:grid sm:grid-cols-2 gap-x-4 sm:items-start pb-6">
              <label htmlFor="monthlyContribution" className=" text-right font-bold block text-sm leading-6 text-gray-900 sm:pt-1.5">
                Monthly Contribution (AED) <span className='text-red-700'>{monthlyContributionDecimal}</span>
              </label>
              <div className="mt-2 sm:mt-0">
                <input id="monthlyContribution" min={0} max={25000} type="range" onChange={e => setContribution(parseInt(e.target.value))} value={monthlyContribution} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-red-300" />
              </div>
            </div>

            <div className="mx-auto sm:grid sm:grid-cols-2 gap-x-4 sm:items-start pb-6">
              <label htmlFor="sakinsContribution" className=" text-right font-bold block text-sm leading-6 text-gray-900 sm:pt-1.5">
                Sakin loan percentage: <span className='text-red-700'>{sakinsContribution}%</span>
              </label>
              <div className="mt-2 sm:mt-0">
                <input id="sakinsContribution" min={0} max={100} type="range" value={sakinsContribution} onChange={e => setSakinsContribution(parseFloat(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-red-300" />
              </div>
            </div>

            <div className="mx-auto sm:grid sm:grid-cols-2  gap-x-4 sm:items-start  pb-6">
              <label htmlFor="numOfYears" className=" text-right font-bold block text-sm leading-6 text-gray-900 sm:pt-1.5">
                Loan term: <span className='text-red-700'>{numOfYears} years</span>
              </label>
              <div className="mt-2  sm:mt-0">
                <input id="numOfYears" min={5} max={25} type="range" value={numOfYears} onChange={(e) => setNumOfYears(parseInt(e.target.value) || 0)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-red-300" />
              </div>
            </div>

            <div className="mx-auto sm:grid sm:grid-cols-2 gap-x-4 sm:items-start pb-6">
              <label htmlFor="sakinsInterest" className=" text-right font-bold block text-sm leading-6 text-gray-900 sm:pt-1.5">
                Interest Rate: <span className='text-red-700'>{interestRate}%</span>
              </label>
              <div className="mt-2 sm:mt-0">
                <input id="sakinsInterest" min={3} max={5} type="range" value={interestRate} onChange={e => setInterestRate(parseFloat(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-red-300" />
              </div>
            </div>
          </form>

          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            You can afford a home up to <span className='text-red-700'>{budgetDecimal} AED</span>
          </h2>
        </div>

      </Container>
    </section>
  )
}
