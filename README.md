# GiphyDemo
This is demo app which used Giphy API

Base dependencies
axios for networking.
fastImage for good gif loading
react-native lottie for animation, loader


Run:

Go to your project's root folder and run npm install.
Use npx react-native link, if there is linking issue
Run cd ios && pod install
Run  npx react-native run-android npx react-native run-ios to start your application!


Option 2: Copy the structure to your project
If you want to roll on your own and don't want to use this as a template, you can create your project and then copy the /src folder (which has all the code of your application) and update your index.js.

Keep in mind that if you do this, you'll have to install and link all dependencies (as well as adding all the necessary native code for each library that requires it).

Folder structure

src : This is the main folder
src->screens : It contains all screens
src->navigation : It containers navigation files.
src->components : It contains common components and home sub comonents
src->utils : it contains config files
