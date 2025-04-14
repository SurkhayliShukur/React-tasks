import React from 'react'
import PersonInfo from '../../components/build/PersonInfo'
import CvPreview from '../../components/CvPreview'


const BuildResume = () => {
  return (
    <>
      <div className='flex justify-between items-center h-screen '>
        <PersonInfo />
        <CvPreview />
      </div>
    </>
  )
}

export default BuildResume
