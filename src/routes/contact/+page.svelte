<script>
  let name = '';
  let email = '';
  let message = '';

  export const snapshot = {
    capture: () => {
      return {
        name,
        email,
        message
      };
    },
    restore: (data) => {
      name = data.name;
      email = data.email;
      message = data.message;
    }
  };
</script>

<h1>contact form</h1>

<form method="post">
  <div>
    <input type="text" name="name" placeholder="Name" bind:value={name} />
  </div>
  <div>
    <input type="text" name="email" placeholder="Email" bind:value={email} />
  </div>
  <div>
    <textarea name="message" placeholder="Message" bind:value={message} />
  </div>
  <button type="submit">Submit</button>
  <a href="/">cancel</a>
</form>
