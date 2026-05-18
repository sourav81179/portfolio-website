
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="p-6 flex justify-between items-center border-b border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          Sourav.dev
        </h1>

  <nav className="hidden md:flex gap-6">
  <a href="#home" className="hover:text-cyan-400">
    Home
  </a>

  <a href="#about" className="hover:text-cyan-400">
    About
  </a>

  <a href="#projects" className="hover:text-cyan-400">
    Projects
  </a>

  <a href="#contact" className="hover:text-cyan-400">
    Contact
  </a>
</nav>
      </header>

     <section
  id="home"
  className="px-8 py-24 max-w-7xl mx-auto"
>
  <div className="grid md:grid-cols-2 items-center gap-16">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-6xl font-extrabold mb-6">
        Hi, I'm{" "}
        <span className="text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]">
          Sourav
        </span>
      </h2>

      <p className="text-slate-300 text-xl leading-9 mb-8">
        Frontend and .NET Developer passionate about building
        modern, responsive and professional web applications.
      </p>

      <div className="flex gap-4">
        <button className="bg-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/40">
          View My Work
        </button>

        <a
          href="/resume.pdf"
          download
          className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition"
        >
          Download Resume
        </a>
      </div>

      <div className="flex gap-6 mt-8 text-cyan-400 font-semibold">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex justify-center">
      <img
        src="/My Half Photo.png"
        alt="Sourav"
        className="w-80 rounded-3xl border-4 border-cyan-400 shadow-[0_0_40px_#22d3ee]"
      />
    </div>

  </div>
</section>

      <section className="px-8 py-16 bg-slate-900">
        <h3 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {['HTML',
            'CSS',
            'JavaScript',
            'React',
            'Tailwind CSS',
            '.NET',
            'SQL Server',
            'Git'
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-950 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
            >
              <h4 className="text-2xl font-semibold text-cyan-400">
                {skill}
              </h4>
            </div>
          ))}
        </div>
      </section>

     <section id="about" className="px-8 py-20">
  <h3 className="text-4xl font-bold text-center mb-12">
    About Me
  </h3>

  <div className="max-w-4xl mx-auto text-center">
    <p className="text-slate-300 text-lg leading-9">
     I am a passionate Frontend and .NET Developer focused on building responsive, user-friendly and modern web applications. I enjoy creating clean UI designs and solving real-world problems through code.
    </p>
  </div>
</section>
<section className="px-8 py-20 bg-slate-900">
  <h3 className="text-4xl font-bold text-center mb-12">
    Projects
  </h3>

  <div className="grid md:grid-cols-3 gap-8">

    {[
  {
    title: 'Portfolio Website',
    desc: 'Modern personal portfolio website.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },

  {
    title: 'E-Commerce UI',
    desc: 'Responsive shopping website design.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  },

  {
    title: 'Dashboard App',
    desc: 'Professional admin dashboard interface.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
].map((project) => (
      <div
        key={project.title}
        className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800  hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300"
      >
       <img
  src={project.image}
  alt={project.title}
  className="h-48 w-full object-cover hover:scale-105 transition duration-500"
/>

        <div className="p-6">
          <h4 className="text-2xl font-bold mb-4">
            {project.title}
          </h4>

          <p className="text-slate-300">
            {project.desc}
          </p>

          <button className="mt-5 bg-cyan-500 px-5 py-2 rounded-xl">
            View Project
          </button>
        </div>
      </div>
    ))}
    <section className="px-8 py-20">
  <h3 className="text-4xl font-bold text-center mb-12">
    Contact Me
  </h3>

  <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
    <div className="bg-slate-900 p-6 rounded-2xl text-center border border-slate-800">
      <h4 className="text-cyan-400 text-xl font-bold mb-3">
        Email
      </h4>

      <p className="text-slate-300">
        souravsarkar2948@gmail.com
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-2xl text-center border border-slate-800">
      <h4 className="text-cyan-400 text-xl font-bold mb-3">
        Phone
      </h4>

      <p className="text-slate-300">
        +91 8117959948
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-2xl text-center border border-slate-800">
      <h4 className="text-cyan-400 text-xl font-bold mb-3">
        Location
      </h4>

      <p className="text-slate-300">
        India
      </p>
    </div>
  </div>
</section>
  </div>
  <footer className="text-center py-6 text-slate-400 border-t border-slate-800 mt-20">
  © 2026 Sourav.dev | Built with React & Tailwind CSS
</footer>
</section>
    </div>
   
  )
}