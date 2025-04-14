import { create } from "zustand";

const getLocalStorageData = () => {
  try {
    const storedData = localStorage.getItem("resume-personData");
    return storedData ? JSON.parse(storedData) : {};
  } catch (error) {
    console.error("LocalStorage oxunmadı:", error);
    return {};
  }
};

export const useResume = create((set) => ({
  personData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    job: "",
    lisence: "",
    summary: "",
    image: "",
    ...getLocalStorageData(),
  },

  updatePersonData: (newData) =>
    set((state) => {
      const updated = {
        ...state.personData,
        ...newData,
      };
      try {
        localStorage.setItem("resume-personData", JSON.stringify(updated));
      } catch (error) {
        console.error("LocalStorage yazılmadı:", error);
      }
      return { personData: updated };
    }),

    clearPersonData: () =>
        set(() => {
          localStorage.removeItem("resume-personData");
          return {
            personData: {
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              country: "",
              city: "",
              job: "",
              lisence: "",
              summary: "",
            },
          };
        }),
}));
