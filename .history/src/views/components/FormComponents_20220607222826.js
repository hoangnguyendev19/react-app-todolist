import React from "react";

class FormComponents extends React.Component {
  handleSubmit = (event) => {
    event.preventDefaut();
  };
  render() {
    return (
      <>
        <h2>Form Information</h2>
        <form action="#">
          <label htmlFor="">Ma SV: </label>
          <input type={"text"} />
          <div></div>
          <label htmlFor="">Lop: </label>
          <input type={"text"} />
          <div></div>
          <label htmlFor="">Nganh: </label>
          <input type={"text"} />
          <div>
            <button onClick={(event) => this.handleSubmit(event)}>
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default FormComponents;
