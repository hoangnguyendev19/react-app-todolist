import React from "react";

class ChildComponents extends React.Component {
    state = {
        show: false,
    }
render() {
    let { student } = this.state;
    return (
      <>
        <h2>List Student</h2>
        {student.map((item, index) => {
          <div>
            <div>Ma SV: {item.mssv}</div>
            <div>Lop: {item.class}</div>
            <div>Nganh: {item.branch}</div>
          </div>;
        })}
      </>
    );
  }

export default ChildComponents;
