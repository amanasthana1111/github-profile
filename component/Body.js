import { useState } from "react";

export default function Body() {
  const [profilenum, setPro] = useState(0);
  const [profile, setProfile] = useState([]);
  const [username , setusername] = useState("");
  const [name , setnamearray] = useState([]);

  async function genprofile() {
    const response = await fetch(
      `https://api.github.com/users?per_page=${profilenum}`
    );
    const data = await response.json();
    console.log(data)

    if (!response) throw console.error("failed");

    setProfile(data);
  }

  async function genbyname() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if(!response) throw console.error("error")

        setnamearray([data]);
        console.log(data)
  }


  return (
    <>
        <div>
            <h2>Enter UserName of Github</h2>
            <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}></input>
            <button onClick={genbyname}>Submit</button>
        </div>
      <div>
         <h2>Enter No of Github Profile</h2>
        <input
          type="number"
          value={profilenum}
          onChange={(e) => setPro(e.target.value)}
        ></input>
        <button onClick={genprofile}>Submit</button>
      </div>
      <div className="aa">
        {profile.map((value) => (
          <div className="card" key={value.id}>
            <img src={value.avatar_url} alt="avatar" />
            <h2>{value.login}</h2>
            <a href={value.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
      <div className="aa">
        {name.map((value) => (
          <div className="card" key={value.id}>
            <img src={value.avatar_url} alt="avatar" />
            <h2>{value.name}</h2>
            <h2>Follower : {value.followers}</h2>
            <h2>Following :{value.following}</h2>
            <h2>Location :{value.location}</h2>
            <h2>{value.name}</h2>
            <a href={value.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
