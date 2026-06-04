import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 're_xxxxxxxxx');

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeHeader(value: unknown): string {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || 'No especificada');
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'No especificado');
    const safeService = escapeHtml(service || 'No especificado');
    const safeMessage = escapeHtml(message);
    const subjectName = sanitizeHeader(name) || 'Nueva consulta';

    // Construct the email content
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #0851DC;">Nueva consulta web - Grupo LP</h2>
        <p>Has recibido un nuevo mensaje desde el formulario de contacto de la landing page.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Nombre y Apellido:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Empresa:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeCompany}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Teléfono / WhatsApp:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Servicio de interés:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeService}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0851DC;">
          <h3 style="margin-top: 0; font-size: 16px;">Mensaje:</h3>
          <p style="white-space: pre-wrap; margin-bottom: 0;">${safeMessage}</p>
        </div>
        
        <p style="font-size: 12px; color: #888; margin-top: 30px;">
          Este correo fue generado automáticamente por el sistema de Grupo LP.
        </p>
      </div>
    `;

    // Send the email
    const data = await resend.emails.send({
      // TODO: cambiar a un dominio verificado en Resend (ej. 'contacto@grupolp.com.uy').
      from: 'Grupo LP Web <onboarding@resend.dev>',
      to: 'info@grupolp.com.uy', // TODO: confirmar casilla receptora real
      replyTo: email,
      subject: `Nueva consulta de ${subjectName} - Grupo LP`,
      html: htmlContent,
    });

    if (data.error) {
      console.error('Resend Error:', data.error);
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
