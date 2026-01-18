'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToResult() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/local/result'); 
  }, [router]);

  return null;
}