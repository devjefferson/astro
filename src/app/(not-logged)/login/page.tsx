"use client";
import { SignInForm } from "@/features/login";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: "url(/background.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        objectFit: "contain",
      }}
      className="h-screen overflow-y-hidden "
    >
      {/* <Navbar /> */}
      <div className="flex flex-1 justify-center items-center container h-full ">
        <div className="w-full">
          <div className="flex flex-1 w-full ">
            <div className="flex flex-1 lg:w-full lg:bg-white lg:shadow-medium lg:justify-end justify-center items-end lg:rounded-ee-[80px] ">
              <div className="lg:px-[120px] bg-black/30 py-[150px] lg:rounded-ee-[80px] lg:rounded-ss-[80px] lg:shadow-none shadow-medium">
                <SignInForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
