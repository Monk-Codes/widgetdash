/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DashboardContext } from "../../../../DashboardContext";

const Widget = ({ categoryId, widget }) => {
 const { removeWidget } = useContext(DashboardContext);

 const handleRemove = () => {
  removeWidget(categoryId, widget.id);
 };

 return (
  <div className=" relative p-6 bg-slate-200 border border-orange-300 rounded-xl items-center text-center shadow-lg">
   <button onClick={handleRemove} className="absolute top-2 right-2 text-red-500">
    <AiOutlineClose />
   </button>
   <h3 className="text-lg font-medium mb-2">{widget.name}</h3>
   <p>{widget.content}</p>
  </div>
 );
};

export default Widget;
