import React, { useCallback } from "react";
import { Input } from "../../../common/Input";
import { useTranslation } from "react-i18next";
import { useResume } from "../../../store/resumeStore";

const PersonInfo = () => {


    const { t } = useTranslation();

    const personData = useResume((state) => state.personData);
    const addPersonData = useResume((state) => state.updatePersonData);
    const clearPersonData = useResume((state) => state.clearPersonData);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        addPersonData({ [name]: value });
    }, [addPersonData]);


    return (
        <div className="h-min-screen text-white px-6 flex flex-s  w-full">
            <div className="w-full max-w-3xl p-6 space-y-6">
                <h1 className="text-3xl font-bold text-center text-(--custom-color)">
                    {t("PersonInfoTitle")}
                </h1>

                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white mb-2">
                        <img
                            src={personData.image || "https://via.placeholder.com/96"}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <Input
                            type="url"
                            InputText="Image URL"
                            name="image"
                            placeholder="https://example.com/photo.jpg"
                            value={personData.image || ""}
                            onChange={handleInputChange}
                        />
                </div>

                <div className="flex justify-between items-center gap-4">
                    <div>
                        <Input
                            type="text"
                            InputText={t("FirstName")}
                            name="firstName"
                            placeholder={t("FirstName")}
                            value={personData.firstName || ""}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="text"
                            InputText={t("LastName")}
                            name="lastName"
                            placeholder={t("LastName")}
                            value={personData.lastName || ""}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="email"
                            InputText="Email"
                            name="email"
                            placeholder="Mail"
                            value={personData.email}
                            onChange={handleInputChange}

                        />
                        <Input
                            type="number"
                            InputText="phone"
                            name="phone"
                            placeholder="Phone"
                            value={personData.phone || ""}
                            onChange={handleInputChange}

                        />

                    </div>
                    <div>
                        <Input
                            type="text"
                            InputText="City"
                            name="city"
                            placeholder="City"
                            value={personData.city || ""}
                            onChange={handleInputChange}

                        />
                        <Input
                            type="text"
                            InputText="Country"
                            name="country"
                            placeholder="Country"
                            value={personData.country || ""}
                            onChange={handleInputChange}

                        />
                        <Input
                            type="text"
                            InputText="Job"
                            name="job"
                            placeholder="Job"
                            value={personData.job || ""}
                            onChange={handleInputChange}

                        />
                        <Input
                            type="text"
                            InputText="Lisence"
                            name="lisence"
                            placeholder="Lisence"
                            value={personData.lisence || ""}
                            onChange={handleInputChange}

                        />

                    </div>
                </div>
                <button
                    onClick={() => clearPersonData()}
                    className=" bg-red-700 py-2 px-4 rounded-md">
                    {t("DeleteResume")}
                </button>
            </div>
        </div>
    );
};

export default PersonInfo;
