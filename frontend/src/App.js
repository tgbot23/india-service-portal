import './App.css';

function App() {
  const categories = [
    {
      title: "🆔 Aadhaar Services",
      links: [
        { name: "Download Aadhaar", url: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" },
        { name: "Order PVC Aadhaar Card", url: "https://myaadhaar.uidai.gov.in/genricPVC/en" },
        { name: "Check Aadhaar-Mobile Link", url: "https://myaadhaar.uidai.gov.in/check-aadhaar-validity/en" },
        { name: "Aadhaar Seeding Status", url: "https://myaadhaar.uidai.gov.in/bank-seeding-status" },
        { name: "Lock/Unlock Aadhaar", url: "https://myaadhaar.uidai.gov.in/lock-unlock-aadhaar/en" },
        { name: "Update Aadhaar Online", url: "https://myaadhaar.uidai.gov.in/" }
      ]
    },
    {
      title: "🧾 PAN Card Services",
      links: [
        { name: "Instant e-PAN (Free, Aadhaar OTP based)", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan" },
        { name: "Apply / Update PAN Card", url: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html" },
        { name: "Download PAN Card", url: "https://onlineservices.proteantech.in/paam/requestAndDownloadEPAN.html" }
      ]
    },
    {
      title: "🚗 RTO Services",
      links: [
        { name: "Driving Licence Apply / Services", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" },
        { name: "Driving Licence Mobile Number Update", url: "https://sarathi.parivahan.gov.in/sarathiservice/mobNumUpdpub.do" },
        { name: "Vehicle Mobile Number Update", url: "https://vahan.parivahan.gov.in/mobileupdate/" }
      ]
    },
    {
      title: "⚡ Electricity (NBPDCL)",
      links: [
        { name: "Check Balance / Recharge Now", url: "https://wss.nbpdcl.co.in/cportal/#/guest/secure/searchbill" }
      ]
    },
    {
      title: "🗳️ Voter ID (including Bihar-specific)",
      links: [
        { name: "Check Status of Enumeration Form (Bihar)", url: "https://voters.eci.gov.in/home/enumFormTrack#" },
        { name: "Search Name in Voter List (2003+, All India)", url: "https://voters.eci.gov.in/" },
        { name: "Apply/Download Voter Card", url: "https://voters.eci.gov.in/" }
      ]
    },
    {
      title: "📜 RTPS Bihar Certificates",
      links: [
        { name: "Residential Certificate (आवासीय)", url: "https://serviceonline.bihar.gov.in/renderApplicationForm.do?serviceId=4630009" },
        { name: "Caste Certificate (जाति)", url: "https://serviceonline.bihar.gov.in/renderApplicationForm.do?serviceId=4650009" },
        { name: "Income Certificate (आय)", url: "https://serviceonline.bihar.gov.in/renderApplicationForm.do?serviceId=4640008" },
        { name: "EWS Certificate", url: "https://serviceonline.bihar.gov.in/renderApplicationForm.do?serviceId=10430011" },
        { name: "OBC Certificate", url: "https://serviceonline.bihar.gov.in/renderApplicationForm.do?serviceId=9330009" }
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
