import { getSession } from "next-auth/client";
import Head from 'next/head';
import Header from "../components/Header";
import Login from "../components/Login";


export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Blazon App</title>
      </Head>

      <Header />

    <main>
      {/* SideBar */}
      {/* Feed */}
      {/* Widgets */}
    </main>
  </div>
  );
}

export async function getServerSideProps(context) {
  // Get the User
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}