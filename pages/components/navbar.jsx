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
  const { pathname, query } = useRouter();

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
        " py-4 px-8 top-[-100px]  transition-all sticky z-10 ",
        isScrolled &&
          "sticky top-[-8px] delay-500 bg-white/90 backdrop-blur-sm  z-[99]  "
      )}
    >
      <nav
        className={
          "flex  items-center gap-7  container mx-auto justify-between max-lg:justify-between relative "
        }
      >
        <Link href={"/"} className="lg:w-1/12 max-sm:w-3/12 w-2/12 ">
          {isScrolled ||
          params == "/kelas" ||
          params == "/testimonials" ||
          params == "/kelas/fresh-sale" ||
          params == `/kelas/${query.slug}` ||
          params == `/dashboard/${pathname.slice(11)}` ||
          pathname === "/course" ||
          pathname !== "/" ||
          pathname === "/kelas/category" ? (
            <Image src={Logo} alt="logo" className="w-full" />
          ) : (
            <Image src={LogoWhite} alt="logo" className="w-full" />
          )}
        </Link>
        <ul
          className={clsx(
            `items-center lg:space-x-8  ${
              params !== `/dashboard/${pathname.slice(11)}` &&
              pathname !== "/course" &&
              `lg:w-8/12`
            }   max-lg:fixed lg:flex max-lg:top-[80px]  transition-all max-lg:left-0 max-lg:bg-tersier  w-[300px] lg:h-0 h-screen `,
            open && "max-lg:left-[-400px]  "
          )}
        >
          {session && (
            <li
              className={
                isScrolled ||
                params == "/kelas" ||
                params == "/kelas/fresh-sale" ||
                params == "/testimonials" ||
                pathname == "/course" ||
                pathname !== "/" ||
                params == `/kelas/${query.slug}` ||
                pathname === "/kelas/category" ||
                params == `/dashboard/${pathname.slice(11)}`
                  ? "py-8 px-12 lg:p-0 text-black whitespace-nowrap "
                  : "py-8 px-12 lg:p-0 lg:text-white whitespace-nowrap "
              }
            >
              <Link href="/dashboard/myclass">Dashboard</Link>
            </li>
          )}

          <li
            className={
              isScrolled ||
              params == "/kelas" ||
              params == "/kelas/fresh-sale" ||
              params == "/testimonials" ||
              pathname == "/course" ||
              pathname !== "/" ||
              params == `/kelas/${query.slug}` ||
              pathname === "/kelas/category" ||
              params == `/dashboard/${pathname.slice(11)}`
                ? "py-8 px-12 lg:p-0 text-black whitespace-nowrap"
                : "py-8 px-12 lg:p-0 lg:text-white whitespace-nowrap"
            }
          >
            <Link href="/kelas/fresh-sale">Fresh Sale</Link>
          </li>
          <li
            className={
              isScrolled ||
              params == "/kelas" ||
              params == "/testimonials" ||
              params == "/kelas/fresh-sale" ||
              pathname == "/course" ||
              pathname !== "/" ||
              pathname === "/kelas/category" ||
              params == `/kelas/${query.slug}` ||
              params == `/dashboard/${pathname.slice(11)}`
                ? "flex gap-2 items-center py-8 px-12 lg:p-0 text-black"
                : "flex gap-2 items-center py-8 px-12 lg:p-0 lg:text-white"
            }
          >
            <Link href="/kelas" className="whitespace-nowrap">
              Promo Bundle{" "}
              <span className="py-1 px-2 text-sm rounded-lg ml-1  bg-[#F4A42B] ">
                New
              </span>
            </Link>
          </li>
          <li
            className={
              isScrolled ||
              params == "/kelas" ||
              params == "/testimonials" ||
              params == "/kelas/fresh-sale" ||
              pathname == "/course" ||
              pathname !== "/" ||
              pathname === "/kelas/category" ||
              params == `/kelas/${query.slug}` ||
              params == `/dashboard/${pathname.slice(11)}`
                ? "py-8 px-12 lg:p-0 text-black"
                : "py-8 px-12 lg:p-0 lg:text-white"
            }
          >
            <Link href="/#benefit">Benefit</Link>
          </li>
          {session?.user?.role === "admin" && (
            <>
              <li
                className={
                  isScrolled ||
                  params == "/kelas" ||
                  params == "/testimonials" ||
                  params == "/kelas/fresh-sale" ||
                  pathname == "/course" ||
                  pathname !== "/" ||
                  pathname === "/kelas/category" ||
                  params == `/kelas/${query.slug}` ||
                  params == `/dashboard/${pathname.slice(11)}`
                    ? "py-8 px-12 lg:p-0 text-black"
                    : "py-8 px-12 lg:p-0 lg:text-white"
                }
              >
                <Link href="/admin">Admin</Link>
              </li>
              <li
                className={
                  isScrolled ||
                  params == "/kelas" ||
                  params == "/testimonials" ||
                  params == "/kelas/fresh-sale" ||
                  pathname == "/course" ||
                  pathname !== "/" ||
                  pathname === "/kelas/category" ||
                  params == `/kelas/${query.slug}` ||
                  params == `/dashboard/${pathname.slice(11)}`
                    ? "py-8 px-12 lg:p-0 text-black whitespace-nowrap"
                    : "py-8 px-12 lg:p-0 lg:text-white whitespace-nowrap"
                }
              >
                <Link href="/admin/follow-up">Follow Up</Link>
              </li>
            </>
          )}
          <li
            className={
              isScrolled ||
              params == "/kelas" ||
              pathname == "/course" ||
              params == "/kelas/fresh-sale" ||
              params == "/testimonials" ||
              pathname !== "/" ||
              pathname === "/kelas/category" ||
              params == `/kelas/${query.slug}` ||
              params == `/dashboard/${pathname.slice(11)}`
                ? "py-8 px-12 lg:p-0 text-black"
                : "py-8 px-12 lg:p-0 lg:text-white"
            }
          >
            <Link href="/#testimoni">Testimoni</Link>
          </li>
        </ul>
        <div
          className={
            !open
              ? "items-center  text-deep lg:space-x-4 max-lg:space-y-4 max-lg:fixed max-lg:top-[470px] max-lg:left-[30px] lg:flex max-lg:w-[200px]  w-3/12 transition-all "
              : "items-center justify-end text-deep lg:space-x-4 max-lg:space-y-4 max-lg:fixed max-lg:top-[470px] max-lg:left-[30px] lg:flex max-lg:w-[200px] w-3/12  transition-all max-lg:hidden"
          }
        >
          {/* nanti diaktifkan kalau searchnya sudah banyak */}
          {/* <div className="bg-tersier p-4  rounded-full cursor-pointer flex items-center gap-2">
            <BsSearch />
            <p className="lg:hidden">Search...</p>
          </div> */}
        </div>
        <div className="flex items-center md:flex-row-reverse">
          <div
            ref={toggleNavbar}
            className={
              isScrolled ||
              params == "/kelas" ||
              params == "/testimonials" ||
              params == "/kelas/fresh-sale" ||
              pathname === "/kelas/category" ||
              params == `/kelas/${query.slug}` ||
              params == `/dashboard/${pathname.slice(11)}`
                ? "p-2 rounded-xl   lg:hidden cursor-pointer"
                : "p-2 rounded-xl  lg:hidden cursor-pointer"
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
                pathname !== "/" ||
                params == "/kelas/fresh-sale" ||
                params == "/testimonials" ||
                pathname === "/kelas/category" ||
                params == `/kelas/${query.slug}` ||
                params == `/dashboard/${pathname.slice(11)}`
                  ? "text-deep"
                  : "text-white"
              }
            />
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
                    pathname == "/course" ||
                    params == "/kelas/fresh-sale" ||
                    params == "/testimonials" ||
                    pathname !== "/" ||
                    pathname === "/kelas/category" ||
                    params == `/kelas/${query.slug}` ||
                    params == `/dashboard/${pathname.slice(11)}`
                      ? `text-deep font-medium text-[18px] whitespace-nowrap max-md:hidden  ${
                          !open ? "hidden" : ""
                        } `
                      : `text-tersier font-medium text-[18px] whitespace-nowrap max-md:hidden ${
                          !open ? "hidden" : ""
                        } `
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
                className="dropdown-content z-[1] menu p-2  max-md:-ml-32 shadow bg-base-100 rounded-box w-52 text-[16px]"
              >
                <li>
                  <Link href={"/dashboard/myclass"}>My Courses</Link>
                </li>
                <li>
                  <Link href={"/dashboard/myebook"}>My Ebook</Link>
                </li>
                <li>
                  <Link href={"/dashboard/transactions"}>Transactions</Link>
                </li>
                <li>
                  <Link href={"/dashboard/settings"}>Settings</Link>
                </li>
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
      </nav>
    </header>
  );
}
