const About = () => {
  return (
    <section className="mx-auto my-6 max-w-7xl px-6 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700 shadow-sm">
              About Capital Bull Wave
            </p>
            <h1 className="about-heading mt-6 max-w-3xl text-2xl font-black tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">
              Delhi-based market research, trading guidance, and investor education for modern stock market traders.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Capital Bull Wave operates from Netaji Subhash Place and Malviya Nagar, delivering research-led strategies, risk-managed trading support, and investor training for retail traders across India.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="text-xl font-semibold text-blue-600">Quick facts</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <p><strong className="text-slate-900">Offices:</strong> Netaji Subhash Place (Aggarwal Millenium Tower 2) </p>
              <p><strong className="text-slate-900">Services:</strong> Market research, trading guidance, risk management, and investor education.</p>
              <p><strong className="text-slate-900">Focus:</strong> Stock market research, equity/intraday support, and building trader confidence.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="space-y-6 border border-blue-200 rounded-[28px]  p-8 shadow-sm transition-colors duration-300">
            <h2 className="text-2xl underline font-semibold text-blue-700">Core business dealings</h2>
            <div className="space-y-4 text-slate-700 leading-7">
              <p className="font-semibold text-blue-400">Market Research</p>
              <p>Professional stock market analysis, trend identification, and support/resistance mapping tailored for Indian markets.</p>
              <p className="font-semibold text-blue-400" >Trading Guidance</p>
              <p>Structured equity delivery and intraday trading plans with active support for retail investors.</p>
              <p className="font-semibold text-blue-400">Risk Management</p>
              <p>Capital protection strategies and smart risk planning designed to preserve trader capital.</p>
              <p className="font-semibold text-blue-400" >Investor Education</p>
              <p>Training programs and community-led learning for beginners wanting to understand share market fundamentals.</p>
            </div>
          </div>

          <div className="space-y-6 rounded-[28px] bg-white p-8 shadow-sm transition-colors duration-300">
            <h2 className="text-2xl font-semibold underline text-blue-700">Locations & distinction</h2>
            <div className="space-y-4 text-slate-700 leading-7">
              <p><strong className="text-blue-500">Netaji Subhash Place (NSP):</strong> Office No. 671 (6th Floor) and Office No. 1275 (12th Floor) at Aggarwal Millenium Tower 2.</p>
              <p className="text-blue-400 font-semibold">Important distinction</p>
              <p>Do not confuse this local Delhi advisory platform with Bullwaves, an unrelated international Forex/CFD brokerage regulated offshore in the Seychelles.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[28px] bg-slate-950/5 p-8 text-slate-700 transition-colors duration-300 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-2 rounded-[24px] bg-white p-6 shadow-sm transition duration-300 hover:bg-sky-100 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Research</p>
              <p className="font-semibold text-slate-900">In-depth market intelligence</p>
            </div>
            <div className="space-y-2 rounded-[24px] bg-white p-6 shadow-sm transition duration-300 hover:bg-sky-100 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Guidance</p>
              <p className="font-semibold text-slate-900">Structured trading support</p>
            </div>
            <div className="space-y-2 rounded-[24px] bg-white p-6 shadow-sm transition duration-300 hover:bg-sky-100 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Education</p>
              <p className="font-semibold text-slate-900">Beginner-friendly learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About