import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { getUserSession } from "@/lib/getUserSession";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Plans } from "@/components/landing/Plans";
import { WhyUs } from "@/components/landing/WhyUs";
import { NameSearch } from "@/components/landing/NameSearch";
import { Faq } from "@/components/landing/Faq";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";

export default async function LandingPage() {
  const { isLoggedIn, dashboardHref } = await getUserSession();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} dashboardHref={dashboardHref} />
      <Hero />
      <HowItWorks />
      <Plans />
      <WhyUs />
      <Faq />
      <CtaFinal />
      <Footer />
    </>
  );
}
