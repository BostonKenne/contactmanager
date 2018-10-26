import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  static defaultProps = {
    name: "Boston Kenne",
    email: "kenneboston1@gmail.com",
    phone: "695 15 95 563"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card  mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                placeholder="Enter name..."
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Enter email..."
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                placeholder="Enter the phone..."
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              className="btn btn-block btn-light"
              value="Add Contact"
            />
          </form>
        </div>
      </div>
    );
  }
}
