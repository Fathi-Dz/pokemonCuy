import poto from '../../assets/poke.png';

const Navbar = () => {
  const headerStyle = {
    backgroundColor: "#FFCC00", // kuning khas Pokémon
    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 50,
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center", // Logo di tengah
    alignItems: "center",
    padding: "12px 24px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "24px",
    fontWeight: "900",
    color: "#E60012", // merah Pokémon
    letterSpacing: "2px",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <img
            src={poto}
            alt="Pokémon Logo"
            style={{ height: "50px", width: "auto" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
