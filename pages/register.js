import Image from "next/image";
import Link from "next/link";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import LoginImage from "../public/loginImage.png";

import styles from "../styles/Register.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.content}>
          <div className={styles.form}>
            <form>
              <h6>Register</h6>
              <div>
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="username" placeholder="Username" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={styles.passInput}
                />
                {/* <BsFillEyeFill /> */}
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
              </div>
              <input type="submit" name="confirm" value="Confirm" />
              <span className={styles.register}>
                Already have an account?{" "}
                <Link href="/login">
                  <a>log in here</a>
                </Link>
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
