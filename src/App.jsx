import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { ArrowUpRight, Mail, Phone, Linkedin, Menu, X, ChevronLeft, ChevronRight, User, FlaskConical, Microscope, Wrench, GraduationCap, Award, Droplets, Dna, Milk, ShieldCheck, Laptop, FileText, FileSpreadsheet, Presentation, Home, Sparkles, Zap, ArrowUp, Sun, Moon, Download } from 'lucide-react'
import { links, interests, projects, skills, certs, steps, contact } from './data.js'

const ease = [0.22, 1, 0.36, 1]
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, delay, ease }}>{children}</motion.div>
)
const Words = ({ text, className = '', delay = 0, step = 0.11 }) => (
  <span className={className}>
    <span className="sr-only">{text}</span>
    {text.split(' ').map((w, i) => (
      <motion.span key={i} aria-hidden="true" className="mr-[0.25em] inline-block" initial={{ opacity: 0, scale: 0.55, y: 26 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }} transition={{ type: 'spring', stiffness: 260, damping: 15, delay: delay + i * step }}>{w}</motion.span>
    ))}
  </span>
)
const Label = ({ children, light, icon: Icon }) => (
  <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.26em] ${light ? 'text-sand' : 'text-gold'}`}>
    {Icon ? <Icon size={18} /> : <span className="h-px w-8 bg-gold" />}{children}
  </p>
)
const H2 = ({ children, light }) => {
  const w = children.split(' '); const last = w.pop()
  return (
    <h2 className={`font-sans text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl ${light ? 'text-ivory' : 'text-espresso'}`}>
      <Words text={w.join(' ')} /><Words text={last} delay={w.length * 0.11} className="text-gold" />
    </h2>
  )
}
const Head = ({ icon: Icon, badge, title, sub, light }) => (
  <Reveal className="mx-auto max-w-3xl text-center">
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold ${light ? 'border-gold/60 bg-ivory/10 text-ivory' : 'border-gold/50 bg-gold/10 text-gold'}`}><Icon size={14} />{badge}</span>
    <div className="mt-6"><H2 light={light}>{title}</H2></div>
    {sub && <p className={`mx-auto mt-5 max-w-xl text-base ${light ? 'text-ivory/90' : 'text-muted'}`}>{sub}</p>}
  </Reveal>
)
const navIcons = { about: User, research: FlaskConical, skills: Wrench, education: GraduationCap, certificates: Award, contact: Mail }
const Sec = ({ id, bg, children }) => (
  <section id={id} className={`scroll-mt-20 ${bg}`}>
    <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">{children}</div>
  </section>
)
const Btn = ({ onClick, href, children, solid, icon: I = ArrowUpRight }) => {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${solid ? 'border-espresso bg-espresso text-ivory hover:border-gold hover:bg-gold' : 'border-espresso/40 text-espresso hover:border-gold hover:text-gold'}`
  const inner = <>{children}<I size={14} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></>
  return href ? <a href={href} download className={cls}>{inner}</a> : <button onClick={onClick} className={cls}>{inner}</button>
}

const navItems = [['Home', 'top', Home], ...links.map(([t, id]) => [t, id, navIcons[id]])]
function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const toggle = () => { const d = !dark; setDark(d); document.documentElement.classList.toggle('dark', d); try { localStorage.setItem('theme', d ? 'dark' : 'light') } catch (e) {} }
  const Theme = <button onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ivory">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    navItems.forEach(([, id]) => { const el = document.getElementById(id); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  const item = (id) => `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors duration-300 ${active === id ? 'bg-gold text-ivory shadow-md' : 'text-charcoal hover:bg-gold/10'}`
  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3">
      <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-gold/30 bg-ivory/85 p-1.5 shadow-lg backdrop-blur lg:flex">
        {navItems.map(([t, id, I]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={item(id)}><I size={16} />{t}</a>)}
        <span className="mx-1 h-6 w-px bg-gold/30" />{Theme}
      </nav>
      <div className="w-full max-w-xl rounded-3xl border border-gold/30 bg-ivory/90 shadow-lg backdrop-blur lg:hidden">
        <div className="flex h-12 items-center justify-between pl-5 pr-2">
          <a href="#top" className="font-serif text-lg font-bold tracking-[0.14em]">SHAIKH JINNATUL</a>
          <div className="flex items-center gap-1">{Theme}<button className="p-2" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>
        </div>
        {open && <nav id="mobile-menu" aria-label="Mobile" className="grid grid-cols-2 gap-2 p-3 pt-1">{navItems.map(([t, id, I]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={item(id)}><I size={16} />{t}</a>)}</nav>}
      </div>
    </header>
  )
}

const tiles = [['min-[960px]:left-[0.5%] min-[960px]:top-[49%]', Microscope, 'Microscopy'], ['min-[960px]:left-[0.5%] min-[960px]:bottom-[6%]', Dna, 'Molecular'], ['min-[960px]:right-[0.5%] min-[960px]:top-[8%]', Droplets, 'Water testing'], ['min-[960px]:right-[0.5%] min-[960px]:top-[42%]', FlaskConical, 'Culture'], ['min-[960px]:right-[1.5%] min-[960px]:bottom-[6%]', ShieldCheck, 'Aseptic']]
const hl = 'rounded-xl bg-champagne px-3 py-1 [box-decoration-break:clone]'
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-champagne pt-24 text-espresso">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgb(var(--c-ivory)/0.55)_0_1px,transparent_1px_14px)]" />
      <div className="relative mx-auto max-w-[1300px] px-5 pb-8 md:px-10 min-[960px]:h-[580px] min-[960px]:px-0 min-[960px]:pb-0">
        <h1 className="sr-only">Hello, I’m Jinnatul Shaikh</h1>
        <div data-hero="hello" aria-hidden="true" className="relative z-10 font-serif text-[clamp(3rem,16vw,4.5rem)] font-light leading-none tracking-tight min-[960px]:absolute min-[960px]:left-[5%] min-[960px]:top-14 min-[960px]:text-[min(9vw,7.5rem)]"><Words text="Hello, I’m" delay={0.3} /></div>
        <div data-hero="name" aria-hidden="true" className="relative z-10 mt-2 whitespace-nowrap font-script text-[clamp(2.1rem,11vw,3.75rem)] leading-[1.1] text-espresso min-[960px]:absolute min-[960px]:left-[5%] min-[960px]:top-[190px] min-[960px]:mt-0 min-[960px]:text-[min(6vw,5rem)]"><Words text="Jinnatul Shaikh." delay={0.8} step={0.2} /></div>
        <div data-hero="circle" className="relative z-0 mx-auto mt-6 aspect-square w-[min(66vw,300px)] min-[960px]:absolute min-[960px]:left-[48%] min-[960px]:top-6 min-[960px]:mt-0 min-[960px]:w-[min(34vw,470px)]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,#2A5849,#1F5E41_48%,#1E2B24)] shadow-2xl" />
          <motion.div initial={{ clipPath: 'circle(0% at 50% 50%)' }} animate={{ clipPath: 'circle(50% at 50% 50%)' }} transition={{ duration: 1.4, delay: 0.2, ease }} className="absolute inset-[5%] overflow-hidden rounded-full">
            <img src="/images/profile/profile-portrait.webp" width="1086" height="1448" alt="Shaikh Jinnatul in a green blazer in a microbiology laboratory" className="h-full w-full object-cover object-[50%_18%]" />
            <div className="absolute inset-0 bg-[#1F5E41] opacity-30 mix-blend-multiply" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#1E2B24]/55 to-transparent" aria-hidden="true" />
          </motion.div>
          <span className="absolute bottom-[6%] right-[3%] z-20 grid h-10 w-10 place-items-center rounded-full bg-[#EEF2EA] font-serif text-sm font-bold tracking-wider text-[#1E2B24] shadow-lg min-[960px]:h-11 min-[960px]:w-11">SJ</span>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-4 min-[960px]:contents">
          {tiles.map(([pos, I, l]) => (
            <div key={l} data-hero="tile" aria-hidden="true" className={`flex flex-col items-center gap-1.5 min-[960px]:absolute min-[960px]:z-10 min-[960px]:gap-2 ${pos}`}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-gold/30 bg-warm text-gold shadow-lg min-[960px]:h-14 min-[960px]:w-14"><I size={24} /></span>
              <span className="rounded-full border border-gold/30 bg-warm px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-muted min-[960px]:px-3 min-[960px]:py-1 min-[960px]:text-[10px]">{l}</span>
            </div>
          ))}
        </div>
        <div data-hero="badge" className="relative z-10 mt-7 text-center min-[960px]:absolute min-[960px]:bottom-[18%] min-[960px]:left-[12%] xl:left-[11%] min-[960px]:mt-0 min-[960px]:text-left">
          <p className="inline-block rounded-2xl bg-espresso px-4 py-2.5 font-sans text-base font-extrabold tracking-tight text-ivory shadow-xl sm:px-5 sm:py-3 sm:text-xl xl:text-3xl">B.Sc. Microbiology (Honours)</p>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em] text-espresso sm:text-xs sm:tracking-[0.28em]">Microbiology · Laboratory research</p>
        </div>
      </div>
      <div data-hero="panel" className="relative z-10 mx-auto max-w-[1300px] rounded-t-[2.5rem] min-[960px]:-mt-6 bg-warm px-5 pb-16 pt-12 text-center md:px-10 md:pt-16">
        <h2 className="mt-5 font-serif text-4xl font-light leading-[1.55] md:text-6xl md:leading-[1.45]"><span className={hl}>Microbiology Student</span> <span className="text-gold">&</span> <span className={`${hl} italic`}>Laboratory Researcher</span></h2>
        <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic text-charcoal md:text-2xl">“Exploring the Microbial World Through Science.”</p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-loose text-muted">
          Hands-on laboratory experience in <b className="text-gold">microbial isolation</b>, <b className="text-gold">bacterial transformation</b>, <b className="text-gold">antimicrobial susceptibility testing</b>, <b className="text-gold">water microbiology</b> and <b className="text-gold">molecular biology</b> techniques, with an interest in <em className="border-b border-gold font-serif font-semibold not-italic text-espresso">evidence-based research</em>.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Btn solid onClick={() => go('research')}>Explore my research</Btn>
          <Btn onClick={() => go('certificates')}>View certificates</Btn>
          <Btn href="/Shaikh-Jinnatul-Resume.pdf" icon={Download}>Download my résumé</Btn>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Sec id="about" bg="bg-champagne">
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-gold" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <img loading="lazy" width="1040" height="1513" src="/images/profile/lab-bench-work.webp" alt="Shaikh Jinnatul in a beige blazer preparing a sample at the laboratory bench" className="h-full w-full object-cover object-[35%_22%] transition-transform duration-[1500ms] hover:scale-105" />
            </div>
          </div>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7">
          <Label icon={User}>A little about me</Label>
          <div className="mt-5"><H2>Curiosity begins with the smallest things.</H2></div>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-charcoal">
            <p>I am a Microbiology (Honours) student at MUC Women’s College, The University of Burdwan, graduating in 2027 with a Major CGPA of 9.07/10. My work in the laboratory spans water microbiology, microbial isolation and culture, antimicrobial susceptibility testing, bacterial transformation and SDS-PAGE.</p>
            <p>I value aseptic technique, careful observation and accurate record-keeping. I am looking for entry-level opportunities in microbiology, molecular biology and laboratory research, and I want to keep learning from people who do this work well.</p>
          </div>
        </Reveal>
      </div>
      <div className="mt-16">
        <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.26em] text-muted"><Zap size={14} className="text-gold" />Areas of interest</p>
        <div role="region" aria-label="Areas of interest" className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="marquee flex w-max gap-3 pr-3">
            {[...interests, ...interests].map((t, i) => <li key={i} aria-hidden={i >= interests.length} className="flex shrink-0 items-center gap-2 rounded-full border border-gold/40 bg-ivory px-4 py-2 text-sm font-bold md:text-base"><Sparkles size={14} className="text-gold" />{t}</li>)}
          </ul>
        </div>
      </div>
    </Sec>
  )
}

const abbr = (t) => { const w = t.split(/[\s/]+/).filter((x) => /[A-Za-z]/.test(x)); return (w.length > 1 ? w[0][0] + w[1][0] : w[0].slice(0, 2)).toUpperCase() }
function PCard({ p, onOpen, on = true }) {
  const tab = on ? 0 : -1
  const extra = p.tech.length - 3
  return (
    <article className="lt flex h-full flex-col overflow-hidden rounded-3xl border border-gold/25 bg-ivory text-charcoal shadow-2xl">
      <button tabIndex={tab} onClick={() => onOpen(p)} aria-label={`Explore project: ${p.title}`} className="group relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-champagne">
        <img loading="lazy" src={p.imgs[0].src} alt={p.imgs[0].alt} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" style={{ objectPosition: p.pos }} />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-charcoal px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ivory"><FileText size={13} />Case study</span>
      </button>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-2xl font-extrabold leading-tight">{p.title}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-gold">{p.cat}</p>
        <p className="mt-3 text-base font-medium leading-relaxed">{p.short}</p>
        <p className="mt-3 text-sm italic text-muted">{p.imgs[0].cap}</p>
        <div className="mt-auto flex items-center justify-between border-t border-gold/25 pt-4">
          <div className="mt-4 flex -space-x-1.5">
            {p.tech.slice(0, 3).map((t) => <span key={t} title={t} className="grid h-8 w-8 place-items-center rounded-full border-2 border-ivory bg-champagne text-[10px] font-bold text-gold">{abbr(t)}</span>)}
            {extra > 0 && <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-ivory bg-gold text-[10px] font-bold text-ivory">+{extra}</span>}
          </div>
          <button tabIndex={tab} onClick={() => onOpen(p)} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold">Explore <ArrowUpRight size={15} /></button>
        </div>
      </div>
    </article>
  )
}

function Research({ onOpen }) {
  const feat = projects.slice(0, 3), more = projects.slice(3)
  const [a, setA] = useState(1)
  const [showMore, setShowMore] = useState(false)
  const step = (d) => setA((v) => Math.min(feat.length - 1, Math.max(0, v + d)))
  const arrow = 'grid h-10 w-10 place-items-center rounded-full border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-espresso'
  return (
    <Sec id="research" bg="dark-sec bg-deep text-ivory">
      <Head light icon={FlaskConical} badge="Selected research" title="Experiments, observations & scientific exploration." sub="Laboratory projects, each with its own photographs and write-up." />
      <div className="mt-12 flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.28em] text-sand"><span className="h-px w-12 bg-gold/60" /><Sparkles size={13} className="text-gold" />Featured work<span className="h-px w-12 bg-gold/60" /></div>
      <div className="mt-6" tabIndex={0} aria-label="Featured projects. Use left and right arrow keys." onKeyDown={(e) => { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }}>
        <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={(e, i) => { if (i.offset.x < -60) step(1); else if (i.offset.x > 60) step(-1) }} className="grid cursor-grab overflow-hidden py-6" style={{ perspective: 1400 }}>
          {feat.map((p, i) => { const o = i - a; return (
            <motion.div key={p.n} onClick={() => o !== 0 && setA(i)} aria-hidden={o !== 0} animate={{ x: `${o * 68}%`, scale: o === 0 ? 1 : 0.84, rotateY: o * -26, opacity: o === 0 ? 1 : 0.5 }}
              transition={{ type: 'spring', stiffness: 140, damping: 20 }} style={{ zIndex: 10 - Math.abs(o) }}
              className={`col-start-1 row-start-1 w-[min(78vw,400px)] justify-self-center ${o !== 0 ? 'cursor-pointer [&>*]:pointer-events-none' : ''}`}>
              <PCard p={p} onOpen={onOpen} on={o === 0} />
            </motion.div>) })}
        </motion.div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <button aria-label="Previous project" onClick={() => step(-1)} className={arrow}><ChevronLeft size={18} /></button>
          <div className="flex gap-2">{feat.map((p, i) => <button key={p.n} aria-label={`Show project ${i + 1}`} aria-current={i === a} onClick={() => setA(i)} className={`h-2.5 rounded-full transition-all ${i === a ? 'w-8 bg-gold' : 'w-2.5 bg-ivory/40'}`} />)}</div>
          <button aria-label="Next project" onClick={() => step(1)} className={arrow}><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <button aria-expanded={showMore} onClick={() => setShowMore(!showMore)} className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-ivory/10 px-5 py-2.5 text-sm font-bold">
          <Sparkles size={15} className="text-gold" />Explore more projects <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-xs text-espresso">{more.length}</span>
          <ChevronRight size={16} className={`transition-transform ${showMore ? 'rotate-90' : ''}`} />
        </button>
      </div>
      {showMore && <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">{more.map((p) => <Reveal key={p.n}><PCard p={p} onOpen={onOpen} /></Reveal>)}</div>}
      <p className="mt-8 text-center text-sm text-ivory/90">More lab work: Rhizobium isolation and biofertiliser production, and SDS-PAGE analysis.</p>
    </Sec>
  )
}

const gIcons = [FlaskConical, Microscope, Droplets, Dna, Milk, ShieldCheck, Laptop]
const sIcons = { 'MS Word': FileText, 'MS Excel': FileSpreadsheet, 'MS PowerPoint': Presentation }
function Skills() {
  return (
    <Sec id="skills" bg="bg-ivory">
      <Head icon={Wrench} badge="Laboratory & technical skills" title="Methods, techniques & practical knowledge." />
      <div className="mt-14 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(([g, items], i) => { const G = gIcons[i]; return (
          <Reveal key={g} delay={(i % 3) * 0.08} className="border-t-2 border-gold py-8">
            <div className="flex items-center gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center bg-gold text-ivory"><G size={22} /></span><h3 className="font-serif text-2xl font-bold leading-tight md:text-3xl">{g}</h3></div>
            <ul className="mt-5 space-y-2.5 text-base font-semibold text-charcoal">{items.map((s) => { const I = sIcons[s] || G; return <li key={s} className="flex items-start gap-2.5"><I size={16} className="mt-1 shrink-0 text-gold" />{s}</li> })}</ul>
          </Reveal>) })}
      </div>
    </Sec>
  )
}

function Education() {
  const rows = [['ISC — Class XII','East West Model School','91.80%'],['ICSE — Class X','East West Model School','91.08%']]
  return (
    <Sec id="education" bg="bg-champagne">
      <Head icon={GraduationCap} badge="Education" title="Where the foundations are built." />
      <div className="relative mt-14 border-l border-gold pl-6 md:ml-4 md:pl-12">
        <Reveal className="relative pb-14">
          <span className="absolute -left-[31px] top-3 h-3 w-3 rounded-full bg-gold md:-left-[55px]" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Expected graduation 2027</p>
          <h3 className="mt-3 font-serif text-3xl leading-tight md:text-6xl">B.Sc. Microbiology (Honours), 4-Year NEP 2020</h3>
          <p className="mt-4 text-lg text-charcoal">MUC Women’s College, The University of Burdwan</p>
          <div className="mt-8 flex gap-12">
            <div><p className="font-serif text-5xl text-gold">9.07<span className="text-2xl text-muted">/10</span></p><p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">Major CGPA</p></div>
            <div><p className="font-serif text-5xl text-gold">8.90</p><p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">All-subject CGPA</p></div>
          </div>
        </Reveal>
        {rows.map(([t, s, m]) => (
          <Reveal key={t} className="relative pb-10">
            <span className="absolute -left-[29px] top-2.5 h-2 w-2 rounded-full border border-gold bg-champagne md:-left-[53px]" />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div><h3 className="font-serif text-2xl">{t}</h3><p className="text-sm text-muted">{s}</p></div>
              <p className="font-serif text-3xl text-gold">{m}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  )
}

function Certificates({ onOpen }) {
  return (
    <Sec id="certificates" bg="bg-ivory">
      <Head icon={Award} badge="Certifications & learning" title="Learning beyond the classroom." sub="Workshops and training, with the original certificates." />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {certs.map((c, i) => {
          const open = () => onOpen({ title: c.title, desc: `${c.by} · ${c.date}`, imgs: [{ src: c.src, alt: `Certificate: ${c.title}`, cap: '' }] })
          return (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/30 bg-warm transition-transform duration-500 hover:-translate-y-1">
                <button onClick={open} aria-label={`View full size: ${c.title}`} className="block aspect-[3/2] overflow-hidden bg-champagne p-2">
                  <img loading="lazy" src={c.src} alt={`Certificate: ${c.title}`} className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{c.by}</p>
                  <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-gold">{c.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-xs"><span>{c.date}</span><span className="border border-gold/50 px-2 py-0.5 uppercase tracking-[0.16em] text-gold">{c.type}</span></div>
                  <button onClick={open} className="mt-auto inline-flex items-center gap-2 self-start border-b border-gold pb-1 pt-5 text-[11px] uppercase tracking-[0.22em] text-gold">View full size <ArrowUpRight size={14} /></button>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Sec>
  )
}

function Interests() {
  const list = ['Microbial Biotechnology','Molecular Biology','Antimicrobial Resistance','Environmental Microbiology','Plant–Microbe Interactions','Laboratory Research']
  return (
    <Sec id="interests" bg="bg-champagne">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4"><Label>Scientific interests</Label><p className="mt-5 text-sm leading-relaxed text-muted">Areas I want to learn more about. These are academic interests, not claims of specialist expertise.</p></Reveal>
        <ul className="md:col-span-8">
          {list.map((t) => <Reveal key={t}><li className="border-t border-gold/60 py-4 font-serif text-3xl md:text-5xl">{t}</li></Reveal>)}
        </ul>
      </div>
    </Sec>
  )
}

function Approach() {
  return (
    <Sec id="approach" bg="bg-ivory">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5"><Label>My approach to science</Label><div className="mt-5"><H2>Four habits I bring to the bench.</H2></div></Reveal>
        <ol className="md:col-span-7">
          {steps.map(([t, d], i) => (
            <Reveal key={t}><li className="grid grid-cols-[4rem_1fr] gap-4 border-t border-gold/60 py-7">
              <span className="font-serif text-4xl text-gold">0{i + 1}</span>
              <div><h3 className="text-[12px] uppercase tracking-[0.24em]">{t}</h3><p className="mt-2 max-w-md text-muted">{d}</p></div>
            </li></Reveal>
          ))}
        </ol>
      </div>
    </Sec>
  )
}

function Contact() {
  const card = 'group flex items-center gap-4 rounded-2xl border border-ivory/25 bg-ivory/10 p-4 transition-colors hover:bg-ivory/20'
  const tile = 'grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ivory/15'
  const round = 'grid h-10 w-10 place-items-center rounded-full border border-ivory/40 transition-colors hover:bg-ivory hover:text-espresso'
  return (
    <footer id="contact" className="dark-sec scroll-mt-20 bg-deep text-ivory">
      <div className="mx-auto max-w-[1100px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl border border-ivory/25 bg-charcoal shadow-2xl">
              <img loading="lazy" width="1086" height="1448" src="/images/profile/lab-laminar-cabinet.webp" alt="Working at a laminar airflow cabinet with culture tubes" className="h-full w-full object-cover object-[40%_50%]" />
              <span className="absolute bottom-4 left-4 rounded-xl bg-ivory px-3 py-2 font-serif text-xl font-bold tracking-widest text-espresso">SJ</span>
            </div>
          </Reveal>
          <div>
            <h2 className="font-sans text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"><Words text="Let’s connect" /><br /><Words text="over science." className="text-gold" delay={0.3} /></h2>
            <p className="mt-5 max-w-md text-base text-ivory/90">Open to meaningful conversations around microbiology, laboratory research, and future learning opportunities.</p>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.26em] text-sand">Get in touch</p>
            <div className="mt-4 space-y-3">
              <a className={card} href={`mailto:${contact.email}`}><span className={tile}><Mail size={20} /></span><span className="min-w-0"><span className="block font-bold">Email me</span><span className="block break-all text-sm text-ivory/90">{contact.email}</span></span></a>
              <div className="grid gap-3 sm:grid-cols-2">
                <a className={card} href={contact.linkedin} target="_blank" rel="noopener noreferrer"><span className={tile}><Linkedin size={20} /></span><span><span className="block font-bold">LinkedIn</span><span className="block text-sm text-ivory/90">Professional profile</span></span><ArrowUpRight size={16} className="ml-auto shrink-0" /></a>
                <a className={card} href={`tel:${contact.phone}`}><span className={tile}><Phone size={20} /></span><span><span className="block font-bold">Call me</span><span className="block text-sm text-ivory/90">{contact.phone}</span></span></a>
              </div>
              <a className={card} href="/Shaikh-Jinnatul-Resume.pdf" download><span className={tile}><Download size={20} /></span><span><span className="block font-bold">Résumé</span><span className="block text-sm text-ivory/90">PDF download</span></span><Download size={16} className="ml-auto shrink-0" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/25">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-ivory font-serif text-lg font-bold text-espresso">SJ</span><div><p className="font-bold">Shaikh Jinnatul</p><p className="text-xs text-ivory/90">B.Sc. Microbiology (Honours)</p></div></div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">{[['Home', 'top'], ['About', 'about'], ['Research', 'research'], ['Certificates', 'certificates'], ['Contact', 'contact']].map(([t, id]) => <a key={id} href={`#${id}`} className="hover:underline">{t}</a>)}</nav>
          <div className="flex items-center gap-2">
            <a className={round} href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a className={round} href={`mailto:${contact.email}`} aria-label="Email"><Mail size={17} /></a>
            <button onClick={() => go('top')} aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full bg-ivory text-espresso"><ArrowUp size={18} /></button>
          </div>
        </div>
        <p className="pb-6 text-center text-xs text-ivory/80"><span className="mr-3 inline-flex items-center gap-2 rounded-full border border-ivory/30 px-3 py-1 font-bold"><span className="h-2 w-2 rounded-full bg-ivory" />Open to opportunities</span>© {new Date().getFullYear()} Shaikh Jinnatul. All rights reserved.</p>
      </div>
    </footer>
  )
}

