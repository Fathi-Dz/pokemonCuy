const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(90deg, #1E3A8A, #0B1C47)", // gradasi biru tua
    color: "white",
    textAlign: "center",
    padding: "32px 16px",
    marginTop: "80px",
    borderTop: "4px solid #E60012", // aksen merah Pokemon
  };

  const yearStyle = {
    color: "#FFCC00", // kuning khas pokemon
    fontWeight: "bold",
    fontSize: "20px",
    letterSpacing: "1px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
  };

  const sloganStyle = {
    fontSize: "14px",
    marginTop: "6px",
    color: "#E5E7EB",
    fontStyle: "italic",
  };

  const linkContainer = {
    marginTop: "14px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  return (
    <footer style={footerStyle}>
      <p style={yearStyle}>
        © {new Date().getFullYear()} Pokédex by Trainer
      </p>
      <p style={sloganStyle}>
        Built with ❤️ and Pokéballs | Inspired by Pokémon
      </p>
      <div style={linkContainer}>
        <a
          href="#facebook"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FFCC00")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Facebook
        </a>
        <a
          href="#twitter"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FFCC00")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Twitter
        </a>
        <a
          href="#instagram"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FFCC00")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
