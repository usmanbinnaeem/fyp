import React, { useState, useEffect } from "react";
import AddSchool from "./add-school";
import SchoolsList from "./schools-list";
const BASE_URL = "http://192.168.137.224:5000";

const Schools = () => {
  const [schools, setSchools] = useState([]);
  const [schoolDetails, setSchoolDetails] = useState({
    id: null,
    profileImage: "",
    name: "",
    email: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    zip: "",
    drivers: []
})

  const fetchSchools = async () => {
    try {
      //   const token = await AsyncStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/schools`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //   Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      console.log({json})
      setSchools(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 text-black">
      <div className="bg-gray-50 rounded-lg">
        <h3 className="px-4 pt-4 pb-0 text-xl font-bold">Shools List</h3>
        <SchoolsList schools={schools} setSchoolDetails={setSchoolDetails} />
      </div>
      <div className="bg-gray-50 rounded-lg">
        <h3 className="px-4 pt-4 pb-0 text-xl font-bold">Add New School</h3>
        <AddSchool schoolDetails={schoolDetails} setSchoolDetails={setSchoolDetails} />
      </div>
    </div>
  );
};

export default Schools;
