import { Component } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addContact } = this.props;

    addContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form action="submit" autoComplete="off" onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          Name:
          <Input
            type="text"
            name="name"
            placeholder="Enter contact name"
            required
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label htmlFor="number">
          Number:
          <Input
            type="tel"
            name="number"
            placeholder="Enter contact number"
            required
            value={number}
            onChange={this.handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
