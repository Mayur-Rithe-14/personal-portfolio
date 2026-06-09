const getEmailHTML = (name, email, message) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; padding: 20px; margin: 0;">
      <table width="100%" style="max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 15px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
        
        <tr>
          <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 50px 30px; text-align: center; border-bottom: 2px solid #3b82f6;">
            <h1 style="margin: 0; color: #3b82f6; font-size: 28px; font-weight: 600;">✉️ New Message</h1>
            <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 14px;">You have a new contact form submission</p>
          </td>
        </tr>

        <tr>
          <td style="padding: 40px 30px;">
            <p style="color: #cbd5e1; font-size: 15px; margin: 0 0 25px 0; line-height: 1.6;">
              Hello! Here's a message from your portfolio:
            </p>

            <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1)); padding: 25px; border-radius: 10px; margin-bottom: 30px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0 0 12px 0; color: #3b82f6; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">From</p>
              <p style="margin: 0 0 10px 0; color: #f1f5f9; font-size: 18px; font-weight: 600;">${name}</p>
              <p style="margin: 0; color: #94a3b8; font-size: 14px;">
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
              </p>
            </div>

            <p style="color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 15px 0;">Message Content</p>
            <div style="background: rgba(59, 130, 246, 0.05); padding: 25px; border-radius: 10px; white-space: pre-wrap; word-wrap: break-word; color: #cbd5e1; font-size: 15px; line-height: 1.8; border-left: 4px solid #3b82f6;">
              ${message}
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding: 30px; background: rgba(59, 130, 246, 0.05); border-top: 1px solid rgba(59, 130, 246, 0.2); text-align: center;">
            <p style="margin: 0 0 15px 0; color: #cbd5e1; font-size: 14px;">
              <strong>👉 Reply to this email</strong> to respond to ${name}
            </p>
            <p style="margin: 0; color: #64748b; font-size: 12px;">
              © ${new Date().getFullYear()} Your Portfolio. All rights reserved.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};

module.exports = getEmailHTML;
