# Video Player App

A YouTube-like video player web application that allows users to browse popular videos, watch them, and interact with related content. The app fetches video data from the YouTube API, displays them in a feed, and allows video playback, along with features like viewing likes, dislikes, comments, and channel information.

## Live Project
You can view the [Live project here](https://project-67-video-player-app.netlify.app/).

## Features
- **Video Feed**: Displays a feed of trending videos based on category.
- **Video Playback**: Watch videos via embedded YouTube links, similar to the YouTube interface.
- **Recommendation Section**: Shows recommended videos related to the currently playing video.
- **Channel Information**: Displays channel details and subscriber counts.
- **Like/Dislike & Share**: Shows video statistics such as views, likes, and dislikes. Users can also share and save the video.
- **Comments**: View the most recent comments on videos with author details and comment actions (like/dislike).

## Tech Stack
- **Frontend**: React.js, CSS (with responsiveness)
- **API**: YouTube Data API
- **Libraries**: `moment.js` for date/time formatting, `react-router-dom` for routing

## Installation
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/video-player-app.git
   ```
2. Navigate to the project directory:
   ```
   cd video-player-app
   ```
3. Install the required dependencies:
   ```
   npm install
   ```
4. Set up your YouTube API key in the data.js file:
   ```
   export const API_KEY = 'YOUR_YOUTUBE_API_KEY';
   ```
5. Start the development server:
   ```
   npm start
   ```
6. Visit http://localhost:5173 in your browser to view the application.

## API Usage
- The application uses the YouTube Data API to fetch:
  - Video details (title, statistics, thumbnails)
  - Channel information (channel name, subscriber count)
  - Comments (top-level comments, author details, likes on comments)
- You need to provide your own YouTube API key in the `data.js` file.

