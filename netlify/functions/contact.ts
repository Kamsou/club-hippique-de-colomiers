import type { Context } from "@netlify/functions"
import nodemailer from 'nodemailer'

export default async (req: Request, context: Context) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    const body = await req.json()
    const { nom, prenom, email, telephone, message, sujet } = body
    
    if (!nom || !prenom || !email || !message) {
      return Response.json({
        error: 'Champs requis manquants'
      }, { status: 400 })
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({
        error: 'Email invalide'
      }, { status: 400 })
    }
    
    const sanitize = (str: string) => str.replace(/[<>&"']/g, (match) => {
      const entities: Record<string, string> = { 
        '<': '&lt;', 
        '>': '&gt;', 
        '&': '&amp;', 
        '"': '&quot;', 
        "'": '&#39;' 
      }
      return entities[match]
    })

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nouveau contact depuis le site - ${sanitize(prenom)} ${sanitize(nom)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">Nouveau message de contact</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${sanitize(nom)}</p>
            <p><strong>Prénom:</strong> ${sanitize(prenom)}</p>
            <p><strong>Email:</strong> ${sanitize(email)}</p>
            <p><strong>Téléphone:</strong> ${sanitize(telephone || 'Non renseigné')}</p>
            <p><strong>Sujet:</strong> ${sanitize(sujet || 'Non renseigné')}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #000;">
            <h3>Message:</h3>
            <p>${sanitize(message).replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `
    })

    return Response.json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    })
    
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return Response.json({
      error: 'Erreur lors de l\'envoi de l\'email'
    }, { status: 500 })
  }
}