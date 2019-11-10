## React-Redux Streamer

React app for Streaming using OBS. Supports Google Authentication, Creating, Editing, Deleting Streams.

![Screenshot 1](https://github.com/andreysaf/react-redux-streams-client/raw/master/screenshots/screen1.PNG)

In order to run this project you will need to clone additional repos:

[react-redux-streams-server](https://github.com/andreysaf/react-redux-streams-server)


[react-redux-streams-rtmpserver](https://github.com/andreysaf/react-redux-streams-rtmpserver)

![Screenshot 2](https://github.com/andreysaf/react-redux-streams-client/raw/master/screenshots/screen2.PNG)

## Installation

In the project directory of react-redux-streams-client, and [react-redux-streams-server](https://github.com/andreysaf/react-redux-streams-server), and [react-redux-streams-rtmpserver](https://github.com/andreysaf/react-redux-streams-rtmpserver), you can run:

### `npm install`

### `npm start`

You need to make sure you have all three repos, cloned, all dependencies installed and started.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Creating a stream

Simply login with Google and then create a stream. Note the ID of the stream. It will show in the URL of the browser. Download [OBS](https://obsproject.com). Inside of OBS, create a new scene, select source as Display Capture. In Settings, under Stream, select Custom..., set the Server value to: rtmp://localhost/live, and stream key to the ID of the stream. Start streaming and you should see the stream appear by clicking the stream.



