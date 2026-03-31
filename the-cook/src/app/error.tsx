'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {}, [error]);

  return <ErrorMessage pageTitle='Erro' contentTitle='Erro' content='Tente novamente mais tarde' />;
}
