import React, { useState } from 'react'
import PersonInfo from '../../components/build/PersonInfo'
import CvPreview from '../../components/CvPreview'
import Skills from '../../components/build/Skills'
import Education from '../../components/build/Education'
import Experience from '../../components/build/Experience'
import { useResume } from '../../store/resumeStore'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';


const BuildResume = () => {

  const previewRef = useRef();

  const handleDownloadCv = async () => {
    const element = previewRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  const { clearAllResumeData } = useResume();

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
      <div className="flex w-full h-screen">
        <div className="w-full  text-white py-4 px-3  space-y-6 ">
          <div className="flex flex-wrap gap-2 mb-4">
            <button onClick={() => setActiveSection('person')} className={`px-4 py-2 rounded ${activeSection === 'person' ? 'bg-(--custom-color)' : 'bg-gray-700'}`}>Personal Info</button>
            <button onClick={() => setActiveSection('skills')} className={`px-4 py-2 rounded ${activeSection === 'skills' ? 'bg-(--custom-color)' : 'bg-gray-700'}`}>Skills</button>
            <button onClick={() => setActiveSection('education')} className={`px-4 py-2 rounded ${activeSection === 'education' ? 'bg-(--custom-color)' : 'bg-gray-700'}`}>Education</button>
            <button onClick={() => setActiveSection('experience')} className={`px-4 py-2 rounded ${activeSection === 'experience' ? 'bg-(--custom-color)' : 'bg-gray-700'}`}>Experience</button>
            <button
              onClick={clearAllResumeData}
              className=' bg-red-700 py-2 px-4 text-white rounded-md'>Reset All
            </button>
          </div>
          <div>
            {renderComponent()}
          </div>
        </div>

        <div className="w-full">
          <div className='my-4 mx-3 '>
            <button
              onClick={handleDownloadCv}
              className='bg-(--custom-color) py-2 px-4 text-white rounded'>
              Download Cv
            </button>
          </div>

          <CvPreview  ref={previewRef} />
        </div>
      </div>
    </>
  )
}

export default BuildResume
