import React, { useState } from 'react';
import { Modal, TextInput, PasswordInput, Button, Box } from '@mantine/core';

const LoginModal = ({ opened, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Login"
      overlayOpacity={0.55}
      overlayBlur={3}
      overlayColor="rgba(0, 0, 0, 0.6)"
      withCloseButton={true}
      closeOnClickOutside={true}
      closeOnEscape={true}
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
          mt="md"
        />
        <Box mt="md" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit">Login</Button>
        </Box>
      </form>
    </Modal>
  );
};

export default LoginModal;
