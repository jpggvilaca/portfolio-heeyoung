import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/portfolio"}>Portfolio</Link>
      <Link href={"/resume"}>Resume</Link>
      <Link href={"/about-me"}>About me</Link>
    </nav>
  );
}
