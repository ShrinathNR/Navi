import { Link } from "react-router-dom";

const UserList = ({ usersData, fullInfo }) => {
  return (
    <div className="user-list">
      {usersData.map((user) => (
        <div className="user-preview" key={user.id}>
          <h2>{user.name}</h2>
          <p>Pulse Rate💓: {user.pulseRate}</p>
          <p>Location 🌎: {user.location}</p>
          <a href={`/users/${user.id}`}>
            <button className="moreinfo">More</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default UserList;