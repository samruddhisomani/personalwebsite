import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
