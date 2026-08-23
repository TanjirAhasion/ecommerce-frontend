import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Attaches the auth token (once TokenService/AuthService exist in Phase 6)
 * to every outgoing request. Left as a pass-through for now so the HTTP
 * pipeline is already wired and won't need reshaping later.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('auth_token');
  if (!token) {
    return next(req);
  }
  return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
};
