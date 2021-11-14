import { Link } from "react-router-dom";
import "./LeftSideBar.scss";

function LeftSideBar() {
  return (
    <div className="left-sidebar-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/feeds">Feeds</Link>
        </li>
        <li>
          <Link to="/podcasts">Sessions</Link>
        </li>
        <li>
          <Link to="/post_question">Post Question</Link>
        </li>
      </ul>
    </div>
  )
}

export default LeftSideBar
