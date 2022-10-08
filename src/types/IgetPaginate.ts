import { IBook } from "./IBook";

export interface IgetPaginate {
  pageSize: number;
  selectedPage: number;
  searchQuery: String;
  sortColumn: any;
  allBooks: any;
}
