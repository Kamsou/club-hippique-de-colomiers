import { d as defineEventHandler, a as assertMethod, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'node:url';
import 'ipx';

const contact_post = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const body = await readBody(event);
  const { nom, prenom, email, telephone, message, sujet } = body;
  if (!nom || !prenom || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Champs requis manquants"
    });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email invalide"
    });
  }
  const sanitize = (str) => str.replace(/[<>&"']/g, (match) => {
    const entities = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" };
    return entities[match];
  });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nouveau contact depuis le site - ${sanitize(prenom)} ${sanitize(nom)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">Nouveau message de contact</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${sanitize(nom)}</p>
            <p><strong>Pr\xE9nom:</strong> ${sanitize(prenom)}</p>
            <p><strong>Email:</strong> ${sanitize(email)}</p>
            <p><strong>T\xE9l\xE9phone:</strong> ${sanitize(telephone || "Non renseign\xE9")}</p>
            <p><strong>Sujet:</strong> ${sanitize(sujet || "Non renseign\xE9")}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #000;">
            <h3>Message:</h3>
            <p>${sanitize(message).replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `
    });
    return { success: true, message: "Email envoy\xE9 avec succ\xE8s" };
  } catch (error) {
    console.error("Erreur envoi email:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de l'envoi de l'email"
    });
  }
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
