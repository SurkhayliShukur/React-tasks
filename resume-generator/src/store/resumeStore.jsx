import { create } from "zustand";

// Helpers
const getLocalStorageData = (key, fallback = []) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`LocalStorage oxunmadı: ${key}`, error);
    return fallback;
  }
};

const setLocalStorageData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`LocalStorage yazılmadı: ${key}`, error);
  }
};

// Store
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
    ...getLocalStorageData("resume-personData", {}),
  },

  skills: getLocalStorageData("resume-skills", []),
  education: getLocalStorageData("resume-education", []),
  experience: getLocalStorageData("resume-experience", []),

  // Person Info
  updatePersonData: (newData) =>
    set((state) => {
      const updated = {
        ...state.personData,
        ...newData,
      };
      setLocalStorageData("resume-personData", updated);
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
          image: "",
        },
      };
    }),

  // Skills
  addSkill: (skill) =>
    set((state) => {
      const updated = [...state.skills, skill];
      setLocalStorageData("resume-skills", updated);
      return { skills: updated };
    }),

  removeSkill: (index) =>
    set((state) => {
      const updated = state.skills.filter((_, i) => i !== index);
      setLocalStorageData("resume-skills", updated);
      return { skills: updated };
    }),

  // Education
  addEducation: (edu) =>
    set((state) => {
      const updated = [...state.education, edu];
      setLocalStorageData("resume-education", updated);
      return { education: updated };
    }),

  removeEducation: (index) =>
    set((state) => {
      const updated = state.education.filter((_, i) => i !== index);
      setLocalStorageData("resume-education", updated);
      return { education: updated };
    }),

  // Experience
  addExperience: (exp) =>
    set((state) => {
      const updated = [...state.experience, exp];
      setLocalStorageData("resume-experience", updated);
      return { experience: updated };
    }),

  removeExperience: (index) =>
    set((state) => {
      const updated = state.experience.filter((_, i) => i !== index);
      setLocalStorageData("resume-experience", updated);
      return { experience: updated };
    }),

  clearAllResumeData: () =>
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
          image: "",
        },
        skills: [],
        education: [],
        experience: [],
      };
    }),
}));
