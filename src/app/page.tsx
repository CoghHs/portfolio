import IntroSection from "@/components/sections/IntroSection";
import Navigation from "@/components/common/NavBar";
import HomePage from "@/components/sections/HomePage";
import ProfileSection from "@/components/sections/ProfileSections";
import SkillsSection from "@/components/sections/skills/SkillsSections";
import ProjectSection from "@/components/sections/project/ProjectSection";
import ConnectSection from "@/components/sections/ConnectSection";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <Navigation />
      <HomePage />
      <ProfileSection />
      <SkillsSection />
      <ProjectSection />
      <ConnectSection />
    </main>
  );
}
