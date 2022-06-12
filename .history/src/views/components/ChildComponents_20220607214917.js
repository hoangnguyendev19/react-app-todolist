import React from "react";

class ChildComponents extends React.Component {
  state = {
    show: false,
  };

  handleShowHide = () => {
    this.setState({
      show: !show,
    });
  };

  render() {
    let { show } = this.state;
    let { list } = this.props;
    return (
      <>
        <h2 className="title-student">List Student</h2>
        <div>
          <button>Show</button>
        </div>
        <div className="list-student">
          {list.map((item, index) => {
            return (
              <>
                <div>Ma SV: {item.mssv}</div>
                <div>Lop: {item.class}</div>
                <div>Nganh: {item.branch}</div>
              </>
            );
          })}
          <div>
            <button>Hide</button>
          </div>
        </div>
      </>
    );
  }
}
export default ChildComponents;
