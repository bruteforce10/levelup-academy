import React, { useEffect } from "react";
import { RxFileText } from "react-icons/rx";
import { SlWallet, SlBookOpen, SlSettings } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function SideBarCourse() {
  const [isScroll, setIsScroll] = React.useState("");
  const { pathname } = useRouter();
  const [isActive, setActive] = React.useState(pathname.slice(11));
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTimeout(() => {
          setIsScroll(true);
        }, 300);
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll, setIsScroll]);

  return (
    <>
      <motion.section
        layout
        transition={{ duration: 1, delay: 0.2 }}
        className={clsx(
          "max-w-[600px]  bg-[#fff] p-8 rounded-3xl max-lg:hidden  h-[550px]",
          isScroll && "sticky top-28"
        )}
      >
        <div className="flex flex-col gap-6  ">
          {!session?.user?.image ? (
            <Image
              src="/icon/profile.svg"
              alt="avatar"
              width={60}
              height={60}
            />
          ) : (
            <Image
              src={session?.user?.image}
              alt="avatar"
              width={60}
              className="rounded-full  object-cover"
              height={60}
            />
          )}
          <div className="flex flex-col space-y-2 ">
            <p className="text-xl font-extrabold">{session?.user?.name}</p>
            <span className="text-md text-light opacity-60">
              {session?.user?.goals || "Lifetime Learner"}
            </span>
          </div>
          <div className="space-y-10 mt-12">
            <Link
              href={"/dashboard/myclass"}
              className="flex items-center font-bold gap-3"
            >
              <RxFileText
                className={clsx(
                  "text-2xl text-prime",
                  isActive === "myclass"
                    ? "text-opacity-100"
                    : "text-opacity-60"
                )}
              />
              <p
                className={clsx(
                  " text-deep",
                  isActive === "myclass"
                    ? "text-opacity-100"
                    : "text-opacity-60"
                )}
              >
                My Courses
              </p>
            </Link>
            <Link
              href={"/dashboard/myebook"}
              className="flex items-center font-bold gap-3"
            >
              <SlBookOpen
                className={clsx(
                  "text-2xl text-prime",
                  isActive === "myebook"
                    ? "text-opacity-100"
                    : "text-opacity-60"
                )}
              />
              <p
                className={clsx(
                  " text-deep",
                  isActive === "myebook"
                    ? "text-opacity-100"
                    : "text-opacity-60"
                )}
              >
                My Ebook
              </p>
            </Link>
            <Link
              href={"/dashboard/transactions"}
              className="flex items-center font-bold gap-3"
            >
              <SlWallet
                className={clsx(
                  "text-2xl text-prime",
                  isActive === "transactions"
                    ? "text-opacity-100"
                    : "text-opacity-60"
                )}
              />
              <p
                className={clsx(
                  " text-deep",
                  isActive === "transactions"
                    ? "text-opacity-100"
                    : "text-opacity-60"
                )}
              >
                Transactions
              </p>
            </Link>
            <Link
              href={"/dashboard/settings"}
              className="flex items-center font-bold gap-3"
            >
              <SlSettings
                className={clsx(
                  "text-2xl text-prime",
                  isActive === "settings" ||
                    isActive === "settings/password" ||
                    isActive === "settings/profile"
                    ? "text-opacity-100"
                    : "text-opacity-60"
                )}
              />
              <p
                className={clsx(
                  " text-deep",
                  isActive === "settings" ||
                    isActive === "settings/password" ||
                    isActive === "settings/profile"
                    ? "text-opacity-100"
                    : "text-opacity-60"
                )}
              >
                Settings
              </p>
            </Link>
          </div>
        </div>
      </motion.section>
      <div className="fixed bottom-16 z-[99] lg:hidden inset-x-0 ">
        <div className="flex justify-around ">
          <Link
            href={"/dashboard/myclass"}
            className="p-4 bg-[#fff] rounded-xl shadow-sm "
          >
            <RxFileText
              className={clsx(
                "text-2xl text-prime",
                isActive === "myclass" ? "text-opacity-100" : "text-opacity-60"
              )}
            />
          </Link>
          <Link
            href={"/dashboard/myebook"}
            className="p-4 bg-[#fff] rounded-xl shadow-sm"
          >
            <SlBookOpen
              className={clsx(
                "text-2xl text-prime",
                isActive === "myebook" ? "text-opacity-100" : "text-opacity-60"
              )}
            />
          </Link>
          <Link
            href={"/dashboard/transactions"}
            className="p-4 bg-[#fff] rounded-xl shadow-sm"
          >
            <SlWallet
              className={clsx(
                "text-2xl text-prime",
                isActive === "transactions"
                  ? "text-opacity-100"
                  : "text-opacity-60"
              )}
            />
          </Link>
          <Link
            href={"/dashboard/settings"}
            className="p-4 bg-[#fff] rounded-xl shadow-sm"
          >
            <SlSettings
              className={clsx(
                "text-2xl text-prime",
                isActive === "settings" ? "text-opacity-100" : "text-opacity-60"
              )}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
