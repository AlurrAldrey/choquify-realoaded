export default function CollectionsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    //   <html lang="en">
    //     <body
    //     >
    <div>
        <h1>Este es un layout</h1>
        {children}
    </div>
    //     </body>
    //   </html>
    );
  }