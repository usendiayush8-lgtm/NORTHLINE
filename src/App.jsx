
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import ContactTools from './contactTool.jsx'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    icon: '✳',
    title: 'Website Design',
    description:
      'Modern and elegant website designs that make your brand stand out.'
  },
  {
    number: '02',
    icon: '⌘',
    title: 'Web Development',
    description:
      'Fast, responsive and powerful websites built for your business.'
  },
  {
    number: '03',
    icon: '◇',
    title: 'E-commerce',
    description:
      'Beautiful online stores designed to turn visitors into customers.'
  }
]

const projects = [
  {
    number: '01',
    name: 'BAITHAK BISTRO',
    category: 'Restaurant Website',
    description:
      'A sophisticated digital experience for a modern restaurant.',
    style: 'project-one'
  },
  {
    number: '02',
    name: 'ZAVORA',
    category: 'E-commerce Website',
    description:
      'A modern shopping experience with elegant product layouts.',
    style: 'project-two'
  },
  {
    number: '03',
    name: 'LIFEOS',
    category: 'Productivity Platform',
    description:
      'A clean digital platform designed for everyday productivity.',
    style: 'project-three'
  }
]

export default function App() {
  const appRef = useRef(null)
  const email = 'YOUR_EMAIL@example.com'

  useLayoutEffect(() => {
    const root = appRef.current

    if (!root) return

    root.classList.add('gsap-ready')

    const ctx = gsap.context(() => {

      // HERO INTRO ANIMATION
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: 'power3.out'
        }
      })

      heroTimeline
        .from('.hero-badge', {
          y: 25,
          opacity: 0,
          duration: 0.7
        })
        .from('.hero-small-heading', {
          y: 25,
          opacity: 0,
          duration: 0.7
        }, '-=0.4')
        .from('.hero-content h1', {
          y: 65,
          opacity: 0,
          filter: 'blur(10px)',
          duration: 1
        }, '-=0.4')
        .from('.hero-description', {
          y: 25,
          opacity: 0,
          duration: 0.7
        }, '-=0.5')
        .from('.hero-actions, .hero-trust, .hero-bottom', {
          y: 25,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15
        }, '-=0.4')
        .from('.hero-art', {
          opacity: 0,
          scale: 0.85,
          duration: 1.2
        }, '-=1')

      // HERO LOGO FLOAT
      gsap.to('.hero-logo-circle', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // FLOATING CARDS
      gsap.to('.floating-card-top', {
        y: -12,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to('.floating-card-bottom', {
        y: 12,
        rotation: -2,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // ORBIT ANIMATION
      gsap.to('.orbit-one', {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: 'none'
      })

      gsap.fromTo(
        '.orbit-two',
        { rotation: -35 },
        {
          rotation: 325,
          duration: 30,
          repeat: -1,
          ease: 'none'
        }
      )

      gsap.to('.orbit-three', {
        rotation: -360,
        duration: 45,
        repeat: -1,
        ease: 'none'
      })

      // HERO SCROLL PARALLAX
      gsap.to('.hero-content', {
        y: -100,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to('.hero-art', {
        y: 100,
        scale: 0.9,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      // BRAND STRIP
      gsap.from('.brand-strip span', {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.7,
        scrollTrigger: {
          trigger: '.brand-strip',
          start: 'top 90%'
        }
      })

      // SECTION HEADINGS
      gsap.utils.toArray('.section-heading').forEach((heading) => {
        gsap.from(heading, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%'
          }
        })
      })

      // SERVICE CARDS
      gsap.from('.service-card', {
        y: 80,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.service-grid',
          start: 'top 80%'
        }
      })

      // ABOUT SECTION
      gsap.from('.about-visual', {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 75%'
        }
      })

      gsap.from('.about-content', {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 75%'
        }
      })

      // PORTFOLIO CARDS
      gsap.from('.project-card', {
        y: 90,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.project-grid',
          start: 'top 80%'
        }
      })

      // CONTACT SECTION
      gsap.from('.contact-section > *', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%'
        }
      })

    }, root)

    return () => {
      ctx.revert()
      root.classList.remove('gsap-ready')
    }
  }, [])

  return (
    <div className="page" ref={appRef}>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          NORTH<span>LINE</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
        </div>

        <a href={`mailto:${email}`} className="nav-contact">
          Let's Talk ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="hero" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-live-dot"></span>
            DIGITAL EXPERIENCES THAT MATTER
          </div>

          <p className="hero-small-heading">
            CREATIVE DIGITAL STUDIO
          </p>

          <h1>
            We build websites
            <span>that help businesses</span>
            <span className="gold-text">grow digitally.</span>
          </h1>

          <p className="hero-description">
            We create modern, professional and high-performing websites
            that help businesses build their identity, attract customers
            and grow online.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Start a Project <span>↗</span>
            </a>

            <a href="#work" className="text-btn">
              Explore Our Work →
            </a>
          </div>

          <div className="hero-trust">
            <span>✦ Modern Design</span>
            <span>✦ Responsive Websites</span>
            <span>✦ Business Focused</span>
          </div>

          <div className="hero-bottom">
            <div>
              <strong>01</strong>
              <span>Creative Strategy</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Modern Technology</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Digital Growth</span>
            </div>
          </div>

        </div>

        {/* HERO GRAPHIC */}
        <div className="hero-art">

          <div className="hero-glow"></div>

          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>
          <div className="hero-orbit orbit-three"></div>

          <div className="hero-logo-circle">
            <div className="hero-symbol">N<span>.</span></div>
            <p>NORTHLINE</p>
            <small>DIGITAL STUDIO</small>
          </div>

          <div className="floating-card floating-card-top">
            <div className="floating-icon">✳</div>
            <div>
              <small>CREATIVE DESIGN</small>
              <h3>Unique Identity</h3>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <div className="floating-icon">↗</div>
            <div>
              <small>BUSINESS GROWTH</small>
              <h3>Digital Presence</h3>
            </div>
          </div>

          <div className="hero-vertical-text">
            DESIGN · DEVELOP · GROW
          </div>

        </div>

        <div className="hero-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </header>

      {/* BRAND STRIP */}
      <div className="brand-strip">
        <span>DESIGN</span>
        <span>✳</span>
        <span>DEVELOPMENT</span>
        <span>✳</span>
        <span>CREATIVITY</span>
        <span>✳</span>
        <span>INNOVATION</span>
      </div>

      {/* SERVICES */}
      <section className="services-section" id="services">

        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2>
              Services built for
              <span> your growth.</span>
            </h2>
          </div>

          <p className="section-note">
            We combine creative thinking, modern technology and
            smart strategy to build meaningful digital experiences.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>

              <div className="service-top">
                <span className="service-icon">{service.icon}</span>
                <span className="number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="card-link">
                DISCUSS YOUR PROJECT ↗
              </a>

            </div>
          ))}
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-visual">
          <div className="about-monogram">N.</div>
          <span>THINK DIFFERENT. BUILD BETTER.</span>
        </div>

        <div className="about-content">

          <span className="eyebrow">ABOUT NORTHLINE</span>

          <h2>
            More than websites.
            <span> We build experiences.</span>
          </h2>

          <p>
            Northline is a creative digital studio focused on helping
            businesses establish a strong online presence.
          </p>

          <p>
            From the first idea to the final launch, we focus on
            thoughtful design, clean development and experiences
            that make your business stand out.
          </p>

          <a href="#contact" className="primary-btn">
            Work With Us <span>↗</span>
          </a>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section className="portfolio-section" id="work">

        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED PROJECTS</span>
            <h2>
              Work that makes
              <span> an impression.</span>
            </h2>
          </div>

          <p className="section-note">
            A collection of digital concepts built around
            creativity, functionality and modern design.
          </p>
        </div>

        <div className="project-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className={`project-image ${project.style}`}>

                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-preview">
                  <span>SELECTED WORK</span>
                  <h3>{project.name}</h3>
                  <div></div>
                  <small>{project.category}</small>
                </div>

              </div>

              <div className="project-info">

                <div>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </div>

                <span className="project-arrow">↗</span>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

        <h2>
          Let's create something
          <span> extraordinary.</span>
        </h2>

        <p>
          Have an idea for your business? Let's turn it into
          a powerful digital experience.
        </p>

        <a href={`mailto:${email}`} className="primary-btn">
          Let's Talk About Your Project <span>↗</span>
        </a>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <a href="#home" className="logo">
          NORTH<span>LINE</span>
        </a>

        <p>
          Building digital experiences that move businesses forward.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NORTHLINE. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED WITH PURPOSE.</span>
        </div>

      </footer>

      <ContactTools />

    </div>
  )
}
