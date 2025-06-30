import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto max-w-4xl px-4 grid grid-cols-3 gap-8">
        {/* Branch Information & Contact */}
        <div>
          <h4 className="font-semibold mb-4">Branch information</h4>
          <ul className="list-none pl-0 space-y-1">
            <li>1 Place Ville Marie</li>
            <li>5th Floor</li>
            <li>Montreal QC, H3B 1Z3</li>
            <li>
              <a href="https://ca.rbcwealthmanagement.com/pvm5.branch/" className="underline">
                Website
              </a>
            </li>
          </ul>
          <h4 className="font-semibold mt-4 mb-4"><br/>Contact information</h4>
          <ul className="list-none pl-0 space-y-1">
            <li>Phone: (514) 840-9842</li>
            <li>Email: leutnerwealth@rbc.com</li>
          </ul>
        </div>

        {/* Privacy & Legal */}
        <div>
          <h4 className="font-semibold mb-4">Privacy & legal</h4>
          <ul className="list-none pl-0 space-y-1">
            <li>
              <a href="https://www.rbc.com/privacysecurity/ca/" className="underline">
                Privacy & Security
              </a>
            </li>
            <li>
              <a href="https://www.rbc.com/legal/" className="underline">
                Legal
              </a>
            </li>
            <li>
              <a href="https://www.rbcwealthmanagement.com/en-ca/dominion-securities/accessibility" className="underline">
                Accessibility
              </a>
            </li>
            <li>
              <a href="https://www.ciro.ca/office-investor/know-your-advisor-advisor-report" className="underline">
                CIRO AdvisorReport
              </a>
            </li>
            <li>
              <a href="https://www.cipf.ca/" className="underline">
                Member-Canadian Investor Protection Fund
              </a>
            </li>
            <li>
              <a href="https://www.rbc.com/privacysecurity/ca/digital-privacy/advertising-and-cookies.html" className="underline">
                Advertising and cookies
              </a>
            </li>
          </ul>
        </div>

        {/* Online Client Services */}
        <div>
          <h4 className="font-semibold mb-4">Online client services</h4>
          <ul className="list-none pl-0 space-y-1">
            <li>
              <a
                href="https://www1.royalbank.com/sgw3/PUBINVH/3m00/ISAMSecureRequest/v1/eBGPublicPage?F6=1&F7=IB&F21=IB&F22=IB&REQUEST=ClientSignin&IDP=IVC&LANGUAGE=ENGLISH&SYSTEM=DSIC"
                className="underline"
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href="https://ca.rbcwealthmanagement.com/documents/10192/1088929/20_90081_123_Wealth_Management_Online_first_time_sign_in_DS.pdf"
                className="underline"
              >
                First time sign in guide
              </a>
            </li>
            <li>
              <a href="https://www.rbcwealthmanagement.com/en-ca/rbc-wealth-management-online" className="underline">
                Keeping you informed
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white border-opacity-50 pt-4 text-center text-sm space-y-1">
        <p>RBC Dominion Securities Inc., &copy; 2025</p>
        <p>RBC Dominion Securities Online Security Guarantee</p>
      </div>
    </footer>
  );
}
