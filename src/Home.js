import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase-config";
import UserList from "./UserList";
const Home = () => {
  //geoLocation
  // const [geoLocation, setGeoLocation] = useState([]);
  // if (navigator.geolocation)
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       const { latitude } = position.coords;
  //       const { longitude } = position.coords;
  //       const coords = [latitude, longitude];
  //       setGeoLocation(coords);
  //     },
  //     function () {
  //       alert("Could not get your position");
  //     }
  //   );
  const [usersData, setUsersData] = useState([]);
  const userCollectionRef = collection(db, "user-info");
  useEffect(() => {
    //update user
    const updateUser = async () => {};

    //get user data
    const getUser = async () => {
      const querySnapshot = await getDocs(userCollectionRef);
      setUsersData(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUser();
  }, []);
  return (
    <div className="home">
      <h2>Homepage</h2>
      <UserList usersData={usersData} />
    </div>
  );
};

export default Home;
