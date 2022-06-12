import React from "react";
import ChildComponents from "./ChildComponents";
import FormComponents from "./FormComponents";

class MyComponents extends React.Component {
  state = {
    name: "Chris Nguyen",
    class: "DHKHMT17B",
    school: "IUH",
    address: "Binh Dinh Province",
    student: [
      { id: "A1", class: "DHTH17A", branch: "CNTT" },
      { id: "B2", class: "DHMK17B", branch: "Marketing" },
      { id: "C3", class: "DHOT17C", branch: "IOT" },
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

  addOneStudent = (student) => {
    this.setState({
      student: [...this.state.student, student],
    });
  };

  deleteOneStudent = (student) => {
    let listStudents = this.state.student;
    listStudents = listStudents.filter((item) => item.id !== student.id);
    this.setState({
      student: listStudents,
    });
  };

  render() {
    return (
      <>
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
        <FormComponents addOneStudent={this.addOneStudent} />
        <ChildComponents
          list={this.state.student}
          deleteOneStudent={this.deleteOneStudent}
        />
      </>
    );
  }
}

export default MyComponents;
