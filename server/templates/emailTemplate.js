const getEmailHTML = (name, email, message) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #ffffff; padding: 0; margin: 0;">
      <table width="100%" style="max-width: 600px; margin: 0 auto; background: white;">
        <tr>
          <td style="background: linear-gradient(to right, #1e293b, #334155); padding: 50px 30px; text-align: center;">
            <h1 style="margin: 0; color: white; font-size: 32px; font-weight: 300; letter-spacing: 1px;">New Message</h1>
            <p style="margin: 10px 0 0 0; color: #cbd5e1; font-size: 14px;">Portfolio Contact Form</p>
          </td>
        </tr>
        
        <tr>
          <td style="padding: 40px 30px;">
            <p style="color: #475569; font-size: 16px; line-height: 1.8; margin: 0 0 30px 0;">
              Hi there! You received a new message from:
            </p>
            
            <div style="background: #f8fafc; padding: 25px; border-radius: 10px; margin-bottom: 30px; border-left: 5px solid #0f172a;">
              <p style="margin: 0 0 15px 0; color: #334155;"><strong style="color: #1e293b; font-size: 18px;">${name}</strong></p>
              <p style="margin: 0; color: #64748b; font-size: 14px;">
                <a href="mailto:${email}" style="color: #0f172a; text-decoration: none; font-weight: 500;">${email}</a>
              </p>
            </div>

            <p style="color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 15px 0;">Message</p>
            <div style="background: #f1f5f9; padding: 25px; border-radius: 10px; white-space: pre-wrap; word-wrap: break-word; color: #334155; font-size: 15px; line-height: 1.8; border-left: 5px solid #0f172a;">
              ${message}
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding: 30px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="margin: 0; color: #475569; font-size: 14px;">
              💌 <strong>Reply directly to this email</strong> to send a message back
            </p>
            <p style="margin: 15px 0 0 0; color: #94a3b8; font-size: 12px;">
              © ${new Date().getFullYear()} Your Portfolio
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};

module.exports = getEmailHTML;
