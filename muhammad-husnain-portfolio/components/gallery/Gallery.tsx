import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <Section id="gallery">
      <Container>
        <Heading
          eyebrow="Gallery"
          title="Professional Gallery & Highlights"
          description="A visual showcase of security operations, projects, certifications, and professional achievements."
        />

        <div className="mt-16">
          <GalleryGrid />
        </div>
      </Container>
    </Section>
  );
}