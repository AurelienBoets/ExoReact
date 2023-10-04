const Table = (props) => {
  const users = props.users;
  if (users.length !== 0) {
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>FirstName</td>
              <td>LastName</td>
              <td>BirthDate</td>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.birthDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  return <div className="alert alert-info">Aucun utilisateur</div>;
};
export default Table;
