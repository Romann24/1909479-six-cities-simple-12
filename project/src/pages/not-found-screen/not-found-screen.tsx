import { Link } from 'react-router-dom';
function NotFoundScreen () : JSX.Element {
  return (
    <div className = "not-found">
      <h1>404 Not Found</h1>
      <Link to = "/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundScreen;
