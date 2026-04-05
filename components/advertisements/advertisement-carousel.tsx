/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AdvertisementCard, type Advertisement } from "./advertisement-card";
import italki from "../../public/Italki main page.png";

const advertisements: Advertisement[] = [
  {
    id: "italki",
    title: "italki language programs",
    subtitle: "Sponsored partner promotion",
    description:
      "Explore italki to book live language lessons with expert tutors, practice conversation skills, and grow your fluency. Make your first purchase and get $10 off.",
    href: "https://www.italki.com/affshare?ref=af18343896",
    image: italki,
  },
  {
    id: "contact",
    title: "Advertise with Billboard",
    subtitle: "Promotions and sponsorships",
    description: "If you want contact me for advertisements or promotions, email me at ad-ops@example.com.",
    href: "mailto:ad-ops@example.com",
  },
];

export function AdvertisementCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const time = 10; // seconds
  const [timer, setTimer] = React.useState<number>(time);

  React.useEffect(() => {
    if (!api) return;

    if (timer === 1) api.scrollNext();

    return () => {};
  }, [api, timer]);
  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setTimer((prev) => (prev === 1 ? time : prev - 1));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Carousel
      opts={{ loop: true, align: "center", slidesToScroll: 1, containScroll: "trimSnaps" }}
      setApi={setApi}
      className="relative select-none "
    >
      <CarouselContent className="overflow-visible">
        {advertisements.map((ad) => (
          <CarouselItem key={ad.id} className="min-w-full py-4">
            <div className="flex justify-center px-2 sm:px-0">
              <AdvertisementCard ad={ad} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        className="hidden sm:flex"
        aria-label="Previous advertisement"
        onClick={() => {
          setTimer(time);
          api && api.scrollPrev();
        }}
      />
      <CarouselNext
        className="hidden sm:flex"
        aria-label="Next advertisement"
        onClick={() => {
          setTimer(time);
          api && api.scrollNext();
        }}
      />
    </Carousel>
  );
}
