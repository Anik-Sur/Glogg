import "./header.css";
import bane from "./assets/bane.webm";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to</span>
        <span className="headerTitleLg">Glogg!</span>
      </div>
      <video src={bane} alt="" className="headerImg" autoPlay muted loop />
    </div>
  );
}
