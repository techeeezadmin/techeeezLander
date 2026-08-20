import { Seo } from "../components/Seo";
import { PrimaryButton } from "../components/Buttons";

const cells = Array.from({ length: 32 }, (_, index) => index);

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-32 text-center">
        <div className="broken-grid mb-12" aria-hidden="true">
          {cells.map((cell) => (
            <span key={cell} className={cell === 18 ? "is-missing" : undefined} />
          ))}
        </div>
        <p className="text-sm tracking-[0.2em] text-[#A1A1AA]">404</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.2rem,6vw,4.6rem)] font-medium tracking-tight">
          This page drifted off the{" "}
          <span className="font-serif italic font-normal">stack.</span>
        </h1>
        <p className="mt-4 max-w-md text-[#D4D4D8]">
          The URL may be outdated, or the page may have moved. Head back home and keep building.
        </p>
        <div className="mt-8">
          <PrimaryButton to="/">Return home</PrimaryButton>
        </div>
      </main>
    </>
  );
}
