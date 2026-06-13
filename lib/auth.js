import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'gwd-sales-super-secret-key-change-me-in-prod';

export function verifyAuth(request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized: No token provided', status: 401 };
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { user: decoded };
  } catch (err) {
    return { error: 'Unauthorized: Invalid token', status: 401 };
  }
}
