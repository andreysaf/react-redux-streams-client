## React-Redux Streamer

React app for Streaming using OBS. Supports Google Authentication, Creating, Editing, Deleting Streams.

![Screenshot 1](https://github.com/andreysaf/react-redux-streams-client/raw/master/screenshots/screen1.PNG)

In order to run this project you will need to clone additional repos:

[react-redux-streams-server](https://github.com/andreysaf/react-redux-streams-server) - Using [json-server](https://www.npmjs.com/package/json-server) store stream information: title and description, stream ID, user ID.


[react-redux-streams-rtmpserver](https://github.com/andreysaf/react-redux-streams-rtmpserver) - Using [node-media-server](https://github.com/illuspas/Node-Media-Server) receive capture from OBS and stream it via [flv.js](https://github.com/Bilibili/flv.js/) over http-flv. 

![Screenshot 2](https://github.com/andreysaf/react-redux-streams-client/raw/master/screenshots/screen2.PNG)

## Installation

In the project directory of react-redux-streams-client, and [react-redux-streams-server](https://github.com/andreysaf/react-redux-streams-server), and [react-redux-streams-rtmpserver](https://github.com/andreysaf/react-redux-streams-rtmpserver), you can run:

### `npm install`

### `npm start`

You need to make sure you have all three repos, cloned, all dependencies installed and started.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Creating a stream

![Screenshot 3](https://github.com/andreysaf/react-redux-streams-client/raw/master/screenshots/screen3.PNG)

- Simply login with Google and then create a stream. Note the ID of the stream. It will show in the URL of the browser. 
- Download [OBS](https://obsproject.com). Inside of OBS, create a new scene, select source as Display Capture. In Settings, under Stream, select Custom..., set the Server value to: rtmp://localhost/live, and stream key to the ID of the stream. 
- Start streaming and you should see the stream appear by clicking the stream.



