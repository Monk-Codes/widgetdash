/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import categoriesData from "./sample.json";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
 const [categories, setCategories] = useState(categoriesData.categories || []);
 const [searchQuery, setSearchQuery] = useState("");

 const addWidget = (categoryId, widget) => {
  setCategories((prevCategories) => prevCategories.map((category) => (category.id === categoryId ? { ...category, widgets: [...category.widgets, widget] } : category)));
 };

 const removeWidget = (categoryId, widgetId) => {
  setCategories((prevCategories) =>
   prevCategories.map((category) =>
    category.id === categoryId
     ? {
        ...category,
        widgets: category.widgets.filter((w) => w.id !== widgetId),
       }
     : category
   )
  );
 };

 return (
  <DashboardContext.Provider
   value={{
    categories,
    searchQuery,
    setSearchQuery,
    addWidget,
    removeWidget,
   }}
  >
   {children}
  </DashboardContext.Provider>
 );
};
