import React, { useState, useEffect } from 'react';
import './LandingPage.scss';

export default function LandingPage() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.nav');
      const distanceFromTop = navbar.offsetTop;
      
      if (window.pageYOffset > distanceFromTop) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page-revise-1">
      <div className="elegant-logo-4-crop-1"></div>
      <div className="frame-32">
        <div className="group-230">
          <div className={`nav ${isNavbarFixed ? 'fixed' : ''}`}>
            <div className="elegant-logo-2">
            </div>
            <div className="home">
              Home
            </div>
            <div className="recommendation">
              Recommendation
            </div>
            <div className="furniture">
              Furniture
            </div>
            <div className="about">
              About
            </div>
            <div className="group-229">
            <div className="line-1">
            </div>
          </div>
          <div className="user-cicrle-duotone">
              </div>
          </div>
        </div>
        <div className="landing">
          <div className="container-5">
            <div className="container-10">
              <div className="image-16">
              </div>
              <div className="container-1">
                <div className="ar-furniture">
                  AR Furniture
                </div>
                <span className="visualize-furniture-in-your-space-instantly-browse-our-wide-range-of-furniture-and-decor-options-on-our-intuitive-web-platform-then-see-them-in-real-time-using-your-smartphone-camera">
                  Visualize furniture in your space instantly. Browse our wide range of furniture and style options on our intuitive web platform, then see them using your smartphone camera.
                </span>
              </div>
            </div>
            <div className="container-6">
              <div className="container-3">
                <div className="furniture-recommendation">
                  Furniture Recommendation
                </div>
                <span className="every-home-is-unique-from-the-living-room-to-the-bedroom-we-provide-personalized-recommendations-tailored-to-your-lifestyle-and-aesthetics-helping-you-create-spaces-that-are-perfect-for-living-and-enjoying">
                  Every home is unique, from the living room to the bedroom. We provide personalized recommendations tailored to your aesthetics, helping you create spaces that are perfect for living.
                </span>
              </div>
              <div className="image-19">
              </div>
            </div>
          </div>
          <div className="container-11">
            <div className="why-choose-us">
              Why Choose Us ?
            </div>
            <div className="container-8">
              <div className="wcu-1">
              <div className="container-2">
              </div>
                <div className="simple">
                  Simple
                </div>
                <span className="no-need-to-install-an-application-only-using-the-browser">
                  No need to install an application, only using the browser.
                </span>
              </div>
              <div className="wcu-2">
              <div className="container-12">
              </div>
                <div className="easy-to-use">
                  Easy to Use
                </div>
                <span className="select-the-furniture-then-arrange-the-furniture-in-your-space-only-with-your-phone-camera">
                  Select the furniture then arrange the furniture in your space only with your phone camera.
                </span>
              </div>
              <div className="wcu-3">
              <div className="container-9">
              </div>               
                <div className="real-time">
                  Technology
                </div>
                <span className="no-worry-of-misplaced-you-be-able-to-displays-3-dfurniture-models-in-real-time-camera-view">
                  No worry of misplaced. You be able to displays 3D Furniture models with your camera view.
                </span>
              </div>
              <div className="wcu-4">
              <div className="container-13">
              </div>                
              <div className="helpful">
                  Helpful
                </div>
                <span className="we-will-recommend-you-some-furniture-according-to-your-needs">
                  We will recommend you some furniture according to your needs.
                </span>
              </div>
            </div>
          </div>
          <div className="container-4">
            <div className="what-is-furni-fit">
              What is FurniFit?
            </div>
            <div className="welcome-to-furni-fit-discover-afun-new-way-to-choose-and-place-furniture-in-your-space-with-augmented-reality-ar-technology-simply-use-your-devices-camera-to-see-exactly-how-the-furniture-will-look-in-your-room-by-this-website-we-also-provide-arecommendation-system-to-help-you-determine-whether-the-furniture-placement-is-suitable-or-not-for-your-space-start-exploring-our-collection-now-to-effortlessly-and-accurately-update-your-room">
              Welcome to FurniFit! <br />
              Discover a fun new way to choose and place furniture in your space. With Augmented Reality (AR) technology, simply use your device&#39;s camera to see exactly how the furniture will look in your room by using this website. We also provide a recommendation system to help you choose the furniture that fits your preferences. Start exploring our collection now to effortlessly and accurately update your room.
            </div>
            <div className="frame-31">
              <span className="see-product">
                Our Services
              </span>
            </div>
          </div>
          <div className="rectangle-55">
          </div>
          <div className="image-14">
          </div>
          <div className="explore-home">
            <span className="explore">
              Explore
            </span>
          </div>
          <div className="try-now-home">
            <span className="try-now">
              Try Now
            </span>
          </div>
          <span className="augment-your-space-amplify-your-reality">
            &#34;Augment Your Space, Amplify Your Reality&#34;
          </span>
        </div>
        <div className="footer">
          <div className="vector-5">
          </div>
          <div className="container-7">
            <div className="footer-furni-fit">
              <div className="furni-fit">
                FurniFit
              </div>
              <span className="all-rights-reserved">
                © 2024. All rights reserved
              </span>
            </div>
            <div className="nav-footer">
              <span className="about-us">
                About Us
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}