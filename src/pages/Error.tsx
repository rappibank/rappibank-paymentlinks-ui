import { useRouteError } from 'react-router-dom';

export function Error() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sentimos muito, houve uma falha inesperada.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
