import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AboutLayout;
