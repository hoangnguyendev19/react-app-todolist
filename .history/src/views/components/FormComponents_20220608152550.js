import React from "react";

class FormComponents extends React.Component {
  state = {
    id: "",
    class: "",
    branch: "",
  };

  handleChangeId = (event) => {
    this.setState({
      id: event.target.value,
    });
  };
  handleChangeClass = (event) => {
    this.setState({
      class: event.target.value,
    });
  };
  handleChangeBranch = (event) => {
    this.setState({
      branch: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Check data: ", this.state);
    if (!this.state.id || !this.state.class || !this.state.branch) {
      alert("Missing submit infomation !");
      return;
    }
    this.props.addOneStudent({
      id: this.state.id,
      class: this.state.class,
      branch: this.state.branch,
    });

    this.setState({
      id: "",
      class: "",
      branch: "",
    });
  };

  // }
  render() {
    return (
      <>
        <h2>Form Information</h2>
        <form action="#">
          <label htmlFor="">Ma SV: </label>
          <input
            type={"text"}
            value={this.state.id}
            onChange={(event) => this.handleChangeId(event)}
          />
          <div></div>
          <label htmlFor="">Lop: </label>
          <input
            type={"text"}
            value={this.state.class}
            onChange={(event) => this.handleChangeClass(event)}
          />
          <div></div>
          <label htmlFor="">Nganh: </label>
          <input
            type={"text"}
            value={this.state.branch}
            onChange={(event) => this.handleChangeBranch(event)}
          />
          <input
            type={"submit"}
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default FormComponents;
