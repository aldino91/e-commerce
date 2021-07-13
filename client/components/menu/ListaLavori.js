import React from "react";
import { map } from "lodash";
import Link from "next/link";

export const ListaLavori = ({ lavori }) => {
  console.log(lavori);
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {map(lavori, (lav) => (
        <Lavoro lav={lav} key={lav.id} />
      ))}
    </div>
  );
};

function Lavoro({ lav }) {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="transition-all duration-150 ease-linear border-white rounded-md hover:shadow-lg">
        <Link href={`/${lav.url}`}>
          <a>
            <img
              src={lav.poster.url}
              alt={lav.title}
              width={250}
              height={250}
              className="transition-all duration-150 ease-linear rounded-md shadow-none hover:shadow-xl hover:opacity-60"
            />
          </a>
        </Link>

        <div className="flex flex-row justify-between text-red-700 rounded-md">
          <h3>{lav.price}€</h3>
        </div>
      </div>
    </div>
  );
}
