import React, { useEffect, useState } from "react";
import { Category } from "../../models/budget/categories";
import { OutgoingField } from "../expence/Expence-list";

interface CategoryProps {
  category: Category;
}

export const CategorySlide: React.FC<CategoryProps> = (props) => {
  const [categoryState, setCategoryState] = useState<Category | undefined>(
    undefined
  );
  useEffect(() => {
    const setCategoryValue = () => {
      setCategoryState(props.category);
    };
    setCategoryValue();
  }, [props.category]);
  return (
    <div className="category-wrapper">
      {categoryState?.outgoings.map((expense, key) => (
        <OutgoingField outgoing={expense} key={key} />
      ))}
    </div>
  );
};
