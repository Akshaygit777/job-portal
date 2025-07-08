import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from '@radix-ui/react-label'
const filterData = [
  {
  filterType :"Location",
  array:["delhi NCR","Banglore","Hyderabad","pune","Mumbai"]
  },
  {
  filterType :"Roles",
  array:["Frontend developer","Backend developer","Fullstack developer","Data Analyst"]
  },
  {
    filterType :"Salary",
  array:["4LPA-8LPA","9LPA-12LPA","12LPA Above"]
  },
  
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>

      <h1 className='font-bold text-lg '>Filter Jobs</h1>
      <hr  className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data, index)=> (
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, index) => {
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                      <Label>{item}</Label>
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