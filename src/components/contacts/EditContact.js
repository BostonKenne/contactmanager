import React, { Component } from "react";
import TextInputGoup from "../layout/TextInputGroup";
import { Consumer } from "../../context";
// import uuid from "uuid";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const contact = response.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
    console.log(response);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    //vérification des erreurs

    if (name === "") {
      this.setState({ errors: { name: "Name is Required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is Required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is Required" } });
      return;
    }

    const { id } = this.props.match.params;
    const contactEdited = {
      id: id,
      name,
      phone,
      email
    };
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      contactEdited
    );

    dispatch({ type: "UPDATE_CONTACT", payload: response.data });

    this.setState({ name: "", email: "", phone: "", errors: {} });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card  mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGoup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGoup
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGoup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    className="btn btn-block btn-light"
                    value="Update Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
