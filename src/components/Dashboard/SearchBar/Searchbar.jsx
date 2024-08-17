import { useContext } from "react";
import { DashboardContext } from "../../../DashboardContext";

const SearchBar = () => {
 const { searchQuery, setSearchQuery } = useContext(DashboardContext);

 return (
  <div className="mb-2 flex justify-center">
   <input type="text" placeholder="Search widgets..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-72 p-2 border border-orange-300 rounded-2xl outline-none" />
  </div>
 );
};

export default SearchBar;
