const CategoryAtom = ({ title }) => {
  const categoryAddress = `http://localhost:5000/categories/${title}`;

  return <a href={categoryAddress}>{title}</a>;
};

export { CategoryAtom };
