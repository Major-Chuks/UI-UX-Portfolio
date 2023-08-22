import Head from "next/head";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Hi, i&apos;m Buchi</title>
        <meta name="description" content="A Skilled UX Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">{children}</main>
    </>
  );
}
