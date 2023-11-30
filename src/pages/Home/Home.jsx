import { Container } from 'components/Container';
import {
  FaqText,
  HeroText,
  HeroTitle,
  HomeImageWrapper,
  HomeImg,
  SectionText,
  SectionWrapper,
  TitleCatalog,
  TransparentLogo,
} from './Home.styled';
import bgi from '../../pictures/hp-1.jpg';
import img2 from '../../pictures/hero-bg-1.jpg';
import img3 from '../../pictures/hp-img-3.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { goToFirstPage, selectCarsPage } from 'redux/carsListSlice';

export const HomePage = () => {
  const page = useSelector(selectCarsPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page === 1) {
      return;
    }
    dispatch(goToFirstPage());
  });
  return (
    <Container>
      <TransparentLogo> S Y V</TransparentLogo>
      <HeroTitle>SELECT YOUR VEHICLE!</HeroTitle>
      <HeroText>
        Search hundreds of rental car sites at once for car rental deals in
        Ukraine
      </HeroText>
      <SectionWrapper>
        <HomeImageWrapper>
          <HomeImg src={bgi} alt="ukraine" />
        </HomeImageWrapper>
        <SectionText>
          Ukraine... It is a rich patchwork of cultures and landscapes. In
          between the rugged mountains, flat prairie fields and wooded havens,
          you’ll discover big and small cities, each with their own personality.
          The size of the country can be difficult to envision before arriving.
          So the best way to make the most of your visit to Ukraine is to head
          straight for the car rental desk when you arrive.
          <TitleCatalog>&rarr; Go to our CATALOG</TitleCatalog>
        </SectionText>
      </SectionWrapper>
      <SectionWrapper>
        <SectionText className='Second'>
          Renting a car provides the flexibility to explore new destinations at
          your own pace. Whether it's a weekend getaway, a road trip adventure,
          or a business trip, renting a car offers convenience and freedom. You
          can choose the type of vehicle that suits your needs, access remote
          locations, and enjoy the journey while leaving the hassle of
          maintenance and ownership behind. With various rental options and
          services available, it's a convenient way to enhance your travel
          experience and make the most of your time in different places.
          <TitleCatalog className='Second'>&rarr; Go to our CATALOG</TitleCatalog>
        </SectionText>
        <HomeImageWrapper className='Second'>
          <HomeImg src={img2} alt="ukraine" />
        </HomeImageWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <HomeImageWrapper>
          <HomeImg src={img3} alt="ukraine" />
        </HomeImageWrapper>
        <SectionText>
          Unlock the freedom to explore at your own pace with our reliable car
          rental services. Whether you're a traveler seeking adventure, a
          business professional on the go, or just in need of temporary wheels,
          we've got you covered.
          <TitleCatalog>&rarr; Go to our CATALOG</TitleCatalog>
        </SectionText>
      </SectionWrapper>
      <h3 style={{ textAlign: 'center', paddingTop: '50px' }}>
        Why Choose Us:
      </h3>

      <FaqText>
        1. <b>Diverse Fleet:</b> Select from a diverse range of well-maintained
        vehicles to suit your needs, from compact cars for urban exploration to
        spacious SUVs for family journeys.
      </FaqText>

      <FaqText>
        2. <b>Convenience:</b> Our booking process is straightforward, ensuring
        a hassle-free experience. With flexible rental periods, you can have the
        car for as long as you need it.
      </FaqText>

      <FaqText>
        3. <b>Quality Assurance:</b> Rest easy knowing that our fleet is
        regularly serviced and maintained for optimal performance and safety.
        Your satisfaction and comfort are our top priorities.
      </FaqText>

      <FaqText>
        4. <b>Affordability:</b> Enjoy competitive prices and transparent rental
        agreements. No hidden fees – just straightforward pricing for a
        budget-friendly rental experience..
      </FaqText>

      <FaqText>
        5. <b>Customer Support:</b> Our friendly customer support is ready to
        assist you at every step. From reservation to drop-off, we're here to
        make your car rental experience seamless.
      </FaqText>

      <p style={{ paddingBottom: '50px', paddingTop: '25px' }}>
        Renting a car and hitting the road can be a fantastic way to explore new
        places and enjoy the freedom of the open road. Just remember to plan
        ahead, stay safe, and make the most of your adventure.
      </p>
    </Container>
  );
};

export default HomePage;
