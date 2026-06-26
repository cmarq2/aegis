import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, company, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Aegis Interlink <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL ?? "support@aegisinterlink.com"],
    replyTo: email,
    subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a;">
        <h2 style="margin-bottom:4px;">New Contact Form Submission</h2>
        <p style="color:#666;font-size:14px;margin-top:0;">Submitted via aegisinterlink.com</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
        <table style="width:100%;font-size:15px;border-collapse:collapse;">
          <tr><td style="padding:6px 0;color:#555;width:120px;">Name</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:6px 0;color:#555;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#16a34a;">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:6px 0;color:#555;">Company</td><td style="padding:6px 0;">${company}</td></tr>` : ""}
          ${service ? `<tr><td style="padding:6px 0;color:#555;">Service</td><td style="padding:6px 0;">${service}</td></tr>` : ""}
        </table>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
        <p style="color:#555;font-size:14px;margin-bottom:6px;">Message</p>
        <p style="font-size:15px;line-height:1.6;background:#f9f9f9;padding:16px;border-radius:8px;margin:0;">${message.replace(/\n/g, "<br/>")}</p>
        <p style="font-size:12px;color:#aaa;margin-top:24px;">Reply directly to this email to respond to ${name}.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
