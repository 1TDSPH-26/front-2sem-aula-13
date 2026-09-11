import { Link } from 'react-router';

export default function Menu() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/produtos">Produtos</Link>
    </nav>
  );
}