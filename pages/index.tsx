import Link from 'next/link';

export default () => {
  return <div>
    <ul>
      <li><Link href="/login?action=/liquidador/inicio"><a>Login Liquidador</a></Link></li>
      <li><Link href="/login?action=/jefeLiquidador/inicio"><a>Login Jefe Liquidador</a></Link></li>
    </ul>
  </div>
}
