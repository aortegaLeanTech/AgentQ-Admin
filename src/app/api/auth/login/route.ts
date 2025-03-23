import { NextRequest } from 'next/server';

type ResponseData = {
  user?: {
    id: string;
    name: string;
    email: string;
  };
  token?: string;
  error?: string;
};

// Endpoint de login para Next.js 15 - usando App Router
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    // Simple validation
    if (!email || !password) {
      return Response.json({ error: 'Email and password are required' }, { status: 400 });
    }
    
    // Mock successful login (en una aplicación real validaría contra una base de datos)
    if (email.includes('@') && password.length >= 6) {
      return Response.json({
        user: {
          id: '1',
          name: 'Test User',
          email: email,
        },
        token: 'mock-jwt-token-' + Math.random().toString(36).substring(2),
      }, { status: 200 });
    } else {
      // Return error for invalid credentials
      return Response.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// Agregando un manejador GET para compatibilidad
export async function GET() {
  return Response.json({ error: 'Method not allowed' }, { status: 405 });
}
