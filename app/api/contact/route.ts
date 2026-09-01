import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      service,
      stage,
      goal,
      budget,
      details,
      name,
      email,
      company,
    } = body;

    /* =========================================================
       BASIC VALIDATION
    ========================================================= */

    if (!name || !email || !service) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        {
          status: 400,
        }
      );
    }

    /* =========================================================
       SEND EMAIL
    ========================================================= */

    const { data, error } = await resend.emails.send({
      from: "Brenda Studio <onboarding@resend.dev>",

      to: ["brenda.freitas2995@gmail.com"],

      replyTo: email,

      subject: `New project inquiry — ${service}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />

            <title>New Project Inquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #24194f;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div
              style="
                width: 100%;
                background-color: #24194f;
                padding: 50px 20px;
                box-sizing: border-box;
              "
            >
              <div
                style="
                  max-width: 680px;
                  margin: 0 auto;
                  background: linear-gradient(
                    145deg,
                    #3d2d82,
                    #2d2168
                  );
                  border-radius: 26px;
                  overflow: hidden;
                  border: 1px solid rgba(255,255,255,0.12);
                  box-shadow: 0 30px 90px rgba(20,10,60,0.35);
                "
              >
                <!-- =========================================
                     HEADER
                ========================================== -->

                <div
                  style="
                    padding: 42px 42px 32px 42px;
                    background:
                      radial-gradient(
                        circle at top right,
                        rgba(231,151,211,0.18),
                        transparent 35%
                      ),
                      radial-gradient(
                        circle at top left,
                        rgba(150,118,255,0.18),
                        transparent 35%
                      );
                  "
                >
                  <p
                    style="
                      margin: 0 0 12px 0;
                      font-size: 10px;
                      line-height: 1.4;
                      letter-spacing: 3px;
                      text-transform: uppercase;
                      color: #d8b4ff;
                    "
                  >
                    Brenda Studio
                  </p>

                  <h1
                    style="
                      margin: 0;
                      font-size: 36px;
                      line-height: 1.1;
                      font-weight: 600;
                      letter-spacing: -1.5px;
                      color: #ffffff;
                    "
                  >
                    New project inquiry
                  </h1>

                  <p
                    style="
                      margin: 16px 0 0 0;
                      font-size: 15px;
                      line-height: 1.7;
                      color: rgba(255,255,255,0.62);
                    "
                  >
                    A new project brief was submitted through the
                    Brenda Studio portfolio.
                  </p>
                </div>

                <!-- =========================================
                     CONTENT
                ========================================== -->

                <div
                  style="
                    padding: 10px 42px 42px 42px;
                  "
                >
                  <!-- SERVICE -->

                  <div
                    style="
                      margin-top: 25px;
                      margin-bottom: 30px;
                      padding: 22px;
                      border-radius: 18px;
                      background: rgba(255,255,255,0.055);
                      border: 1px solid rgba(255,255,255,0.08);
                    "
                  >
                    <p
                      style="
                        margin: 0 0 8px 0;
                        font-size: 10px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        color: rgba(216,180,255,0.7);
                      "
                    >
                      Service
                    </p>

                    <p
                      style="
                        margin: 0;
                        font-size: 21px;
                        line-height: 1.4;
                        color: #ffffff;
                      "
                    >
                      ${escapeHtml(service)}
                    </p>
                  </div>

                  <!-- PROJECT INFORMATION -->

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                      width: 100%;
                      border-collapse: collapse;
                    "
                  >
                    ${emailRow(
                      "Project stage",
                      stage || "Not provided"
                    )}

                    ${emailRow(
                      "Main goal",
                      goal || "Not provided"
                    )}

                    ${emailRow(
                      "Estimated budget",
                      budget || "Not provided"
                    )}
                  </table>

                  <!-- DETAILS -->

                  <div
                    style="
                      margin-top: 34px;
                    "
                  >
                    <p
                      style="
                        margin: 0 0 12px 0;
                        font-size: 10px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        color: rgba(216,180,255,0.7);
                      "
                    >
                      Project details
                    </p>

                    <div
                      style="
                        padding: 22px;
                        border-radius: 18px;
                        background: rgba(255,255,255,0.045);
                        border: 1px solid rgba(255,255,255,0.08);
                      "
                    >
                      <p
                        style="
                          margin: 0;
                          font-size: 15px;
                          line-height: 1.8;
                          white-space: pre-wrap;
                          color: rgba(255,255,255,0.76);
                        "
                      >
                        ${escapeHtml(
                          details ||
                            "No project details provided."
                        )}
                      </p>
                    </div>
                  </div>

                  <!-- CONTACT -->

                  <div
                    style="
                      margin-top: 38px;
                      padding-top: 30px;
                      border-top: 1px solid rgba(255,255,255,0.10);
                    "
                  >
                    <p
                      style="
                        margin: 0 0 18px 0;
                        font-size: 10px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        color: rgba(216,180,255,0.7);
                      "
                    >
                      Contact
                    </p>

                    <p
                      style="
                        margin: 0 0 7px 0;
                        font-size: 19px;
                        line-height: 1.4;
                        font-weight: 600;
                        color: #ffffff;
                      "
                    >
                      ${escapeHtml(name)}
                    </p>

                    <p
                      style="
                        margin: 0 0 7px 0;
                        font-size: 14px;
                        line-height: 1.5;
                        color: #e1d7f5;
                      "
                    >
                      ${escapeHtml(email)}
                    </p>

                    <p
                      style="
                        margin: 0;
                        font-size: 14px;
                        line-height: 1.5;
                        color: rgba(255,255,255,0.45);
                      "
                    >
                      ${
                        company
                          ? escapeHtml(company)
                          : "No company provided"
                      }
                    </p>
                  </div>

                  <!-- REPLY NOTE -->

                  <div
                    style="
                      margin-top: 30px;
                      padding: 18px 20px;
                      border-radius: 16px;
                      background: rgba(240,166,218,0.07);
                      border: 1px solid rgba(240,166,218,0.12);
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        font-size: 13px;
                        line-height: 1.6;
                        color: rgba(255,255,255,0.58);
                      "
                    >
                      You can reply directly to this email and
                      your response will be addressed to
                      <strong style="color:#ffffff;">
                        ${escapeHtml(email)}
                      </strong>.
                    </p>
                  </div>
                </div>

                <!-- =========================================
                     FOOTER
                ========================================== -->

                <div
                  style="
                    padding: 22px 42px;
                    background: rgba(15,8,40,0.18);
                    border-top: 1px solid rgba(255,255,255,0.08);
                  "
                >
                  <p
                    style="
                      margin: 0;
                      font-size: 10px;
                      line-height: 1.5;
                      letter-spacing: 1.4px;
                      text-transform: uppercase;
                      color: rgba(255,255,255,0.3);
                    "
                  >
                    Sent from Brenda Studio Project Builder
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    /* =========================================================
       RESEND ERROR
    ========================================================= */

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            error.message ||
            "Unable to send project brief.",
        },
        {
          status: 500,
        }
      );
    }

    /* =========================================================
       SUCCESS
    ========================================================= */

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending the project brief.",
      },
      {
        status: 500,
      }
    );
  }
}

/* =========================================================
   EMAIL ROW
========================================================= */

function emailRow(
  label: string,
  value: string
) {
  return `
    <tr>
      <td
        style="
          width: 45%;
          padding: 17px 0;
          border-bottom: 1px solid rgba(255,255,255,0.09);
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255,255,255,0.45);
        "
      >
        ${escapeHtml(label)}
      </td>

      <td
        style="
          width: 55%;
          padding: 17px 0;
          border-bottom: 1px solid rgba(255,255,255,0.09);
          font-size: 14px;
          line-height: 1.5;
          text-align: right;
          color: rgba(255,255,255,0.82);
        "
      >
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

/* =========================================================
   SIMPLE HTML ESCAPE

   Impede que texto enviado pelo formulário seja interpretado
   como HTML dentro do e-mail.
========================================================= */

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}