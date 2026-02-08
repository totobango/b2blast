import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("📬 New contact form submission:", {
      name, email, company, message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Resend integration
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'B2BLAST <noreply@b2blast.com>',
    //   to: 'thomas@b2blast.com',
    //   subject: `New inquiry from ${name} (${company})`,
    //   html: `<h2>New Contact</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company}</p><p><strong>Message:</strong> ${message}</p>`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
