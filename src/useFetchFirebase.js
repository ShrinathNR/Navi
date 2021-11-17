import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { getFirestore, collection, getDocs } from "@firebase/firestore";

const useFetchFirebase = ({ id }) => {
  const [isPending, setIsPending] = useState(true);
  const [usersData, setUsersData] = useState([]);
  const userCollectionRef = collection(db, "user-info");
  useEffect(() => {
    //get user data
    const getUser = () => {
      getDocs(userCollectionRef).then((querySnapshot) => {
        setUsersData(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setIsPending(false);
      });
    };
    getUser();
  }, [id]);
  return { isPending, usersData };
};

export default useFetchFirebase;
