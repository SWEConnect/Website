import { SocialMediaPlatformType } from "@prisma/client";
import Link from "next/link";
import {
  BrandFacebook,
  BrandInstagram,
  BrandLinkedin,
  BrandTwitter,
  WorldWww,
} from "tabler-icons-react";

import SocialMediaEditor from "./socialMediaEditor";

import type { SocialMedia } from "@prisma/client";

type PropType = {
  socialMedia: SocialMedia;
  editable: boolean;
  projectId: string;
};

const SocialMediaCard = (props: PropType) => {
  const { socialMedia, editable, projectId } = props;

  const iconClassName =
    "w-full h-full text-secondary transition duration-300 ease-in-out hover:text-primary";
  const icon: JSX.Element =
    socialMedia.platform === SocialMediaPlatformType.FACEBOOK ? (
      <BrandFacebook className={iconClassName} />
    ) : socialMedia.platform === SocialMediaPlatformType.INSTAGRAM ? (
      <BrandInstagram className={iconClassName} />
    ) : socialMedia.platform === SocialMediaPlatformType.LINKEDIN ? (
      <BrandLinkedin className={iconClassName} />
    ) : socialMedia.platform === SocialMediaPlatformType.TWITTER ? (
      <BrandTwitter className={iconClassName} />
    ) : (
      <WorldWww className={iconClassName} />
    );

  return (
    <>
      <div className="relative my-4 h-16 w-16">
        <Link className="h-full w-full" href={socialMedia.url}>
          {icon}
        </Link>

        {editable && (
          <SocialMediaEditor
            url={socialMedia.url}
            platform={socialMedia.platform}
            socialMediaId={socialMedia.id}
            projectId={projectId}
          />
        )}
      </div>
    </>
  );
};

export default SocialMediaCard;
