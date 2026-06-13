"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from '@/src/components/Login';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('gwd_token');
    if (token && token !== 'undefined') {
      router.push('/dashboard');
    }
  }, [router]);

  const handleLogin = (jwt, userData) => {
    localStorage.setItem('gwd_token', jwt);
    localStorage.setItem('gwd_user', JSON.stringify(userData));
    router.push('/dashboard');
  };

  return <Login onLogin={handleLogin} />;
}
