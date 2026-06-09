// server/templates/emailTemplate.js
const getEmailHTML = (name, email, message) => {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; margin: 0;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
          <h2 style="margin: 0; color: white; font-size: 28px; font-weight: 600;">New Message Received</h2>
          <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">From your portfolio contact form</p>
        </div>

        <!-- Body -->
        <div style="padding: 40px 30px;">
          
          <!-- Sender Info -->
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #667eea;">
            <p style="margin: 0 0 10px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Sender Information</p>
            <p style="margin: 8px 0; color: #333; font-size: 16px;"><strong>Name:</strong> <span style="color: #667eea; font-weight: 600;">${name}</span></p>
            <p style="margin: 8px 0; color: #333; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
          </div>

          <!-- Message -->
          <div>
            <p style="margin: 0 0 12px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; white-space: pre-wrap; word-wrap: break-word; color: #333; font-size: 15px; line-height: 1.6;">
              ${message}
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 25px 30px; border-top: 1px solid #e0e0e0; text-align: center;">
          <p style="margin: 0 0 15px 0; color: #333; font-size: 15px;">
            <strong>Reply to this email</strong> to send a message back to ${name}
          </p>
          <p style="margin: 0; color: #999; font-size: 12px;">
            © ${new Date().getFullYear()} Your Portfolio. All rights reserved.
          </p>
        </div>

      </div>

      <!-- Bottom Spacing -->
      <div style="text-align: center; margin-top: 20px;">
        <p style="color: rgba(255,255,255,0.7); font-size: 12px; margin: 0;">
          This email was sent from your portfolio contact form
        </p>
      </div>
    </div>
  `;
};

module.exports = getEmailHTML;
