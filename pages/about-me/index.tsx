import Image from "next/image";
import Link from "next/link";

import styles from "./about-me.module.css";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <section className={styles.contactSection}>
        <Image
          priority
          className={styles.emoji}
          src="/heeyoung-mation.webp"
          height={160}
          width={160}
          alt="Heeyoung"
        />
        <div className={styles.inner}>
          <Link href={"https://www.linkedin.com/in/heeyoungsohn/"}>
            <Image
              priority
              className={styles.icon}
              src="/linkedin-icon.svg"
              height={20}
              width={20}
              alt="LinkedIn"
            />
          </Link>

          <Link href="mailto:heeyoungsohn@gmail.com">
            <Image
              priority
              className={styles.mailIcon}
              src="/mail-icon.svg"
              height={20}
              width={20}
              alt="Email me"
            />
          </Link>
        </div>
      </section>

      <section className={styles.aboutMeSection}>
        <p>
          Hi! I'm Heeyoung and I've spent the last 10 years listening to people,
          learning how to amplify voices and figuring out how to tackle some of
          the world's toughest international development problems. Though I
          might be new at calling myself a "UX designer", design thinking has
          always been at the core of my work in international health and public
          policy where I helped to implement solutions with real world
          implications. I also believe in the power of story telling. In
          advocacy, it is such a powerful tool to help change minds, while in
          research (clinical), they have the ability to make or break an entire
          trial.
        </p>
        <p>
          That's why user experience excites me - the ability to bring to life
          the stories and challenges of users. I'm eager to bring the skills
          I've learned along the way to my research and design. My experiences
          have helped me become a visionary, an advocate, problem solver, and
          someone who knows how to work with multiple stakeholders and around
          various constraints. My path to a designer hasn't been linear but I've
          picked up useful skills through those experiences that make me be a
          better, more empathetic designer. I'm here and excited to create and
          design user-centered solutions.
        </p>
        <p>
          Aside from work, I enjoy traveling. I've walked around most of Kampala
          by foot, swam with sharks off the Durban coast, kissed and fed
          giraffes in Nairobi and explored ice caves in Iceland. When I'm not
          traveling, I like to take photos, love to cook and find the latest
          dessert spots in the city.
        </p>
      </section>
    </div>
  );
}
