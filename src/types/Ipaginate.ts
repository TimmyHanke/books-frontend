export interface Ipaginate {
  itemCount: number;
  pageSize: number;
  selectedPage: Number;
  onPageChange: () => void;
}
