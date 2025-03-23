import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  user?: {
    id: string;
    name: string;
    email: string;
  };
  token?: string;
  error?: string;
};

// Endpoint de login para Pages Router
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;
    
    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    
    // Mock successful login (en una aplicación real validaría contra una base de datos)
    if (email.includes('@') && password.length >= 6) {
      // Return mock user data
      return res.status(200).json({
        user: {
          id: '1',
          name: 'Test User',
          email: email,
        },
        token: 'mock-jwt-token-' + Math.random().toString(36).substring(2),
      });
    } else {
      // Return error for invalid credentials
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
