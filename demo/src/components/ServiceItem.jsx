import React from "react";

const ServiceItem = ({ key, title, description, icon }) => {
  return (
    <div>
      <div className=" bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:translate-y-2 transform transition p-5 rounded-md">
          <div className=" text-gray-800 dark:text-gray-300 w-6 mb-3">{icon}</div>
          <div className=" font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">{title}</div>
        <div className=" text-md text-gray-600 dark:text-gray-300">{description}</div>
      </div>
    </div>
  );
};

export default ServiceItem;
