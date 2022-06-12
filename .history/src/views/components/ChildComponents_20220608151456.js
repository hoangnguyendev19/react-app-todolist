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
                <>
                  <div key={item.id}>Ma SV: {item.id}</div>
                  <div key={item.class}>Lop: {item.class}</div>
                  <div key={item.branch}>Nganh: {item.branch}</div>
                </>
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
