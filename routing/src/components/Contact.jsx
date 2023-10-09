const Contact = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      <label htmlFor="msg">Message</label>
      <textarea name="msg" cols="30" rows="10"></textarea>
      <button>Send</button>
    </form>
  );
};
