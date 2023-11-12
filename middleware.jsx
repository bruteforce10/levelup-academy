import { NextResponse } from "next/server";
import withAuth from "./middleware/withAuth";

// This function can be marked `async` if using `await` inside
export function mainMiddleware(req) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/course",
  "/dashboard/myclass",
  "/dashboard/transactions",
  "/dashboard/myebook",
  "/dashboard/settings",
  "/dashboard/settings/profile",
  "/dashboard/settings/update",
  "/dashboard/settings/password",
]);
