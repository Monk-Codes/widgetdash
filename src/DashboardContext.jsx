/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import categoriesData from "./sample.json";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
 const [categories, setCategories] = useState(() => {
  const storedCategories = localStorage.getItem("categories");
  return storedCategories ? JSON.parse(storedCategories) : categoriesData.categories || [];
 });

 const [searchQuery, setSearchQuery] = useState("");

 useEffect(() => {
  localStorage.setItem("categories", JSON.stringify(categories));
 }, [categories]);

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
