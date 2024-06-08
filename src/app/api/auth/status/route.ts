import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { isAuthenticated } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();
    return NextResponse.json({ isLoggedIn });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to check authentication status",
      },
      { status: 500 }
    );
  }
}
