const profileData = {
  title: 'Resume',
  name: 'Zohaib Hamdule',
  sub_title: 'B.E. Computer Science Engineering (2024)',
  logoURL: 'assets/images/dp.jpg',
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>JavaScript</strong>
     and it's applications. I am always eager to learn new Technologies and Frameworks to use in
      my projects. I have a few published apps on the playstore made using Flutter.`,
    contact: {
      email: 'zohaib2002@gmail.com',
      phone: '+91-9892161214',
      address: 'Ratnagiri, Maharashtra, IN'
    }
  },
  links: [
    { title: 'Github', src: 'https://github.com/zohaib2002' },
    { title: 'LinkedIn', src: 'https://linkedin.com/in/zohaibhamdule' },
    { title: 'Twitter', src: 'https://twitter.com/zohaib_hamdule' },
  ],
  education: [
    {
      alma: 'Finolex Academy of Management Technology, Ratnagiri | University of Mumbai',
      duration: '2020 - Present',
      std: 'B.E Computer Science & Engineering (AIML)',
      score: '9.52 (AVG)'
    },
    {
      alma: 'India International School, Kuwait | CBSE',
      duration: '2018 - 2020',
      std: 'Class XII (PCM)',
      score: '93.4%'
    },
    {
      alma: 'India International School, Kuwait | CBSE',
      duration: '2017 - 2018',
      std: 'Class X',
      score: '86.6%'
    }
  ],
  skills: [
    {
      category: 'Programming Languages',
      topics: ['JavaScript', 'C', 'C++', 'C#', 'Pyhton', 'Java', 'Dart']
    },
    {
      category: 'Frameworks / Libraries',
      topics: [
        'ReactJS',
        'NodeJS',
        'Express',
        'Angular',
        'Bootstrap',
        'Flutter'
      ]
    },
    {
      category: 'Databases',
      topics: ['MongoDB', 'SQLite']
    }
  ],
  projects: [
    {
      title: 'What Should I Cook Today?',
      duration: 'June - August 2021',
      link: 'https://play.google.com/store/apps/details?id=com.xample.whatsicook',
      desc: `An android app to get cooking recommendations.
      Add dishes you can cook to your collection and get cooking recommendations based on ingredients available to you!
      Moreover, find new recipe ideas from various cuisines from an inbuilt Cookbook powered by Spoonacular API.
      Developed using <strong>Flutter</strong>, <strong>SQLite</strong> and <strong>Spoonacular</strong>
      with Material App design, offline support and ability to import/export data.`
    },
    {
      title: 'LongLongDouble',
      duration: 'Dec 2020',
      link: 'https://github.com/zohaib2002/longlongdouble',
      desc: `My personal blog to post CS realted stuff.
      This blog is made using the Flask python framework. The application loads all the articles stored 
      in the database and previews them on the index (home) page. Clicking on 'Read More' on an any post preview 
      opens the article for reading. The project uses <strong>Disqus</strong> to host blog comments. The comment section is unique for
      each indivisual post. It also uses <strong>Bootstrap</strong> CSS libraries for styling.
      This project was a part of Harvard edX course: CS50: Introduction to Computer Science (2020)`
    }
  ],
  experiences: [
    {
      organization: 'GEOGO Techsolutions Pvt. Ltd',
      title: `Full Stack Development Intern`,
      date: 'Nov 2021 - Jan 2021',
      details: [
        `Learnt MERN Stack for Full Stack Web Development
        <strong>HTML</strong>, <strong>CSS</strong> and <strong>React</strong> for frontend and <strong>NodeJS-Express</strong>
        with <strong>MongoDB</strong> for the backend. And created a capstone final project: a clone of Cowin India website`
      ]
    }
  ],
  certifications: [
    {
      desc: `<strong>CS50: Introduction to Computer Science</strong> by <strong>Harvard edX</strong>.
      (<a target='_blank' rel='noreferrer' href='https://cs50.harvard.edu/certificates/1012d601-e772-4413-8b54-a344218ddbae'>Certificate</a>)`,
      date: 'Oct - Dec 2020'
    },
    {
      desc: `<strong>Microsoft Excel: Basic and Advanced</strong>, by <strong>GoSkills</strong>
      with an Exam Score or 92%. (Verification no: 78313302)`,
      date: 'Apr 2020'
    }
  ],
  events: []
};
