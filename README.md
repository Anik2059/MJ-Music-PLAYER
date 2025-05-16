# MJ-Music-PLAYER

Hey there! Welcome to MJ Music, a simple web app I built to create my own music hub. It’s a place where you can explore, listen to audio tracks, and watch music videos—all in one spot. I used HTML, CSS, and a bit of JavaScript to make it work, and it’s got a clean design with sections for featured playlists, new releases, audios, and videos. It’s still a work in progress, but it’s a fun way to enjoy music!
What’s This About?

MJ Music is a personal music platform with:

A home page (main_music.html) featuring a hero section, featured playlists, and new releases.
An audio page (audio.html) where you can listen to a bunch of songs I’ve added.
A video page (video.html) with some music videos to check out.
A custom playlist feature—add your favorite audios and save them!
Cool styling with a responsive layout and background images (you’ll need to add your own images, though!).

The app uses Font Awesome for icons and includes a background music player on the home page. The JavaScript handles displaying audio and video lists, plus saving a custom playlist to your browser’s storage.
What You’ll Need

A web browser (Chrome, Firefox, etc.—anything modern works).
A code editor (like VS Code or Notepad++ if you want to tweak it).
Basic file setup (I’ll explain below).
Optional: A local web server (like Live Server in VS Code) to run it smoothly, though it works by just opening the HTML files.

How to Set It Up

Clone the Repo: Grab the code from GitHub:
git clone https://github.com/Anik-2059/MJ-Music.git
cd MJ-Music


Check the Files: You’ll find:

main_music.html: The home page with playlists and releases.
audio.html: The page for audio tracks.
video.html: The page for music videos.
music.css: The styles for the whole app.
music.js: The JavaScript to run the audio/video lists and playlist.
images/: A folder for background images (e.g., hero-image.jpg, audio-bg.jpg, video-bg.jpg)—add your own!
audios/: A folder for audio files (like সে_যে_বসে_আছে__Se_Je_Boshe_Ache_by_Arnob_Song_Lyric(128k).m4a).
videos/: A folder for video files (like Heer.mp4).


Add Your Media:

Create images/, audios/, and videos/ folders in the project directory.
Drop in your own hero-image.jpg, audio-bg.jpg, video-bg.jpg, and the audio/video files listed in music.js. The paths in the code (e.g., audios/সে_যে_বসে_আছে__Se_Je_Boshe_Ache_by_Arnob_Song_Lyric(128k).m4a) need to match your file names and locations.



How to Run It
You can run this locally in a couple of ways:
Option 1: Open in Browser

Double-click main_music.html to open it in your browser.
Click the navigation links to go to audio.html or video.html.
On the home page, click the “Play Background Music” button to start the background audio (if you add an audio file with ID background-music).

Option 2: Use a Local Server

Install a simple server extension (like Live Server in VS Code).
Open the project in VS Code, right-click main_music.html, and select “Open with Live Server.”
The app will launch in your browser, and you can navigate between pages.

What You’ll See

Home Page: A hero section with a “Discover Music” button, plus grids for featured playlists and new releases (with placeholder images for now).
Audio Page: A grid of audio players with songs like “সে যে বসে আছে” and “Uska Hi Banana.” Click “Add to Playlist” to save to your custom list.
Video Page: A grid of video players with clips like “Heer.” Videos are set to a fixed size for consistency.
The custom playlist saves to your browser, so refresh the audio page to see it!

Troubleshooting

Nothing Shows Up? Check that all HTML, CSS, and JS files are in the right spots. Make sure your image, audio, and video files are in the images/, audios/, and videos/ folders with the exact names from the code.
Media Won’t Play? Verify the file paths in music.js match your setup. If you get errors, open the browser’s developer tools (F12) and look at the console for clues.
Layout Looks Weird? Ensure your browser window isn’t too small—the grid layout adjusts, but tiny screens might squish things. Try resizing or adding more CSS tweaks.
Custom Playlist Not Saving? Clear your browser’s local storage (in settings) and try again. It should work after adding a song.

How to Tweak It
Feel free to make it your own:

Add More Music: Update the audioData and videoData arrays in music.js with new titles and file paths.
Change Styles: Edit music.css to adjust colors (like the blue #00a0e9) or layout. Swap the background images too!
Fix Paths: If your file structure differs, update the src attributes in the HTML and JS to match.
Save and refresh the browser to see changes.

# Contributors

Anik (that’s me—I built this to play with web development and music!)

License
This is under the MIT License—use it, share it, or remix it however you like!

Questions or Ideas?
If something’s not working or you’ve got suggestions (like adding more features), open an issue on the GitHub repo or drop me a message (add your contact if you want). Enjoy the music!
