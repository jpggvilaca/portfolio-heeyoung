import Image from "next/image";

import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resume}>
      <a href="/Sohn_resume.pdf" download>
        <Image
          priority
          className={styles.resumeImage}
          src="/resume_hs.png"
          height={640}
          width={480}
          alt="Heeyoung"
        />
      </a>
    </div>
  );
}
