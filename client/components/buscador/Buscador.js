import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
export const Buscador = () => {
  const [searchStr, setSearchStr] = useState("");
  const [load, setLoad] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (load) {
      router.push(`/search?query=${searchStr}`);
    }
    setLoad(true);
  }, [searchStr]);
  return (
    <div className="flex flex-row items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-8 m-0"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <form>
        <div className="w-20 border border-t-0 border-l-0 border-r-0 border-b-2 border-black transition-all duration-500 ease-in-out hover:w-32">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            className="p-0 w-full border-0 text-black focus:ring-0"
            value={router.query.query}
            onChange={(e) => setSearchStr(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
