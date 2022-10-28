import React from "react";
import ilker_avatar from "../../assets/avatars/ilker_avatar.jpg";
import taylan_avatar from "../../assets/avatars/taylan_avatar.jpg";
import MemberCard from "./MemberCard";

export default function AboutBody() {
  const teamMember1 = {
    image: taylan_avatar,
    name: "Taylan Postalci",
    title: "CEO Software Engineer",
    instagramLink: "https://www.instagram.com/",
    gitHubLink: "https://github.com/ic2505",
  };

  const teamMember2 = {
    image: ilker_avatar,
    name: "ilker イケさん",
    title: "CTO Software Engineer",
    instagramLink: "https://www.instagram.com/ilkerciliv/",
    gitHubLink: "https://github.com/ic2505",
  };

  return (
    <div>
      <h1 className="flex justify-center mt-10 text-xl font-bold">
        {"TEAM MEMBERS"}
      </h1>
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <MemberCard teamMember={teamMember1} />
          <MemberCard teamMember={teamMember2} />
        </div>
      </div>
    </div>
  );
}
