import Image from "next/image";
import Link from "next/link";

import styles from "./project.module.css";

export default function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.projectImage}>
        <Link href={"/project/{project1}"}>
          <Image
            priority
            src="/eriks.webp"
            height={120}
            width={120}
            alt="Eriks Digital"
          />
        </Link>
      </div>
      <div className={styles.projectDescription}>
        <div className={styles.summary}>Summary</div>
        <div className={styles.detailedDescription}>
          ERIKS ERIKS is a multi-specialist industry provider. As a UX designer,
          I am responsible for end-to-end product design. Read at glance what I
          do! Product Type: Responsive designs for mobile and desktop Role: Ux
          Designer Skills: Interviews, usability tests, prototypes, Sketch,
          Invision, Figma, userflow
        </div>
      </div>
    </div>
  );
}
