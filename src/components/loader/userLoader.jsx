import axios from "axios";
import React, { useEffect, useState } from "react";

export const UserLoader = ({ endurl = "", children, sourceName = "" }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserDetails();
  }, [endurl]);
  const fetchUserDetails = async () => {
    const res = await axios.get(`http://localhost:4000${endurl}`);
    setUser(res.data);
  };
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...{ [sourceName]: user },
          });
        }
        return child;
      })}
    </>
  );
};
