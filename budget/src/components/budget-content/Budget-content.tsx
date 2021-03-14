import React, { useState } from "react";
import { Category } from "../../models/budget/categories";
import { CategorySlide } from "../category/Category-slide";

interface Props {
  categories: Category[];
}

export const BudgetContent: React.FC<Props> = ({ categories }: Props) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const handleClick = (num: number): void => {
    setActiveCategory(activeCategory + num);
  };
  return (
    <div className="budget-content-wrapper">
      <nav className="navigation-buttons">
        <button onClick={() => handleClick(-1)}>previous</button>
        <button onClick={() => handleClick(1)}>next</button>
      </nav>
      <CategorySlide category={categories[activeCategory]}></CategorySlide>
    </div>
  );
};
