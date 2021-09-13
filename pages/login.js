import Image from "next/image";

import LoginImage from "../public/loginImage.png";

import styles from "../styles/Login.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.content}>
          <div className={styles.form}>
            <form>
              <h6>Login</h6>
              <div>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
              </div>
              <input type="submit" name="confirm" value="Confirm" />
              <span className={styles.register}>
                Don&#39;t have an account? <a href="/register">Register here</a>
              </span>
            </form>
          </div>
          <Image
            className={styles.loginImage}
            src={LoginImage}
            height={400}
            width={300}
            alt="login image"
          />
        </div>
      </div>
    </div>
  );
}
