import { Link } from "react-router-dom";

const UserList = ({ usersData, fullInfo }) => {
  return (
    <div className="user-list">
      {usersData.map((user) => (
        <div className="user-preview" key={user.id}>
          <h2>{user.name}</h2>
          <p>body temperature: {user.bodyTemperatureinc}</p>
          <p>room temperature : {user.roomTemperatureinc}</p>
          <p>heatindex: {user.heatindexInc}</p>
          <p>humidity : {user.humidity}</p>

          <a href={`/users/${user.id}`}>
            <button className="moreinfo">More</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default UserList;
