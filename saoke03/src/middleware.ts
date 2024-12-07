import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
// import { authOptions } from "./app/api/auth/[...nextauth]/route";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    if (!req.nextUrl) {
        console.error("req.nextUrl is undefined");
        return NextResponse.error();
    }

    const pathname = req.nextUrl.pathname || "";
    console.log("Incoming request path:", pathname);

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // If no token, redirect to sign-in
    if (!token) {
        return NextResponse.redirect(new URL(`/auth/signin?callbackUrl=${req.nextUrl.pathname}`, req.url));
    }
    // Get the session
    // console.log("🚀 ~ middleware ~ authOptions:", authOptions)
    // const session = await getServerSession(authOptions);

    // // If no session, redirect to login
    // if (!session) {
    //     console.log("🚀 ~ middleware ~ req.nextUrl:", req.nextUrl)
    //     return NextResponse.redirect(
    //         new URL(`/auth/signin?callbackUrl=${req.nextUrl.pathname}`, req.url)
    //     );
    // }

    // Allow the request to proceed
    return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
    matcher: ["/api/thongke", "/thongke/:path*"], // Routes to protect
};
