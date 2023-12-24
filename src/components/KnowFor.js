import React from 'react'
import CardCreditMovie from './CardCreditMovie'

export default function KnowFor({personCredits}) {
    
    function comparePop(a,b){
        return b.popularity - a.popularity
    }
personCredits.sort(comparePop)
const personCreditSlice =  personCredits.slice(0,8)

  return (
    <div>
        <h2 className='text-2xl font-bold'>Know For</h2>
        <div className='grid grid-cols-4 gap-4'>        
        {personCreditSlice && personCreditSlice.map((credit) => (
            <CardCreditMovie key={credit.id} id={credit.id} title={credit.title}  poster_path={credit.poster_path}/>
        ))}
    </div>
    </div>
    
  )
}
