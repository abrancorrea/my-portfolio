import { colorTypesEnum } from "./types";

export const getColorClasses = (color?: colorTypesEnum) => {
  switch (color) {
    case "primary":
      return "btn rounded-full transition-all text-white font-medium bg-gradient-to-l from-cyan-500 via-indigo-600 to-purple-600 shadow-xl hover:from-teal-500 hover:via-indigo-600 hover:to-purple-700 hover:from-blue-800 hover:via-indigo-600 hover:to-purple-700 hover:shadow-2xl";

    default:
      return "btn";
  }
};

