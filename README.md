# UNISTUDY Frontend

Frontend Repository for UNISTUDY studygroup recruiting platform.

### What is UNISTUDY?

UNISTUDY is a study group recruitment and participation platform for UNIST students.
This user-friendly platform empowers students to effortlessly create and join study groups, amplifying the learning experience and fostering seamless communication among peers.
UNISTUDY is the gateway to a collaborative and enriched academic journey.
We made this page because we experienced the difficulties of studying alone or not having someone to work with when we wanted to work on a project.

## Technology

### Environment

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

### Config

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"><img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">

### Communication

<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"><img src="https://img.shields.io/badge/zoom-0B5CFF?style=for-the-badge&logo=zoom&logoColor=white">

## Requirements

-   Node.js : v18.17.1
-   npm : 9.6.7

## Features

### Homepage

The code for Homepage is in `pages/index.tsx` and `components/index/`.
It has some features

-   See entire posts
-   Filter posts by Department or Current state of recruiting
-   Search by specific words of title or content
-   Move to Login / SingIn / Mypage
-   Move to New Post page
-   Move to specific post information page

### Detail Post

The code for seeing post is in `pages/detailPost` and `components/detailPost`.
It has some features

-   Set specific information of department / number of people / ...
-   Set title and content
-   Post the writing

### Write a post

The code for writing New post is in `pages/writePost` and `components/writePost`.
It has some features

-   See entire information of specific post
-   Participage into studygroup if user is not a writer
-   Delete the post if user is a writer
-   Write a comment

### LogIn / SignUp

The code for LogIn is in `pages/logIn` and the code for SignUp is in `pages/signUp`.
It has some features

-   Log in with email and password
-   Sign up with name, email and password

### My page

The code for mypage is in `pages/myPage`.
It has some features

-   See my username
-   Check and move to my studygroup
    -   Accept or refuse participation
    -   Change current recruiting status
-   Check and move to my post

## Learn and Difficulties

It is the first time developing an entire frontend of one website using Next.js and Redux. <br/>
I have learned so many things. I could understand how global data management is working using Redux. Also, I could learn how the server and frontend communicate using API and axios.<br/>
However, It was also very hard time to develop all the features.<br/>
Specifically, I could know what is API and how it works with server, but I could not use it well with totally understanding. I think I need to study more about API and how to use it efficiently.<br/>
Also, We want to deploy the website with all functions working well, but it was very hard. We could run our website very well in local, but in the deploy version, we could only upload our website with login, signup, and post writing functions.<br/>
Making one total website is very beneficial time, but it was very difficult.
