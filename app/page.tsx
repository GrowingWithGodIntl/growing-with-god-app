export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#F4F0E8]">
      <div className="mx-auto min-h-screen max-w-md pb-28">

        {/* HEADER */}
        <header className="px-5 pb-5 pt-8">
          <div className="mb-6 flex justify-center">
  <img
    src="/gwg-logo.jpeg"
    alt="Growing With God"
    className="h-auto w-48 rounded-2xl"
  />
</div>
          <div className="flex items-start justify-between">
            <div>

              <h1 className="mt-3 text-4xl font-semibold leading-none">
                Good Morning.
              </h1>

              <p className="mt-2 text-sm text-white/55">
                Let&apos;s grow today.
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
              ♡
            </div>
          </div>
        </header>

        {/* GROWTH STREAK */}
        <section className="px-5">
          <div className="rounded-3xl border border-white/10 bg-[#141414] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  My Growth
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  🔥 7 Day Streak
                </h2>
              </div>

              <span className="text-[#CDA66B]">View →</span>
            </div>

            <div className="mt-5 flex justify-between text-center text-xs">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <div key={index}>
                  <div
                    className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full ${
                      index < 4
                        ? "bg-[#CDA66B] text-black"
                        : "border border-white/15 text-white/40"
                    }`}
                  >
                    {index < 4 ? "✓" : ""}
                  </div>
                  <span className="text-white/40">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE BIBLE STUDY */}
        <section className="px-5 pt-5">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#24201A] to-[#101010] p-6">
            <span className="inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              ● We&apos;re Live
            </span>

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#CDA66B]">
              Wednesday Nights
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              Bible Study
            </h2>

            <p className="mt-2 text-sm text-white/55">
              Every Wednesday • 8 PM CST / 9 PM EST
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="rounded-2xl bg-red-600 px-4 py-3 text-sm font-semibold text-white">
                ▶ YouTube
              </button>

              <button className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">
                Facebook
              </button>
            </div>
          </div>
        </section>

        {/* DAILY DEVOTIONAL */}
        <section className="px-5 pt-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#CDA66B]">
                Daily Bread
              </p>

              <h2 className="mt-1 text-2xl font-semibold">
                Today&apos;s Devotional
              </h2>
            </div>

            <span className="text-sm text-white/40">
              See all
            </span>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#141414] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Nehemiah 6:3–9
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              Don&apos;t Look Down
            </h3>

            <p className="mt-4 leading-7 text-white/60">
              Not every distraction deserves your attention. Sometimes
              protecting what God called you to build means refusing to
              come down.
            </p>

            <button className="mt-6 flex w-full items-center justify-between rounded-2xl bg-[#F4F0E8] px-5 py-4 font-semibold text-black">
              Read Today&apos;s Devotional
              <span>→</span>
            </button>
          </div>
        </section>

        {/* WEEKLY CHALLENGE */}
        <section className="px-5 pt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#CDA66B]">
            This Week
          </p>

          <h2 className="mt-1 text-2xl font-semibold">
            Growth Challenge
          </h2>

          <div className="mt-4 rounded-3xl border border-[#CDA66B]/25 bg-[#17140F] p-6">
            <span className="text-3xl">🙏🏽</span>

            <h3 className="mt-4 text-xl font-semibold">
              God Before the Scroll
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/55">
              For the next 7 days, pray before opening social media
              each morning.
            </p>

            <button className="mt-5 rounded-full border border-[#CDA66B] px-5 py-2 text-sm text-[#E3C18C]">
              Join Challenge
            </button>
          </div>
        </section>

        {/* BOTTOM NAVIGATION */}
        <nav className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-md -translate-x-1/2 justify-around border-t border-white/10 bg-[#0B0B0B]/95 px-2 py-4 backdrop-blur-xl">

          <button className="flex flex-col items-center gap-1 text-[#CDA66B]">
            <span className="text-lg">⌂</span>
            <span className="text-[10px]">Home</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-white/40">
            <span className="text-lg">▥</span>
            <span className="text-[10px]">Grow</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-white/40">
            <span className="text-lg">▶</span>
            <span className="text-[10px]">Watch</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-white/40">
            <span className="text-lg">♧</span>
            <span className="text-[10px]">Community</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-white/40">
            <span className="text-lg">•••</span>
            <span className="text-[10px]">More</span>
          </button>

        </nav>
      </div>
    </main>
  );
}