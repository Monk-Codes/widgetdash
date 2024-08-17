/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { DashboardContext } from "../../DashboardContext";
import SearchBar from "./SearchBar/Searchbar";
import Category from "./Category/Category";

const Dashboard = () => {
 const { categories, searchQuery } = useContext(DashboardContext);

 return (
  <div className="p-4">
   <SearchBar />
   {(categories || []).map((category) => (
    <Category key={category.id} category={category} />
   ))}
  </div>
 );
};

export default Dashboard;
