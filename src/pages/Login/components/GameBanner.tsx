export interface GameBannerProps {
  adsCount: number;
  bannerUrl: string;
  game: string;
}

export function GameBanner({ adsCount, bannerUrl, game }: GameBannerProps) {
  return(
    <div
      className="relative rounded-lg overflow-hidden cursor-pointer 
      hover:scale-105 transition-transform"
    >
      <img src={bannerUrl} alt={game} />
      <div className="w-full p-4 pt-16 bg-fadeGameGradient absolute bottom-0">
        <strong className="font-bold text-white block">
          {game}
        </strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncios
        </span>
      </div>
    </div>
  );
}