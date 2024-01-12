import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserRenderPropsLoader = ({ endurl = "", render }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserDetails();
  }, [endurl]);
  const fetchUserDetails = async () => {
    const res = await axios.get(`http://localhost:4000${endurl}`);
    setUser(res.data);
  };
  return render(user);
};
