import { lazy, Suspense } from "react";
import Home from "../Home/home"; // keep Home eager-loaded

const Programs = lazy(() => import("../Programs/programs"));
const Process = lazy(() => import("../Process/process"));
const Trust = lazy(() => import("../Trust/trust"));
const CertificatePrograms = lazy(() =>
  import("../Certificate Programs/programs")
);
const DiscoverCertification = lazy(() =>
  import("../discover certification/discover")
);
const Testimonials = lazy(() => import("../Testimonial/testimonial"));
const BusinessSection = lazy(() => import("../Business/business"));
const Faq = lazy(() => import("../FAQ/faq"));
const Refer = lazy(() => import("../Refer/refer"));
const Callback = lazy(() => import("../Callback/callback"));
const Footer = lazy(() => import("../Footer/footer"));

function Root() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
      <Programs />
      <Process />
      <Trust />
      <CertificatePrograms />
      <DiscoverCertification />
      <Testimonials />
      <BusinessSection />
      <Faq />
      <Refer />
      <Callback />
      <Footer />
    </Suspense>
  );
}

export default Root;

function Loader() {
  return <div style={{ padding: 40 }}>Loading...</div>;
}
