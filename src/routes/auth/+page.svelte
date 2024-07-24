<script>
  //   let username = '';
  //   let password = '';
  //   let message = '';

  //   const handleSubmit = async () => {
  //     message = '';
  //     const response = await fetch('/auth', {
  //       method: 'POST',

  //       body: JSON.stringify({ username, password })
  //     });
  //     const data = await response.json();
  //     message = data.message;
  //   };
  export let form;
</script>

<form method="post">
  <p>{form?.message || ''}</p>
  <input type="text" name="username" placeholder="Username" />
  <input type="password" name="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>
