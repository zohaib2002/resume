const profileData = {
  title: 'Résumé',
  name: 'Vipin Yadav',
  sub_title: 'Javascript Developer',
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
        `Developed a <strong>collaborative online network blueprint editor</strong> TOSCA, for use in 
        designing flexible network topologies and generating a YAML (or YANG) configuration file as a result. 
        This helps Network Engineers to reduce the time taken for design and test a network topology from months to weeks. <br>
        My responsibility includes translating the design specification into reusable 
        UI components with sophisticated UX standards, using <strong>Angular</strong> with <strong>SCSS</strong>,
        <strong>NgRx</strong> and <strong>Angular-Material</strong> components and adding actions to those with 
        the communication of backend REST-API services.`,

        `Provided production support for an internal project in React.js, Redux and CSS3,
        <strong>resolved more than 100 UI/UX issues</strong> coming after QA testing.`
      ]
    },
    {
      organization: 'Venuemonk',
      title: 'Full-Stack Developer Intern',
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' href='https://www.venuemonk.com/'> <strong> Venuemonk </strong> </a> (<a target='_blank' href='https://drive.google.com/open?id=1ch_9x9jCp_TJwKY43FG-pCr_zV9H2iun'> https://goo.gl/Uz1gaf</a>)`,
      date: 'Jan 2018 - Apr 2018',
      details: [
        'Responsible for developing a web-application <strong>Venue OnBoarding</strong> from design to implementation.',
        'Work included developing ReactJS-Redux frontend and integrating it with NodeJS-ExpressJS-MongoDB backend.'
      ]
    },
    {
      organization: 'Hasura',
      title: 'Product Development Intern',
      desc: `<strong>Product development intern</strong> at <a target='_blank' href='https://hasura.io/'> <strong> Hasura </strong> </a> (<a target='_blank' href='https://drive.google.com/file/d/0B6uOcoHYLgJ7UmlrUDlsMkVwajg/view?usp=sharing'> https://goo.gl/8V3jBy</a>)`,
      date: 'May 2017 - Aug 2017',
      details: [
        'Responsible for developing web-application using Hasura platform APIs.',
        'Work included designing and implementing frontend application in HTML5-CSS3-JavaScript.'
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
