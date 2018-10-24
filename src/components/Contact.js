import React from "react";

class Contact extends React.Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <li>{email}</li>
        <li>{phone}</li>
      </div>
    );
  }
}
export default Contact;
