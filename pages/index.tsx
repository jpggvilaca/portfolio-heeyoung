import Project from "../components/project.index";

import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <section>
        <h1>
          Amsterdam based UX designer... but also an advocate and aspiring
          photographer.
        </h1>
        <p className={styles.generalDescription}>
          Currently delivering e-commerce products from research to design. Over
          ten years of translating user research into products and public health
          policies.{" "}
        </p>
        <p className={styles.portfolioDescription}>
          Below are past projects, along with personal case studies and examples
          of prototypes and designs I've been working on. I've also included
          social impact projects because the core of these projects entail
          getting to know people, understanding issues, figuring out solutions,
          and implementing design thinking. Over the last 10 years, I've spent
          time listening to people, conducting site visits to establish context,
          analyzing data, and drafting or implementing potential recommendations
          based on research. These steps and processes aren't so different from
          what a designer might do to create a better user experience. In fact,
          both stress the importance of putting the user's needs first.
        </p>
      </section>

      <section className={styles.porfolioContainer}>
        <h2>Portfolio</h2>
        <div className={styles.projectGrid}>
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </>
  );
}
