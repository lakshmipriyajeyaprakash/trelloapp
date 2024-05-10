import React from "react";

const ListAdded = ({ listdata }) => {
  return (
    <div>
      {listdata.map((list, index) => (
        <div key={index}>{list}</div>
      ))}
    </div>
  );
};

export default ListAdded;
