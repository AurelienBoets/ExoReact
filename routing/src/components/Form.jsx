const Form = () => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" />
      <label htmlFor="mdp">Password</label>
      <input type="password" name="mdp" />
      <button>Login</button>
    </form>
  );
};

export default Form;
