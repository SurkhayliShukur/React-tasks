import React from 'react'
import Resume from '../../assets/img/resume.svg';
import LangSelect from '../../components/LangSelect';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../constant/router';



const Home = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();

  return (

    <>
      <div className='w-full h-screen flex justify-center items-center flex-col '>
        <img src={Resume} alt="" style={{ width: 300, height: 290 }} />
        <h2 className='text-4xl font-(--font-display) text-white '>
          {t("HeroDesc")} <span className='font-bold uppercase  text-(--custom-color)'>{t("HeroSpan")}</span>
        </h2>
        <div className='pt-4 flex items-center gap-7'>
          <LangSelect />
          <button
            onClick={() => navigate(ROUTER.Build)}
            className='bg-(--custom-color) rounded-3xl px-6 py-3 text-white'>
            {t("HeroButton")}
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