function Viewer({ item, onClose }) {
  const [i, setI] = useState(0)
  const closeRef = useRef(null)
  const n = item.imgs.length
  useEffect(() => {
    const prev = document.activeElement
    const k = (e) => { if (e.key === 'Escape') onClose(); if (n > 1 && e.key === 'ArrowRight') setI((v) => (v + 1) % n); if (n > 1 && e.key === 'ArrowLeft') setI((v) => (v - 1 + n) % n) }
    window.addEventListener('keydown', k); document.body.style.overflow = 'hidden'; closeRef.current?.focus()
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = ''; prev?.focus?.() }
  }, [n, onClose])
  const img = item.imgs[i]
  return (
    <motion.div role="dialog" aria-modal="true" aria-label={item.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] dark-sec overflow-y-auto bg-deep/95 text-ivory" onClick={onClose}>
      <button ref={closeRef} onClick={onClose} aria-label="Close" className="fixed right-4 top-4 z-10 border border-gold/60 bg-deep p-2 text-gold hover:bg-gold hover:text-espresso"><X size={22} /></button>
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.6, ease }}
        className="mx-auto flex min-h-full max-w-[1400px] flex-col gap-8 px-5 py-20 lg:flex-row lg:items-center lg:px-10" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0 lg:w-[62%]">
          <div className="relative flex items-center justify-center bg-charcoal p-2">
            <img key={img.src} src={img.src} alt={img.alt} className="max-h-[70vh] w-auto max-w-full object-contain" />
            {n > 1 && <>
              <button aria-label="Previous image" onClick={() => setI((i - 1 + n) % n)} className="absolute left-2 border border-gold/60 bg-deep/80 p-2 text-gold"><ChevronLeft size={20} /></button>
              <button aria-label="Next image" onClick={() => setI((i + 1) % n)} className="absolute right-2 border border-gold/60 bg-deep/80 p-2 text-gold"><ChevronRight size={20} /></button>
            </>}
          </div>
          {img.cap && <p className="mt-3 text-xs text-sand">{img.cap} {n > 1 && `(${i + 1}/${n})`}</p>}
        </div>
        <div className="lg:w-[38%]">
          {item.n && <span className="font-serif text-5xl text-gold">{item.n}</span>}
          <h3 className="mt-2 font-serif text-3xl leading-tight md:text-4xl">{item.title}</h3>
          <div className="my-6 h-px w-16 bg-gold" />
          <p className="leading-relaxed text-ivory/80">{item.desc}</p>
          {item.tech && <ul className="mt-6 flex flex-wrap gap-2">{item.tech.map((t) => <li key={t} className="border border-gold/50 px-3 py-1 text-xs text-sand">{t}</li>)}</ul>}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  const [item, setItem] = useState(null)
  const close = () => setItem(null)
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero /><About /><Research onOpen={setItem} /><Skills /><Education /><Certificates onOpen={setItem} /><Interests /><Approach />
      </main>
      <Contact />
      <AnimatePresence>{item && <Viewer item={item} onClose={close} />}</AnimatePresence>
    </MotionConfig>
  )
}
