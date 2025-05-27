if (!self.define) {
  let e,
    i = {};
  const s = (s, a) => (
    (s = new URL(s + ".js", a).href),
    i[s] ||
      new Promise(i => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, c) => {
    const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (i[n]) return;
    let r = {};
    const o = e => s(e, n),
      f = { module: { uri: n }, exports: r, require: o };
    i[n] = Promise.all(a.map(e => f[e] || o(e))).then(e => (c(...e), r));
  };
}
define(["./workbox-e9849328"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/app-build-manifest.json", revision: "dcedc9e205dbe6ce439cf91d86495fbb" },
        { url: "/_next/static/chunks/1216-74a853eb1e136965.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/1272.e72a3c827c0e312b.js", revision: "e72a3c827c0e312b" },
        { url: "/_next/static/chunks/1885-ed32139bb90abcd2.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/2439-14468eacdc36c509.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/2493-2b78b1bca1234f30.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/2625-6183ecf82665b32b.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/2639.c0bf042f3ed0bf4f.js", revision: "c0bf042f3ed0bf4f" },
        { url: "/_next/static/chunks/270.aa0e21cc80c89c4f.js", revision: "aa0e21cc80c89c4f" },
        { url: "/_next/static/chunks/2967-0def88e18273e1c2.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/3621-1f85c9cbf75d7280.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/3942-e6d02dd37e516c7f.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/39811124.fb5e4c0d8a3215b5.js", revision: "fb5e4c0d8a3215b5" },
        { url: "/_next/static/chunks/4422-48653bd3b601edbc.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/4487.88e8ce5377334ca0.js", revision: "88e8ce5377334ca0" },
        {
          url: "/_next/static/chunks/47edcb22-b202c7eab60f0bc3.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        { url: "/_next/static/chunks/4803-104e908adc56f007.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/5683-a772c9c78031fb2e.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/5835-c8b37ebd0816b094.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/6830-7ee468f841367f3b.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/6983-2bcb99fc1b050a89.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/7425-1747939c5e685421.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/7462-cfa9f3ff2d05b3f3.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/7576-c643d8f28e84c4ad.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/8158-f15f7528a4e7ada6.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/9048-45b1ae582b6a236d.js", revision: "mz8sDNNfk9KFidebOL08j" },
        { url: "/_next/static/chunks/9075.0f72f8863926b5a5.js", revision: "0f72f8863926b5a5" },
        { url: "/_next/static/chunks/91c6c604.19ff2a438ca1fc24.js", revision: "19ff2a438ca1fc24" },
        { url: "/_next/static/chunks/9323-36d443306315e67d.js", revision: "mz8sDNNfk9KFidebOL08j" },
        {
          url: "/_next/static/chunks/app/_not-found/page-43a862bab7264156.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-591e5cf51dc78268.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/auth/redirect/page-d7433886cb1f6cd2.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/challenge/%5Bid%5D/page-f3c37154b5f910b2.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/challenge/create/page-5f4b29668d1309c3.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/challenge/page-63ca7c34620c5fc0.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/challenge/preview/page-dfc3f061cf689516.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/customer/page-fb896151922f9ef5.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/layout-2286a888f8b12926.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/main/page-18dd6ffa90edf55d.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/login/page-6facc8d5594fbd8d.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/main/page-74f4aa7654c45702.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/qrscan/page-ef45e3b40b68d61b.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/register/page-c1e6c0211db84d0c.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/stampbook/create/page-a6b5902f5f5d3baf.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/stampbook/custom/page-59a5e9a731b684e0.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/stampbook/example/page-2473d7f02b3d622b.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/stampbook/info/page-148d1fff85cabea0.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/stampbook/page-a00ce4a711c93ae6.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/owner/stampbook/template/page-65f1cd0a653158e6.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/page-e731abbc1d172864.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/reward/%5Bid%5D/page-9dd4b22b1eb2455a.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/reward/layout-c9a6e4b74801e754.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/reward/page-6536f482750841b1.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/reward/search/page-b44d40d988b9196f.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/searchcafe/page-247fb54112d15021.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/stamplist/%5Bid%5D/page-0775178c05dfafdc.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/app/stamplist/page-3b629add56795201.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/framework-6fef5ed69b61136d.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        { url: "/_next/static/chunks/main-76ed1ffce5117a66.js", revision: "mz8sDNNfk9KFidebOL08j" },
        {
          url: "/_next/static/chunks/main-app-efdfefd962b5e366.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/pages/_app-9dd7db20aaaf49b3.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/pages/_error-956659f0dadac578.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-040fcca525fc24c9.js",
          revision: "mz8sDNNfk9KFidebOL08j",
        },
        { url: "/_next/static/css/98a02f28b3e19c26.css", revision: "98a02f28b3e19c26" },
        {
          url: "/_next/static/media/569ce4b8f30dc480-s.p.woff2",
          revision: "ef6cefb32024deac234e82f932a95cbd",
        },
        {
          url: "/_next/static/media/747892c23ea88013-s.woff2",
          revision: "a0761690ccf4441ace5cec893b82d4ab",
        },
        {
          url: "/_next/static/media/8d697b304b401681-s.woff2",
          revision: "cc728f6c0adb04da0dfcb0fc436a8ae5",
        },
        {
          url: "/_next/static/media/93f479601ee12b01-s.p.woff2",
          revision: "da83d5f06d825c5ae65b7cca706cb312",
        },
        {
          url: "/_next/static/media/9610d9e46709d722-s.woff2",
          revision: "7b7c0ef93df188a852344fc272fc096b",
        },
        {
          url: "/_next/static/media/ba015fad6dcf6784-s.woff2",
          revision: "8ea4f719af3312a055caf09f34c89a77",
        },
        {
          url: "/_next/static/mz8sDNNfk9KFidebOL08j/_buildManifest.js",
          revision: "ed530fe7aaf8c9dce37c59457e3dda63",
        },
        {
          url: "/_next/static/mz8sDNNfk9KFidebOL08j/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/assets/splash/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
          revision: "065e4dd5c6c330eff8f739168700f56f",
        },
        {
          url: "/assets/splash/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
          revision: "fabfa77a412e3504c4f0cc860c82068c",
        },
        {
          url: "/assets/splash/iPhone_11__iPhone_XR_portrait.png",
          revision: "204de512b4fff48124e7cb251b13eb03",
        },
        {
          url: "/assets/splash/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
          revision: "633dd732de20cbc3acde15390c0065c4",
        },
        {
          url: "/assets/splash/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
          revision: "313c7ce00f7ec7bf80fb0a4a0d995c54",
        },
        {
          url: "/assets/splash/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
          revision: "8e7eed52a98255f9a374c4afe530a2ee",
        },
        {
          url: "/assets/splash/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png",
          revision: "83131f126cae11f2ff31e523e196b907",
        },
        {
          url: "/assets/splash/iPhone_16_Pro_Max_portrait.png",
          revision: "49d07cd5140ae7fed8c169b1b18125e8",
        },
        {
          url: "/assets/splash/iPhone_16_Pro_portrait.png",
          revision: "6f4dd39bc14ceb172f87a8b489d6eece",
        },
        {
          url: "/assets/splash/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png",
          revision: "d16523a062c40729d6fab80eadfcb3c5",
        },
        {
          url: "/assets/splash/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
          revision: "ec519aa01ea537cd1a648762a26b3fbb",
        },
        {
          url: "/assets/splash/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
          revision: "bd3603ac2723ef40629c37b6ca604874",
        },
        { url: "/ecokIcon.png", revision: "88f366456907046b3e05b449dd7c6624" },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        { url: "/fonts/NotoSans-Bold.woff2", revision: "c18403ddf95b7cb8dd61b1f2539b11dd" },
        { url: "/fonts/NotoSans-Medium.woff2", revision: "eb76c0603e9bb040d829fe315211423b" },
        { url: "/fonts/NotoSans-Regular.woff2", revision: "4e2910267e88d635a5b26172ee62786a" },
        { url: "/fonts/Pretendard-Bold.woff2", revision: "33860c9446a2671456e4619020774137" },
        { url: "/fonts/Pretendard-Medium.woff2", revision: "65d0a735617322a4fe0bcc5350642159" },
        { url: "/fonts/Pretendard-Regular.woff2", revision: "76a1283c27610a9ad7d6940b9b174e46" },
        { url: "/fonts/Pretendard-SemiBold.woff2", revision: "d3b288a528801dae385d6f104693e022" },
        { url: "/fonts/SUIT-Bold.woff2", revision: "cf624aa1e3a5db84d7dca18dbe9bca0a" },
        { url: "/fonts/SUIT-Medium.woff2", revision: "112206a25e7e3d03eb5286ee0891c651" },
        { url: "/fonts/SUIT-Regular.woff2", revision: "f6bc1a63987b0e39ad1977b5778d61d4" },
        { url: "/fonts/SUIT-SemiBold.woff2", revision: "3f033d89789de6873b52e8a0c6c10510" },
        { url: "/fonts/SUITE-Bold.woff2", revision: "ff7f6ae4fa49df2c995feaafd5e1699c" },
        { url: "/fonts/SUITE-Medium.woff2", revision: "a492a5717351100a275bd27071805539" },
        { url: "/fonts/SUITE-Regular.woff2", revision: "b5189b5d453c3963d289e1e74ca0bea1" },
        { url: "/fonts/SUITE-SemiBold.woff2", revision: "8ea765df86a39efc72f2ef362532fc16" },
        { url: "/fortuneCharacter.svg", revision: "ccd4347b5fd8be7433cfe6b84225b67b" },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        { url: "/icon/arrow-down.svg", revision: "f1cc654c205aaac2250941da9f11f00b" },
        { url: "/icon/arrow-left.svg", revision: "ddcc999471a65eee2c50c167ef7d6d63" },
        { url: "/icon/arrow-right.svg", revision: "7ec57178a3065b75fc2f5d21f6ade5ab" },
        { url: "/icon/bin.svg", revision: "b765c6edd90656587f79664708557229" },
        { url: "/icon/black-hand.svg", revision: "6dd83da163308e2401dbae003b2c9c81" },
        { url: "/icon/black-qr.svg", revision: "cf959e49c5966203e224fe05a3d2410a" },
        { url: "/icon/black-stamp.svg", revision: "7f4be71100420812045df168592405fc" },
        { url: "/icon/bottomsheet/location.svg", revision: "3b109d160a6edd47e38cccdd92b238f1" },
        {
          url: "/icon/bottomsheet/search-location.svg",
          revision: "19d2cec4b1309580b91f31cf77c8381e",
        },
        { url: "/icon/challenge/date.svg", revision: "74fd6aedfccbdf3595a4294a6e6d39fe" },
        { url: "/icon/challenge/join.svg", revision: "6f67eddd3578c757face31fbb4488e51" },
        { url: "/icon/challenge/progress.svg", revision: "8406e4c725aac809f13958aeff07fca7" },
        { url: "/icon/challenge/qrcode.svg", revision: "b741cd0a6a658026d63a92fbf93cea97" },
        { url: "/icon/challenge/reward.svg", revision: "dd1a686ef0492475b6cd93e3a13fbc5a" },
        { url: "/icon/challenge/success.svg", revision: "49712a7a6c2a03316a3b3702271fc337" },
        { url: "/icon/clock.svg", revision: "72f190688bec7ce93478aaf2e18f406f" },
        { url: "/icon/coffee.svg", revision: "d28ee5a3c97bb90d610e86a4f482198e" },
        { url: "/icon/customNav/background.svg", revision: "5de5e3cb266197d862356fd8d64c61bd" },
        { url: "/icon/customNav/text.svg", revision: "9f9ff775b92afc92aabf086341244e90" },
        { url: "/icon/ecok-logo.svg", revision: "0c38983e4d59993df700d7bf0ccb0d49" },
        { url: "/icon/evaluation.svg", revision: "1d3eadeba188e058431aa788bd4e7880" },
        { url: "/icon/exit.svg", revision: "dfbde540780658d95069484764f9f156" },
        { url: "/icon/file-jpg.svg", revision: "5a8cf5f855a3812bb8f87b619253f491" },
        { url: "/icon/file-pdf.svg", revision: "484a81e80bc73e45d281a3a53b47901a" },
        { url: "/icon/file-png.svg", revision: "ffc8f0db29799bacc9347c7342559ddb" },
        { url: "/icon/green-hand.svg", revision: "74b482d4f9eb698589e99320a858fdbe" },
        { url: "/icon/green-qr.svg", revision: "e6960eb11cc8ddac72139c2c9717377e" },
        { url: "/icon/green-stamp.svg", revision: "0dcbed85bdf973b3f6d07fa1791d1d23" },
        { url: "/icon/hamburger.svg", revision: "d303ba7e3ad2b0046e96bfa6e9cf7462" },
        { url: "/icon/home-active.svg", revision: "df1da27c0c767fa79e7f322265ef366c" },
        { url: "/icon/home.svg", revision: "52f88c8af51d7a000b4fca4c91a9d9a1" },
        { url: "/icon/image-icon.svg", revision: "e8eea38bcd1025c9c2eaf09ed06973b4" },
        { url: "/icon/info.svg", revision: "c148f8afec97672d377944c65ee91eb0" },
        { url: "/icon/kakao-logo.svg", revision: "aa63193d00446c690738d73256c4bb00" },
        { url: "/icon/magazine-active.svg", revision: "220f39ffd4660e84c8fb335721009788" },
        { url: "/icon/magazine.svg", revision: "c6ae23e40ee0a803bcf30fb812a0eb29" },
        { url: "/icon/orange-hand.svg", revision: "4806dcfc0269e3733f2a665a6cb801c2" },
        { url: "/icon/orange-qr.svg", revision: "6e1e5f1c9530f14bac904268630bd70f" },
        { url: "/icon/orange-stamp.svg", revision: "9f2bd0bb1bf6ded8644ca087ff07c3cb" },
        {
          url: "/icon/ownerGNB/challenge-active.svg",
          revision: "b1942eb4d94286dcb6a6b98d6a7f4ab3",
        },
        { url: "/icon/ownerGNB/challenge.svg", revision: "e4b9ee7cc5fd8a37bcc8b06e7cf2720f" },
        { url: "/icon/ownerGNB/design-active.svg", revision: "d72eaa477a852f04cfd824951274167d" },
        { url: "/icon/ownerGNB/design.svg", revision: "90c651ab1818aaa057d1c987ce27e141" },
        { url: "/icon/ownerGNB/home-active.svg", revision: "df1da27c0c767fa79e7f322265ef366c" },
        { url: "/icon/ownerGNB/home.svg", revision: "014c1f19398f20cc1fc13c1145f0823f" },
        { url: "/icon/ownerGNB/mypage-active.svg", revision: "c7f240f9adc875514124740e24c0a69d" },
        { url: "/icon/ownerGNB/mypage.svg", revision: "4e0cb3be93c00e82e76d572c44b38cd3" },
        { url: "/icon/palette.svg", revision: "7c519721acccae64000c4d13d4482215" },
        { url: "/icon/pencil.svg", revision: "fc00ffb88384b2913f8568f5a2633998" },
        { url: "/icon/plus.svg", revision: "828643fcb9ebe361b66691f18b3fd601" },
        { url: "/icon/qr.svg", revision: "71e05aa9f86524275911bcc2fb6906bc" },
        { url: "/icon/redo.svg", revision: "a1047ef518d627488ecd0ad961f0456f" },
        { url: "/icon/remove.svg", revision: "5f3cd18fcb15fd601b78add3d07d9082" },
        { url: "/icon/reward-history-active.svg", revision: "72e624c867bdfbaeb6da5bb360f8b60d" },
        { url: "/icon/reward-history.svg", revision: "09af6506cf7610eccbbb7e56924faeb1" },
        { url: "/icon/reward.svg", revision: "e8eb7552a42b7676a8be68ef1bc29750" },
        { url: "/icon/search.svg", revision: "051b2f24db2fd8b27519dbfe6b1cad9e" },
        { url: "/icon/speech/green-bubble.svg", revision: "28c38aedb8204d7d847bd8e2cdcad056" },
        { url: "/icon/speech/orange-bubble.svg", revision: "66df44b82cfc03981638459c7a3c1dac" },
        { url: "/icon/speech/white-line.svg", revision: "720eaba98ca29f614cffc11a1d593cb0" },
        { url: "/icon/speech/yellow-bubble.svg", revision: "57f4573334cb34cfbdc7f0108400d41e" },
        { url: "/icon/stamp-book-active.svg", revision: "84eda6e897eaa0029060a05e040b791f" },
        { url: "/icon/stamp-book.svg", revision: "f3a50ee49733b2bbda0ae39400b8d723" },
        { url: "/icon/stamp.svg", revision: "5e87fe8288aaaf33dcd956003001ebe0" },
        { url: "/icon/undo.svg", revision: "96f5dd0b9069e6a42d5217a1c4db5bff" },
        { url: "/icon/user-active.svg", revision: "9f8a88fd982cc0a7dc565d9d0d511f0c" },
        { url: "/icon/user.svg", revision: "7dabc4cd1e412959c8ab829d2f88f1a0" },
        { url: "/icon/x-icon.svg", revision: "af8e876033717d8eabfe81797fbcd151" },
        { url: "/icon/yellow-hand.svg", revision: "48524712e13d8c46b03a386198a19385" },
        { url: "/icon/yellow-qr.svg", revision: "d01b89ff12719b9ee17d178b2a6740b5" },
        { url: "/icon/yellow-stamp.svg", revision: "d532fc269ce857e35c5929cfba8b50e1" },
        { url: "/img/address.svg", revision: "c007ba56e37ee66217d2776ab22d7267" },
        { url: "/img/bottom-sheet.svg", revision: "cfefd0799f08009360514ea921437cea" },
        { url: "/img/cafe_logo.png", revision: "ee46950a457ec14d74e9a4aebea5e1b6" },
        { url: "/img/calling.svg", revision: "3367a5c9464d552cc8e3339a074d3f61" },
        { url: "/img/character/black-all.svg", revision: "b136416e987767fb25edfe569d21e6f0" },
        { url: "/img/character/black-ear.svg", revision: "aa485fc1a967a37db6cd0729baf2f081" },
        { url: "/img/character/black-face-gray.svg", revision: "50e1480551af7fc08ed3234871859c86" },
        { url: "/img/character/black-face.svg", revision: "d951f4b6a85213ea5c312646811d9eb6" },
        { url: "/img/character/face-gray.svg", revision: "369f7dec34da98eae9e2894c65f85343" },
        { url: "/img/character/green-all.svg", revision: "f7f971223b519cf29ba42a0f13673e90" },
        { url: "/img/character/green-ear.svg", revision: "36730acaad06173f188c08c1375e526d" },
        { url: "/img/character/green-face-gray.svg", revision: "755879ade9d0dcfdab67ae2e8388f906" },
        { url: "/img/character/green-face.svg", revision: "e385a1176eab4591e46b2b86c02d6772" },
        { url: "/img/character/orange-all.svg", revision: "dd219e794583caf3c0e0fa0cb2e3dd41" },
        { url: "/img/character/orange-ear.svg", revision: "85bd8ba2c0ec39372eab542dcb0029da" },
        {
          url: "/img/character/orange-face-gray.svg",
          revision: "67199febb268c0ba7c21a76a701541d7",
        },
        { url: "/img/character/orange-face.svg", revision: "86c75856fe9d47a1c3e63ab2a0b5ab9d" },
        { url: "/img/character/yellow-all.svg", revision: "cee0c6e9ca10c425d37c63b1e8699c66" },
        { url: "/img/character/yellow-ear.svg", revision: "aa806f534b47573e063a1dd2919cc919" },
        {
          url: "/img/character/yellow-face-gray.svg",
          revision: "76946da911a48289d5bb5408858a0ecb",
        },
        { url: "/img/character/yellow-face.svg", revision: "a2f9e449f705c9a13a62caf3289f0b05" },
        { url: "/img/clock.svg", revision: "72f190688bec7ce93478aaf2e18f406f" },
        { url: "/img/coffee-cup.svg", revision: "f96338f6440540308d355d15071e6c77" },
        { url: "/img/diary.svg", revision: "e15a45b72e412c6086d7dcc6118bc94f" },
        { url: "/img/doubletone.svg", revision: "7f02ae149196b28f5a7cca7c2c32769a" },
        { url: "/img/fadedCharacter/beige.svg", revision: "a5d373f307cc7e26968e1ca23ae39e06" },
        { url: "/img/fadedCharacter/green.svg", revision: "996abd3c4a7c9faae3a4ca496376ff5d" },
        { url: "/img/fadedCharacter/orange.svg", revision: "da23092a6c05e89d998d16fb9ac37d51" },
        { url: "/img/fadedCharacter/yellow.svg", revision: "03f6284834c65da9d5cbe61693ac32c0" },
        { url: "/img/markers/active-marker.svg", revision: "1f5a3313cd733df6912a88435e82d81c" },
        { url: "/img/markers/marker.svg", revision: "a1603f13a595c0c0e324fb9069f3d64e" },
        { url: "/img/mock-qr.svg", revision: "316975076e4b11359fd5f00bb83b98a9" },
        { url: "/img/one-spring.svg", revision: "97b5100307c523c292a27a76d3c248c5" },
        { url: "/img/qr-section.svg", revision: "87784448e30d3d1d9bd1d1b871d80dc0" },
        { url: "/img/qr/green-qr.svg", revision: "e15670e6f9e58252d25a648e5797b916" },
        { url: "/img/qr/qr-comment.svg", revision: "7a351e7d290a084189d793d45e58755c" },
        { url: "/img/qr/qr-info.svg", revision: "a6c9acddc256d2ca3b4b39c5773ff74b" },
        { url: "/img/scan/Scan-BEIGE.svg", revision: "d5571ae68fb786fbc221b9b8ef84fdf6" },
        { url: "/img/scan/Scan-GREEN.svg", revision: "ea2889f185502a2e51fb402bd9972910" },
        { url: "/img/scan/Scan-ORANGE.svg", revision: "7bc7f04c5843d82299cdd6999d7da6b4" },
        { url: "/img/scan/Scan-YELLOW.svg", revision: "c2adaf8b04fa97a5c587f838da946a9d" },
        {
          url: "/img/silhouette/black-silhouette.svg",
          revision: "77f3f08ed6df4275e9408c2fe83de8be",
        },
        {
          url: "/img/silhouette/green-silhouette.svg",
          revision: "6a9ff6e3c80a6fef9ff45344c1689e20",
        },
        { url: "/img/silhouette/hello.svg", revision: "f1450a44c81df3a502973363523921fc" },
        {
          url: "/img/silhouette/orange-silhouette.svg",
          revision: "b3f5dbc66dac9c72e3fd4d8a130d8483",
        },
        {
          url: "/img/silhouette/stamp-silhouette.svg",
          revision: "07da82c00a609904d2226d357b853698",
        },
        {
          url: "/img/silhouette/yellow-silhouette.svg",
          revision: "31c680204efa2ffbae243c341dc714f7",
        },
        { url: "/img/spring.svg", revision: "789f35e07cabd7186212fc05a6248bf1" },
        { url: "/img/stamp/cafe-cover.svg", revision: "a28103db152d6e818222170d8461b5f0" },
        { url: "/img/stamp/stamp-cover.svg", revision: "a28103db152d6e818222170d8461b5f0" },
        { url: "/img/stamp/stamp-logo.svg", revision: "c381d77e604b5dd4866606c850b6b0b0" },
        { url: "/manifest.json", revision: "8004812c9c77032a18c9e3407d2412ea" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "c0af2f507b369b085b35ef4bbe3bcf1e" },
        { url: "/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: i, event: s, state: a }) =>
              i && "opaqueredirect" === i.type
                ? new Response(i.body, { status: 200, statusText: "OK", headers: i.headers })
                : i,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const i = e.pathname;
        return !i.startsWith("/api/auth/") && !!i.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET"
    );
});
