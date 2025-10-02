export default function ErrorMessage({ message }) {
  return (
    <section className="not-found section-message">
      <img
        src="images/error-404-page-found-natural-concept-illustration-web-missing-landing-page_607751-150.avif"
        alt="Error JPG"
      />
      <div>
        <h1>Error</h1>
        <h4 className="regular-txt">{message}</h4>
      </div>
    </section>
  );
}
