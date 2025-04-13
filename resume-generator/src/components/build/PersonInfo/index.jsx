import React,{useCallback} from "react";
import { Input } from "../../../common/Input";
import { useTranslation } from "react-i18next";
import { useResume } from "../../../store/resumeStore";

const PersonInfo = () => {


    const { t } = useTranslation();

    const personData = useResume((state) => state.personData);
    const addPersonData = useResume((state) => state.updatePersonData);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        addPersonData({ name, value });
    }, [addPersonData]);


    return (
        <div className="h-min-screen text-white px-6 flex  w-full">
            <div className="w-full max-w-3xl p-6 space-y-6">
                <h1 className="text-3xl font-bold text-center text-(--custom-color)">
                    {t("PersonInfoTitle")}
                </h1>

                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white mb-2">
                        <img
                            src="https://via.placeholder.com/96"

                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                    <div>
                        <Input
                            type="text"
                            InputText={t("FirstName")}
                            name="firstName"
                            placeholder={t("FirstName")}
                            value={personData.firstName}
                            onchange={handleInputChange}

                        />
                          <Input
                            type="text"
                            InputText={t("LastName")}
                            name="lastName"
                            placeholder={t("LastName")}
                            value={personData.lastName}
                            onchange={handleInputChange}

                        />
                          <Input
                            type="text"
                            InputText="Email"
                            name="email"
                            placeholder="Mail"
                            value={personData.email}
                            onchange={handleInputChange}

                        />
                            <Input
                            type="text"
                            InputText="phone"
                            name="email"
                            placeholder="Phone"
                            value={personData.email}
                            onchange={handleInputChange}

                        />
                
                    </div>
                    <div>
                        <Input type="text" InputText="Ad" />
                        <Input type="text" InputText="Ad" />
                        <Input type="text" InputText="Ad" />
                        <Input type="text" InputText="Ad" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PersonInfo;
