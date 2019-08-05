import { useRouter } from "next/dist/client/router";

export default () => {
  const router = useRouter();

  try {
    router.push('/inicio');
  } catch {}

  return null;
}
