# Résumé 

### About
It is my simple resume made with HTML, CSS, JS using JSON data.   
Initially the project was written with NodeJS architecture.

HTML is used for making initial block structure of the page with some simple data, CSS is used for giving some style to the page and JS is used to create small UI components dynamically and fill the data into page. All the data about details related to user is stored in a JSON file.

View it in action https://imvpn22.github.io/resume/

### Getting Started

#### Using GitHub Pages
1. Fork this repo. ( Make sure you have a GitHub account )  
2. Open the forked repo on your profile.    
3. Make changes in the `data/profile.json` file.  
4. Go to the settings and enable [github pages](https://pages.github.com/).  
5. Visit https://<your GitHub username>.github.io/resume in your browser.  
6. Additionaly you can print/save the page as PDF.  

#### Using local development
If you are a web-developer like me and want to run this on your local system then follow the instructions mentioned below.  
The project need to be hosted using any Web-Server like `apache`, `tomcat`, `http-server` or `SimpleHTTPServer` etc. I use `http-server` as it is very simple to use. Install `http-server` from [here](https://www.npmjs.com/package/http-server).

1. Clone the repo using git or download zip of project on your local system.
To clone
```
$ git clone https://github.com/imvpn22/resume.git
```

2. Go into the `resume` directory and run
```
$ http-server
```
which will show something like

```bash
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.21:8080
Hit CTRL-C to stop the server
```

3. Visit `http://localhost:8080` in browser.   

4. Make changes in `data/profile.json` file, and refresh the page in browser. Additionaly you can also make changes in architecture and design of the page  as well.

5. Save/Print the page in PDF. Your Resume is ready.


### Support
If you like the project idea, make sure to give it a star. 
If you want to contribute, just give me a PR.



