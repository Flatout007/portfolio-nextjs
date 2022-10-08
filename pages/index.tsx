import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import type { GetStaticProps, NextPage } from 'next'
import { ReactElement } from 'react'
import { BackgroundCircles } from '../components/BackgroundCircles'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import {fetchSocials} from '../utils/fetchSocials'
import { fetchExperiences } from '../utils/fetchExperience'
import { Social, Experiences, Skill, Project } from '../typings'
import { Experience } from '../components/Experience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'

type StaticProps = {
  socials: Social[];
  experiences: Experiences[];
  skills: Skill[];
  projects: Project[];
}

const Home: NextPage<StaticProps> = (props: StaticProps): ReactElement => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className='parent scrollbar scrollbar-track-gray-400/20
       scrollbar-thumb-[#f7AB0A]'>
        <Header socials={props.socials}></Header>

        <section id="hero" className="pt-20 h-screen w-screen md:snap-start">
          <BackgroundCircles></BackgroundCircles>
        </section>

        <section id="about" className="h-screen w-screen md:snap-center">
          <About></About>
        </section>

        <section id="experience" className='w-screen md:snap-center'>
          <Experience experiences={props.experiences}></Experience>
        </section>

        <section id="skills" className='w-screen md:snap-start'>
          <Skills skills={props.skills}></Skills>
        </section>

        <section id="projects" className='h-[165em] md:h-screen w-screen md:snap-start'>
          <Projects projects={props.projects}></Projects>
        </section>

        <section id="contact" className='w-screen md:snap-start'>
          <Contact></Contact>
        </section>

      </div>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  
  const socials: Social[] = await fetchSocials().then(function (res: Response): Promise<any> {
    return res.json();
  });

  const experiences: Experiences[] = await fetchExperiences().then(function (res: Response): Promise<any> {
    return res.json();
  });
  const skills: Skill[] = await fetchSkills().then(function(res: Response): Promise<any> {
    return res.json();
  });
  const projects: Project[] = await fetchProjects().then(function(res: Response): Promise<any> {
    return res.json();
  });

  return {
    props: {
      socials: socials,
      experiences: experiences,
      skills: skills,
      projects: projects
    },
    /* Next.js will re-generate the page:
     - When a request comes in 
     - at most once every 10 seconds
    */
    revalidate: 10,
  }
}
