import React from 'react';

export const metadata = {
  title: 'Admin Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}