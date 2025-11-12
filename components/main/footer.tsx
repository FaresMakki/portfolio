'use client';
import { useState } from "react";
import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleDiscordClick = (username: string) => {
    navigator.clipboard.writeText(username);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map((item) => {
                const { icon: Icon, name, link } = item;
                const username = 'username' in item ? item.username : undefined;

                if (name === "Discord" && username) {
                  return (
                    <button
                      key={`${column.title}-${name}`}
                      onClick={() => handleDiscordClick(username)}
                      className="flex flex-row items-center my-[15px] cursor-pointer relative group"
                    >
                      {Icon && <Icon />}
                      <span className="text-[15px] ml-[6px]">{name}</span>
                      {copiedDiscord && (
                        <span className="ml-2 text-green-400 text-lg">✓</span>
                      )}
                    </button>
                  );
                }

                return (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-row items-center my-[15px]"
                  >
                    {Icon && <Icon />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; FaresMakki {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
