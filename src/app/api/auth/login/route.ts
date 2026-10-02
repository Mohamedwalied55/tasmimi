import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { comparePassword } from "@/lib/auth";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { identifier, password } = body;

    if (!identifier || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "من فضلك أدخل رقم الهاتف أو البريد الإلكتروني وكلمة المرور.",
        },
        { status: 400 }
      );
    }

    const user = await db.user.findFirst({
      where: {
        OR: [
          { phone: identifier },
          { email: identifier },
        ],
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "بيانات الدخول غير صحيحة.",
        },
        { status: 401 }
      );
    }

    const validPassword = await comparePassword(
      password,
      user.passwordHash
    );

    if (!validPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "بيانات الدخول غير صحيحة.",
        },
        { status: 401 }
      );
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return NextResponse.json(
        {
          success: false,
          message: "إعدادات الخادم غير مكتملة.",
        },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role,
      },
      secret,
      {
        expiresIn: "7d",
      }
    );

    const response = NextResponse.json({
      success: true,
      message: "تم تسجيل الدخول بنجاح.",
      user: {
        id: user.id,
        firstName: user.firstName,
        familyName: user.familyName,
        phone: user.phone,
        email: user.email,
        role: user.role,
      },
    });

    response.cookies.set("tasmeemi_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("LOGIN_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء تسجيل الدخول.",
      },
      { status: 500 }
    );
  }
}
