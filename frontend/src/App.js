import './App.css';

function App() {
  const categories = [
    {
      title: "🔹 Aadhaar Services",
      links: [
        { name: "Aadhaar Portal", url: "https://uidai.gov.in" },
        { name: "Download Aadhaar", url: "https://eaadhaar.uidai.gov.in/" },
        { name: "Check Aadhaar Status", url: "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus" },
        { name: "Aadhaar Update", url: "https://ssup.uidai.gov.in/ssup/" },
        { name: "Find Aadhaar Center", url: "https://appointments.uidai.gov.in/easearch.aspx" }
      ]
    },
    {
      title: "🔹 PAN Card",
      links: [
        { name: "Apply PAN", url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
        { name: "Track PAN Status", url: "https://tin.tin.nsdl.com/pantan/StatusTrack.html" }
      ]
    },
    {
      title: "🔹 Voter ID",
      links: [
        { name: "Voter Portal", url: "https://voterportal.eci.gov.in/" },
        { name: "Search Voter ID", url: "https://electoralsearch.eci.gov.in/" },
        { name: "Download e-EPIC", url: "https://www.nvsp.in/Account/Login" }
      ]
    },
    {
      title: "🔹 RTPS Bihar & Certificates",
      links: [
        { name: "RTPS Bihar", url: "https://rtps.bihar.gov.in/" },
        { name: "Caste Certificate", url: "https://serviceonline.bihar.gov.in/" },
        { name: "Income Certificate", url: "https://serviceonline.bihar.gov.in/" },
        { name: "Residential Certificate", url: "https://serviceonline.bihar.gov.in/" }
      ]
    },
    {
      title: "🔹 Electricity (NBPDCL/SBPDCL)",
      links: [
        { name: "NBPDCL Bill", url: "https://www.nbpdcl.co.in/" },
        { name: "Bill Payment", url: "https://www.nbpdcl.co.in/PayOnline.aspx" },
        { name: "View Bill", url: "https://www.nbpdcl.co.in/frmBillPaymentDetails.aspx" },
        { name: "SBPDCL Website", url: "https://www.sbpdcl.co.in/" }
      ]
    },
    {
      title: "🔹 RTO / Driving Licence",
      links: [
        { name: "Parivahan Portal", url: "https://parivahan.gov.in/" },
        { name: "Driving Licence Apply", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" },
        { name: "Vehicle Info (VAHAN)", url: "https://vahan.parivahan.gov.in/vahanservice/vahan/ui/statevalidation/homepage.xhtml" }
      ]
    },
    {
      title: "🔹 Education & Exam Boards",
      links: [
        { name: "CBSE Website", url: "https://cbse.gov.in/" },
        { name: "LNMU Darbhanga", url: "https://lnmu.ac.in/" }
      ]
    }
  ];

  return (
    <div className="App">
      <h1>🇮🇳 India Service Portal</h1>
      {categories.map((category, idx) => (
        <div key={idx}>
          <h2>{category.title}</h2>
          <div className="card-container">
            {category.links.map((item, index) => (
              <a
                className="card"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
