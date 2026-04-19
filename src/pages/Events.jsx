import PageHero from '../components/PageHero'
import CommunityBanner from '../components/CommunityBanner'
import './Events.css'

const EVENTS = [
  {
    id: 1,
    title: 'Pokeswap: TCG Marketplace',
    subtitle: 'Trade and play with other Pokemon TCG fans.',
    description:
      'Step into the world of trading, collecting, and battling with fellow Pokemon TCG enthusiasts ' +
      'at Pokeswap. Our Marketplace provides a space to connect with other fans, exchange cards, and ' +
      'build your ultimate deck. Whether you\'re hunting for rare finds or looking to trade duplicates, ' +
      'our community makes it easy, fun, and secure to play your way.',
    image: './WGA/HuskyExpo/Artist Alley/image 1.JPG',
    imageLeft: true,
  },
  {
    id: 2,
    title: 'Gaming Tournaments',
    subtitle: 'A place for players of all skill levels.',
    description:
      'Catch the action in thrilling tournaments and be the first to try exciting new games. ' +
      'Whether you\'re watching the competition or discovering your next favorite game, ' +
      'there\'s something for every gamer!',
    image: './WGA/HuskyExpo/GamingTournaments/image 1.jpg',
    imageLeft: false,
  },
  {
    id: 3,
    title: 'Guest Panels',
    subtitle: 'Where Gaming\'s Biggest Voices Take the Stage!',
    description:
      'HuskyExpo loves to bring out influential talent within the gaming sphere. Our guest panels ' +
      'feature industry experts, creators, and innovators sharing their stories and insights. ' +
      'Don\'t miss the chance to connect with your favorites during exclusive meet-and-greets.',
    image: './WGA/HuskyExpo/Guest Panels/image 1.jpg',
    imageLeft: true,
  },
]

export default function Events() {
  return (
    <div className="events-page">
      <PageHero title="Events" />
      <CommunityBanner />

      <div className="events-content">
        {EVENTS.map(ev => (
          <section
            key={ev.id}
            className={`ev-feature${ev.imageLeft ? '' : ' ev-feature--flip'}`}
          >
            <div className="ev-feature__inner">
              <div className="ev-feature__media">
                <img src={ev.image} alt={ev.title} />
              </div>
              <div className="ev-feature__text">
                <h2>{ev.title}</h2>
                {ev.subtitle && <p className="ev-feature__subtitle">{ev.subtitle}</p>}
                <p>{ev.description}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CommunityBanner />
    </div>
  )
}
