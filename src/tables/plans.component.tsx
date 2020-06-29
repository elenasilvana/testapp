import * as React from "react";
import { ITableView, IPlan } from "../models/Tables";

const PlansComponent: React.FC<ITableView<IPlan>> = (props) => {
  const { items } = props;

  const plans = items?.map((plan) => {
    return plan.planID;
  });

  return (
    <div>
      {" "}
      <span>App component</span>
    </div>
  );
};
