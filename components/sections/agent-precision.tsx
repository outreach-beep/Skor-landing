import Title from "../title";

const AgentPresSection = () => {
  return (
    <section id="agent-precision" className="pt-10 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-8">
        <Title
          tagline={"know about skor AI Agents"}
          title={"AGENT PRECISION"}
          align={1}
        />
      </div>

      <p className="text-white/80 font-sora text-tertiary lg:text-tertiary-lg md:text-tertiary-md leading-relaxed text-center">
        Real Time AI Coach - Play Smarter, Not Harder
        <br />
        <br />
        <span className="text-[#ff6b6b] font-sora">
          🔴 Now Live for Counter-Strike 2
        </span>
      </p>
      
    </section>
  );
};

export default AgentPresSection;
