interface Navigation {
  path: string;
  label: string;
}

const navigation: Navigation[] = [
  { path: "/", label: "Home" },
  { path: "/library", label: "My library" },
];

export default navigation;
