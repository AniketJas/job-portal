/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Hyderabad", "Bengaluru", "Pune", "Mumbai", "Chennai", "Noida", "Gurugram"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1L", "1L-3L", "3L-12L", "12L-20L", "20L+"]
  },
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg '>Filter Jobs</h1>
      <hr className='mt-3' />

      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((value, index) => {
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={value} />
                      <Label>{value}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
