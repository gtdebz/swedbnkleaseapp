# INTRODUCTION

-   This is a mobile responsive and multi-step online interactive form that accepts registration details of a bank customer who is in the process of creating a           Vehicle Lease Agreement.
-   The user interface of the multi-step form was created using React JSX, HTML and CSS.
-   React framework was installed using the Node Package Manager (NPM) command - "npm create-rect-app".
-   The production files which are called Build files in React were created in the local root directory using the command - "npm run build". 
-   To view the page run the command "npm start" within the root directory of the React project using a command line tool like Powershell, Windows command prompt or       Visual Studio Code.


# Step 1. How to install React and create a React project using Create React App

To install React you first have to install Node.js which is a Javascript runtime library by going to the Node.js website https://nodejs.org/en/download/, download and install the executable file.
Next create a project folder on your computer that will serve as the root directory that will house our React project files.
Navigate into the project folder using any terminal, Powershell, Visual Studio Code or DOS Command Prompt
We first need to open our terminal or command line on our computer within the root folder created.
To create a new React project, we can use the tool npx, provided you have an npm version of at least 5.2.

Note: You can check what npm version you have by running in your terminal 

    -   npm -v
    
Npx gives us the ability to use the create-react-app package without having to first install it on our computer, which is very convenient.
Using npx also ensures that we are using latest version of Create React App to create our project:

To create our React app you can simply run:

    -    npx create-react-app leaseapp

Once we run this command, a folder named "leaseapp" will be created where we specified on our computer and all of the packages it requires will be automatically installed.
Note: Creating a new React app with create-react-app will usually take 2-3 minutes, sometimes more.
Create React App also gives us some templates to use for specific types of React projects.
For example, if we wanted to create a React project that used the tool TypeScript, we could use a template for that instead of having to install TypeScript manually.
To create a React app that uses TypeScript, we can use the Create React App TypeScript template:
npx create-react-app my-react-app --template typescript


# Step 2. Reviewing the Project Structure

Once our project files have been created and our dependencies have been installed, our project structure should look like this:
my-react-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
└── src
What are each of these files and folders for?
•	README.md is a markdown file that includes a lot of helpful tips and links that can help you while learning to use Create React App. 
•	node_modules is a folder that includes all of the dependency-related code that Create React App has installed. You will never need to go into this folder.
•	package.json that manages our app dependencies and what is included in our node_modules folder for our project, plus the scripts we need to run our app.
•	.gitignore is a file that is used to exclude files and folders from being tracked by Git. We don't want to include large folders such as the node_modules folder 
•	public is a folder that we can use to store our static assets, such as images, svgs, and fonts for our React app.
•	src is a folder that contains our source code. It is where all of our React-related code will live and is what we will primarily work in to build our app.
Note: A new Git repository is created whenever you make a new project with Create React App. You can start saving changes to your app right away using git add . and git commit -m "your commit message".


# Step 3. How to Run your React Project

Once you have dragged your project into your code editor, you can open up your terminal (in VSCode, go to View > Terminal).
To start your React project, you can simply run:

     -   npm start

When we run our project, a new browser tab will automatically open on our computer's default browser to view our app.
The development server will start up on localhost:3000 and, right away, we can see the starting home page for our app.


    
