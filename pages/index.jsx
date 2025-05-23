import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('https://www.earndeckshipping.com');
  }, []);
  return <p>Redirecting...</p>;
}
