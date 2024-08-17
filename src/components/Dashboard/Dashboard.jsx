/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { DashboardContext } from "../../DashboardContext";
import SearchBar from "./SearchBar/Searchbar";
import Category from "./Category/Category";

const Dashboard = () => {
 const { categories, searchQuery } = useContext(DashboardContext);

 return (
  <div className="">
   <h1 className="font-semibold text-orange-400 flex justify-center p-2  text-2xl bg-slate-300 rounded-md ">CNAPP Dashboard</h1>
   <div className="p-4 py-2 flex flex-col h-full">
    <SearchBar />
    {(categories || []).map((category) => (
     <Category key={category.id} category={category} />
    ))}
   </div>
  </div>
 );
};

export default Dashboard;
