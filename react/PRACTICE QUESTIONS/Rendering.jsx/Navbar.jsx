function Navbar({ status }) {
  return (
    <nav>
      {status ? (
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      ) : (
        <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;