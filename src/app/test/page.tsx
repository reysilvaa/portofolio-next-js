"use client";

import React from 'react';
import { ThreeBackground } from '@/components/three-background';
import { ThemeSwitcher } from '@/components/theme-switcher';

export default function TestPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <ThreeBackground />
      
      <div className="z-10 p-10 rounded-lg bg-cowboy-parchment dark:bg-cowboy-wood shadow-xl max-w-md text-center">
        <h1 className="text-3xl font-western mb-4 text-cowboy-leather dark:text-cowboy-gold">
          Western Cowboy Theme
        </h1>
        <p className="font-scrapbook mb-6 text-cowboy-leather dark:text-cowboy-sand">
          Ini adalah test untuk Western Cowboy Scrapbook style dengan dukungan tema light dan dark.
        </p>
        <div className="mt-4">
          <ThemeSwitcher />
        </div>
      </div>
    </main>
  );
} 