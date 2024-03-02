import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoEnter } from "react-icons/io5";
import { LuLink2 } from "react-icons/lu";
import BasicTable from "./components/table";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState(""); // State to hold the username input
  const [userdata, setUserData] = useState(null); // State to hold the user data
  const [reposData , setReposData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle the error or provide feedback to the user
    }
    

    
  };
  const getUserRepos = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setReposData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle the error or provide feedback to the user
    }
  };
  useEffect(() => {
    getUserData();
    getUserRepos();
  }, []);


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getUserData();
      getUserRepos();
    }
  };


  return (
    <>
      <div className="weather-card">
        <div className="card-header">
          <div className="search-container">
            <input
              className="input"
              type="text"
              placeholder="Enter user name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-button" onClick={getUserData}>
              <IoEnter size={20} />
            </button>
          </div>
        </div>
        {userdata && ( // Render user data only if it exists
          <div className="card-content">
            <div className="text-center">
              <div className="main-temp">
                <img src={userdata.avatar_url} alt="" />
              </div>
              <a href={userdata.html_url} target="blank"><h1 className="text-xl font-semibol">{userdata.name} </h1></a>
              <p className="weather-info-c1">
                {userdata.login}
              </p>
              <p className="text-sm text-gray-500">
                {userdata.bio}
              </p>
            </div>
            <div className="followers">
              <span>
              <h1 className="text-lg font-semibold">{userdata.followers}</h1>
              <p className="text-sm text-gray-500">Followers</p>
              </span>
              <span>
              <h1 className="text-lg font-semibold">{userdata.following}</h1>
              <p className="text-sm text-gray-500">Following</p>
              </span>
              <span>
              <h1 className="text-lg font-semibold">{userdata.public_repos}</h1>
              <p className="text-sm text-gray-500">Public Repos</p>
              </span>
            </div>
            <div className="forecast-list">
              {/* <BasicTable/> */}
          </div>
          </div>
        )}
      </div>
    </>
  );
}
