import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { TextLink } from "@/components/dl/TextLink";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-[1024px] min-h-full">
        <header className="fixed top-0 left-0 h-[50px] bg-orange-500 text-white text-center w-full flex items-center justify-center">
          <span>
            参考：
            <TextLink href="https://zenn.dev/nbr41to/articles/276f40041ad9fe" />
          </span>
          <span className="ml-8">
            <Link
              href={`/step2`}
              className="text-white underline hover:no-underline"
            >
              進む
            </Link>
          </span>
        </header>
        <main className="pt-[50px]">
          <dl>
            <dt className="text-lg mt-4 font-bold">参考</dt>
            <dd className="mt-2">
              <TextLink href="https://zenn.dev/nbr41to/articles/276f40041ad9fe" />
            </dd>
            <dd className="mt-2">
              <TextLink href="https://proglab.nbr41.com/" />
            </dd>

            <dt className="text-lg mt-4 font-bold">Wrapper</dt>
            <dd>
              <span className="bg-gray-100">mx-auto</span>,
              <span className="bg-gray-100">max-w-[1024px]</span>,
              <span className="bg-gray-100">min-h-full</span>
            </dd>

            <dt className="text-lg mt-4 font-bold">このdtは…</dt>
            <dd>text-lg mt-4 font-bold</dd>
            <dt className="text-lg mt-4 font-bold">このdlは…</dt>
            <dd>w-96 m-auto</dd>
            <dt className="text-lg mt-4 font-bold">大きさ単位</dt>
            <dd>
              <Link
                href="https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale"
                target="_blank"
                className="text-blue-500 underline hover:text-blue-300 hover:no-underline"
              >
                https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
              </Link>
            </dd>
            <dd>
              <p>
                pxに単位で指定する必要のあるプロパティは以下の数字を複合して使用する
              </p>
              <ul>
                <li>
                  サイズ：
                  <span className="bg-gray-100">
                    xs, sm, md, lg, xl, 2xl, 3xl, ... ,9xl
                  </span>
                </li>
                <li>
                  数字：
                  <span className="bg-gray-100">
                    0〜12, 14, 16, 20〜64, 72, 80, 96
                  </span>
                </li>
              </ul>
            </dd>
            <dt className="text-lg mt-4 font-bold">hover, active</dt>
            <dd>
              <span className="hover:bg-yellow-300 inline-block p-4 rounded-md border border-gray-300 cursor-pointer">
                Hover
              </span>
            </dd>
            <dd>
              <span className="bg-gray-100">hover:bg-yellow-300</span>
              ,inline-block,p-4,rounded-md,border,border-gray-300 cursor-pointer
            </dd>
            <dd>
              <span className="active:bg-red-300 inline-block p-4 rounded-md border border-gray-300 cursor-pointer">
                Active
              </span>
            </dd>
            <dd>
              <span className="bg-gray-100">active:bg-red-300</span>
              ,inline-block,p-4,rounded-md,border,border-gray-300,cursor-pointer
            </dd>
            <dt className="text-lg mt-4 font-bold">margin,padding</dt>
            <dd className="bg-gray-100">m,mt,mr,mb,ml,mx,my</dd>
            <dd className="bg-gray-100">p,pt,pr,pb,pl,px,py</dd>
            <dd>
              <dl>
                <dt>例</dt>
                <dd>
                  <span className="bg-gray-100">mt-4</span>,
                  <span className="bg-gray-100">mt-8</span>,
                  <span className="bg-gray-100">mx-4</span>,
                  <span className="bg-gray-100">pb-4</span>,
                  <span className="bg-gray-100">py-4</span>
                </dd>
              </dl>
            </dd>
            <dt className="text-lg mt-4 font-bold">font-size（fz）</dt>
            <dd className="bg-gray-100">text-[サイズ]</dd>
            <dd>
              <TextLink href="https://tailwindcss.com/docs/font-size" />
            </dd>
            <dd>
              <ul>
                <li className="text-xs">text-xs</li>
                <li className="text-sm">text-sm</li>
                <li className="text-base">text-base</li>
                <li className="text-lg">text-lg</li>
                <li className="text-xl">text-xl</li>
                <li className="text-2xl">text-2xl</li>
                <li className="text-3xl">text-3xl</li>
              </ul>
            </dd>
            <dt className="text-lg mt-4 font-bold">色</dt>
            <dd className="bg-gray-100">text-[色名]-[濃さ]</dd>
            <dd>
              <ul>
                <li className="text-slate-300">text-slate-300</li>
                <li className="text-gray-300">text-gray-300</li>
                <li className="text-red-300">text-red-300</li>
                <li className="text-yellow-300">text-yellow-300</li>
                <li className="text-orange-300">text-orange-300</li>
                <li className="text-blue-300">text-blue-300</li>
              </ul>
              <TextLink href="https://tailwindcss.com/docs/customizing-colors" />
            </dd>
            <dt className="text-lg mt-4 font-bold">背景色</dt>
            <dd className="bg-gray-100">bg-[色名]-[濃さ]</dd>
            <dd>
              <ul>
                <li className="bg-slate-300">bg-slate-300</li>
                <li className="bg-gray-300">bg-gray-300</li>
                <li className="bg-red-300">bg-red-300</li>
                <li className="bg-yellow-300">bg-yellow-300</li>
                <li className="bg-orange-300">bg-orange-300</li>
                <li className="bg-blue-300">bg-blue-300</li>
              </ul>
              <TextLink href="https://tailwindcss.com/docs/customizing-colors" />
            </dd>
            <dt className="text-lg mt-4 font-bold">display</dt>
            <dd className="bg-gray-100">block,inline,inline-block,flex,grid</dd>
            <dd>
              <ul>
                <li className="block">block</li>
                <li className="inline">inline</li>
                <li className="inline-block">inline-block</li>
                <li className="flex">flex</li>
                <li className="grid">grid</li>
              </ul>
            </dd>
            <dt className="text-lg mt-4 font-bold">animation,animate</dt>
            <dd>
              <TextLink href="https://tailwindcss.com/docs/animation" />
            </dd>
            <dd>
              <div className="relative w-4 h-4 p-8">
                <div className="absolute">
                  <div className="absolute w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
                  <div className="absolute w-4 h-4 bg-red-300 rounded-full"></div>
                </div>
              </div>
            </dd>

            <dt className="text-lg mt-4 font-bold">ボタン</dt>
            <dd className="mt-2">
              <Link
                href={`https://www.google.com/`}
                target="_blank"
                className="
                bg-orange-300 font-bold  shadow
                text-xl px-6 py-3 tracking-wider
                rounded-md text-white inline-block
                hover:brightness-95 active:brightness-95
              "
              >
                https://www.google.com/
              </Link>
            </dd>
          </dl>
        </main>
      </div>
    </>
  );
}
