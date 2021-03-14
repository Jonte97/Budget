import React, { useEffect, useState } from "react";
import { BudgetContent } from "../budget-content/Budget-content";
import { default as template } from "../../mock/budget-template.json";
import { BudgetTemplate } from "../../models/budget/budget-template";

export const StartPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);

  const [budget, setBudget] = useState<BudgetTemplate | undefined>(undefined);
  useEffect(() => {
    const getBudget = async () => {
      setIsLoading(true);
      setTimeout(() => {
        setBudget(template);
        setIsLoading(false);
      }, 1000);
    };
    getBudget();
  }, []);
  return (
    <div className="container">
      {isLoading ? (
        <div>Loading</div>
      ) : budget?.categories ? (
        <BudgetContent categories={budget.categories} />
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};
