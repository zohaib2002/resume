const profileData = {
  title: 'Résumé',
  name: 'Vipin Yadav',
  sub_title: 'Software Engineer',
  logoURL: 'assets/images/dp.jpg',
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>JavaScript</strong>
     and it's applications. Experienced in designing and implementing sophisticated UI/UX with
      Progressive Web Application standards and application life-cycle managements.`,
    contact: {
      email: 'imvpn22@gmail.com',
      phone: '+91-9919716378',
      address: 'Bengaluru, Karnataka 560035'
    }
  },
  links: [
    { title: 'Portfolio', src: 'https://imvpn22.github.io/' },
    { title: 'Github', src: 'https://github.com/imvpn22' },
    { title: 'HackerEarth', src: 'https://www.hackerearth.com/@imvpn22' },
    { title: 'LinkedIn', src: 'https://www.linkedin.com/in/imvpn22' },
    { title: 'Twitter', src: 'https://twitter.com/imvpn22' }
  ],
  education: [
    {
      alma: 'FET, GKV, Haridwar',
      duration: '2014 - 2018',
      std: 'Bachelor of Technology (Computer Science & Engineering)',
      score: '71%'
    },
    {
      alma: 'Jwala Devi SVMIC, Prayagraj',
      duration: '2011 - 2013',
      std: 'Class XI - XII (PCM)',
      score: '90%'
    },
    {
      alma: 'Jwala Devi SVMIC, Prayagraj',
      duration: '2011 - 2013',
      std: 'Class XI - XII (PCM)',
      score: '73%'
    }
  ],
  skills: [
    {
      graph: 'false',
      category: 'Programming Languages',
      topics: ['C', 'C++', 'JavaScript']
    },
    {
      graph: 'false',
      category: 'Databases',
      topics: ['MongoDB', 'PostgreSQL', 'Oracle PL/SQL']
    },
    {
      graph: 'false',
      category: 'Frameworks / Libraries',
      topics: ['NodeJS', 'Angular', 'ReactJS']
    }
  ],
  projects: [
    {
      title: 'Restaurant Review',
      duration: 'June - Nov 2018',
      link: 'https://github.com/imvpn22/restaurant-review-pwa',
      desc: `A frontend web application to list and view restaurents based on location. 
      Developed using HTML5, CSS3 and vanilla JavaScript with Progressive Web-Application Standards 
      including Full Responsiveness, Offline Support and Accessibility.`
    },
    {
      title: 'WhiteBoard',
      duration: 'Jul - Aug 2017',
      link: 'https://github.com/imvpn22/whiteboard',
      desc: `A simple web-app for collaborative brainstorming sessions. 
      The app includes a real-time messaging and sketching platform for collaboration with Peers. 
      Developed using Node.js, Express, Socket.io and vanilla JS.`
    }
  ],
  experiences: [
    {
      organization: 'Wipro',
      title: `Project Engineer`,
      desc: `Project Engineer`,
      date: 'Aug 2018 - Present',
      details: [
        `As a member of frontend team, contributed in the development of a <strong>collaborative online 
        network blueprint editor</strong> by translating the design mockups into reusable UI components 
        with elegant UX standards by using <strong>Angular</strong> with <strong>SCSS</strong>, 
        <strong>NgRx</strong> and <strong>Angular-Material</strong> and adding actions to those by 
        creating services to integrate backend REST-API in a TDD environment.`,

        `Resolved more than 50 UI/UX issues by refactoring components and re-structuring CSS of an 
        internal project with the codebase of React.js-Redux, within a month.`
      ]
    },
    {
      organization: 'Venuemonk',
      title: 'Full-Stack Developer Intern',
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' href='https://www.venuemonk.com/'> <strong> Venuemonk </strong> </a> (<a target='_blank' href='https://drive.google.com/open?id=1ch_9x9jCp_TJwKY43FG-pCr_zV9H2iun'> https://goo.gl/Uz1gaf</a>)`,
      date: 'Jan 2018 - Apr 2018',
      details: [
        `Designed and developed <strong>Venue Onboarding platform</strong>, to streamline the onboarding process of new partner venues. It has a multi-page interactive form to fill the essential information of a venue, upload edit and tag images, showcasing the public view of the venue. It had a dashboard to view and update the venue data for partner use. It was developed using React.js, Redux and React-Bootstrap in frontend with Node.js, Express.js and MongoDB backend. `
      ]
    },
    {
      organization: 'Hasura',
      title: 'Product Development Intern (Remote)',
      desc: `<strong>Product development intern</strong> at <a target='_blank' href='https://hasura.io/'> <strong> Hasura </strong> </a> (<a target='_blank' href='https://drive.google.com/file/d/0B6uOcoHYLgJ7UmlrUDlsMkVwajg/view?usp=sharing'> https://goo.gl/8V3jBy</a>)`,
      date: 'Jun 2017 - Aug 2017',
      details: [
        `Created a Node.js-Express app with server-side-templating as a microservice using Hasura BaaS platform.`
      ]
    }
  ],
  events: [
    {
      title: 'certifications',
      body: [
        {
          desc: `<strong>Mobile Web Specialist Nanodegree</strong>, certified by <a target='_blank' href='https://in.udacity.com//'> <strong>Udacity</strong>  (<a target='_blank' href='https://confirm.udacity.com/RLMHXAWZ'> https://goo.gl/RGRzVn</a>)`,
          date: 'May - Nov 2018'
        },
        {
          desc: `<strong>Introduction to Modern Application Development</strong>, a MOOC certified by <em> NPTEL (IIT Madras) and Hasura </em>. Ranked at <strong> top ten percentile </strong> (<a target='_blank' href='http://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'> https://goo.gl/X3HEdR</a>)`,
          date: 'Jan - Mar 2017'
        }
      ]
    },
    {
      title: 'Workshops',
      body: [
        {
          desc: `<strong>Emerging Trends in Computer Science</strong>, summer training program with <strong>MNNIT </strong> Allahabad (<a target='_blank' href='https://drive.google.com/file/d/0B6uOcoHYLgJ7WEVmdlJDcWVZcEE/view?usp=sharing'>Certificate link</a>)`,
          date: 'Jun - July 2016'
        },
        {
          desc: `<strong>Bluemix Enablment</strong> with <strong> IBM </strong> at FET, GKV`,
          date: 'Mar 2015'
        },
        {
          desc: `<strong>Web Essentials</strong> with KnowWorkshops and CSI Haridwar chapter at FET, GKV`,
          date: 'Feb 2015'
        }
      ]
    },
    {
      title: 'Extracurricular Activities',
      body: [
        {
          desc: `Event Organizer in <strong>Jnanagni'17</strong> (Annual Techno-Cultural fest of FET, GKV)`,
          date: 'Mar 2017'
        },
        {
          desc:
            'Conducted a workshop for 1<sup>st</sup> and 2<sup>nd</sup> year students on <strong>Linux Essentials</strong>',
          date: 'Oct 2016'
        }
      ]
    }
  ]
};
