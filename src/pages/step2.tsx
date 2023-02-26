import React from "react";
import Image from "next/image";

import imageSrc from "@/asset/images/pages/step2/hover_css_display.png";
import DtTitle from "@/components/dl/DtTitle";
import CodeBlock from "@/components/syntaxHighlighter/CodeBlock";
import { TextLink } from "@/components/dl/TextLink";
import Link from "next/link";

const step2 = () => {
  const dummyText = (function (text) {
    let _t = "";
    for (let index = 0; index < 50; index++) {
      _t += text;
    }
    return _t;
  })(
    "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。"
  );
  return (
    <div className="mx-auto max-w-[1024px] min-h-full">
      <header className="fixed top-0 left-0 h-[50px] bg-orange-500 text-white text-center w-full flex items-center justify-center">
        <span className="mr-8">
          <Link href={`/`} className="text-white underline hover:no-underline">
            戻る
          </Link>
        </span>
        <span>
          参考：
          <TextLink href="https://yoheiko.com/blog/tailwind-cssの設定と実装方法-jitも解説/" />
        </span>
      </header>

      <main className="mb-[500px] pt-[50px]">
        <dl>
          <DtTitle>参考</DtTitle>
          <dd>
            Tailwind CSS の一歩進んだ書き方
            <br />
            <TextLink href="https://zenn.dev/ixkaito/articles/advanced-tailwindcss" />
          </dd>
          <dd>
            Tailwind CSSの設定と実装方法 - v3.0準拠 | YoheiKoブログ
            <br />
            <TextLink href="https://yoheiko.com/blog/tailwind-cssの設定と実装方法-jitも解説/" />
          </dd>

          <DtTitle>
            Tailwind CSS IntelliSenseのインストールされたVS CodeではTailwind
            CSSのクラス名にカーソルを合わせると、適用されるCSSが表示される。
          </DtTitle>
          <dd>
            <Image src={imageSrc} alt="" />
          </dd>

          <DtTitle>
            margin 13pxやpadding
            7pxなど、規定値にはない値を設定する場合は、下記のように鍵括弧で値を記述します
          </DtTitle>
          <dd>
            <div className="m-[13px] p-[7px]">Hello World</div>
          </dd>
          <dd>
            <CodeBlock
              codeString={`<div className="m-[13px] p-[7px]">Hello World</div>`}
            />
          </dd>

          <DtTitle>
            background-colorなどでも、任意の色を使う場合は、HEX値で鍵括弧の内側に書きます。
          </DtTitle>
          <dd>
            <div className="m-[13px] p-[7px] bg-[#1da1f1]">Hello World</div>
          </dd>
          <dd>
            <CodeBlock
              codeString={`<div className="m-[13px] p-[7px] bg-[#1da1f1]" >Hello World</div>`}
            />
          </dd>

          <DtTitle>!important などは、先頭に!をつける</DtTitle>
          <dd>
            <CodeBlock codeString={`<div className="!p-4">テキスト</div>`} />
          </dd>

          <DtTitle>応用編 – カスタムクラスの作成</DtTitle>
          <dd>
            <CodeBlock
              language="css"
              codeString={`@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  .hoverbutton {
    @apply bg-orange-300 font-bold  shadow
    text-xl px-6 py-3 tracking-wider
    rounded-md text-white inline-block
    hover:brightness-95 active:brightness-95;
  }
}
`}
            />
          </dd>
          <dd>
            <div className="hoverbutton">
              <span>ああああああ</span>
            </div>
          </dd>

          <DtTitle>tailwind-scrollbar-hideを追加してみる</DtTitle>
          <dd>tailwind.config.js を追記</dd>
          <dd>
            <CodeBlock
              language="javascript"
              codeString={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // ここを追加
  ],
}`}
            />
          </dd>
          <dd className="mt-4">
            <CodeBlock
              codeString={`<div className="h-[300px] overflow-y-scroll scrollbar-hide border border-gray-300 p-8 mt-4"></div>`}
            ></CodeBlock>
          </dd>
          <dd className="mt-4">
            使用例：
            <div className="h-[300px] overflow-y-scroll scrollbar-hide border border-gray-300 p-8 mt-4">
              {dummyText}
            </div>
          </dd>
          <dd className="mt-4">
            他のPluginの例だと、
            <TextLink href="https://daisyui.com/docs/install/" />{" "}
            というPluginも、同様の設定で追加可能。
          </dd>
        </dl>
      </main>
    </div>
  );
};

export default step2;
