import Slider from 'react-slick'
import { Card } from './card'

const Team = ({ vets }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
  }

  return (
    <Slider {...settings} className="w-[20rem] sm:w-[40rem] md:w-[60rem] py-4 text-secondary-content">
      {vets.map((v, i) => (
        <div key={i}>
          <Card id={v.id} src={v.src} title={v.title} text={v.speciality} />
        </div>
      ))}
    </Slider>
  )
}

export default Team
