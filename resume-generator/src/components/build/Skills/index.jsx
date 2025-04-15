import React, { useState, useCallback } from 'react'
import { Input } from '../../../common/Input'
import { useResume } from '../../../store/resumeStore'

const Skills = () => {
  const [inputSkill, setInputSkill] = useState("");
  const skills = useResume((state) => state.skills);
  const addSkill = useResume((state) => state.addSkill);
  const removeSkill = useResume((state) => state.removeSkill);

  const handleAddSkill = useCallback(() => {
    if (inputSkill.trim() !== "") {
      addSkill(inputSkill.trim());
      setInputSkill("");
    }
  }, [inputSkill, addSkill]);

  const handleRemoveSkill = (index) => {
    removeSkill(index);
  };
  return (
    <div className='flex justify-center flex-col items-center min-h-screen '>
      <h1 className="text-3xl font-bold text-center text-(--custom-color) pb-3">
        Skills
      </h1>
      <div className="flex justify-center items-center gap-1 w-2/3">
        <div className='w-full'>
          <Input
            type="text"
            name="skill"
            placeholder="Enter a skill"
            value={inputSkill}
            onChange={(e) => setInputSkill(e.target.value)}
          />
        </div>

        <button
          onClick={handleAddSkill}
          className="bg-(--custom-color) text-white py-2 px-3  rounded "
        >
          Add
        </button>
      </div>
      <ul className="mt-4 space-y-2 w-2/3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded"
          >
            {skill}
            <button
              onClick={() => handleRemoveSkill(index)}
              className="text-red-600 "
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
