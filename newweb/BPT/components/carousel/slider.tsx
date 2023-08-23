import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, {
  EmblaCarouselType,

} from 'embla-carousel-react'
import {
  DotButton,

} from './EmblaCarouselArrowsDotsButtons'
import Card from './card'


type PropType = {
  slides: any[]

}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({dragFree: true, containScroll: 'trimSnaps'})

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())

  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport overflow-hidden mx-auto" ref={emblaRef}>
          <div className="embla__container ">
          
              {slides.map((item, index) => (
                
                <div className="embla__slide" key={index}>
                                <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>

         
                <Card {...item} />


              </div>
                </div>
              ))}
           
          </div>
        </div>


      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </>
  )
}

export default EmblaCarousel