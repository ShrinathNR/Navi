import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase-config";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
const MoreInfo = () => {
  const { id } = useParams();
  const [usersData, setUsersData] = useState([]);
  const userCollectionRef = collection(db, "user-info");
  const updateUser = async () => {};

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
  const [user] = usersData.filter((specificUser) => specificUser.id == id);
  console.log(user);
  return (
    <div className="blog-details">
      <article>
        <h1>{user.name}</h1>
        <p>Pulse Rate💓: {user.pulseRate}</p>
        <p>Contact No 📱: {user.contactNo}</p>
        <p>Location 🌎: {user.location}</p>
        <p>Emergency No 📱: {user.emergencyNo}</p>
      </article>
    </div>
  );
};

export default MoreInfo;
