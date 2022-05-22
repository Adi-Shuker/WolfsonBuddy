import Header from "../UsersComponents/Header";
import React from "react";
import News from "../News/News";

const EditForm = ({ title, fields }) => {
  return (
    <div className="EditForm">
      <div>{title}</div>
      {fields.map(() => {
        return <div>hey</div>;
      })}
    </div>
  );
};
export default EditForm;
