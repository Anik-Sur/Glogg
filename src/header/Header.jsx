import "./header.css";
import main from "./assets/main.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to</span>
        <span className="headerTitleLg">Glogg!</span>
      </div>
      <img src={main} alt="" className="headerImg" />
    </div>
  );
}
