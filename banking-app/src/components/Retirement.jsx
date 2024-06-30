// Retirement.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background: black;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 1em;
  background: black;
  color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  font-size: 1em;
  background: black;
  color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 20px 0;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin: 10px 0;
`;

const Retirement = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountType: '',
    contribution: '',
    firstName: '',
    lastName: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.accountType) errors.accountType = 'Account type is required';
    if (!formData.contribution) errors.contribution = 'Contribution is required';
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      // Here you would typically send data to your server
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/retirement/success'); // Navigate to a success page or handle success state
      }, 2000);
    }
  };

  return (
    <Container>
      <h1>Sign Up for a Retirement Account</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Account Type
          <Select name="accountType" value={formData.accountType} onChange={handleChange}>
            <option value="">Select Account Type</option>
            <option value="ira">IRA</option>
            <option value="roth_ira">Roth IRA</option>
            <option value="401k">401k</option>
          </Select>
          {errors.accountType && <ErrorMessage>{errors.accountType}</ErrorMessage>}
        </label>
        <label>
          Contribution Amount
          <Input
            type="number"
            name="contribution"
            value={formData.contribution}
            onChange={handleChange}
            placeholder="Enter contribution amount"
          />
          {errors.contribution && <ErrorMessage>{errors.contribution}</ErrorMessage>}
        </label>
        <label>
          First Name
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </label>
        <label>
          Last Name
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </label>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </Container>
  );
};

export default Retirement;
