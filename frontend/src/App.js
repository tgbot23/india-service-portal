import './App.css';

function App() {
  const links = [
    { name: "Aadhaar Portal", url: "https://uidai.gov.in" },
    { name: "PAN Card", url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
    { name: "RTO Services", url: "https://parivahan.gov.in" },
    { name: "RTPS Bihar", url: "https://rtps.bihar.gov.in" },
    { name: "CBSE Website", url: "https://cbse.gov.in" },
    { name: "Electricity Bill (NBPDCL)", url: "https://nbpdcl.co.in" },
    { name: "LNMIU University", url: "https://lnmu.ac.in" }
  ];

  return (
    <div className="App">
      <h1>🇮🇳 India Service Portal</h1>
      <div className="card-container">
        {links.map((item, index) => (
          <a className="card" href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;