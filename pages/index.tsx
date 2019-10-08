import Link from 'next/link';
import styled from 'styled-components';

const C = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100wh',
  '> div': {
    display: 'block',
    'li': {
      padding: '1rem',
      fontSize: '2rem',
    },
  },
});

export default () => {
  return <C>
    <div>
      <ul>
        <li><Link href="/login?action=/liquidador/inicio"><a>Login Liquidador</a></Link></li>
        <li><Link href="/login?action=/jefeLiquidador/inicio"><a>Login Jefe Liquidador</a></Link></li>
      </ul>
    </div>
  </C>
}
