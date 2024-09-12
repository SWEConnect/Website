import { SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { BackgroundBeams } from "~/components/aceternity_ui/background-beams";
import LoadingPage from "~/components/loadingPage";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/shadcn_ui/card";
import UserLayout from "~/layouts/userLayout";

const Home = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <LoadingPage />;
  } else {
    return (
      <section>
        <BackgroundBeams className="fixed top-0 z-0 h-screen w-screen" />

        <div className="container flex flex-col items-center justify-center gap-y-8">
          <section className="flex min-h-[93vh] w-full flex-col items-center justify-center gap-y-8">
            <Image
              priority
              src={"/assets/SWEC Logo.svg"}
              alt={"SWEC Logo"}
              width="0"
              height="0"
              sizes="75vw"
              className="z-30 h-auto w-2/3 md:w-1/3"
            />
            <span className="z-30 mt-10 text-2xl font-light text-white">
              <div className="flex flex-row items-center">
                Welcome to
                <div className="ml-2 h-px grow bg-secondary"></div>
              </div>

              <h1 className="py-0 text-5xl font-semibold text-white md:text-6xl lg:text-7xl xl:text-8xl">
                SWEConnect
              </h1>
            </span>
          </section>

          <Card className="z-30 mb-52 max-w-4xl bg-gradient-to-r from-primary to-secondary shadow-xl transition duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-black uppercase text-white lg:text-4xl">
                What we do
              </CardTitle>
            </CardHeader>
            <CardContent className="group flex h-full flex-col items-center gap-8 text-center text-sm text-white md:mx-10 md:text-lg lg:text-xl">
              <span>
                Designed to seamlessly connect aspiring minds with exciting
                opportunities right here on campus, SWEConnect enhances the way
                students discover and engage in projects at Johns Hopkins.
                Whether it's a student-led venture or a faculty-led research
                project, our platform empowers you to find the perfect fit for
                your passion and expertise.
              </span>
              <span>
                SWEConnect provides a centralized hub where student and faculty
                can connect with talented students who possess the skills needed
                for their initiatives. As a leader of a venture, SWEConnect will
                provide a centralized application system, and applicant
                management system. As a student looking for work, check out the
                open applications and project pages to see what interests you!
              </span>

              <div className="flex w-full items-center">
                <div className="mr-1 h-px flex-grow bg-white/10 backdrop-invert" />
                <span className="max-w-md">
                  What are you waiting for? Say goodbye to endless searches and
                  missed connections – join us and unlock a world of
                  collaborative possibilities today!
                </span>
                <div className="ml-1 h-px flex-grow bg-white/10 backdrop-invert" />
              </div>

              {!isSignedIn ? (
                <SignInButton mode="modal">
                  <div className="w-fit rounded-xl bg-black px-14 py-4 py-6 shadow-xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
                    <span className="tracking-none text-lg font-black uppercase text-white md:text-2xl">
                      Get Started
                    </span>
                  </div>
                </SignInButton>
              ) : (
                // </Button>
                <Link href={"/project"}>
                  <div className="w-fit rounded-xl bg-black px-14 py-4 py-6 shadow-xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
                    <span className="tracking-none text-lg font-black uppercase text-white md:text-2xl">
                      Get Started
                    </span>
                  </div>
                </Link>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
};

Home.getLayout = (
  page: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
) => {
  return (
    <UserLayout className="min-h-screen bg-gradient-to-b from-[#01325B] to-[#001530]">
      {page}
    </UserLayout>
  );
};

export default Home;
