import Link from "next/link";
import Image from "next/image";
import moonImage from "@/assets/img/moon.svg";

const Header = () => {
  return (
    <header id="myHeader">
      <div id="logo">
        <Link href="/">
          <Image src={moonImage} alt="moon" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#about">about</Link>
          </li>
          <li>
            <Link href="#port">port</Link>
          </li>
          <li>
            <Link href="#log">log</Link>
          </li>
          <li>
            <Link href="#info">info</Link>
          </li>
          <li>
            <Link href="#talk">Talk</Link>
          </li>
          <li>
            <Link href="#contact">contact</Link>
          </li>
        </ul>
      </nav>
      <div className="nav_btn">
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <span></span>
          <span></span>
          <span></span>
          <div className="m_nav">
            <ul>
              <li>
                <Link href="#about">about</Link>
              </li>
              <li>
                <Link href="#port">port</Link>
              </li>
              <li>
                <Link href="#log">log</Link>
              </li>
              <li>
                <Link href="#info">info</Link>
              </li>
              <li>
                <Link href="#talk">Talk</Link>
              </li>
              <li>
                <Link href="#contact">contact</Link>
              </li>
            </ul>
          </div>
        </label>
      </div>
    </header>
  );
};

export default Header;
