import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  FolderIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

import Drivers from "../../components/drivers/index";
import Schools from "../../components/schools";

const navigation = [
  { name: "Schools", href: "#", icon: UsersIcon, current: true },
  { name: "Drivers", href: "#", icon: FolderIcon, current: false },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarnavigation, setSidebarNavigation] = useState(navigation);

  const currentSelected = sidebarnavigation.filter(
    (nav) => nav.current === true
  )[0];
  const handleClick = (name) => {
    const newNav = sidebarnavigation.map((nav) =>
      nav.name === name ? { ...nav, current: true } : { ...nav, current: false }
    );

    setSidebarNavigation(newNav);
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow text-white flex-col gap-y-5 overflow-y-auto bg-[#1F2B37] px-6 pb-4">
                    <div className="flex h-16 shrink-0 font-semibold text-lg items-center">
                    School Transport Service
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {sidebarnavigation.map((item) => (
                              <li key={item.name}>
                                <p
                                  onClick={() => handleClick(item.name)}
                                  // href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-white text-black"
                                      : "text-white hover:text-black hover:bg-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-black"
                                        : "text-white group-hover:text-black",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col text-white first-letter:text-white gap-y-5 overflow-y-auto bg-[#1F2B37] px-6 pb-4">
            <div className="flex h-16 shrink-0 font-semibold text-lg items-center">
            School Transport Service
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {sidebarnavigation.map((item) => (
                      <li key={item.name}>
                        <p
                          onClick={() => handleClick(item.name)}
                          // href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-white text-black"
                              : "text-white hover:text-black hover:bg-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-black"
                                : "text-white group-hover:text-black",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex items-center gap-x-4 self-stretch lg:gap-x-6">
              <h4 className="text-xl font-semibold">
                School Transport Service
              </h4>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8 text-black">
              {currentSelected.name === "Schools" ? <Schools /> : <Drivers />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
