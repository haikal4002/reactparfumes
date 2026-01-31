import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You could log the error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      const { error } = this.state;
      return (
        <div className="error-boundary container" role="alert">
          <h2>Terjadi kesalahan</h2>
          <p>
            Kami mendeteksi ada masalah di halaman ini. Maaf atas
            ketidaknyamanan.
          </p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            <summary>Informasi teknis (klik untuk lihat)</summary>
            <pre>{error?.toString()}</pre>
          </details>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
            <button
              className="btn"
              onClick={() => window.location.reload()}
              aria-label="Muat ulang halaman"
            >
              Muat ulang
            </button>
            <a
              className="btn btn-primary"
              href={`mailto:dev@parfumebraves.example?subject=Error report&body=${encodeURIComponent(
                `Error: ${error?.toString()}\n\nURL: ${window.location.href}`,
              )}`}
            >
              Laporkan
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
