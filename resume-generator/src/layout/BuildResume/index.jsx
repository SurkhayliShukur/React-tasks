import React, { useState } from 'react'
import PersonInfo from '../../components/build/PersonInfo'
import CvPreview from '../../components/CvPreview'
import Skills from '../../components/build/Skills'
import Education from '../../components/build/Education'
import Experience from '../../components/build/Experience'


const BuildResume = () => {

  const [activeSection, setActiveSection] = useState('person');

  const renderComponent = () => {
    switch (activeSection) {
      case 'person':
        return <PersonInfo />;
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      case 'experience':
        return <Experience />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex w-full h-screen ">

        <div className="w-full  text-white py-6 px-3  space-y-6 ">
          <div className="flex flex-wrap gap-2 mb-4">
            <button onClick={() => setActiveSection('person')} className={`px-4 py-2 rounded ${activeSection === 'person' ? 'bg-(--custom-color)' : 'bg-gray-700'}`}>Personal Info</button>
            <button onClick={() => setActiveSection('skills')} className={`px-4 py-2 rounded ${activeSection === 'skills' ? 'bg-(--custom-color)' : 'bg-gray-700'}`}>Skills</button>
            <button onClick={() => setActiveSection('education')} className={`px-4 py-2 rounded ${activeSection === 'education' ? 'bg-(--custom-color)' : 'bg-gray-700'}`}>Education</button>
            <button onClick={() => setActiveSection('experience')} className={`px-4 py-2 rounded ${activeSection === 'experience' ? 'bg-(--custom-color)' : 'bg-gray-700'}`}>Experience</button>
          </div>
          <div>
            {renderComponent()}
          </div>
        </div>

        <div className="w-full  ">
          <CvPreview />
        </div>
      </div>
    </>
  )
}

export default BuildResume
