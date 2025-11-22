import { YouTubeEmbed } from "@next/third-parties/google";

type YoutubeProps = {
  videoid: string;
};

export default function Youtube({ videoid }: YoutubeProps) {
  return <YouTubeEmbed videoid={videoid} />;
}
