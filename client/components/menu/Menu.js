import React, { useState, useEffect } from "react";

import { map } from "lodash";
import useAuth from "../../hooks/useAuth";
import { getPlatformsApi } from "../../api/Platform";
import Link from "next/link";
import { Buscador } from "../buscador/Buscador";
import { BasicModal } from "../Modal/BasicModal";

import { Auth } from "../Auth/Auth";
import { getMeApi } from "../../api/user";
import { MenuOption } from "./MenuOption";

const Menu = ({ bg }) => {
  const [showModal, setShowModal] = useState(false);
  const [platforms, setPlatforms] = useState([]);
  const [titleModal, setTitleModal] = useState("Login");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

  useEffect(() => {
    (async () => {
      const response = await getPlatformsApi();
      setPlatforms(response || []);
    })();
  }, []);

  return (
    <div className={`w-full flex flex-col py-5 bg-${bg}`}>
      <div className="flex flex-row justify-between px-2">
        <Buscador />
        {user !== undefined && (
          <MenuOption onShowModal={onShowModal} user={user} logout={logout} />
        )}
        {showModal ? (
          <BasicModal
            showModal={showModal}
            setShowModal={setShowModal}
            title={titleModal}
          >
            <Auth setTitleModal={setTitleModal} onCloseModal={onCloseModal} />
          </BasicModal>
        ) : null}
      </div>

      <div
        className={`flex flex-col justify-center w-full bg-opacity-90 rounded-lg
          ${open ? "h-full" : " "} `}
      >
        <div className="flex flex-row justify-around items-center px-3">
          <div className="w-1/3">
            <Link href="/">
              <a>
                <p className="text-black">La Magique Lumiere</p>
              </a>
            </Link>
          </div>
          <div className="w-1/3 flex flex-row justify-center">
            <h2 className="text-black text-5xl">LML</h2>
          </div>
          <div className="w-1/3 flex flex-row justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shirek-0 w-7 h-7 text-black bg-white hover:text-white hover:bg-black border-0 rounded-sm"
              onClick={() => setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        <div
          className={`rounded-md w-full py-3 fixed top-28 transition-all duration-150 ease-linear bg-black bg-opacity-50 z-50 ${
            open ? "opacity-100" : "invisible"
          }`}
        >
          <div className="">
            <div className="flex flex-col items-center px-3 space-y-6 text-white">
              {map(platforms, (platform) => (
                <Link
                  href={`/lavori/${platform.url}`}
                  key={platform._id}
                  onClick={() => setOpen(!open)}
                >
                  <a>{platform.title}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
