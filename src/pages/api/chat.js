import 'dotenv/config';
import fetch from 'node-fetch';

export const prerender = false; 

const OPEN_ROUTER = process.env.OPEN_ROUTER;

export async function POST({ request }) {
  try {
    const body = await request.json();
    const prompt = body.message;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPEN_ROUTER}`
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "Lo siento, no tengo respuesta.";

    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error en API:", error);
    return new Response(
      JSON.stringify({ reply: "Hubo un error procesando tu mensaje." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
