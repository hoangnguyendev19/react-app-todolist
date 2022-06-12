import React from "react";
// import ChildComponents from "./ChildComponents";

class MyComponents extends React.Component {
  state = {
    name: "Chris Nguyen",
    class: "DHKHMT17B",
    school: "IUH",
    address: "Binh Dinh Province",
    student: [
      { mssv: "A1", class: "DHTH17A", branch: "CNTT" },
      { mssv: "B2", class: "DHMK17B", branch: "Marketing" },
      { mssv: "C3", class: "DHOT17C", branch: "IOT" },
    ],
  };
  handleChangePress = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleClickButton = () => {
    alert("Clicked me !");
  };
  render() {
    return (
      <>
        {}
        <h2>Author: {this.state.name}</h2>
        <div className="className">Class: {this.state.class}</div>
        <div className="schoolName">
          School: Industrial University Ho Chi Minh CiTy - {this.state.school}
        </div>
        <div className="addressName">Address: {this.state.address}</div>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChangePress(event)}
          />
          <button type="Submit" onClick={() => this.handleClickButton()}>
            Click me
          </button>
        </div>
        <ChildComponents name="Chris Nguyen" class="DHKHMT17B" />
      </>
    );
  }
  state = {};
}

export default MyComponents;
