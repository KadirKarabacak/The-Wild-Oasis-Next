//! Just for referance, instead we use Auth.js
// import { NextResponse } from "next/server";

import { auth } from "./app/_lib/auth";

// export function middleware(request) {
//     console.log(request);

//     // This redirect makes a loop of requests
//     return NextResponse.redirect(new URL("/about", request.url));
// }

//! We exporting middleware as auth which comes from NextAuth
export const middleware = auth;

//! To spesify which routes must be protected
export const config = {
    matcher: ["/account"],
};
