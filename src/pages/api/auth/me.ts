import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  id?: string;
  name?: string;
  email?: string;
  error?: string;
};

// Endpoint para obtener información del usuario actual - Pages Router
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // En una implementación real, verificarías el token JWT
    // en el header Authorization y buscarías el usuario en la base de datos
    
    // Por ahora, simplemente devolvemos datos simulados
    return res.status(200).json({
      id: '1',
      name: 'Test User',
      email: 'user@example.com'
    });
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}
