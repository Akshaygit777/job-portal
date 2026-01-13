import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setsearchedQuery } from '@/redux/jobSlice'
const category= [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Fullstack developer"
]
const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const searchJobHandler = (query) => {
          dispatch(setsearchedQuery(query));
          navigate("/Explore");
      }
  return (
    <div>
           <Carousel className="w-full max-w-xl mx-auto my-20">
            <CarouselContent>
              {
                category.map((cat, index) => (
                  <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                <Button onClick={()=>searchJobHandler(cat)} variant ="outline" className="rounded-full hover:bg-purple-200">{cat}</Button>
                  </CarouselItem>
                ))
              }
             
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
           </Carousel>
    </div>
  )
}

export default CategoryCarousel