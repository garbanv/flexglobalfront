import "@testing-library/jest-dom";
import { render, screen ,waitFor} from "@testing-library/react";
import Slideshow from "../src/app/(components)/Slideshow";
import 'react-intersection-observer/test-utils';

// The below can be used in a Jest global setup file or similar for your testing set-up
import { loadEnvConfig } from '@next/env'
 
export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}

const mockSlides = [
    {
      id: 1,
      heading: "Slide 1 Heading",
      subHeading: "Slide 1 Subheading",
      callToAction: "Get Quote 1",
      link: "/slide1",
      image: {
        url: "/slide1.jpg",
      },
    },
    {
      id: 2,
      heading: "Slide 2 Heading",
      subHeading: "Slide 2 Subheading",
      callToAction: "Get Quote 2",
      link: "/slide2",
      image: {
        url: "/slide2.jpg",
      },
    },
    {
      id: 3,
      heading: "Slide 3 Heading",
      subHeading: "Slide 3 Subheading",
      callToAction: "Get Quote 3",
      link: "/slide3",
      image: {
        url: "/slide3.jpg",
      },
    },
  ];

  const observe = jest.fn();

  window.IntersectionObserver = jest.fn(function() {
    this.observe = observe;
  });

  it("renders the first slide correctly", async () => {

    render(<Slideshow slides={mockSlides} />);

    expect(screen.getByText("Slide 1 Heading")).toBeInTheDocument();
    expect(screen.getByText("Slide 1 Subheading")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get a quote/i })).toHaveAttribute(
      "href",
      "/slide1"
    );
    /*  expect(screen.getByTestId('custom-element')).toHaveStyle(
        `background-image: url(${process.env.NEXT_PUBLIC_APP_URL}/slide1.jpg)`
      ); */
    expect(screen.getByTestId('custom-element')).toHaveStyle(
        `background-image: url(${process.env.NEXT_PUBLIC_APP_URL}/slide1.jpg)`
      );
  });
