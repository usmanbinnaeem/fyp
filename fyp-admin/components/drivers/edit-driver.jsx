import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { TailSpin } from "react-loader-spinner";
const BASE_URL = "http://192.168.137.224:5000";

const EditDriver = ({ driverDetails, setDriverDetails }) => {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      console.log({ driverDetails });
      setLoading(true);
      const response = await fetch(`${BASE_URL}/drivers/${driverDetails.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(driverDetails),
      });
      const json = await response.json();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <form>
      <div className="space-y-12 sm:space-y-16 mx-4">
        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:pb-0">
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="driver-name"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Driver Name
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                value={driverDetails.name}
                onChange={(e) =>
                  setDriverDetails((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                name="driver-name"
                id="driver-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="cnic"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Cnic
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                value={driverDetails.cnic}
                onChange={(e) =>
                  setDriverDetails((prev) => ({
                    ...prev,
                    cnic: e.target.value,
                  }))
                }
                id="cnic"
                name="cnic"
                type="cnic"
                autoComplete="cnic"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="licenseNo"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              license No
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                value={driverDetails.licenseNo}
                onChange={(e) =>
                  setDriverDetails((prev) => ({
                    ...prev,
                    licenseNo: e.target.value,
                  }))
                }
                name="licenseNo"
                id="licenseNo"
                autoComplete="licenseNo"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="address_line_1"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Address Line 1
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                value={driverDetails.address_line_1}
                onChange={(e) =>
                  setDriverDetails((prev) => ({
                    ...prev,
                    address_line_1: e.target.value,
                  }))
                }
                name="address_line_1"
                id="address_line_1"
                autoComplete="address_line_1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="address_line_2"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Address Line 2
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                value={driverDetails.address_line_2}
                onChange={(e) =>
                  setDriverDetails((prev) => ({
                    ...prev,
                    address_line_2: e.target.value,
                  }))
                }
                name="address_line_2"
                id="address_line_2"
                autoComplete="address_line_2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              City
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                value={driverDetails.city}
                onChange={(e) =>
                  setDriverDetails((prev) => ({
                    ...prev,
                    city: e.target.value,
                  }))
                }
                name="city"
                id="city"
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              State / Province
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                value={driverDetails.state}
                onChange={(e) =>
                  setDriverDetails((prev) => ({
                    ...prev,
                    state: e.target.value,
                  }))
                }
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                value={driverDetails.zip}
                onChange={(e) =>
                  setDriverDetails((prev) => ({ ...prev, zip: e.target.value }))
                }
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Profile Image
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={driverDetails.licenseImage}
                alt=""
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Lisence Image
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={driverDetails.licenseImage}
                alt=""
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Approved
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <Switch
                checked={driverDetails.approved}
                onChange={() => {
                  setDriverDetails((prev) => ({
                    ...prev,
                    approved: !driverDetails.approved,
                  }));
                }}
                className={classNames(
                  driverDetails.approved ? "bg-indigo-600" : "bg-gray-200",
                  "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  className={classNames(
                    driverDetails.approved ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  )}
                >
                  <span
                    className={classNames(
                      driverDetails.approved
                        ? "opacity-0 duration-100 ease-out"
                        : "opacity-100 duration-200 ease-in",
                      "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                    )}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3 w-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className={classNames(
                      driverDetails.approved
                        ? "opacity-100 duration-200 ease-in"
                        : "opacity-0 duration-100 ease-out",
                      "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                    )}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3 w-3 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                    </svg>
                  </span>
                </span>
              </Switch>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 flex items-center justify-end gap-x-6">
        <button
          onClick={() => {
            setDriverDetails({
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
          }}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        {!!loading ? (
          <TailSpin
            height="20"
            width="20"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <button
            onClick={() => handleUpdate()}
            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        )}
      </div>
    </form>
  );
};

export default EditDriver;
