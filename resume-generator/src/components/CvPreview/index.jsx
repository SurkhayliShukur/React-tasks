import React from 'react';
import { useResume } from '../../store/resumeStore';

const CvPreview = () => {

  const personData = useResume((state) => state.personData);
  const skills = useResume((state) => state.skills);

  return (
    <div className="bg-white text-black shadow-md rounded-lg min-h-screen p-10 w-full max-w-4xl mx-auto my-10 font-sans">
      <div className="flex items-center flex-col md:flex-row gap-10">
        <div className="flex justify-center flex-col items">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-white mb-2">
            <img
              src={personData.image || ""}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl uppercase font-bold">
            {personData.firstName} {personData.lastName}
          </h2>
          <p className="text-sm font-bold text-gray-700">{personData.job}</p>
        </div>
        <hr />
        <div className="text-lg space-y-2 ">
          {personData.email && <p><strong>Email:</strong> {personData.email}</p>}
          {personData.phone && <p><strong>Telefon:</strong> {personData.phone}</p>}
          {personData.city && personData.country && (
            <p><strong>Ünvan:</strong> {personData.city}, {personData.country}</p>
          )}
          {personData.lisence && <p><strong>Lisenziya:</strong> {personData.lisence}</p>}
        </div>
      </div>
      {/* Skills */}
      {skills.length > 0 && (
        <div className="mt-6 w-full">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-(--custom-color) text-white text-sm font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CvPreview;
