import css from "./page.module.css"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | NoteHub",
  description: "The page you are looking for does not exist or has been moved.",
  openGraph: {
    title: "Page Not Found | NoteHub",
    description: "The page you are looking for does not exist or has been moved.",
    url: "https://img.freepik.com/premium-vector/file-folder-mascot-character-design-vector_166742-4413.jpg?semt=ais_user_personalization&w=740&q=80",
    images: [
      {
        url: "https://img.freepik.com/premium-vector/file-folder-mascot-character-design-vector_166742-4413.jpg?semt=ais_user_personalization&w=740&q=80",
        width: 1200,
        height: 630,
        alt: "Page Not Found",
      },
    ],
  },
};

export default function NotFound() {
    return (
        <>
            <h1 className={css.title}>404 - Page not found</h1>
            <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
        </>
    )
}
