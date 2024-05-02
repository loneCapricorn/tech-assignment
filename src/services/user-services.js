import { get, set, ref, query, equalTo, orderByChild } from "firebase/database";
import { db } from "../config/firebase-config";

const getUserByHandle = (handle) => {
  return get(ref(db, `users/${handle}`));
};

const createUserHandle = (handle, uid, email) => {
  return set(ref(db, `users/${handle}`), {
    handle,
    uid,
    email,
    createdOn: Date.now(),
  });
};

const getUserData = (uid) => {
  return get(query(ref(db, "users"), orderByChild("uid"), equalTo(uid)));
};

export { getUserByHandle, createUserHandle, getUserData };
