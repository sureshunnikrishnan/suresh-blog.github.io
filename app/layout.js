import React from "react";
import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import { serif } from "./fonts";
import "./global.css";
// import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

// import MailchimpForm from "./MailChimpForm";

export default function RootLayout({ children }) {
  return (
    <AutoRefresh>
      <html lang="en" className={serif.className}>
      <body className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
      <header className="mb-14 flex flex-row place-content-between">
          <HomeLink/>
          <div className="relative space-x-2 flex top-[4px] italic">
              <Link href="https://x.com/sureshunnikrish" target="_blank">
                  <div className="flex items-center h-full justify-center">
                      <svg style={{'paddingTop': '2px'}} xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                           fill="currentColor"
                           className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path
                              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                      </svg>

                  </div>
              </Link>
              {/* <Link href="https://github.com/sureshunnikrishnan" target="_blank">
                  <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32"
                       data-view-component="true">
                      <path
                          d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
              </Link> */}
          </div>
      </header>
      <main>{children}</main>
      <div style={{'padding': '1.5rem 0'}}>
        <hr/>
      </div>
      {/* <MailchimpForm/> */}
      </body>
      {/* <GoogleTagManager gtmId="GTM-N35D94NT" />
      <GoogleAnalytics gaId="G-PX6Q4ZJ66L" /> */}
      </html>
    </AutoRefresh>
  );
}
