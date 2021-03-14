import React, { useEffect, useState } from "react";
import { Outgoing } from "../../models/budget/outgoings";

interface OutgoingProps {
  outgoing: Outgoing;
}

export const OutgoingField: React.FC<OutgoingProps> = (props) => {
  const [expense, setExpense] = useState<Outgoing | undefined>(undefined);
  useEffect(() => {
    const getExpense = () => {
      setExpense(props.outgoing);
    };
    getExpense();
  }, [props.outgoing]);

  return expense ? (
    <div className="outgoing-input">
      <label className="outgoing-label" htmlFor={expense?.name}>
        {expense?.name}
      </label>
      <input className="outgoing-textfield" type="text" name={expense.name} />
    </div>
  ) : (
    <div>Loading</div>
  );
};
