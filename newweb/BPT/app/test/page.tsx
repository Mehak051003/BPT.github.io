"use client"
import css from "./src/test.module.scss"

import useEmblaCarousel from 'embla-carousel-react'
import Card from '@/components/carousel/card';
import Slider from '@/components/carousel/slider';

const data = [
  {

    "title": "This is awesome!",
    "content": "Lorem ipsum ...",
    "imgSrc": "https://flowbite.com/docs/images/blog/image-1.jpg"
  },
  {

    "title": "The best tutorial!",
    "content": "Lorem ipsum ...",
    "imgSrc": "https://flowbite.com/docs/images/blog/image-1.jpg"
  },
  {

    "title": "Revenue increased by 50%",
    "content": "Lorem ipsum ...",
    "imgSrc": "https://flowbite.com/docs/images/blog/image-1.jpg"
  },
  {

    "title": "Lorem ipsum",
    "content": "Lorem ipsum ...",
    "imgSrc": "https://flowbite.com/docs/images/blog/image-1.jpg"
  },
  {

    "title": "The best overall service",
    "content": "Lorem ipsum ...",
    "imgSrc": "https://flowbite.com/docs/images/blog/image-1.jpg"
  },
]



export default function testing()
{
    return(

        <div className={css.root}>
            <div className={css.wrapper}>

            
            <Slider slides={data} />
            


            </div>
        </div>



    )
}