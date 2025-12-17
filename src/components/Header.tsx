// ---------- Class Component (for `this` keyword) ----------
import React, { } from "react";
interface HeaderProps {
  title: string;
}
class Header extends React.Component<HeaderProps> {
  render() {
    return <h1>{this.props.title}</h1>; // `this` keyword used
  }
}
export default Header;