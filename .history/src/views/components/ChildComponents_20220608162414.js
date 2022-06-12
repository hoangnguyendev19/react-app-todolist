import React from "react";

class ChildComponents extends React.Component {
  state = {
    show: false,
  };

  handleShowHide = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleClickDelete = () => {
    console.log("Check : ", this.state);
  };

  render() {
    let { show } = this.state;
    let { list } = this.props;
    return (
      <>
        <h2 className="title-student">List Student</h2>
        {show === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <div className="list-student">
            {list.map((item, index) => {
              return (
                <div key={item.id}>
                  <div>Ma SV: {item.id}</div>
                  <div>Lop: {item.class}</div>
                  <div>Nganh: {item.branch}</div>
                  <span onClick={() => this.handleClickDelete()}>x</span>
                </div>
              );
            })}
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default ChildComponents;
