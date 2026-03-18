import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const GAS_URL = "https://script.google.com/macros/s/AKfycbymK5tydWpMGygrMEwd1M9ud26DPvsRjFo7ZgDfOowNzFHSQbA2ePcLBKrJXhXGk4s/exec";

  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      redirect: 'follow', // Crucial for Google Script redirects
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Network error' }, { status: 500 });
  }
}
