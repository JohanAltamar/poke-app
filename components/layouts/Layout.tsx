import React from "react";
import Head from "next/head";

import { Navbar } from "@/components/ui";

interface LayoutProps {
  title?: string;
  pokemon?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;
export const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Pokemon App",
  pokemon,
}) => {
  return (
    <>
      <Head>
        <title>
          {pokemon ? `${pokemon} - ` : ""}
          {title}
        </title>
        <meta name="author" content="Johan Altamar" />
        {pokemon ? (
          <>
            <meta
              name="description"
              content={`Information about Pokemon ${pokemon}`}
            />
            <meta name="keywords" content={`pokemon, pokedex, ${pokemon}`} />
          </>
        ) : (
          <>
            <meta
              name="description"
              content={`App to search Pokemon information`}
            />
            <meta name="keywords" content="pokemon, pokedex, poke-app" />
          </>
        )}

        <meta
          property="og:title"
          content={`Information about Pokemon ${pokemon}`}
        />
        <meta
          property="og:description"
          content={`Information about Pokemon ${pokemon}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main className="px-5">{children}</main>
    </>
  );
};
