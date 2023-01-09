import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{backgroundColor:"pink"}}>
      <nav style={{ display: "flex" }}>
        <div styles={{ display: "flex" }}>
          <Link  href={"/"}>
            <h1>Home</h1>
          </Link>
          <Link href={"/project"}>
            <h1>Project</h1>
          </Link>
          <Link href={"/experience"}>
            <h1>Experience</h1>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
