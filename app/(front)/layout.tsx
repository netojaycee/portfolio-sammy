import Header from "@/components/local/Header";
import Footer from "@/components/local/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-secondary">

      <Header />
      <div className="min-h-screen pt-[100px]">{children}</div>
      <Footer />
    </div>
  );
}
