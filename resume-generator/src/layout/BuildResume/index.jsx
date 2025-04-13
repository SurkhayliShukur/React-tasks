import React from 'react'
import PersonInfo from '../../components/build/PersonInfo'
import CvPreview from '../../components/CvPreview'

const BuildResume = () => {
  return (
    <>
      <div className='flex justify-between items-center h-screen mt-7'>
        <PersonInfo />
        <CvPreview/>
      </div>
    </>
  )
}

export default BuildResume
