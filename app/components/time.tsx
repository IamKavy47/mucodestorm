import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "March 19, 2026",
      content: (
        <div>
          <h2 className="text-xl">
            Inaugration
          </h2><br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕙 10:00 AM - 11:00 AM </p><br />
          </div>
        </div>
      ),
    },
    {
      title: "March 19, 2026",
      content: (
        <div>
          <h2 className="text-xl">
            First Day of CodeStorm
          </h2><br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕙 11:30 AM</p><br />
          </div>
        </div>
      ),
    },{
          title: "March 19, 2026",
      content: (
        <div>
          <h2 className="text-xl">
            Cultural Night
          </h2><br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕙 06:00 PM - 10:30 PM </p><br />
          </div>
        </div>
      ),
    },
    {
      title: "March 20, 2026",
      content: (
        <div>
          <h2 className="text-xl">Second Day of CodeStorm</h2> <br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕣 10:00 AM - 12:00 AM - Judging Round</p><br />
            <p>🕜 12:00 - 1:00 PM - Prize Distribution</p>
          </div>
        </div>
      ),
    },
    {
      title: "March 20, 2026",
      content: (
        <div>
          <h2 className="text-xl">
            "The Jamvant Effect"
          </h2><br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕙 04:30 PM - 07:00 PM</p><br />
            <p>🕙 07:00 PM - 08:30 PM - Bike Stunt Show</p><br />
          </div>
        </div>
      ),
    },
    
    {
      title: "March 21, 2026",
      content: (
        <div>
          <h2 className="text-xl">
            Celebrity Night
          </h2><br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕙 07:00 PM - 10:00 PM</p><br />
          </div>
        </div>
      ),
    },
    ];
  return (
    <div  className="w-full bg-transparent">
      <Timeline data={data} />
    </div>
  );
}
