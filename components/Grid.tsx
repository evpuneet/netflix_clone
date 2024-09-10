import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

export default function Grid() {
  return (
    <>
        <section id="about">
      <BentoGrid className="w-full py-20 mt-12">
        {gridItems.map(({id,title,description,className,img,imgClassName,titleClassName,spareImg}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            // remove icon pro20
            // remove original classname condition
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
    </>
  )
}
