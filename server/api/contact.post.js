import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  // Vérifier que c'est bien une requête POST
  assertMethod(event, 'POST')
  
  const body = await readBody(event)
  const { nom, prenom, email, telephone, message, sujet } = body
  
  // Validation des champs requis
  if (!nom || !prenom || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Champs requis manquants'
    })
  }
  
  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email invalide'
    })
  }
  
  // Sanitize input (échapper HTML)
  const sanitize = (str) => str.replace(/[<>&"']/g, (match) => {
    const entities = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;' }
    return entities[match]
  })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })

  try {
    // Envoi de l'email
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

    return { success: true, message: 'Email envoyé avec succès' }
  } catch (error) {
    console.error('Erreur envoi email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de l\'envoi de l\'email'
    })
  }
})
