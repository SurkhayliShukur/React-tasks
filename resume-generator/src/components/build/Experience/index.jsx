import React, { useState } from 'react'
import { useResume } from '../../../store/resumeStore'
import { Input } from '../../../common/Input'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { t } = useTranslation();

  const addExperience = useResume((state) => state.addExperience);

  const handleAdd = () => {
    if (!company || !role || !startDate || !endDate) return;

    addExperience({
      company,
      role,
      startDate: dayjs(startDate).format('YYYY-MM-DD'),
      endDate: dayjs(endDate).format('YYYY-MM-DD'),
    });

    setCompany('');
    setRole('');
    setStartDate('');
    setEndDate('');
  }

  return (
    <>
      <div className='min-h-screen text-white px-6 flex flex-col justify-center items-center w-full'>
        <div className="flex flex-col  flex-wrap gap-2 w-2/3">
          <Input type="text" placeholder= {t("Company")} value={company} onChange={(e) => setCompany(e.target.value)} />
          <Input type="text" placeholder={t("Role")} value={role} onChange={(e) => setRole(e.target.value)} />
          <DatePicker placeholder={t("StartDate")} value={startDate} onChange={(date) => setStartDate(date)}
            className="custom-datepicker"
          />
          <DatePicker placeholder={t("EndDate")} value={endDate} onChange={(date) => setEndDate(date)}
            className="custom-datepicker"
          />
          <button onClick={handleAdd} className="bg-(--custom-color) text-white py-2 px-3  rounded">
            {t("Add")}
          </button>
        </div>
      </div>
    </>
  )
}

export default Experience
