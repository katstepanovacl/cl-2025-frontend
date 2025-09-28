import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const checkBasicAuth = (req: NextRequest): NextResponse | null => {
  const auth = req.headers.get("authorization");

  if (!auth) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  const [scheme, encoded] = auth.split(" ");
  const [user, pass] = atob(encoded).split(":");

  if (
    scheme === "Basic" &&
    user === process.env.BASIC_AUTH_USER &&
    pass === process.env.BASIC_AUTH_PASS
  ) {
    return null; // ✅ Auth success
  }

  return new NextResponse("Forbidden", { status: 403 });
};

export default function middleware(req: NextRequest) {
  // Skip auth for static files and API routes
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.startsWith("/images") ||
    req.nextUrl.pathname.startsWith("/api") ||
    req.nextUrl.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  return checkBasicAuth(req);
}
