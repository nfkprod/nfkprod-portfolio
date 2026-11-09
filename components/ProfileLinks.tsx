import { ArrowUpRight } from "lucide-react";
import { linkedinUrl } from "@/lib/contact";

export default function ProfileLinks() {
  return <div className="profile-links">
    <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
    <a href="https://t.me/Nfk23" target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={17} aria-hidden="true" /></a>
  </div>;
}
