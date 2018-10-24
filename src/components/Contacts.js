import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@mail.com",
          phone: "555-555-5555"
        },
        {
          id: 2,
          name: "Mary Jane",
          email: "mjane@mail.com",
          phone: "555-111-5555"
        },
        {
          id: 3,
          name: "Brandon Smith",
          email: "bsmith@mail.com",
          phone: "555-222-5555"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.contacts.map(contact => (
          <Contact
            id={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
