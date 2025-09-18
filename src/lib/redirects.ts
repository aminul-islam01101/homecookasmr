import type { Redirect } from "next/dist/lib/load-custom-routes";

const redirects: Redirect[] = [
  {
    source: "/taler-pitha",
    destination: "https://youtube.com/shorts/GDbdYGd5PAA?si=O2DeEOxpZ2JrL5hZ",
    permanent: false,
  },
  {
    source: "/beef-vuna",
    destination: "https://youtube.com/shorts/t11UHqbZ7TI?si=j1zSgW1phPsnlEoW",
    permanent: false,
  },
  {
    source: "/aloo-tikki-burger",
    destination: "https://youtube.com/shorts/y-kErFvL3ZY?si=aJzKXuO4xOORuYRp",
    permanent: false,
  },
  {
    source: "/amla-booster",
    destination: "https://youtube.com/shorts/iRGkbdYp2vY?si=lWaleBXfPRf79a6w",
    permanent: false,
  },
];

export default redirects;
