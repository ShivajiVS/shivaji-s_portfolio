import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";
import { HighlightText } from "./highlight-text";

export const About = () => {
  return (
    <div>
      <RoughNotationGroup show>
        <RoughNotation
          type="underline"
          show={true}
          color="orange"
          animationDuration={1300}
          animationDelay={300}
        >
          <span className="inline pb-3 text-lg font-bold tracking-tight capitalize text-slate-700 md:text-2xl dark:text-white">
            About Me
          </span>
        </RoughNotation>

        <div className="mt-4">
          <div className="text-sm leading-6 whitespace-normal md:leading-7 hyphens-auto space-y-1.5 text-pretty text-justify">
            <p>
              <HighlightText>
                I&apos;m Shivaji, a passionate Software Engineer
              </HighlightText>
              specializing in building modern, high-performance web
              applications. My core expertise lies in the
              <HighlightText>
                React ecosystem, including Next.js, TypeScript, and React
                Native,
              </HighlightText>
              which I use to create seamless, scalable, and user-centric digital
              experiences. Beyond crafting intuitive UIs, I am deeply invested
              in ensuring their quality and reliability. I have hands-on
              experience
              <HighlightText>
                writing modular unit tests with Jest and implementing robust
                end-to-end test automation with Playwright
              </HighlightText>
              to validate critical user workflows like authentication and
              payments.
            </p>
            <p>
              I am also proficient in deploying and delivering these
              applications efficiently using
              <HighlightText>
                CI/CD pipelines with GitHub Actions and AWS cloud services like
                S3, CloudFront, and EC2.
              </HighlightText>
              Furthermore, I am familiar with containerization and orchestration
              tools like Docker and Kubernetes, which helps me understand and
              contribute to
              <HighlightText>
                modern deployment workflows and scalable application
              </HighlightText>
              architectures.
            </p>
            <p>
              I&apos;m currently
              <HighlightText>
                open to work and actively seeking new junior developer roles.
              </HighlightText>
              If you&apos;re looking for a dedicated and quality-focused
              engineer, I would love to connect. You can view my
              <RoughNotation
                type="circle"
                show={true}
                color="orange"
                animationDuration={1300}
                animationDelay={300}
              >
                <span>
                  <Link
                    href="/shivaji-resume.pdf"
                    download="shivaji-resume"
                    target="_blank"
                    className=" font-semibold dark:font-extrabold px-2 hover:font-bold hover:text-muted-foreground text-base"
                  >
                    Resume
                  </Link>
                </span>
              </RoughNotation>
              and get in touch to start a conversation!
            </p>
          </div>
        </div>
      </RoughNotationGroup>
    </div>
  );
};
