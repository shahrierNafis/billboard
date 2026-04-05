"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type Advertisement = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image?: string | StaticImageData;
};

export function AdvertisementCard({ ad }: { ad: Advertisement }) {
  return (
    <Card className="w-full max-w-xl overflow-hidden rounded-[1.5rem] min-h-[320px] sm:min-h-[360px] font-mono">
      <a
        href={ad.href}
        target={ad.href.startsWith("mailto:") ? undefined : "_blank"}
        rel={ad.href.startsWith("mailto:") ? undefined : "noreferrer"}
        className="block"
      >
        {ad.image ? (
          <div className="relative h-56 w-full overflow-hidden sm:h-64">
            <Image
              className="h-full w-full object-cover"
              src={ad.image}
              alt={ad.title}
              fill
              sizes="100vw"
              priority={ad.id === "italki"}
            />
          </div>
        ) : null}
        <CardHeader className="flex flex-col gap-4 pt-6 px-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <CardTitle>{ad.title}</CardTitle>
            <CardDescription>{ad.subtitle}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-2">
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">{ad.description}</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:justify-between">
          <span className="text-sm text-muted-foreground break-words">
            {ad.id === "contact" ? "Email: ad-ops@example.com" : "Featured partner"}
          </span>
          <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Advertisement</span>
        </CardFooter>
      </a>
    </Card>
  );
}
