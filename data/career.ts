import { IconType } from "react-icons";
import { FiBriefcase, FiCode } from "react-icons/fi";

export type Career = {
  id: string;
  icon: IconType;
};

export const careers: Career[] = [
  {
    id: "1",
    icon: FiBriefcase,
  },
  {
    id: "2",
    icon: FiCode,
  },
];
