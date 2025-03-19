import LeftPane from "@/components/global/LeftPane";
import Leads from "@/components/navbar/Leads";
import MenuBar from "@/components/navbar/MenuBar";
import Partners from "@/components/navbar/Partners";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LeftPane>
      <Leads/>
      <Partners/>
      </LeftPane>
      <main className="w-full md:w-[85%] px-4 fixed right-0 h-lvh overflow-y-auto">
        <MenuBar/>
        <section className="w-full ">
        {children}
        </section>
        </main>
    </>
  );
}

export default layout;
