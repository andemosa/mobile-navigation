"use client";

import { useState } from "react";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

import { navigation, NavigationType } from "@/lib/constants";

const MobileNav = () => {
  // `currList` holds the current list of navigation items, initially set to the main navigation.
  const [currList, setCurrList] = useState(navigation);

  // `navStack` holds the navigation history as an array, used for back navigation.
  const [navStack, setNavStack] = useState<NavigationType[]>([]);
  // `titleStack` holds the title history as an array, used for showing the title.
  const [titleStack, setTitleStack] = useState<string[]>([]);

  // Handle when an item in the navigation list is clicked.
  const handleItemClick = (item: NavigationType[0]) => {
    if (item.children) {
      setNavStack([...navStack, currList]);
      setTitleStack([...titleStack, item.title]);
      setCurrList(item.children);
    }
  };

  // Handle the "Back" button click to return to the previous navigation level.
  const handleBackClick = () => {
    if (navStack.length > 0) {
      const previousItems = navStack[navStack.length - 1];
      setCurrList(previousItems);
      setNavStack(navStack.slice(0, -1));
      setTitleStack(titleStack.slice(0, -1));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white overflow-hidden mt-2">
      {/* Show the back button if there is navigation history */}
      {navStack.length > 0 && (
        <div className="flex items-center p-4 bg-gray-100 border-b">
          <button onClick={handleBackClick} className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414z"
              />
            </svg>
          </button>
          {/* Show the current navigation title */}
          <span className="font-semibold">{titleStack.slice(-1)}</span>
        </div>
      )}

      {/* Display the list of current navigation items */}
      <ul className="divide-y divide-gray-200">
        {currList.map((item) => (
          <motion.li
            key={item.title}
            className="p-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            {item.url ? (
              <Link
                key={item.title}
                href={item.url}
                className="w-full text-left flex justify-between items-center hover:text-slate-500 text-slate-800 transition-colors"
                prefetch={false}
              >
                <span>{item.title}</span>
                <LinkIcon className="h-5 w-5" />
              </Link>
            ) : (
              <button
                onClick={() => handleItemClick(item)}
                className="w-full text-left flex justify-between items-center"
              >
                <span>{item.title}</span>
                {/* Show the right arrow icon if the item has children */}
                {item.children && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                )}
              </button>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
