import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>Home</Link>
      <Link href={"/resume"}>Resume</Link>
      <Link href={"/about-me"}>About me</Link>
    </nav>
  );
}
