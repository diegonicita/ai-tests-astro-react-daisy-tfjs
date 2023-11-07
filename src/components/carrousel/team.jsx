import Slider from 'react-slick'
import { Card } from './card'

const Team = ({ vets }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings} className="w-[20rem] sm:w-[40rem] md:w-[60rem] py-4">
      {vets.map((v, i) => (
        <div key={i}>
          <Card id={v.id} src={v.src} title={v.title} text={v.speciality} />
        </div>
      ))}
    </Slider>
  )
}

export default Team
