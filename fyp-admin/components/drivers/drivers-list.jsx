import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const DriversList = ({ drivers, setDriverDetails }) => {
  return (
    <div className="space-y-12 sm:space-y-16 mx-4">
      <ul role="list" className="mt-10 divide-y divide-gray-100">
        {drivers.map((driver) => (
          <li
            onClick={() => {
              setDriverDetails({
                id: driver.id,
                name: driver.name,
                cnic: driver.cnic,
                address_line_1: driver.address_line_1,
                address_line_2: driver.address_line_2,
                city: driver.city,
                state: driver.state,
                zip: driver.zip,
                approved: driver.approved,
                licenseImageUrl: driver.licenseImageUrl,
                licenseNo: driver.licenseNo,
                profileImageUrl: driver.profileImageUrl,
                schools: driver.schools,
                vehicle: driver.vehicle,
              });
            }}
            key={driver.licenseNo}
            className="hover:cursor-pointer relative flex justify-between gap-x-6 py-5"
          >
            <div className="flex gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={
                  !!driver.profileImageUrl
                    ? driver.profileImageUrl
                    : "/assets/avatar.png"
                }
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {driver.name}
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  {driver.licenseNo}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                {driver.approved ? (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Approved</p>
                  </div>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-blue-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Pending</p>
                  </div>
                )}
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriversList;
