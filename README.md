# WhatsAuth
An implementation of Whatsapp Web's Authentication mechanism using MEAN and a demo-Android App with Socket.io.
# Introduction 
This can be Integrated with any Web Application Project for Authentication Puspose. Instead of Signing with UserId and Password Everytime on Web Application, you just need to scan the QR code from your Mobile Device.
# Requirements
* MongoDB
* Socket.io 2.0
* Node js (Server side)
* Angular 2 (Client side for Web Applicaion)
* Android Studio (Client side Android App for Scaning QR code)
# Getting Started
1. Start the MongoClient Server.
2. Start the node js Server (Server -> index.js)
3. Start the Angular2 web Application Server (whatsAuthClient)
4. Import Android Project in Android Studio then Generate and Install Android App in Mobile Device.
5. Angular Application shows the QR code which refreshes in every 5 seconds.
6. Scan the QR code from mobile device.
7. This will send SocketId, Timestamp and some meta Information for both Client (Android and Angular App).
8. If everything is fine, it will give access to your personalised web portal.
9. JWT (JSON web Token) expires and Socket Ids are removed from DB on Logout/ 3hrs. 

