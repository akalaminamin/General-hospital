import React from "react";
import { Form, Container, Button } from "react-bootstrap";
const ContactForm = () => {
  return (
    <Container className="ps-0">
      <Form>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Full name"
          required
        />
        <br />
        <input
          className="form-input"
          type="email"
          name="name"
          placeholder="Email"
          required
        />
        <br />
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Subject"
          required
        />
        <br />
        <textarea
          name="textarea"
          className="form-input"
          id=""
          cols="20"
          rows="10"
          placeholder="Your message"
        ></textarea>
        <br />
        <Button type="submit" variant="primary" className="ms-2 mb-5">
          Submit Form
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
