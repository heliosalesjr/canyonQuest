import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            At Canyon Quest, we are passionate adventurers dedicated to bringing the wonders of Brazilian canyons to life. With a deep appreciation for nature's marvels, we set out on a mission to curate unforgettable experiences that allow you to immerse yourself in the breathtaking beauty of these natural wonders. Our team of experienced guides and passionate explorers are committed to delivering exceptional journeys, combining adrenaline-pumping adventures with a profound respect for the environment.
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
