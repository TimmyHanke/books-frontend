export interface IBook {
  _id: number;
  titel: String;
  pages: String;
  image: string;
  auther: Auther;
  genre: Genre;
  sidebar: Sidebar;
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

interface Sidebar {
  Explore: String;
  Genre: String;
  Auther: String;
  Saved: String;
}
