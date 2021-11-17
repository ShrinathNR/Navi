import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase-config";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
import useFetchFirebase from "./useFetchFirebase";

const MoreInfo = () => {
  const { id } = useParams();
  const { isPending, usersData } = useFetchFirebase(id);
  console.log(usersData);
  const [user] = usersData.filter((specificUser) => specificUser.id == id);
  console.log(user);

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {!isPending && usersData && (
        <article>
          <h1>{user.name}</h1>
          <p>Pulse Rate💓: {user.pulseRate}</p>
          <p>Contact No 📱: {user.contactNo}</p>
          <p>Location 🌎: {user.location}</p>
          <p>Emergency No 📱: {user.emergencyNo}</p>
          <p>
            Geo-Location : [ {user.geoLocation[0]} , {user.geoLocation[1]} ]
          </p>
        </article>
      )}
      {/* <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
};

export default MoreInfo;
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { db } from "./firebase-config";
// import { getFirestore, collection, getDocs } from "@firebase/firestore";
// const MoreInfo = () => {
//   const { id } = useParams();
//   const [usersData, setUsersData] = useState([]);
//   const userCollectionRef = collection(db, "user-info");
//   const updateUser = async () => {};

//   useEffect(() => {
//     //update user
//     const updateUser = async () => {};

//     //get user data
//     const getUser = async () => {
//       const querySnapshot = await getDocs(userCollectionRef);
//       setUsersData(
//         querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//       );
//     };
//     getUser();
//   }, [id]);
//   const [user] = usersData.filter((specificUser) => specificUser.id == id);
//   console.log(user);
//   return (
//     <div className="blog-details">
//       <article>
//         {/* <h1>{user.name}</h1>
//         <p>Pulse Rate💓: {user.pulseRate}</p>
//         <p>Contact No 📱: {user.contactNo}</p>
//         <p>Location 🌎: {user.location}</p>
//         <p>Emergency No 📱: {user.emergencyNo}</p> */}
//       </article>
//     </div>
//   );
// };

// export default MoreInfo;

// yesterday code
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { db } from "./firebase-config";
// import {
//   getFirestore,
//   collection,
//   query,
//   where,
//   getDoc,
//   doc,
// } from "firebase/firestore";
// const MoreInfo = () => {
//   const { id } = useParams();
//   const [usersData, setUsersData] = useState();
//   const userCollectionRef = doc(db, "user-info", id);

//   const updateUser = async () => {};

//   useEffect(() => {
//     //update user
//     const updateUser = async () => {};

//     //get user data

//     getUser();
//   }, []);
//   const getUser = async () => {
//     const docSnap = await getDoc(userCollectionRef).then((data) => {
//       const datum = data.data();
//       setUsersData(datum);
//       console.log(usersData);
//     });

//     //bbkf
//     // const querySnapshot = await getDoc(userCollectionRef);
//     // setUsersData(
//     //   querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//     // );
//     console.log(usersData);
//   };
//   return (
//     <div className="blog-details">
//       <article>
//         {/* <h1>{user.name}</h1>
//         <p>Pulse Rate💓: {user.pulseRate}</p>
//         <p>Contact No 📱: {user.contactNo}</p>
//         <p>Location 🌎: {user.location}</p>
//         <p>Emergency No 📱: {user.emergencyNo}</p> */}
//       </article>
//     </div>
//   );
// };

// export default MoreInfo;
