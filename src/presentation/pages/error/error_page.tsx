import { useRouteError } from "react-router-dom";

import './error_style.scss';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>    
    </div>
  );
}

export default ErrorPage;