import { useState } from "react";

export const useSortList = () => {
  const [sortList, setSortList] = useState<string[]>([]);

  const toggleSort = (label: string) => {
    setSortList((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return { sortList, toggleSort };
};
