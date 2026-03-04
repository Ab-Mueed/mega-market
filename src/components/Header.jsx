import "./Header.css";
import userLogo from "../assets/icons/user.svg";
import ticketLogo from "../assets/icons/ticket.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-badge header-badge-left">
        <img src={userLogo} alt="" className="badge-icon" />
        <span className="badge-text">Limited to 1500 people</span>
      </div>
      <div className="header-badge header-badge-right">
        <img src={ticketLogo} alt="" className="badge-icon" />
        <span className="badge-text">2X entries for first 500 people</span>
      </div>
    </header>
  );
}

export default Header;
