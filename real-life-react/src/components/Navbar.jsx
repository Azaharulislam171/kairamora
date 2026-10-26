function Navbar({ user, notifications = 0 }) {
  return (
    <nav className="navbar">
      <span className="logo">MyApp</span>
      {/* your conditional parts go here */}
    {user?<p> Hi, {user.name}</p>:<p> Login</p>}
    {user && user.role==='admin'?<a> Admin Dashboard</a>:<p> </p>}
    {notifications>0?<p>🔔</p>:<p> </p> }
    {notifications>9?<p>9+</p>:<p> </p> }
    </nav>
  )
}
 
export default Navbar
