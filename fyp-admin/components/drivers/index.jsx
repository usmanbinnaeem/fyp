import React, { useState, useEffect } from "react";
import EditDriver from "./edit-driver";
import DriversList from "./drivers-list";
const BASE_URL = "http://192.168.137.224:5000";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [driverDetails, setDriverDetails] = useState({
    id: null,
    name: "",
    cnic: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    zip: "",
    approved: false,
    licenseImageUrl: "",
    licenseNo: "",
    profileImageUrl: "",
    schools: [],
    vehicle: null,
  });

  const fetchDrivers = async () => {
    try {
      //   const token = await AsyncStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/drivers`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //   Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      console.log({ json });
      setDrivers(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 text-black">
      <div className="bg-gray-50 rounded-lg">
        <h3 className="px-4 pt-4 pb-0 text-xl font-bold">Drivers List</h3>
        <DriversList drivers={drivers} setDriverDetails={setDriverDetails} />
      </div>
      <div className="bg-gray-50 rounded-lg">
        <h3 className="px-4 pt-4 pb-0 text-xl font-bold">Edit Driver</h3>
        <EditDriver driverDetails={driverDetails} setDriverDetails={setDriverDetails} />
      </div>
    </div>
  );
};

export default Drivers;
