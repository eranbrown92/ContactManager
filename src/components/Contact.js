import React from "react";

class Contact extends React.Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="container">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>{name}</h4>
          </li>
          <li class="collection-item">
            <strong>Email:</strong> {email}
          </li>
          <li class="collection-item">
            <strong>Phone:</strong> {phone}
          </li>
        </ul>
      </div>
    );
  }
}
export default Contact;
