import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SchoolsList = ({ schools, setSchoolDetails }) => {
  return (
    <div className="space-y-12 sm:space-y-16 mx-4">
      <ul role="list" className="mt-10 divide-y divide-gray-100">
        {schools.map((school) => (
          <li
            onClick={() =>
              setSchoolDetails({
                id: school.id,
                profileImage: school.profileImage,
                name: school.name,
                email: school.email,
                address_line_1: school.address_line_1,
                address_line_2: school.address_line_2,
                city: school.city,
                state: school.state,
                zip: school.zip,
                drivers: school.drivers,
              })
            }
            key={school.email}
            className="hover:cursor-pointer relative flex justify-between gap-x-6 py-5"
          >
            <div className="flex gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={
                  school.profileImage
                    ? school.profileImage
                    : "/assets/schoollogo.png"
                }
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <a href={school.href}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {school.name}
                  </a>
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  <a
                    href={`mailto:${school.email}`}
                    className="relative truncate hover:underline"
                  >
                    {school.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{school.city}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Connected Drivers: {school.drivers.length}
                </p>
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

export default SchoolsList;
