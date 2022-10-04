export interface IBook {
  _id: number;
  titel: String;
  pages: String;
  image: string;
  auther: Auther;
  genre: Genre;
}

interface Auther {
  name: String;
  age: String;
  email: String;
}

interface Genre {
  name: String;
  _id: Number;
}
