import React from "react";

interface Props {
  params: { category: string };
}
const CategoryPage = ({ params }: Props) => {
  console.log(params);

  return <div></div>;
};

export default CategoryPage;
