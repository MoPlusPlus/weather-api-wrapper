# Weather API Wrapper Service

A simple Node.js service that acts as a proxy to fetch weather data from an external API with a built-in caching mechanism to improve performance and reduce API usage.

## Features
- **Weather Data:** Fetches real-time weather using the Visual Crossing API.
- **Caching:** Uses `node-cache` to store results for 12 hours.
- **Error Handling:** Graceful error messages for invalid city names or API issues.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- A Visual Crossing [API Key](https://www.visualcrossing.com/weather-api)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/weather-api-wrapper.git
   cd weather-api-wrapper
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your API key:
   ```text
   PORT=3000
   API_KEY=your_visual_crossing_api_key_here
   ```

## Usage

1. **Start the server:**
   ```bash
   node server.js
   ```

2. **Test the endpoint:**
   Open your browser or use Postman to access:
   ```text
   http://localhost:3000/weather/tokyo
   ```

## Project Roadmap
This project was inspired by the [roadmap.sh](https://roadmap.sh/projects/weather-api-wrapper-service) project ideas.

---

### How to add this to your project:
1. In **VS Code**, create a new file named `README.md`.
2. Paste the content above into the file.
3. Save it.
4. **Stage, Commit, and Push** to GitHub:
   * Click the **+** icon in Source Control.
   * Type "docs: add README file" in the message box.
   * Click **Commit** then **Sync Changes**.

Now, when you visit your repository on GitHub, this formatted guide will appear right on the front page! Do you want to add a "License" or "Technologies Used" section as well?
