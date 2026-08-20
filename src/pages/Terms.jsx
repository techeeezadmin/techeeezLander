import { PageShell } from "../components/PageShell";
import { Seo } from "../components/Seo";

export function Terms() {
  return (
    <>
      <Seo
        title="Terms"
        description="Terms and conditions for Tech Eeez website usage."
        path="/terms"
      />
      <PageShell
        title="Terms & Conditions"
        description="This is a placeholder terms page and should be replaced with legally approved terms."
      >
        <div className="max-w-[720px] space-y-5 text-[16px] leading-7 text-[#D4D4D8]">
          <p>
            By using this website, users agree to lawful usage and respectful
            communication.
          </p>
          <p>
            Service discussions and commitments are finalized through direct
            communication and formal agreements, not by website browsing alone.
          </p>
          <p>
            Please replace this placeholder text with finalized terms prior to
            launch.
          </p>
        </div>
      </PageShell>
    </>
  );
}
