import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

export const metadata: Metadata = {
  title: "Lập trình nâng cao",
  description: "This is Lập trình nâng cao",
};

const Buttons = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Buttons" />

      {/* <!-- Normal Button Items --> */}
      <div className="mb-10 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Normal Button
          </h3>
        </div>

        <div className="p-4 md:p-6 xl:p-9">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-primary text-white px-10 py-3.5 lg:px-8 xl:px-10"
            />

            <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-primary text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            />

            <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-primary text-white rounded-full px-10 py-3.5 lg:px-8 xl:px-10"
            />

            <ButtonDefault
              label="Button"
              link="/"
              customClasses="border border-primary text-primary rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            />
          </div>

          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-green text-white px-10 py-3.5 lg:px-8 xl:px-10"
            />

            <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            />

            <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-green text-white rounded-full px-10 py-3.5 lg:px-8 xl:px-10"
            />

            <ButtonDefault
              label="Button"
              link="/"
              customClasses="border border-green text-green rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            />
          </div>

          <div className="flex flex-wrap gap-5 xl:gap-20">
            <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-dark text-white px-10 py-3.5 lg:px-8 xl:px-10"
            />

            <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-dark text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            />

            <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-dark text-white rounded-full px-10 py-3.5 lg:px-8 xl:px-10"
            />

            <ButtonDefault
              label="Button"
              link="/"
              customClasses="border border-dark text-dark rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            />
          </div>
        </div>
      </div>

      {/* <!-- Button With Icon Items --> */}
      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Button With Icon
          </h3>
        </div>

        <div className="p-4 md:p-6 xl:p-9">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-7.5">
            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="bg-primary text-white py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="bg-green text-white py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="bg-dark text-white py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="border border-primary text-primary py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>
          </div>

          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-7.5">
            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="bg-primary rounded-[5px] text-white py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="bg-green rounded-[5px] text-white py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="bg-dark rounded-[5px] text-white py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="border rounded-[5px] border-primary text-primary py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>
          </div>

          <div className="flex flex-wrap gap-5 xl:gap-7.5">
            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="bg-primary rounded-full text-white py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="bg-green rounded-full text-white py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="bg-dark rounded-full text-white py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Button With Icon"
              link="/"
              customClasses="border rounded-full border-primary text-primary py-[11px] px-6"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
                  fill=""
                />
              </svg>
            </ButtonDefault>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Buttons;
