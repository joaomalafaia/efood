import { BannerArea, BannerImg, BannerText, BannerTitle } from './styles'

const Banner = () => (
  <BannerArea>
    <BannerImg />
    <div className="container">
      <BannerText>Italiana</BannerText>
      <BannerTitle>La Dolce Vita Trattoria</BannerTitle>
    </div>
  </BannerArea>
)

export default Banner
