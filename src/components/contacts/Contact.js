import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./contact.css";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    showCOntactInfo: false
  };
  onDeleteContact = async (id, dispatch) => {
    // this.props.deletedClickedHandler();

    try {
      await axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { showCOntactInfo } = this.state;
    const { contact } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showCOntactInfo: !this.state.showCOntactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ float: "right", cursor: "pointer", color: "red" }}
                  onClick={this.onDeleteContact.bind(
                    this,
                    contact.id,
                    dispatch
                  )}
                />
                <Link to={`/contact/edit/${contact.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginRight: "1rem",
                      color: "blue"
                    }}
                  />
                </Link>
              </h4>
              {showCOntactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // deletedClickedHandler: PropT ypes.func.isRequired
};

export default Contact;
