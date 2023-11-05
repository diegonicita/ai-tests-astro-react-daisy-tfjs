import Slider from 'react-slick'
import { Card } from './card'

const Team = ({ vets }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,
  }

  return (
    <Slider settings={settings} className="border border-black w-[30rem] p-5">
      {vets.map((v, i) => (
        <div key={i} className="max-w-[30rem] bg-red-500 p-5">
          <Card id={v.id} src={v.src} title={v.title} text={v.speciality} />
        </div>
      ))}
    </Slider>
  )
}

export default Team
