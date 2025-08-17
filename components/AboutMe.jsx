export function AboutMe() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <h1 className="font-bold">
        <span className="text-[1.1rem]">{"> "}</span>
        aboutme
      </h1>
      <div className="text-center">
        <p>hi, this is saptadeep</p>
        <p>full-stack dev | designer | gamer</p>
        <p>2nd year mca at @hitk</p>
      </div>
      <ul className="flex space-x-2 font-bold">
        <li className="cursor-pointer underline">
          <a
            href="https://github.com/sapyyy"
            target="_blank"
            title="github dekh lijiye!"
          >
            github
          </a>
        </li>
        <li className="cursor-pointer underline">
          <a
            href="https://www.linkedin.com/in/saptadeepg/"
            target="_blank"
            title="linkedin pe post toh nahi karte utna"
          >
            linkedin
          </a>
        </li>
        <li className="cursor-pointer underline">
          <a
            href="https://x.com/sapyyyhere"
            target="_blank"
            title="x pe bharpur shitposting"
          >
            x
          </a>
        </li>
        <li className="cursor-pointer underline">
          <a
            href="mailto:rijusaptadeep@gmail.com"
            target="_blank"
            title="email pe baate kare?"
          >
            email
          </a>
        </li>
      </ul>
    </div>
  );
}
