import { create } from "zustand";


export const useResume = create((set) => ({
    personData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        Job: "",
        lisence: "",
        summary: "",
    },

    addPersonData: (name, value) =>
        set((state) => ({
            personData: {
                ...state.personData,
                [name]: value,
            },
        })),
}))