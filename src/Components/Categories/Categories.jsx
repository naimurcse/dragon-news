const categoriesPromise = fetch("/categories.json").then((res) => res.json());
import { use } from "react";
import { NavLink } from "react-router";
import "./categories.css";

const Categories = () => {
  const categories = use(categoriesPromise);
  //   console.log(categories);
  return (
    <div>
      <h2>Categories</h2>
      <div className="grid grid-cols-1 gap-2">
        {categories.map((category) => (
          <NavLink
            className="btn border-0 bg-base-100 hover:bg-base-200 hover:border text-accent hover:text-neutral text-lg font-normal hover:font-semibold"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
