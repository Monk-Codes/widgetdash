import { useContext } from "react";
import { DashboardContext } from "../../../DashboardContext";

const SearchBar = () => {
 const { searchQuery, setSearchQuery } = useContext(DashboardContext);

 return (
  <div className="mb-4">
   <input type="text" placeholder="Search widgets..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
  </div>
 );
};

export default SearchBar;
