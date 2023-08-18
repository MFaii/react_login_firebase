const Home = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h1>You are logged in 🚀 </h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
