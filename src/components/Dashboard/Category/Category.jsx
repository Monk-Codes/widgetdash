/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { DashboardContext } from "../../../DashboardContext";
import Widget from "./Widget/Widget";
import AddWidgetModal from "./Widget/AddWidgetModal";

const Category = ({ category }) => {
 const { searchQuery } = useContext(DashboardContext);
 const [isModalOpen, setIsModalOpen] = useState(false);

 const filteredWidgets = category.widgets.filter((widget) => widget.name.toLowerCase().includes(searchQuery.toLowerCase()));

 return (
  <div className="mb-4 bg-stone-300 p-6 rounded-3xl">
   <div className="flex justify-between items-center mb-2 bg-stone-400 rounded-xl p-4">
    <h2 className="text-xl font-semibold">{category.name}</h2>
    <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded-xl">
     + Add Widget
    </button>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
    {filteredWidgets.map((widget) => (
     <Widget key={widget.id} categoryId={category.id} widget={widget} />
    ))}
   </div>
   {isModalOpen && <AddWidgetModal categoryId={category.id} onClose={() => setIsModalOpen(false)} />}
  </div>
 );
};

export default Category;
