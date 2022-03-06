import Separator from '../ui/separator';
import { Link } from 'remix';

export default function SectionCta() {
  return (
    <section className="root-section-cta">
      <div className="sep-container">
        <Separator index="02" />
      </div>
      <header className="header">
        <div className="header-container">
          <h2 className="title">Experience more together</h2>
          <p className="description">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Link to="/" className="root-button purple">
            Download <em>v1.3</em>
          </Link>
        </div>
      </header>
    </section>
  );
}
