import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const Project = ({ project }) => {
  const [data, setData] = useState(project);
  //   console.log(data);
  let fetch = data.items;
  return (
    <div style={{display:"flex" 
    }}>
      {console.log(fetch)}
      {fetch.map((el) => (
        <div  key={el.id}>
          <p>Language:-{el.language}</p>
          <p>Fork Count:-{el.forks_count}</p>
          <p>Fork Count:-{el.forks_count}</p>
          
          <Link href={el.clone_url}>
            <h5>LINK DEPLOY:_{el.full_name}</h5>{" "}
          </Link>
          <Link href={el.deployments_url}>
            <h5>HomePage Url</h5>{" "}
          </Link>
          <button>Live Link:-{el.homepage}</button>
        </div>
      ))}
    </div>
  );
};

export default Project;

export async function getStaticProps() {

    //fetch
  let res = await fetch(
    "https://api.github.com/search/repositories?q=user:Mdarifali912+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data = await res.json();

  return {
    props: {
      project: data,


      //
    }, 
  };
}


