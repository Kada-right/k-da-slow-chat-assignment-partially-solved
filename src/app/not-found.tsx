import { Page } from "@/components";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <Page title="Page Not Found">
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link className="link link-primary" href="/">
        Go back home
      </Link>
    </Page>
  );
}
