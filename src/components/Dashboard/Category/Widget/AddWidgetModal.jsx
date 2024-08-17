/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { DashboardContext } from "../../../../DashboardContext";

const AddWidgetModal = ({ categoryId, onClose }) => {
 const { addWidget } = useContext(DashboardContext);
 const [widgetName, setWidgetName] = useState("");
 const [widgetContent, setWidgetContent] = useState("");

 const handleAddWidget = (e) => {
  e.preventDefault();
  const newWidget = {
   id: Date.now(),
   name: widgetName,
   content: widgetContent,
  };
  addWidget(categoryId, newWidget);
  onClose();
 };

 return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
   <form onSubmit={handleAddWidget} className="bg-white p-6 rounded shadow w-1/3">
    <h2 className="text-xl font-semibold mb-4">Add New Widget</h2>
    <div className="mb-4">
     <label className="block mb-1">Widget Name</label>
     <input type="text" value={widgetName} onChange={(e) => setWidgetName(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
    </div>
    <div className="mb-4">
     <label className="block mb-1">Widget Content</label>
     <textarea value={widgetContent} onChange={(e) => setWidgetContent(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
    </div>
    <div className="flex justify-end">
     <button type="button" onClick={onClose} className="px-4 py-2 mr-2 bg-gray-300 rounded">
      Cancel
     </button>
     <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
      Add Widget
     </button>
    </div>
   </form>
  </div>
 );
};

export default AddWidgetModal;
