import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ user }) {
  console.log(user);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Potfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div>
            <img src={user.avatar_url} alt={user.avatar_url} />
            
            <h5>{user.bio}</h5>

            <p>{user.Login}</p>
            <h5>{user.name}</h5>


            <p>{user.location}</p>
          </div>
          <div style={{ display: "flex",gap:"10px" }}>

            <button style={{color:"white",backgroundColor:"blue"}}>followers:-{user.followers}</button>

            <button style={{color:"white",backgroundColor:"blue"}}>following:-{user.following}</button>
          </div>
          <div>
            <h1>Tech Stack</h1>
            <div styles={{ display: "flex" }}>

              <p>Node Js</p>

              <p>Next Js</p>

              <p>RextJs</p>
              <p>Mango DB</p>
              
              <p>Java Script</p>
            </div>
          </div>
          <div>
            <button  style={{color:"white",backgroundColor:"blue"}}>RESUME</button>
          </div>
          <div>
            <h5>Eduction</h5>
            <div>
              <h5>Full Stack Development</h5>
              <p>Masai School</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let res = await fetch("https://api.github.com/users/Mdarifali912");
  let data = await res.json();

  return {
    props: {
      user: data,
    }, // will be passed to the page component as props
  };
}
