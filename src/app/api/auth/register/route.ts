import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      familyName,
      phone,
      alternatePhone,
      governorate,
      address,
      email,
      password,
    } = body;

    if (!firstName || !familyName || !phone || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "من فضلك أكمل البيانات المطلوبة.",
        },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل.",
        },
        { status: 400 }
      );
    }

    const existingPhone = await db.user.findUnique({
      where: { phone },
    });

    if (existingPhone) {
      return NextResponse.json(
        {
          success: false,
          message: "رقم الهاتف مستخدم بالفعل.",
        },
        { status: 409 }
      );
    }

    if (email) {
      const existingEmail = await db.user.findUnique({
        where: { email },
      });

      if (existingEmail) {
        return NextResponse.json(
          {
            success: false,
            message: "البريد الإلكتروني مستخدم بالفعل.",
          },
          { status: 409 }
        );
      }
    }

    const passwordHash = await hashPassword(password);

    const user = await db.user.create({
      data: {
        firstName,
        familyName,
        phone,
        alternatePhone: alternatePhone || null,
        governorate: governorate || null,
        address: address || null,
        email: email || null,
        passwordHash,
        role: "CUSTOMER",
      },
      select: {
        id: true,
        firstName: true,
        familyName: true,
        phone: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم إنشاء الحساب بنجاح.",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إنشاء الحساب.",
      },
      { status: 500 }
    );
  }
}
