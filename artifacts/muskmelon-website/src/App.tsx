import { Switch, Route, Router as WouterRouter } from "wouter";
import { Nav }          from "@/components/Nav";
import { Hero }         from "@/components/Hero";
import { Trust }        from "@/components/Trust";
import { Products }     from "@/components/Products";
import { CTABanner }    from "@/components/CTABanner";
import { CaseStudies }  from "@/components/CaseStudies";
import { Process }      from "@/components/Process";
import { Team }         from "@/components/Team";
import { Philosophy }   from "@/components/Philosophy";
import { Contact }      from "@/components/Contact";
import { Footer }       from "@/components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Products />
        <CTABanner />
        <CaseStudies />
        <Process />
        <Team />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0B0F14",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 16,
    }}>
      <div style={{ fontSize: 11, color: "#FF6A00", letterSpacing: "0.14em", fontWeight: 700 }}>404</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: "#E5E7EB" }}>Page not found.</div>
      <a href="/" style={{ fontSize: 12, color: "#9CA3AF" }}>← Back to home</a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}
