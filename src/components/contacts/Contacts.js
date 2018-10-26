import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // deleteContact = id => {
  //   const { contacts } = this.state;
  //   const newContact = contacts.filter(contact => {
  //     return contact.id !== id;
  //   });

  //   this.setState({ contacts: newContact });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span style={{ color: "red" }}>Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deletedClickedHandler={this.deleteContact.bind(
                  //   this,
                  //   contact.id
                  // )}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
