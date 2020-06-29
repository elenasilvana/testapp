export interface ITableView<T> {
  //array de generico
  items?: T[];
  onSort: () => void;
  onFilter: () => void;
}

export interface IUser {
  name: string;
  userID: string;
}

export interface IPlan {
  name: string;
  planID: string;
}
