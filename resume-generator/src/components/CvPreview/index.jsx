import React from 'react';
import { useResume } from '../../store/resumeStore';

const CvPreview = () => {
  const personData = useResume((state) => state.personData);

  return (
    <div className="bg-white text-black shadow-md rounded-lg h-full p-10 w-full max-w-4xl mx-auto my-10 font-sans">
      <div className="flex flex-col md:flex-row gap-10">
        
          <div className="text-center">
            <h2 className="text-2xl uppercase font-bold">
              {personData.firstName} {personData.lastName}
            </h2>
            <p className="text-sm font-bold text-gray-700">{personData.job}</p>
          </div>
          <hr />
          <div className="text-lg space-y-2">
            {personData.email && <p><strong>Email:</strong> {personData.email}</p>}
            {personData.phone && <p><strong>Telefon:</strong> {personData.phone}</p>}
            {personData.city && personData.country && (
              <p><strong>Ünvan:</strong> {personData.city}, {personData.country}</p>
            )}
            {personData.lisence && <p><strong>Lisenziya:</strong> {personData.lisence}</p>}
          </div>
      </div>
    </div>
  );
};

export default CvPreview;
