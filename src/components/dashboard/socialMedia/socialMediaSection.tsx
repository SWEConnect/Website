import { SocialMedia } from "@prisma/client";

import SocialMediaCard from "./socialMediaCard";
import SocialMediaOutline from "./socialMediaOutline";
import SocialMediasEditor from "./socialMediasEditor";

type PropType = {
  socialMedias: SocialMedia[];
  projectId: string;
  editable: boolean;
};

const SocialMediaSection = (props: PropType) => {
  const { socialMedias, projectId, editable } = props;

  return (
    socialMedias !== undefined && (
      <>
        <section>
          <SocialMediaOutline>
            <>
              {socialMedias.length !== 0 && (
                socialMedias.map((socialMedia: SocialMedia, index: number) => (
                  <SocialMediaCard
                    socialMedia={socialMedia}
                    editable={editable}
                    key={`socialMediaCard${index}`}
                  />
                ))
              )}
            </>
          </SocialMediaOutline>
          {editable && <SocialMediasEditor projectId={projectId} />}
        </section>
      </>
    )
  );
};

export default SocialMediaSection;
