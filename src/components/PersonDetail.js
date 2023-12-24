import React from 'react'
import ImagePath from './ui/ImagePath'


export default function PersonDetail({ name, biography, birthday, gender, profile_path }) {
  const POSTER = 'POSTER'
  return (
    <div className="relative mx-auto flex max-w-screen-xl pb-8">
      <div className='w-1/4 py-8'>
        <ImagePath path={profile_path} type={POSTER} /> 
      </div>
      <div className='w-3/4 ml-6 mt-10'>
        <h3 className='text-xl font-bold mb-4'>{name}</h3>      
        <h4 className='text-ml font-bold'>Gender</h4>
        <p> {gender==1 ? "Female" : "Male" } </p>
        <h4 className='text-ml font-bold mt-4'>Birthday</h4>
        <p>{birthday}</p>
        <h4 className='text-ml font-bold mt-4 mb-2'>Biography</h4>
        <p className='pr-8'>{biography}</p>
      </div>
    </div>
  )
}
