import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const linkedin = (formData.get("linkedin") as string)?.trim();
  const coverLetter = (formData.get("coverLetter") as string)?.trim();
  const roleTitle = (formData.get("roleTitle") as string)?.trim();
  const roleDepartment = (formData.get("roleDepartment") as string)?.trim();
  const resumeFile = formData.get("resume") as File | null;
  const gender = (formData.get("gender") as string)?.trim();
  const hispanic = (formData.get("hispanic") as string)?.trim();
  const veteran = (formData.get("veteran") as string)?.trim();
  const disability = (formData.get("disability") as string)?.trim();

  if (!name || !email || !roleTitle) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (resumeFile && resumeFile.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Resume file must be under 5 MB." }, { status: 400 });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
      <h2 style="margin-bottom:4px;">New Job Application</h2>
      <p style="color:#666;font-size:14px;margin-top:0;">Submitted via aegisinterlink.com/careers</p>
      <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
      <table style="width:100%;font-size:15px;border-collapse:collapse;">
        <tr><td style="padding:6px 0;color:#555;width:140px;">Role</td><td style="padding:6px 0;font-weight:700;">${roleTitle}</td></tr>
        <tr><td style="padding:6px 0;color:#555;">Department</td><td style="padding:6px 0;">${roleDepartment || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#555;">Name</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
        <tr><td style="padding:6px 0;color:#555;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#16a34a;">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding:6px 0;color:#555;">Phone</td><td style="padding:6px 0;">${phone}</td></tr>` : ""}
        ${linkedin ? `<tr><td style="padding:6px 0;color:#555;">LinkedIn</td><td style="padding:6px 0;"><a href="${linkedin}" style="color:#16a34a;">${linkedin}</a></td></tr>` : ""}
      </table>
      ${(gender || hispanic || veteran || disability) ? `
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
        <p style="color:#555;font-size:13px;font-weight:700;margin-bottom:8px;">Voluntary Self-Identification</p>
        <table style="width:100%;font-size:14px;border-collapse:collapse;">
          ${gender ? `<tr><td style="padding:5px 0;color:#555;width:160px;">Gender</td><td style="padding:5px 0;">${gender}</td></tr>` : ""}
          ${hispanic ? `<tr><td style="padding:5px 0;color:#555;">Hispanic/Latino</td><td style="padding:5px 0;">${hispanic}</td></tr>` : ""}
          ${veteran ? `<tr><td style="padding:5px 0;color:#555;">Veteran Status</td><td style="padding:5px 0;">${veteran}</td></tr>` : ""}
          ${disability ? `<tr><td style="padding:5px 0;color:#555;">Disability Status</td><td style="padding:5px 0;">${disability}</td></tr>` : ""}
        </table>
      ` : ""}
      ${coverLetter ? `
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
        <p style="color:#555;font-size:14px;margin-bottom:6px;">Cover Letter</p>
        <p style="font-size:15px;line-height:1.7;background:#f9f9f9;padding:16px;border-radius:8px;margin:0;">${coverLetter.replace(/\n/g, "<br/>")}</p>
      ` : ""}
      <p style="font-size:12px;color:#aaa;margin-top:24px;">${resumeFile && resumeFile.size > 0 ? "Resume attached." : "No resume attached."} Reply to this email to respond to ${name}.</p>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: `"Aegis Interlink Careers" <${process.env.GMAIL_USER}>`,
    to: process.env.APPLY_TO_EMAIL ?? "kayla@aegisinterlink.com",
    replyTo: email,
    subject: `Application: ${roleTitle} — ${name}`,
    html,
  };

  if (resumeFile && resumeFile.size > 0) {
    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    mailOptions.attachments = [{ filename: resumeFile.name, content: buffer }];
  }

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json({ error: "Failed to send application." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
