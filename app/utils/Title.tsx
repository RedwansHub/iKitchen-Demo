import { Cinzel_Decorative, Lugrasimo, Quintessential } from 'next/font/google'
import React from 'react'

const font = Cinzel_Decorative({ subsets: ['latin'], weight:'700'})

type Props = {
    text: string
}

const Title = (props: Props) => {
  return (
    <div className='pb-12'>
        <h2 className={`${font.className} text-3xl`}>
            {props.text}
        </h2>
    </div>
  )
}

export default Title