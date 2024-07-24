// export const load = () => {};

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');
    if (!username || !password) {
      return {
        message: 'Missing username or password'
      };
    }
    cookies.set('username', username, { path: '/' });
    return { message: 'login successful' };
  },
  register: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');
    if (!username || !password) {
      return {
        message: 'Missing username or password'
      };
    }
    cookies.set('username', username, { path: '/' });
    return { message: 'register successful' };
  }
};
