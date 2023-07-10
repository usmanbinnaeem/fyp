import React, { useState } from "react";
import Image from "next/image";
import { TailSpin } from "react-loader-spinner";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const BASE_URL = "http://192.168.137.224:5000";

const AddSchool = ({ schoolDetails, setSchoolDetails }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const PLACEHOLDER = "/assets/avatar.png";

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/schools`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(schoolDetails),
      });
      const json = await response.json();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      console.log({ schoolDetails });
      setLoading(true);
      const response = await fetch(`${BASE_URL}/schools/${schoolDetails.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(schoolDetails),
      });
      const json = await response.json();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setIsLoading(true);
    const imageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(imageRef).then((url) => {
          setSchoolDetails((prev) => ({ ...prev, profileImage: url }));
          setIsLoading(false);
        });
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 sm:space-y-16 mx-4">
        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:pb-0">
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="school-name"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Profile Image
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="file"
                className="mb-2"
                onChange={handleImageChange}
              />
              {isLoading ? (
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
              ) : !!schoolDetails.profileImage ? (
                <Image
                  src={schoolDetails.profileImage}
                  alt="Uploaded"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              ) : (
                <Image
                  src={PLACEHOLDER}
                  alt="Placeholder"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              )}
              <button
                className="text-sm mt-2 px-6 py-2 rounded bg-[#1F2B37] text-white"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="school-name"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              School Name
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                value={schoolDetails.name}
                onChange={(e) =>
                  setSchoolDetails((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                name="school-name"
                id="school-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Email address
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                value={schoolDetails.email}
                onChange={(e) =>
                  setSchoolDetails((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                id="email"
                name="email"
                type="email"
                autoComplete="email"
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
                value={schoolDetails.address_line_1}
                onChange={(e) =>
                  setSchoolDetails((prev) => ({
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
                value={schoolDetails.address_line_2}
                onChange={(e) =>
                  setSchoolDetails((prev) => ({
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
                value={schoolDetails.city}
                onChange={(e) =>
                  setSchoolDetails((prev) => ({
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
                value={schoolDetails.state}
                onChange={(e) =>
                  setSchoolDetails((prev) => ({
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
                value={schoolDetails.zip}
                onChange={(e) =>
                  setSchoolDetails((prev) => ({ ...prev, zip: e.target.value }))
                }
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 flex items-center justify-end gap-x-6">
        {!!schoolDetails.id ? (
          <>
            <button
              onClick={() =>
                setSchoolDetails({
                  id: null,
                  profileImage: "",
                  name: "",
                  email: "",
                  address_line_1: "",
                  address_line_2: "",
                  city: "",
                  state: "",
                  zip: "",
                  drivers: [],
                })
              }
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            {!loading ? (
              <button
                onClick={() => handleUpdate()}
                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            ) : (
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
            )}
          </>
        ) : (
          <>
            {!loading ? (
              <button
                onClick={() => handleSubmit()}
                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            ) : (
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
            )}
          </>
        )}
      </div>
    </form>
  );
};

export default AddSchool;
