import React, { forwardRef } from 'react';
import { useResume } from '../../store/resumeStore';
import { useTranslation } from 'react-i18next';

const CvPreview = forwardRef((props,ref) => {

  const { personData, skills, education, experience } = useResume();

  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className="bg-white text-black shadow-md rounded-lg min-h-screen p-10 w-full max-w-4xl mx-auto my-10 font-sans"
    >
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
        <div className="text-lg space-y-2">
          {personData.email && <p><strong>{t("Email")}: </strong> {personData.email}</p>}
          {personData.phone && <p><strong>{t("Phone")}: </strong> {personData.phone}</p>}
          {personData.city && personData.country && (
            <p><strong>{t("Address")}: </strong> {personData.city}, {personData.country}</p>
          )}
          {personData.lisence && <p><strong>{t("License")}:</strong> {personData.lisence}</p>}
        </div>
      </div>

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mt-6 w-full">
          <h3 className="text-xl font-semibold mb-2">{t("Skills")}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[var(--custom-color)] text-white text-sm font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div>
          <h3 className="font-semibold text-lg mb-2 mt-6">{t("Education")}</h3>
          <ul className="space-y-2">
            {education.map((edu, index) => (
              <li key={index}>
                <p className="font-semibold">{edu.degree} - {edu.school}</p>
                <p className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div>
          <h3 className="font-semibold text-lg mb-2 mt-6">{t("Experience")}</h3>
          <ul className="space-y-2">
            {experience.map((exp, index) => (
              <li key={index}>
                <p className="font-semibold">{exp.position}</p>
                <p className="text-base text-black">{t("Company")}: {exp.company}</p>
                <p className="text-sm text-[var(--custom-color)]">{t("Role")}: {exp.role}</p>
                <p className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default CvPreview;
