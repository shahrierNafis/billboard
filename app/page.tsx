"use client";

import { AdvertisementCarousel } from "@/components/advertisements/advertisement-carousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-20 text-slate-900 dark:bg-black dark:text-slate-100">
      <main className="w-full max-w-5xl space-y-10">
        <section className="space-y-6">
          <AdvertisementCarousel />
        </section>
      </main>
    </div>
  );
}
