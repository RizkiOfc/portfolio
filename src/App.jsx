import DataImage from './data';
import { tool } from './data';
import { listTools } from './data';
import { listProyek } from './data';

function App() {
  return (
    <>
    <div className="hero md:grid grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
      <div className='animate__animated animate__fadeInUp animate__delay-2s'>
        <div className='flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl'>
          <q>I Am A Beginner Programmer</q>
        </div>
        <h1 className='text-5xl/tight font-bold mb-6'>Hi, Im Rizki Engine.</h1>
        <p className='text-base/loose mb-6 opacity-60'>I have programming and design skills, especially in making websites and bots and others. I like coding😊</p>
        <div className='flex items-center sm:gap-4 gap-2'>
          <a href="#project" className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600'>My Project <i className="ri-code-view"></i></a>
          <a href="#skills" className='bg-indigo-700 p-4 rounded-2xl hover:bg-indigo-600'>My Skills <i class="ri-corner-up-right-double-line"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Meuni, Kepo" className='mt-6 w-[500px] max-w-full md:ml-auto rounded-full animate__animated animate__fadeInUp animate__delay-3s rounded-full' loading='lazy' />
    </div>
    <div className="about mt-32 py-10" id='about'>
      <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-right">About.</h1>
      <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
        <p className='text-base/loose mb-10'>Hello! My name is Rizki, a programmer who is passionate about technology and programming. I started my journey in the coding world from a great curiosity about how applications and systems work behind the scenes.
          Over time, I have explored various programming languages and technologies such as JavaScript, Node.js, HTML, CSS, and others. I enjoy the process of building digital solutions — from creating WhatsApp bots, web applications, to complex API integrations. Every line of code for me is a challenge and an art.
          I believe that learning is a lifelong process. Therefore, I am always open to new technologies, collaborative projects, and challenges that can hone my skills further. My goal is to become a programmer who is not only technically proficient, but also has a positive impact through the technology I develop.
          </p>
          
      </div>
      <div className='tools mt-32'>
        <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-right" data-aos-duration="1000">Tools Used.</h1>
        <p className='w-2/5 text-base/loose opacity-50' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Here are some of the tools used.</p>
        <div className='tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
          {tool.map((tool) => (
            <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group transition-all' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900' loading='lazy' />
            <div>
              <h4 className='font-bold'>{tool.nama}</h4>
              <p className='opacity-50'>{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      <div className='skills mt-32' id="skills">
        <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-right">My Skills.</h1>
        <p className='w-2/5 text-base/loose opacity-50' data-aos="right" data-aos-duration="1000">Here are some of the my skills.</p>
        <div className='skills-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
          {listTools.map((tool) => (
            <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group transition-all' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900' loading='lazy' />
            <div>
              <h4 className='font-bold'>{tool.nama}</h4>
              <p className='opacity-50'>{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    <div className="project mt-32 py-10" id='project'>
      <h1 className='text-center text-4xl font-bold mb-2 data-aos="fade-right'>My Project</h1>
        <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Here is my project.</p>
        <div className="project-box mt-14 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className='p-4 bg-zinc-800 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={proyek.gambar} alt="Project" loading='lazy'/>
              <div>
                <h1 className='text-2xl font-bold my-4'>{proyek.nama}</h1>
                <p className='text-base/loose mb-4 '>{proyek.desk}</p>
                <div className='flex flex-wrap gap-2'>
                  {proyek.tools.map((tool, index) => (
                    <p className='py-1 px-3 border border-zinc-500 rounded-md bg-zinc-600 font-semibold' key={index}>{tool}</p>
                  ))}
                </div>
                <div className='mt-8 text-center'>
                  <a href="#" className='bg-violet-700 p-3 rounded-lg block border border-zinc-700 hover:bg-transparent'>View Website <i class="ri-arrow-right-line"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
      <div className="contact mt-32 p-10" id='contact'>
          <h1 className='text-4xl mb-2 font-bold text-center'>Chats</h1>
          <p className='text-base/loose text-center mb-10 opacity-10'>Let's Chat</p>
          <form action="https://formsubmit.co/tururizki20@gmail.com" method="POST" className='bg-zinc-800 p-6 sm:p-10 w-full max-w-xl mx-auto rounded-md' autoComplete="off">
  <div className='flex flex-col gap-4'>
    <div>
      <label className='font-semibold block mb-1'>Name</label>
      <input type="text" name='nama' placeholder='Your Name' className='w-full border border-zinc-500 p-2 rounded-md' required />
    </div>
    <div>
      <label htmlFor="pesan" className='font-semibold block mb-1'>Message</label>
      <textarea name="pesan" id="msg" rows="4" placeholder='Your Message...' className='w-full border border-zinc-500 p-2 rounded-md'></textarea>
    </div>
    <button type='submit' className='bg-violet-700 p-3 rounded-lg w-full border border-zinc-600 hover:bg-violet-600 transition-all'>Send</button>
  </div>
</form>
    </div>
    </>
  )
}

export default App
