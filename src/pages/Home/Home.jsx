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

export const HomePage = () => {
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
          <TitleCatalog>Go to our CATALOG</TitleCatalog>
        </SectionText>
      </SectionWrapper>
      <SectionWrapper>
        <SectionText>
          Renting a car provides the flexibility to explore new destinations at
          your own pace. Whether it's a weekend getaway, a road trip adventure,
          or a business trip, renting a car offers convenience and freedom. You
          can choose the type of vehicle that suits your needs, access remote
          locations, and enjoy the journey while leaving the hassle of
          maintenance and ownership behind. With various rental options and
          services available, it's a convenient way to enhance your travel
          experience and make the most of your time in different places.
          <TitleCatalog>Go to our CATALOG</TitleCatalog>
        </SectionText>
        <HomeImageWrapper>
          <HomeImg src={img2} alt="ukraine" />
        </HomeImageWrapper>
      </SectionWrapper>
      <h3 style={{ textAlign: 'center', paddingTop: '50px' }}>
        Use our guide before you select your vehicle!
      </h3>
      <p style={{ paddingBottom: '25px', paddingTop: '25px' }}>
        Renting a car and going for a drive is a great way to enjoy a new place
        and have a unique adventure. Here are some steps to help you make the
        most of your car rental experience:
      </p>
      <FaqText>
        1. <b>Plan Ahead:</b> Research the area you'll be visiting and plan your
        route. Make a list of the places you want to visit and things you want
        to see along the way.
      </FaqText>

      <FaqText>
        2. <b>Choose the Right Car:</b> Select a car that suits your needs. If
        you're traveling with a group or have a lot of luggage, opt for a
        spacious vehicle. If you want a fuel-efficient option for a solo trip,
        consider a smaller car.
      </FaqText>

      <FaqText>
        3. <b>Reserve in Advance:</b> It's usually a good idea to reserve your
        rental car in advance to ensure availability and get the best rates.
      </FaqText>

      <FaqText>
        4. <b>Check Insurance and Policies:</b> Review the insurance coverage
        offered by the rental company. You may want to consider purchasing
        additional coverage for peace of mind. Familiarize yourself with the
        rental company's policies, such as mileage limits and fuel requirements.
      </FaqText>

      <FaqText>
        5. <b>Inspect the Car:</b> Before driving off, thoroughly inspect the
        rental car for any existing damage. Note and take pictures of any dents,
        scratches, or issues to avoid being charged for pre-existing damage upon
        return.
      </FaqText>

      <FaqText>
        7. <b>Navigation:</b> Make sure you have a reliable navigation system or
        GPS app to help you find your way. You can also download offline maps in
        case you'll be in areas with poor connectivity.
      </FaqText>

      <FaqText>
        8. <b>Safety First:</b> Always wear your seatbelt, obey traffic laws,
        and drive safely. Follow speed limits and be cautious, especially in
        unfamiliar areas.
      </FaqText>

      <FaqText>
        9. <b>Enjoy the Scenery:</b> Take your time and enjoy the journey. Stop
        at scenic spots, local eateries, and attractions along the way. You can
        discover hidden gems that you might miss if you're in a hurry.
      </FaqText>

      <FaqText>
        10. <b>Fuel Up:</b> Keep an eye on the fuel gauge and refuel when
        needed. Different rental companies may have different fuel policies, so
        be aware of whether you need to return the car with a full tank or not.
      </FaqText>

      <FaqText>
        11. <b>Return the Car on Time:</b> Be sure to return the rental car on
        or before the agreed-upon time to avoid extra charges. Also, make sure
        you return it in the same condition as when you picked it up.
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
