function Skills() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Tecnologías</h2>

      <div style={styles.grid}>
        <div>
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div>
          <h3>Backend</h3>
          <p>PHP, Python</p>
        </div>

        <div>
          <h3>Bases de Datos</h3>
          <p>MySQL, MongoDB</p>
        </div>

        <div>
          <h3>Herramientas</h3>
          <p>Git, XAMPP, VS Code, Packet Tracer</p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center"
  },
  title: {
    fontSize: "32px",
    marginBottom: "40px",
    color: "#38bdf8"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
    maxWidth: "900px",
    margin: "0 auto"
  }
}

export default Skills