import IntroSection from "@/components/sections/intro/IntroSection";
import Navigation from "@/components/common/NavBar";
import HomeSection from "@/components/sections/home/HomePage";
import ProfileSection from "@/components/sections/profile/ProfileSection";
import SkillsSection from "@/components/sections/skills/SkillsSections";
import ProjectSection from "@/components/sections/project/ProjectSection";
import ConnectSection from "@/components/sections/connect/ConnectSection";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <Navigation />
      <HomeSection />
      <ProfileSection />
      <SkillsSection />
      <ProjectSection />
      <ConnectSection />
    </main>
  );
}
