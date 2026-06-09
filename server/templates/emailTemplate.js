const getEmailHTML = (name, email, message) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #ffffff; padding: 0; margin: 0;">
      <table width="100%" style="max-width: 600px; margin: 0 auto;">
        
        <!-- Header -->
        <tr>
          <td style="padding: 60px 30px 40px 30px; text-align: center; border-bottom: 3px solid #000;">
            <h1 style="margin: 0; color: #000; font-size: 24px; font-weight: 700; letter-spacing: 2px;">NEW MESSAGE</h1>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding: 40px 30px;">
            
            <!-- From -->
            <div style="padding-bottom: 20px; border-bottom: 1px solid #eee; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">From</p>
              <p style="margin: 0; color: #000; font-size: 20px; font-weight: 600;">${name}</p>
            </div>

            <!-- Email -->
            <div style="padding-bottom: 20px; border-bottom: 1px solid #eee; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">Email</p>
              <p style="margin: 0; color: #000; font-size: 15px;">
                <a href="mailto:${email}" style="color: #000; text-decoration: none;">${email}</a>
              </p>
            </div>

            <!-- Message Label -->
            <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 15px 0; font-weight: 600;">Message</p>
            
            <!-- Message Content - LEFT ALIGNED -->
            <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #333; white-space: pre-wrap; word-wrap: break-word; color: #333; font-size: 15px; line-height: 1.8; text-align: left;">
              ${message}
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding: 40px 30px; text-align: center; background: #f9f9f9; border-top: 1px solid #eee;">
            <p style="margin: 0 0 15px 0; color: #333; font-size: 14px;">
              <strong>Reply to this email to respond</strong>
            </p>
            <p style="margin: 0; color: #999; font-size: 12px;">
              © ${new Date().getFullYear()} Your Portfolio
            </p>
          </td>
        </tr>

      </table>
    </div>
  `;
};

module.exports = getEmailHTML;
