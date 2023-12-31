import '../App.css';

function Sidebar() {
  return (
    <div id="mySidebar" className="sidebar"  onmouseout="toggleSidebar()">
      <a href="Home.html">
        <i class="material-icons">info</i>
        <span class="icon-text">About</span>
      </a><br />
      <a href="Search.html">
        <i className="material-icons">spa</i>
        <span class="icon-text">Plants</span>
      </a><br/>
      <a href="#">
        <i class="material-icons">monetization_on</i>
        <span class="icon-text">???</span>
      </a><br/>
      <a href="#">
        <i class="material-icons">email</i>
        <span class="icon-text">???</span>
      </a>
    </div>
  );
}
export default Sidebar;
