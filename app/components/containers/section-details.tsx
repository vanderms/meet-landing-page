import Separator from '../ui/separator';

export default function SectionDetails() {
  return (
    <section className="root-section-details">
      <Separator index="01" />
      <div className="gallery">
        <img src="/assets/desktop/image-woman-in-videocall.jpg" alt="" />
        <img src="/assets/desktop/image-women-videochatting.jpg" alt="" />
        <img src="/assets/desktop/image-men-in-meeting.jpg" alt="" />
        <img src="/assets/desktop/image-man-texting.jpg" alt="" />
      </div>
      <header className="header">
        <div className="subtitle">Built for modern use</div>
        <h2 className="title">Smarter meetings, all in one place </h2>
        <p className="description">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </header>
    </section>
  );
}
