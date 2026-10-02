import Link from "next/link";

const stories = [
  { slug: "slow-skincare", cat: "SKINCARE", title: "The art of a slower, simpler skincare routine", desc: "A thoughtful edit of the essentials that help your skin feel like itself, only happier.", image: "photo-1556229010-6c3f2c9ca5f8", read: "6 MIN READ" },
  { slug: "five-minute-face", cat: "MAKEUP", title: "The five-minute face, reimagined", desc: "Fresh skin, softly defined eyes, and a little colour that looks like you.", image: "photo-1487412720507-e7ab37603c6f", read: "4 MIN READ" },
  { slug: "better-wash-day", cat: "HAIRCARE", title: "A better wash day starts before the shower", desc: "Small pre-wash rituals that make every strand feel considered.", image: "photo-1522337360788-8b13dee7a37e", read: "5 MIN READ" },
  { slug: "evening-reset", cat: "WELLNESS", title: "Make room for your evening reset", desc: "A few gentle cues to help the day come to a softer close.", image: "photo-1515377905703-c4788e51af15", read: "3 MIN READ" },
];
const photo = (id: string, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export default function Home() {
  return <main className="home-3d" id="top">
    <div className="announcement"><span className="announcement-spark">✦</span> A little more intention, a little more glow. <a href="#latest">Explore the journal ↗</a></div>
    <header className="header">
      <Link className="logo" href="/">Glow <span>Journal✦</span></Link>
      <nav><a href="#skincare">Skincare</a><a href="#makeup">Makeup</a><a href="#haircare">Haircare</a><a href="#wellness">Wellness</a><Link href="/about">Our story</Link></nav>
      <a className="header-cta" href="#newsletter">The Sunday Edit <span>↗</span></a>
    </header>

    <section className="hero hero-3d">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-star">✳</span> THE BEAUTY JOURNAL · EST. 2026</p>
        <h1>Your daily dose<br />of <em>glow.</em><span className="title-spark">✦</span></h1>
        <p className="intro">Expert tips, honest reviews and little rituals to help you look, feel and live your most beautiful life.</p>
        <div className="hero-actions"><a className="button" href="#latest">Explore articles <span>↗</span></a><a className="soft-button" href="#categories"><span className="play-icon">▶</span> Find your ritual</a></div>
        <div className="hero-stats"><div><strong>100<span>+</span></strong><small>Beauty stories</small></div><div><strong>50K<span>+</span></strong><small>Happy readers</small></div><div><strong>4.9<span className="star">★</span></strong><small>Reader love</small></div></div>
      </div>
      <div className="hero-visual hero-visual-3d">
        <div className="hero-halo" />
        <div className="hero-frame"><img src={photo("photo-1611930022073-b7a4ba5fcccd", 1400)} alt="A curated collection of skincare essentials in warm morning light" /></div>
        <div className="floating-note note-top"><span>✦</span><strong>Beauty begins</strong><small>within you</small></div>
        <div className="floating-product product-left"><span className="product-cap" /><span className="product-label">GLOW<br/>SERUM</span></div>
        <div className="floating-product product-right"><span className="jar-lid" /><span className="product-label">soft<br/>skin</span></div>
        <div className="hero-caption"><span className="caption-dot" /> THE EVERYDAY EDIT <b>— ISSUE NO. 08</b></div>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <span className="petal petal-one">✿</span><span className="petal petal-two">✦</span><span className="petal petal-three">✿</span>
      </div>
    </section>

    <div className="ticker"><span>SKIN, WITH INTENTION</span> ✳ <span>MAKEUP, MADE PERSONAL</span> ✳ <span>GOOD HAIR DAYS</span> ✳ <span>WELLNESS, EVERYDAY</span> ✳ <span>YOU, ALWAYS</span></div>

    <section className="category-strip section" id="categories">
      <div className="section-title"><div><p className="eyebrow">YOUR WORLD OF WELLNESS</p><h2>Find your kind of <em>glow.</em></h2></div><span className="browse">A LITTLE SOMETHING FOR EVERY YOU ↗</span></div>
      <div className="category-grid category-grid-3d">
        <a className="category-card category-skin" href="#skincare"><img src={photo("photo-1570172619644-dfd03ed5d881", 700)} alt="Skincare ritual" /><span className="category-icon">✿</span><div><strong>Skincare</strong><small>Healthy, glowing skin</small></div><span className="card-arrow">↗</span></a>
        <a className="category-card category-makeup" href="#makeup"><img src={photo("photo-1522335789203-aabd1fc54bc9", 700)} alt="Makeup essentials" /><span className="category-icon">✦</span><div><strong>Makeup</strong><small>Looks for every occasion</small></div><span className="card-arrow">↗</span></a>
        <a className="category-card category-hair" href="#haircare"><img src={photo("photo-1527799820374-dcf8d9d4a388", 700)} alt="Healthy hair ritual" /><span className="category-icon">❋</span><div><strong>Haircare</strong><small>Stronger, healthier hair</small></div><span className="card-arrow">↗</span></a>
        <a className="category-card category-wellness" href="#wellness"><img src={photo("photo-1608248543803-ba4f8c70ae0b", 700)} alt="Calm wellness ritual" /><span className="category-icon">☼</span><div><strong>Wellness</strong><small>A balanced, happier you</small></div><span className="card-arrow">↗</span></a>
      </div>
    </section>

    <section className="section latest-section" id="latest">
      <div className="section-title"><div><p className="eyebrow">FRESH FROM THE JOURNAL</p><h2>Latest from the <em>blog.</em></h2></div><span className="browse">THE LATEST NOTES ↗</span></div>
      <div className="stories stories-3d">{stories.map(s => <article id={s.cat.toLowerCase()} className="story story-3d" key={s.slug}><Link className="story-image" href={`/article/${s.slug}`}><img src={photo(s.image)} alt={s.title} loading="lazy" /><span className="story-arrow">↗</span><span className="image-shine" /></Link><div className="meta"><b>{s.cat}</b><span>{s.read}</span></div><h3><Link href={`/article/${s.slug}`}>{s.title}</Link></h3><p>{s.desc}</p></article>)}</div>
    </section>

    <section className="manifesto manifesto-3d"><div className="manifesto-image-wrap"><img src={photo("photo-1608248543803-ba4f8c70ae0b", 1100)} alt="A calm, sunlit beauty ritual" /><span className="manifesto-sticker">A softer<br/><em>kind of glow</em> ✦</span></div><div><p className="eyebrow">A NOTE FROM US</p><h2>Less noise.<br /><em>More you.</em></h2><p>We believe beauty should feel like coming home to yourself. No impossible standards, no ten-step rules. Just honest advice, lovely discoveries and rituals worth keeping.</p><Link className="underlink" href="/about">Get to know Glow ↗</Link></div></section>

    <section className="newsletter newsletter-3d" id="newsletter"><div className="newsletter-orb" /><div className="newsletter-copy"><p className="eyebrow">A NOTE FOR YOUR INBOX</p><h2>Your Sunday,<br/><em>well spent.</em></h2><p>One thoughtful letter, a few lovely finds, and a softer start to your week.</p><form action="#newsletter" method="get"><label className="sr" htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="Your email address" required /><button type="submit" aria-label="Join the newsletter">↗</button></form><small>✦ Newsletter sign-up is a design preview; subscriptions are not collected yet.</small></div><div className="newsletter-art" aria-hidden="true"><div className="envelope"><span>♥</span></div><span className="heart heart-one">♥</span><span className="heart heart-two">✦</span><span className="heart heart-three">♥</span></div></section>

    <footer><div className="footer-main"><Link className="logo" href="/">Glow <span>Journal✦</span></Link><p>Beauty, thoughtfully.<br />A journal for feeling good in your own skin.</p><div><Link href="/about">Our story</Link><a href="#latest">The journal</a><a href="#newsletter">Newsletter</a></div></div><div className="footer-bottom"><span>© 2026 GLOW JOURNAL</span><span>MADE WITH CARE, ALWAYS ✳</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}