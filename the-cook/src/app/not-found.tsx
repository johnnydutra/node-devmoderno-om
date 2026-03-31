import ErrorMessage from '@/components/ErrorMessage';

export default function NotFoundPage() {
  return (
    <ErrorMessage
      pageTitle='Página não encontrada'
      contentTitle='Ops!'
      content='A página que você tentou acessar não existe'
    />
  );
}
