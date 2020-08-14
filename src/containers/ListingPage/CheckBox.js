import React, { Component } from "react";

export class CheckBox extends Component {
  state = {
    checked: false
  };
  render() {
    return (
      <div>
        <label>
        <input
          
          type="checkbox"
          value={this.state.checked}
          onClick={() => {
            this.setState(prevState => ({
              checked: !prevState.checked
            }));

            this.props.calculateTotal(this.props.value, !this.state.checked);
          }}
        />{" "}
        {this.props.nameString}
        </label>
      </div>
    );
  }
}

export default CheckBox;
