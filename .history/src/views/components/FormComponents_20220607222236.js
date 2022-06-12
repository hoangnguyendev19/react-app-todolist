import React from "react";

class FormComponents extends React.Component {
  render() {
    return (
      <>
        <h2>Form Information</h2>
        <form action="#">
          <label htmlFor="">Ma SV</label>
          <input type={"text"} />
          <div></div>
          <label htmlFor="">Lop</label>
          <input type={"text"} />
          <div></div>
          <label htmlFor="">Nganh</label>
          <input type={"text"} />
        </form>
      </>
    );
  }
}

export default FormComponents;
