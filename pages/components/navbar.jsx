import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/img/logo.png";
import LogoWhite from "@/public/img/logo-white.png";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function NavbarPage({ params }) {
  const [open, setOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleNavbar = useRef();
  const { data: session } = useSession();
  const { pathname } = useRouter();

  function handleOpen(e) {
    if (!toggleNavbar?.current?.contains(e.target)) {
      setOpen(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOpen);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header
      className={clsx(
        " py-4 px-8 top-[-100px] transition-all sticky z-10 ",
        isScrolled &&
          "sticky top-[-12px] delay-500 bg-white/90 backdrop-blur-sm  z-[99]  "
      )}
    >
      <nav
        className={
          "flex items-center gap-4 justify-center container mx-auto  max-lg:justify-between relative "
        }
      >
        <Link href={"/"} className="lg:w-1/12 max-sm:w-3/12 w-2/12 ">
          {isScrolled ||
          params == "/kelas" ||
          params == "/testimonials" ||
          params ||
          `/kelas/${pathname.slice(7, 50)}` ? (
            <Image src={Logo} alt="logo" className="w-full" />
          ) : (
            <Image src={LogoWhite} alt="logo" className="w-full" />
          )}
        </Link>
        <ul
          className={clsx(
            "items-center lg:space-x-8 lg:w-8/12 max-lg:fixed lg:flex max-lg:top-[80px]  transition-all max-lg:left-0 max-lg:bg-tersier w-[300px] lg:h-0 h-screen ",
            open && "max-lg:left-[-400px]  "
          )}
        >
          <li
            className={
              isScrolled ||
              params == "/kelas" ||
              params == "/testimonials" ||
              `/kelas/${pathname.slice(7, 50)}`
                ? "py-8 px-12 lg:p-0 text-black"
                : "py-8 px-12 lg:p-0 lg:text-white"
            }
          >
            <Link href="#sale">Fresh Sale</Link>
          </li>
          <li
            className={
              isScrolled ||
              params == "/kelas" ||
              params == "/testimonials" ||
              `/kelas/${pathname.slice(7, 50)}`
                ? "flex gap-2 items-center py-8 px-12 lg:p-0 text-black"
                : "flex gap-2 items-center py-8 px-12 lg:p-0 lg:text-white"
            }
          >
            <Link href="#kelas">Kelas</Link> <AiFillCaretDown size={12} />{" "}
          </li>
          <li
            className={
              isScrolled ||
              params == "/kelas" ||
              params == "/testimonials" ||
              `/kelas/${pathname.slice(7, 50)}`
                ? "py-8 px-12 lg:p-0 text-black"
                : "py-8 px-12 lg:p-0 lg:text-white"
            }
          >
            <Link href="#benefit">Benefit</Link>
          </li>
          <li
            className={
              isScrolled ||
              params == "/kelas" ||
              params == "/testimonials" ||
              `/kelas/${pathname.slice(7, 50)}`
                ? "py-8 px-12 lg:p-0 text-black"
                : "py-8 px-12 lg:p-0 lg:text-white"
            }
          >
            <Link href="#testimoni">Testimoni</Link>
          </li>
        </ul>
        <div
          className={
            !open
              ? "items-center   text-deep lg:space-x-4 max-lg:space-y-4 max-lg:fixed max-lg:top-[470px] max-lg:left-[30px] lg:flex max-lg:w-[200px] w-3/12 transition-all "
              : "items-center justify-end text-deep lg:space-x-4 max-lg:space-y-4 max-lg:fixed max-lg:top-[470px] max-lg:left-[30px] lg:flex max-lg:w-[200px] w-3/12 transition-all max-lg:hidden"
          }
        >
          <div className="bg-tersier p-4  rounded-full cursor-pointer flex items-center gap-2">
            <BsSearch />
            <p className="lg:hidden">Search...</p>
          </div>

          {session ? (
            <div className="dropdown">
              <div
                tabIndex={0}
                className="flex cursor-pointer  items-center gap-4 justify-end px-2 py-4"
              >
                <p
                  className={
                    isScrolled ||
                    params == "/kelas" ||
                    params == "/testimonials" ||
                    `/kelas/${pathname.slice(7, 50)}`
                      ? `text-deep font-medium text-[18px]  ${
                          !open ? "hidden" : ""
                        } `
                      : `text-tersier font-medium text-[18px] ${
                          !open ? "hidden" : ""
                        } `
                  }
                >
                  Halo, {session?.user?.name}
                </p>
                <p
                  className={
                    open ? "hidden" : "text-black font-medium text-[18px] "
                  }
                >
                  Halo, {session?.user?.name}
                </p>
                {session?.user?.image ? (
                  <Image
                    src={session?.user?.image}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full "
                  />
                ) : (
                  <Image
                    src={"/icon/profile.svg"}
                    alt="avatar"
                    width={49}
                    height={49}
                    className="rounded-full "
                  />
                )}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[16px]"
              >
                <li>
                  <a onClick={() => signOut()}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button
              className="font-bold lg:bg-tersier px-6 py-3 bg-primebase max-lg:text-white rounded-full max-lg:w-full"
              onClick={() => {
                document.getElementById("my_modal_1").showModal();
              }}
            >
              Masuk/Daftar
            </button>
          )}
        </div>
        <div
          ref={toggleNavbar}
          className={
            isScrolled ||
            params == "/kelas" ||
            params == "/testimonials" ||
            `/kelas/${pathname.slice(7, 50)}`
              ? "p-2 rounded-xl border-2 border-deep/20  lg:hidden cursor-pointer"
              : "p-2 rounded-xl border-2 border-tersier  lg:hidden cursor-pointer"
          }
          onClick={(event) => {
            event.stopPropagation();
            setOpen(!open);
          }}
        >
          <BiMenu
            size={32}
            className={
              isScrolled ||
              params == "/kelas" ||
              params == "/testimonials" ||
              `/kelas/${pathname.slice(7, 50)}`
                ? "text-deep"
                : "text-white"
            }
          />
        </div>
      </nav>
    </header>
  );
}
