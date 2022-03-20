import React from "react";
import Head from "next/head";

interface LayoutProps {
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Pokemon App",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Johan Altamar" />
        <meta name="description" content="Information about Pokemon XXXXX" />
        <meta name="keywords" content="pokemon, pokedex, XXXX" />
      </Head>

      {/* Navbar */}

      <main>{children}</main>
    </>
  );
};
