import axios from 'axios';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.string(),
  phone: z.string(),
  subject: z.string(),
  message: z.string(),
});

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subject, email, message, phone, name, company } =
      bodySchema.parse(body);

    const messageData = {
      embeds: [
        {
          type: 'rich',
          title: `Mensagem de Contato`,
          description: '',
          color: 0x4983f5,
          fields: [
            {
              name: `Assunto`,
              value: subject,
              inline: true,
            },
            {
              name: `Nome`,
              value: name,
              inline: true,
            },
            {
              name: `Empresa`,
              value: company,
              inline: true,
            },
            {
              name: `E-mail`,
              value: email,
              inline: true,
            },
            {
              name: `Tel`,
              value: phone,
              inline: true,
            },
            {
              name: `Mensagem`,
              value: message,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData);

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
