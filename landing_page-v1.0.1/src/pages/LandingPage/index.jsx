import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Img, Button } from "../../components";

const data = [
  {
    simpletwo: "Simple",
    youdontneed: "You don’t need to install an application, just using the browser.",
    simpleone: "images/img_simple.svg",
  },
  {
    simpletwo: "Easy to Use",
    youdontneed:
      "Select the furniture, and open the AR camera on this web, then you can arrange the furniture in your area.",
    simpleone: "images/img_bookmark.svg",
  },
  {
    simpletwo: "Real Time",
    youdontneed:
      "By using Augmented Reality technology, FurniFit displays various 3D Furniture models in real-time camera view.",
    simpleone: "images/img_thumbs_up.svg",
  },
  {
    simpletwo: "Helpful",
    youdontneed:
      "FurniFit also provides recommendations on whether the selected furniture is suitable for placement in the desired space.",
    simpleone: "images/img_bookmark_black_900.svg",
  },
];

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Landing Page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[1080px] w-full bg-[url(/public/images/img_landing_page.png)] bg-cover bg-no-repeat md:h-auto">
        <div className="self-end">
          <div>
            <div>
              <div className="relative z-[1] flex flex-col items-center gap-[102px] md:gap-[76px] sm:gap-[51px]">
                <header className="flex items-start justify-center self-stretch bg-gray-500_72 md:flex-col">
                  <div className="flex w-[25%] items-start justify-between gap-5 md:w-full md:p-5">
                    <Img
                      src="images/img_furnifit_2.png"
                      alt="furnifittwo_one"
                      className="h-[65px] w-[66px] rounded-[32px] object-cover"
                    />
                    <ul className="mt-3 flex">
                      <li>
                        <a href="#" className="text-shadow-ts">
                          <Heading size="md" as="h4" className="!text-blue_gray-800">
                            Home
                          </Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ml-[279px] mt-[13px] flex w-[41%] justify-between gap-5 md:ml-0 md:w-full md:p-5">
                    <ul className="flex">
                      <li>
                        <a href="#" className="text-shadow-ts">
                          <Heading size="md" as="h4" className="!text-blue_gray-800">
                            Recommendation
                          </Heading>
                        </a>
                      </li>
                    </ul>
                    <ul className="flex">
                      <li>
                        <a href="#" className="text-shadow-ts">
                          <Heading size="md" as="h4" className="!text-blue_gray-800">
                            Furniture
                          </Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ml-[310px] mt-[13px] flex w-[28%] items-center justify-between gap-5 md:ml-0 md:w-full md:p-5">
                    <ul className="flex">
                      <li>
                        <a href="#" className="text-shadow-ts">
                          <Heading size="md" as="h4" className="!text-blue_gray-800">
                            About
                          </Heading>
                        </a>
                      </li>
                    </ul>
                    <Img src="images/img_lock.svg" alt="lock_one" className="h-[35px] w-[35px]" />
                  </div>
                </header>
                <div className="mx-auto flex w-full max-w-[1287px] items-center justify-between gap-5 md:flex-col md:p-5">
                  <div className="flex w-[57%] justify-center self-end bg-gray-400_cc p-[33px] md:w-full sm:p-5">
                    <div className="mt-4 flex w-[80%] flex-col items-start gap-[23px] md:w-full">
                      <Text size="xl" as="p" className="text-shadow-ts !font-dmseriftext !text-blue_gray-800">
                        &quot;Augment Your Space, Amplify Your Reality&quot;
                      </Text>
                      <div className="ml-[68px] flex w-[75%] justify-between gap-5 md:ml-0 md:w-full">
                        <Button shape="round" className="min-w-[160px] border border-solid border-amber-A200 sm:px-5">
                          Try Now
                        </Button>
                        <Button color="gray_500" shape="round" className="min-w-[160px] sm:px-5">
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_furnifit_2_360x363.png"
                    alt="furnifittwo"
                    className="h-[360px] w-[28%] object-cover md:w-full"
                  />
                </div>
              </div>
              <Img
                src="images/img_rectangle_55.png"
                alt="image"
                className="relative mt-[-531px] h-[1062px] w-full object-cover md:h-auto"
              />
            </div>
            <div className="relative mt-[-403px] flex flex-col items-center rounded-tl-[110px] rounded-tr-[110px] border border-solid border-white-A700 bg-blue_gray-50 p-[43px] md:p-5">
              <div className="mx-auto mb-[22px] flex w-full max-w-[1727px] flex-col items-start">
                <Heading size="2xl" as="h1" className="!text-blue_gray-800_01">
                  What is FurniFit ?
                </Heading>
                <Img src="images/img_vector_4.svg" alt="vectorfour_one" className="mt-0.5 h-[8px] w-[17%]" />
                <Text
                  size="lg"
                  as="p"
                  className="mt-[33px] w-[96%] text-center !font-roboto leading-[50px] tracking-[0.32px] !text-gray-800 md:w-full"
                >
                  <>
                    Welcome to FurniFit! <br />
                    Discover a fun new way to choose and place furniture in your space. With Augmented Reality (AR)
                    technology, simply use your device&#39;s camera to see exactly how the furniture will look in your
                    room by this website. We also provide a recommendation system to help you determine whether the
                    furniture placement is suitable or not for your space. Start exploring our collection now to
                    effortlessly and accurately update your room.
                  </>
                </Text>
                <div className="mt-[49px] flex w-full justify-center self-center px-[500px] md:px-5">
                  <Button
                    color="blue_gray_700"
                    size="sm"
                    variant="outline"
                    className="min-w-[234px] rounded-lg font-roboto font-bold tracking-[0.32px] sm:px-5"
                  >
                    Our Services
                  </Button>
                </div>
                <div className="flex w-[94%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
                  <div className="mt-[49px] flex w-[65%] items-start justify-center gap-11 md:w-full md:flex-col">
                    <div className="flex w-[48%] items-center justify-center md:w-full sm:flex-col">
                      <Img
                        src="images/img_pngegg_2_2.png"
                        alt="pngegg2two_one"
                        className="relative z-[2] h-[169px] w-[36%] object-cover sm:w-full"
                      />
                      <div className="relative ml-[-142px] flex-1 self-end rounded-[20px] bg-gray-500_7f p-[29px] shadow-sm sm:ml-0 sm:self-stretch sm:p-5">
                        <div className="my-[21px] flex items-center justify-center">
                          <Heading size="lg" as="h2" className="w-[95%] text-center leading-6">
                            <>
                              Furniture <br />
                              Recommendation
                            </>
                          </Heading>
                          <Img
                            src="images/img_arrow_right.svg"
                            alt="arrowright_one"
                            className="relative ml-[-4px] h-[23px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-start justify-center md:self-stretch sm:flex-col">
                      <Img
                        src="images/img_rectangle_1157.png"
                        alt="image_one"
                        className="relative z-[3] h-[233px] w-[40%] object-cover sm:w-full"
                      />
                      <div className="relative ml-[-156px] mt-3.5 flex items-start rounded-[20px] bg-gray-500_7f p-[25px] shadow-sm sm:ml-0 sm:p-5">
                        <Heading size="lg" as="h3" className="mt-9 text-center">
                          Furniture{" "}
                        </Heading>
                        <Img src="images/img_arrow_right.svg" alt="arrowright" className="my-[41px] h-[23px]" />
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[218px] w-[25%] md:w-full">
                    <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full items-center justify-center rounded-[20px] bg-gray-500_7f p-[21px] shadow-sm sm:p-5">
                      <Heading size="lg" as="h4" className="mb-[29px] mt-[30px] w-[89%] text-center leading-6">
                        <>
                          AR <br />
                          Furniture
                        </>
                      </Heading>
                      <Img src="images/img_arrow_right.svg" alt="arrowright_five" className="ml-1 h-[23px]" />
                    </div>
                    <Img
                      src="images/img_pngegg_1.png"
                      alt="pngeggone_one"
                      className="absolute right-[5.50px] top-[0.00px] m-auto h-[195px] w-[44%] object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[87px] self-stretch">
                  <div className="flex flex-1 items-start gap-4 md:flex-col">
                    <div className="mt-[90px] flex w-[48%] flex-col items-start gap-[73px] md:w-full md:gap-[54px] sm:gap-9">
                      <Heading size="xl" as="h5" className="!font-inter">
                        Why Choose Us
                      </Heading>
                      <div className="grid grid-cols-2 gap-[67px] self-stretch md:grid-cols-1">
                        {data.map((d, index) => (
                          <div key={"landingpage" + index} className="flex w-full flex-col items-start">
                            <div className="flex w-[18%] rounded-[24px] bg-blue_gray-700_33 md:w-full">
                              <Img src={d.simpleone} alt="simple_one" className="h-[39px]" />
                            </div>
                            <Heading size="xs" as="h6" className="mt-[3px]">
                              {d.simpletwo}
                            </Heading>
                            <Text as="p" className="mt-2 leading-[22px]">
                              {d.youdontneed}
                            </Text>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-[642px] flex-1 md:w-full md:flex-none md:self-stretch">
                      <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[44%] flex-col gap-[15px]">
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-amber-A200_4c" />
                        </div>
                      </div>
                      <div className="absolute bottom-[0.80px] right-[0.00px] m-auto flex w-[87%] justify-end rounded-[12px] shadow-sm">
                        <Img
                          src="images/img_why_choose_us_img.png"
                          alt="image"
                          className="h-[591px] w-full rounded-[12px] object-cover md:h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[98%] items-start justify-between gap-5 md:w-full md:flex-col">
                    <div className="relative h-[511px] w-[56%] md:w-full">
                      <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[41%] flex-col gap-[15px]">
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[13px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                          <div className="h-[7px] w-[12px] rounded-md bg-gray-500_4c" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-[15%] top-0 my-auto flex h-max w-[52%] rounded-[10px] shadow-sm">
                        <Img
                          src="images/img_img_grid_1_1.png"
                          alt="imggrid1one_one"
                          className="h-[433px] w-full rounded-[10px] object-cover md:h-auto"
                        />
                      </div>
                      <Img
                        src="images/img_img_grid_3_1.png"
                        alt="imggrid3one_one"
                        className="absolute bottom-[-0.18px] right-[0.40px] m-auto h-[293px] w-[37%] rounded-[10px] object-cover"
                      />
                      <Img
                        src="images/img_img_grid_2_1.png"
                        alt="imggrid2one_one"
                        className="absolute right-[7%] top-[9%] m-auto h-[157px] w-[24%] rounded-[10px] object-cover"
                      />
                    </div>
                    <div className="mt-[108px] flex w-[40%] flex-col gap-[35px] md:w-full">
                      <Heading size="xl" as="h1" className="w-[94%] leading-[41px] md:w-full">
                        We help you customize your interior design
                      </Heading>
                      <Text size="md" as="p" className="leading-6">
                        We help you customize your interior design effortlessly. From selecting furniture to placing it
                        perfectly, we provide the tools and recommendations you need. With Augmented Reality technology,
                        you can see how furniture will look in your space before making decisions, ensuring every
                        element crafts the perfect room for you.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 py-[21px] pl-[21px] sm:py-5 sm:pl-5">
            <div className="mt-[21px] flex flex-col gap-6">
              <div className="mx-auto h-px w-full max-w-[1851px] bg-gray-500 md:p-5" />
              <div className="mx-auto flex w-full max-w-[1847px] items-start justify-between gap-5 md:flex-col md:p-5">
                <div className="flex flex-col items-start gap-1.5 pb-[9px]">
                  <Heading as="h2" className="tracking-[0.20px] !text-gray-500">
                    FurniFit
                  </Heading>
                  <Text size="s" as="p" className="!font-roboto tracking-[0.18px] !text-gray-500">
                    © 2024. All rights reserved
                  </Text>
                </div>
                <div className="mt-1 flex w-[25%] flex-wrap justify-between gap-5 md:w-full">
                  <Heading as="h3" className="tracking-[0.20px] !text-gray-500">
                    About Us
                  </Heading>
                  <Heading as="h4" className="tracking-[0.20px] !text-gray-500">
                    Partnership
                  </Heading>
                  <Heading as="h5" className="tracking-[0.20px] !text-gray-500">
                    Privacy Police
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
