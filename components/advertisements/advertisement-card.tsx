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
    <Card className="w-full max-w-xl overflow-hidden rounded-[1.5rem] min-h-[360px] font-mono">
      <a
        href={ad.href}
        target={ad.href.startsWith("mailto:") ? undefined : "_blank"}
        rel={ad.href.startsWith("mailto:") ? undefined : "noreferrer"}
      >
        {ad.image ? (
          <div className="relative h-64 w-full overflow-hidden">
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
        <CardHeader className="items-start gap-4 pt-6 px-6">
          <div className="space-y-2">
            <CardTitle>{ad.title}</CardTitle>
            <CardDescription>{ad.subtitle}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-2">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{ad.description}</p>
        </CardContent>
        <CardFooter className="justify-between px-6 py-4">
          <span className="text-sm text-muted-foreground">
            {ad.id === "contact" ? "Email: ad-ops@example.com" : "Featured partner"}
          </span>
          <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Advertisement</span>
        </CardFooter>
      </a>
    </Card>
  );
}
