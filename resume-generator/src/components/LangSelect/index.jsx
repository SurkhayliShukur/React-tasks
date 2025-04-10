import React from "react";
import Select from "react-select";
import { useLang } from "../../context/LangContext";


const LangSelect = () => {

  const { currentLang, changeLang } = useLang();

  const languageOptions = [
    {
      value: "en",
      label: (
        <div className="flex items-center">
          <img
            src="https://flagcdn.com/w20/gb.png"
            alt="English"
            style={{ marginRight: 8 }}
          />
          English
        </div>
      ),
    },
    {
      value: "az",
      label: (
        <div className="flex items-center">
          <img
            src="https://flagcdn.com/w20/az.png"
            alt="Azərbaycan"
            style={{ marginRight: 8 }}
          />
          Azərbaycan
        </div>
      ),
    },
  ];

  const selectedOption = languageOptions.find(
    (option) => option.value === currentLang
  );


  const handleChange = (selectedOption) => {
    changeLang(selectedOption.value);
  };  



  return (
    <div style={{ width: 200 }}>
      <Select
        options={languageOptions}
        value={selectedOption}
        onChange={handleChange}
        isSearchable={false}
      />
    </div>
  );
};

export default LangSelect;

