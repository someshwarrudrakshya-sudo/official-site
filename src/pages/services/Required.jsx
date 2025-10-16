import Note from "../../components/Note.jsx";
import "./css/Required.css";

export default function RequiredDocs() {
  return (
    <div className="container">
      <div className="section-title">
        <h2 className="page-title">
          Required <span className="highlight">Documents</span>
        </h2>
        <p className="section-subtitle">
          Please provide the following documents:
        </p>
      </div>

      {/* Membership Section */}
      <section className="docs-section">
        <h2 className="required-title">To Become a Member</h2>
        <p className="required-subtitle">
          Docs needed to register as a cooperative member in Nepal:
        </p>
        <ul className="docs-list">
          <li>One copy of the applicant’s Nepali Citizenship Certificate or other government-approved ID.</li>
          <li>Two recent passport-sized photo of the applicant</li>
          <li>
            One copy of proof of current residence (e.g., migration certificate,
            electricity bill, water bill, land ownership certificate, etc.)
          </li>
          <li>
            If a nominee is appointed: one copy of the nominee’s Citizenship
            Certificate and one passport-sized photo
          </li>
          <li>
            Duly completed membership application form and account opening form
            (provided by the cooperative)
          </li>
        </ul>
      </section>

      {/* Loan Section */}
      <section className="docs-section">
        <h2 className="required-title">To Apply for a Loan</h2>
        <p className="required-subtitle">
          Docs required to apply for a loan from the cooperative:
        </p>
        <ul className="docs-list">
          <li>
            Membership duration of at least three months from the date of
            joining
          </li>
          <li>One copy of Nepali Citizenship Certificate</li>
          <li>Four recent passport-sized photo</li>
          <li>
            One copy of proof of permanent residence (e.g., migration
            certificate, electricity bill, water bill, land ownership
            certificate, etc.)
          </li>
          <li>One copy of business registration certificate</li>
          <li>One copy of business PAN registration certificate</li>
          <li>
            One copy of Cottage and Small Industry Registration Certificate (if
            applicable)
          </li>
          <li>One copy of tax clearance certificate</li>
          <li>
            One copy of tenancy/rental agreement with house owner (if
            applicable)
          </li>
          <li>Details of income source(s)</li>
          <li>
            Details of three guarantor members along with copies of their
            Citizenship Certificates and mobile numbers
          </li>
        </ul>

        <h4 className="docs-subtitle">
          Additional Documents Required for Collateral Loans (Dhito):
        </h4>
        <ul className="docs-list">
          <li>Original land ownership certificate (लाल पुर्जा)</li>
          <li>
            Approved plot map / computer-generated map / tracing map (नक्सा)
          </li>
          <li>Boundary and land classification details (चार किल्ला)</li>
          <li>Land revenue receipt (मालपोत)</li>
          <li>Extract from Field Book (उत्रार)</li>
          <li>
            Household details and collateral approval form (if applicable)
          </li>
        </ul>
      </section>

      {/* Note Section */}
      <Note type="RequiredDocuments" />
    </div>
  );
}
