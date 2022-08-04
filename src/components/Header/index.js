import "./header.css";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={Logo} className="logo"></img>
        <h1 className="title">tasks</h1>
      </div>
    </header>
  );
};
