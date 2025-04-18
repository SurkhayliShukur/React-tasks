import React, { useState } from 'react'
import { useResume } from '../../../store/resumeStore'
import { Input } from '../../../common/Input'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

const Education = () => {

  const { t } = useTranslation();

  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState(null); // dayjs object
  const [endDate, setEndDate] = useState(null);

  const addEducation = useResume((state) => state.addEducation);


  const handleAdd = () => {
    if (!school || !degree || !startDate || !endDate) return;

    addEducation({
      school,
      degree,
      startDate: dayjs(startDate).format('YYYY-MM-DD'),
      endDate: dayjs(endDate).format('YYYY-MM-DD'),
    });

    setSchool('');
    setDegree('');
    setStartDate(null);
    setEndDate(null);
  };


  return (
    <>
      <div className='min-h-screen text-white px-6 flex flex-col justify-center items-center w-full'>
        <div className="flex flex-col  flex-wrap gap-2 w-2/3">
          <Input type="text" placeholder={t("School")} value={school} onChange={(e) => setSchool(e.target.value)} />
          <Input type="text" placeholder={t("Degree")} value={degree} onChange={(e) => setDegree(e.target.value)} />
          <DatePicker placeholder={t("StartDate")} value={startDate} onChange={(date) => setStartDate(date)}
            className="custom-datepicker"
          />
          <DatePicker placeholder={t("EndDate")} value={endDate} onChange={(date) => setEndDate(date)}
            className="custom-datepicker"
          />
          <button onClick={handleAdd} className="bg-(--custom-color) text-white py-2 px-3  rounded">
            Add
          </button>
        </div>
      </div>
    </>
  )
}

export default Education
