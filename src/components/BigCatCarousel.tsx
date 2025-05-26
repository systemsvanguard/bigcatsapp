
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // fancy animmations 
import { useSwipeable } from 'react-swipeable';  // mobile swipe actions

interface Props {
  images: string[];
  alt: string;
}

const BigCatCarousel = ({ images, alt }: Props) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  
  // fancy mobile UI swipers, from 'react-swipeable' library 
  const handlers = useSwipeable({
	onSwipedLeft: nextSlide,
	onSwipedRight: prevSlide,
	// preventDefaultTouchmoveEvent: true,   // Note2Self: React.js build process giving me MAJOR grief on this property  :(  
	trackMouse: true
  });

  return (
    /* 
        Note2Self : 
        Code Learning Stretch Project # 3 | Swap out simple Image Carusel below, for a fancy one 
        with (i) swipe support on mobile, & (ii) smooth animations to look cool.
        Resist the temptaion of Auto Play Carousels. AODA accessibility & WCAG don't like it; they interfere with 
		the UI experience for people with assorted disabilities.
        See https://www.boia.org/blog/why-autoplay-is-an-accessibility-no-no 
    */

    /* 
	<---------------------> 
    <div className="box has-text-centered">
      <figure className="image is-3by2">
        <img
          src={`/images/${images[current]}`}
          alt={`${alt} ${current + 1}`}
          width="639"
          height="420"
        />
      </figure>
      <div className="buttons is-centered mt-2">
        <button onClick={prevSlide} className="button is-link is-light">← Prev</button>
        <button onClick={nextSlide} className="button is-link is-light">Next →</button>
      </div>
    </div>
    <--------------------->     
    */

    <div className="box has-text-centered">
	   {/* Note2Self: I love Bulma CSS, but I am uncertain if I like how huge is-3by2 makes medium sized images.  As a stretch learning project, let's later rewite is-3by2 with custom CSS?  */}
      <div {...handlers} 
        className="image is-3by2" 
        style={{ position: 'relative' }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={`/images/img/${images[current]}`}
            alt={`${alt} ${current + 1}`}
            width="600" 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }} 
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover', 
              borderRadius: '10px' 
            }}
          />
        </AnimatePresence>
      </div>

      <div className="buttons is-centered mt-2">
        <button onClick={prevSlide} className="button is-link is-light">← Prev</button>
        <button onClick={nextSlide} className="button is-link is-light">Next →</button>
      </div>
    </div>

  );
};

export default BigCatCarousel;

