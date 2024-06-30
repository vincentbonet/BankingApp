fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('token', data.token);
  });
  
  fetch('http://localhost:5000/api/accounts', {
    headers: { 'x-auth-token': localStorage.getItem('token') },
  })
  .then(res => res.json())
  .then(accounts => {
  });