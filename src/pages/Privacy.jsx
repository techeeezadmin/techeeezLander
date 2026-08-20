import { PageShell } from "../components/PageShell";
import { Seo } from "../components/Seo";

export function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Privacy policy for Tech Eeez website visitors."
        path="/privacy-policy"
      />
      <PageShell
        title="Privacy Policy"
        description="This page provides a baseline policy template and should be reviewed with legal counsel before production use."
      >
        <div className="max-w-[720px] space-y-5 text-[16px] leading-7 text-[#D4D4D8]">
          <p>
            Tech Eeez may collect contact details submitted through forms for
            communication and service inquiry purposes.
          </p>
          <p>
            Submitted data should only be used for legitimate business
            communication, service consultation, and follow-up.
          </p>
          <p>
            Please replace this placeholder policy with your approved legal
            policy before deployment.
          </p>
        </div>
      </PageShell>
    </>
  );
}
