import { Feature } from "./Feature";

const features = [
  {
    title: "Foundation",
    description:
      "Launch of core platform featuring head-to-head matches, basic tournament system, and Solana wallet integration. Users can compete in selected game titles and earn SOL rewards.",
  },
  {
    title: "Expansion",
    description:
      "Implementation of advanced tournament brackets, automated match verification, and expanded game library and leaderboard system",
  },
  {
    title: "Evolution",
    description:
      "Release of custom tournament creation tools, team management system, and advanced analytics dashboard. Integration with major esports titles and implementation of live streaming features",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
        <p className='text-center mt-5 text-xl text-color/70'>We&apos;re building the next evolution in competitive gaming and digital earnings. Our vision is to create a seamless ecosystem where players can compete, earn, and thrive in a blockchain-powered gaming environment. By combining cutting-edge Solana technology with competitive gaming, we&apos;re revolutionizing how players monetize their skills and creating opportunities for gamers of all skill levels to turn their passion into profit.
        </p>
        <div className='mt-16 flex flex-col sm:flex-row gap-4'>
          {features.map(({ title, description}) => (
            <Feature title={title} description={description} key={title}/>
          ))}
        </div>
      </div>
    </div>
  );
};
