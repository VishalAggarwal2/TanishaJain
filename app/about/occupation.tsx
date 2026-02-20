import Image from 'next/image';

export default function Occupation() {
  return (
    <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
      <div className="text-left">
        <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Tanisha Jain</h1>
        <h2 className="text-sm font-normal md:text-base">
          Manual Automation &amp; AI Solutions Engineer &mdash; reducing manual work with AI-powered
          automation
        </h2>
      </div>
      <div>
        <Image
          alt="Tanisha Jain"
          height={30}
          width={100}
          src="/static/images/Tanisha.jpeg"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
