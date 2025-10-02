"use client";

import React from "react";

const NavBar = () => {
  return (
    <div className="relative flex bg-black justify-center items-center px-8 py-4 shadow">
      <h1 className="text-xs text-white">
        OUTLET- SHOP 30% OFF ALL MAXIS & GOWNS | IN STORE & ONLINE | LIMITED
        TIME ONLY | SHOP NOW
      </h1>
      {/* <Form
        action="/search"
        className="flex flex-grow mx-8 items-center border-2 border-gray-200 rounded-xl"
      >
        <input
          type="text"
          name="query"
          placeholder="Search for products"
          className=" flex-grow  px-4 py-2 rounded-lg focus:outline-none"
        />
        <button className="flex  bg-[#475569] text-white px-4 py-2 rounded-xl">
          Search
        </button>
      </Form> */}
      {/* <Link href="/cart" className=" flex align-center justify-center">
        <Button variant="link" className="text-black text-xs">
          My Cart
        </Button>
        <button className="">
          <ShoppingBag size={18} color="#475569" />
        </button>
      </Link> */}

      {/* <ClerkLoaded>
        {user ? (
          <div className="flex items-center">
            <Link
              href="/orders"
              className="mx-2 flex align-center justify-center"
            >
              <Button variant="link" className="text-black text-xs">
                Orders
              </Button>
              <button className="">
                <PackageCheck size={18} color="#475569" />
              </button>
            </Link>
            <span className="text-black text-xs font-semibold mx-4">
              {user.fullName?.toUpperCase()}
            </span>
            <UserButton />
          </div>
        ) : (
          <SignInButton mode="modal" />
        )}
      </ClerkLoaded> */}
    </div>
  );
};

export default NavBar;
