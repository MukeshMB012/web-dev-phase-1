<!-- Bash And Teriminal -->
<!-- terminal is nothing but another interface to do things on your machine -->

1. pwd:- print working directory 

2. cd:- change directory(take you forward or backward)
  PS C:\Users\Mukesh\Desktop> cd ..  //this remove the present working directory 
  PS C:\Users\Mukesh> cd Desktop   //this add the directory you want to work
  PS C:\Users\Mukesh\Desktop> cd ..
  PS C:\Users\Mukesh>

  NOTES:- 
  A. you can go to the multiple folder inside using one cd command (cd Desktop/courses)
     example
      PS C:\Users\Mukesh> cd Desktop/courses
      PS C:\Users\Mukesh\Desktop\courses> pwd

      Path
      ----
      C:\Users\Mukesh\Desktop\courses

  B. you can go two folder behind by using one cammand(cd ../..)  
     example
       PS C:\Users\Mukesh\Desktop\Courses> cd ../..
       PS C:\Users\Mukesh>


3. ls:- list the content(give all the folder and files of the present directory)
  
  PS C:\Users\Mukesh\Desktop> cd courses
  PS C:\Users\Mukesh\Desktop\courses> ls


      Directory: C:\Users\Mukesh\Desktop\courses


  Mode                 LastWriteTime         Length Name
  ----                 -------------         ------ ----
  d-----        31/03/2025   7:13 AM                Ankur(Take charge of
                                                  your time)


4. mkdir:- make directory(it will make the new folder in the respective directory)

  A. when uses no spaces in the folder name.
  PS C:\Users\Mukesh\Desktop\Courses> mkdir newCourse  


      Directory: C:\Users\Mukesh\Desktop\Courses


  Mode                 LastWriteTime         Length Name
  ----                 -------------         ------ ----
  d-----         9/06/2025  10:40 AM                newCourse

  B. when uses spaces in the folder name.
    
    PS C:\Users\Mukesh\Desktop\Courses> mkdir "new courses(ha ha)"


        Directory: C:\Users\Mukesh\Desktop\Courses


    Mode                 LastWriteTime         Length Name
    ----                 -------------         ------ ----
    d-----         9/06/2025  10:42 AM                new courses(ha ha)


5. touch:- it will create a empty file(example like main.js). touch is   not available for powershell terminal, it is only for ubuntu. 
    here we will use:-
    ni 
   
     PS C:\Users\Mukesh\Desktop\Courses> ni main2.js


        Directory: C:\Users\Mukesh\Desktop\Courses


     Mode                 LastWriteTime         Length Name
     ----                 -------------         ------ ----
     -a----         9/06/2025  10:57 AM              0 main2.js
  

6. cat:- will give the content present inside of the file 

     PS C:\Users\Mukesh\Desktop\Courses> cat main.js
     console.log("Hello, world!");
     console.log("Welcome to JavaScript programming!");

     NOTES:- if you are in desktop currently and wanted to get content of main.js in single command run, you can go this way:-
     (cat courses/main.js)


7. vi(vim command):-  very complicated just having the overview
     vi is not available for powershell terminal, it is only for ubuntu. 
     here we will use:-

     notepad a.txt 
     PS C:\Users\Mukesh\Desktop\courses> notepad a.txt

     
8. mv:- move file/folder from one folder to another
     PS C:\Users\Mukesh\Desktop\courses> mv main.js newFolder
     PS C:\Users\Mukesh\Desktop\courses> mv main2.js newCourse/"ha ha"


9. cp:- copy file/folder from one folder to another  (after cp -r is required to copy specially the folder in the linux not window)  
     PS C:\Users\Mukesh\Desktop\courses> cp main3.js newFolder
     PS C:\Users\Mukesh\Desktop\courses> cp main3.js newCourse/"ha ha" 
     PS C:\Users\Mukesh\Desktop\courses> cp newFolder newCourse


10. nvm:- It is a tool that lets you install and manage multiple versions of Node.js on the same system easily.
     Instead of sticking with one Node.js version, you can switch between versions depending on your project needs.



11. npm:-node package manager(npm install libraryName), 
     it is used to install the node library like express etc
     PS C:\Users\Mukesh npm install express



12. node:- this will open the shell for javascript(javascript playground)
      PS C:\Users\Mukesh\Desktop> node
      Welcome to Node.js v20.12.2.
      Type ".help" for more information.
      > console.log("hello");
      hello