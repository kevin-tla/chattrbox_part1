# chattrbox_part1
Assignment 9


CPSC 473 - Web Front-End Engineering for Internet Applications
Assignment 9 - Spring 2017
Section 2 due April 17.  Section 1 due April 19.
In this assignment, you will start a new application, Chattrbox, and work with Node.js to build a custom back-end.
Complete the following:
Work through Chapter 15 to set up the chattrbox directory and create index.js.
Test your code by adding a new page to the chattrbox/app/ directory and verifying that it is served correctly.
Work through Chapter 16 to create websockets-server.js, install wscat, and test the results.
Begin working through Chapter 17 to install Babel and related utilities, but stop when you finish the section Running the build process on p. 333.
If you load the Chattrbox page with the DevTools console visible as in figure 17.12, in addition to "Hello ES6!" you should see an error message similar to the following:
Resource interpreted as Stylesheet but transferred with MIME type text/plain: "http://localhost:3000/stylesheets/styles.css".
Eliminate the error by completing the SIlver Challenge: Providing a MIME Type Dynamically from Chapter 15.
Push the contents of your chattrbox directory into a new public GitHub repository
Grading
How to know if the assignment has been successfully completed:
Have you created an ESLint configuration file?
Have you fixed any issues detected by the linter-eslint plugin?
Is there a package.json file?
Is there a .babelrc file?
Have you run the atom-beautify plugin?
Have you copied over the HTML and CSS for the project from front-end-resources.zip?
Have you fixed any JavaScript issues displayed in the DevTools Console?
Have you installed the mime module from the NPM Registry?
Have you fixed the error about MIME types from Step (6) above? 
Can you place a file in chattrbox/app/ and have it served by index.js?
Can multiple clients connect to ws://localhost:3001 and participate in a chat?
Is the directory structure for chattrbox/app/scripts in place?
Can you use npm run watch to view http://localhost:3000 in a browser?
Do you have a new repository for this assignment?
Have you checked in the changes from this assignment and pushed them to GitHub?

