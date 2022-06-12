import React from "react";

class FormComponents extends React.Component {
  handleChangePress = (event) => {
    console.log(event);
  };
  handleSubmit = (event) => {
    event.target.preventDefaut();
  };
  render() {
    return (
      <>
        <h2>Form Information</h2>
        <form action="#">
          <label htmlFor="">Ma SV: </label>
          <input
            type={"text"}
            onChange={(event) => this.handleChangePress(event)}
          />
          <div></div>
          <label htmlFor="">Lop: </label>
          <input
            type={"text"}
            onChange={(event) => this.handleChangePress(event)}
          />
          <div></div>
          <label htmlFor="">Nganh: </label>
          <input
            type={"text"}
            onChange={(event) => this.handleChangePress(event)}
          />
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
