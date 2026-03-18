"use client";
import { useState } from 'react';
import Link from 'next/link';
import { SparklesCore } from '../components/ui/sparkles';

export default function CodestormForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ teamNumber: '', ps: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        teamNumber: formData.teamNumber,
        problemStatement: formData.ps,
      }),
    });

    const data = await res.json();
    alert(data.message);
    if (data.status === 'success') window.location.reload();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative">
      {/* Sparkles background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesregister"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      {/* Back link */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500">
            CodeStorm 2.O
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-300 mt-2">
            Problem Statement Selection
          </h2>
          {/* Gradient divider */}
          <div className="w-full max-w-[20rem] h-4 mx-auto mt-3 relative">
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          </div>
        </div>

        {/* Card with gradient border */}
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-500">
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Team Number */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-indigo-300">
                  Team Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your team number"
                  value={formData.teamNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, teamNumber: e.target.value })
                  }
                  required
                  className="w-full bg-black/50 border border-indigo-500/50 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all duration-200"
                />
              </div>

              {/* Problem Statement */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-indigo-300">
                  Problem Statement
                </label>
                <input
                  type="text"
                  placeholder="Enter your problem statement"
                  value={formData.ps}
                  onChange={(e) =>
                    setFormData({ ...formData, ps: e.target.value })
                  }
                  required
                  className="w-full bg-black/50 border border-indigo-500/50 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all duration-200"
                />
              </div>

              {/* Submit button — matches site's spinning gradient border style */}
              <button
                type="submit"
                disabled={loading}
                className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-lg font-medium text-white backdrop-blur-3xl">
                  {loading ? 'Submitting…' : 'Submit'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
