import React from 'react'
import { HighlighterItem } from './highlighter';
import { Particles } from './particles';
import Image from 'next/image';
import testThumbnail from "@/public/testThumbnail.jpeg"
const VideoCard = () => {
  return (
    <div className="col-span-1">
      <HighlighterItem>
        <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
          <Particles
            className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
            quantity={200}
          />
          <div className="flex flex-col">
            <div
              className="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
            </div>
            <div className="p-8">
              <div className="flex flex-col justify-start items-start gap-y-5">
                <Image
                  src={testThumbnail}
                  alt="testThumbnail"
                  className="w-full h-full rounded-md"
                />
                <h3 className="text-lg font-semibold leading-8">
                  How to create thumbnails
                </h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {"Self host and maintain Highstorm on your own servers Self host and maintain Highstorm on your own servers Self host and maintain Highstorm on your own servers Self host and maintain Highstorm on your own servers"
                  .slice(0, 75)
                  .concat("....")}
              </p>
              <div className="mt-16 flex justify-start items-center w-full gap-x-5">
                <button className="font-medium  whitespace-nowrap transition duration-150 ease-in-out text-[#232222]  group flex justify-start items-center gap-1 bg-[#5cff43] hover:bg-[#58e343] border-2 border-green-800 px-2 py-1 rounded-lg">
                  Approve
                </button>
                <button className="font-medium  whitespace-nowrap transition duration-150 ease-in-out text-zinc-100 hover:text-white group flex justify-start items-center gap-1">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </HighlighterItem>
    </div>
  );
}

export default VideoCard
