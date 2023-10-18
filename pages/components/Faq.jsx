import React from "react";
import Heading from "./heading";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Faq() {
  const { data } = useSession();

  console.log(data);

  return (
    <section className="container px-8 mx-auto mt-20">
      <Heading
        tag={"Tanya Mimin Level-Up"}
        judul={
          <span>
            Frequently Asked <br /> Questions 😊
          </span>
        }
        align={"sm:text-center"}
      />
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
      <div className="grid grid-cols-2 gap-12">
        <div className="collapse  collapse-plus h-fit">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-bold">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p className="font-medium">hello</p>
          </div>
        </div>
        <div className="collapse  collapse-plus  h-fit">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-bold">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p className="font-medium">hello</p>
          </div>
        </div>
      </div>
    </section>
  );
}
