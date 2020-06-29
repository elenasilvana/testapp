import * as React from "react";
import { ITableView, IUser } from "../models/Tables";

const UsersComponent: React.FC<ITableView<IUser>> = (props) => {
  const { items } = props;

  const users = items?.map((user) => {
    return user.userID;
  });

  return (
    <div>
      {" "}
      <span>App component</span>
    </div>
  );
};
