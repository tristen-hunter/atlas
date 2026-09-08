export default function Demo() {
  return (
    <div id="demo" className="flex flex-col gap-10 px-6 md:px-12 lg:px-36 py-16">
      
      {/* Text */}
      <div className="flex flex-col gap-4">
        <h2>See It In Action (Demo)</h2>

        <p>
          This is a genuinely simple software - it is stripped back to the
          necessities to serve independent contractors. You only pay for what
          you use & need.
        </p>

        <p>
          Please watch this user demo to view this new approach in action -
          never seen before and a simpler solution than WeConnectU or PayProp.
        </p>

        <p>
          No setup, no new trust account, contractor CRM tools and AI
          integration for assistance.
        </p>
      </div>

      {/* Demo video */}
      <div className="w-full">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://player.vimeo.com/video/1224844794?h=c7ee3284db"
            title="Atlas software demo"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

    </div>
  )
}