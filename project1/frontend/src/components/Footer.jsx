function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Notes by sudie</p>
      <p>Copyright ⓒ {year} :D</p>
    </footer>
  );
}

export default Footer;
