import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h1>
          Amsterdam based UX designer... but also an advocate and aspiring
          photographer.
        </h1>
        <p>
          Currently delivering e-commerce products from research to design. Over
          ten years of translating user research into products and public health
          policies.{" "}
        </p>
        <button>
          <Link href={"/about-me"}>Learn about me</Link>
        </button>
      </section>

      <section>
        <h3>Portfolio</h3>
      </section>
    </>
  );
}
