// assets/js/projects.js

const projectsData = [
  {
    id: 'horror-blog',
    title: 'Horror Blog Concept',
    pageTitleDescription: 'A static web page concept for a horror blog, mixing HTML/CSS practice with creative JavaScript effects.',
    images: [
      { src: 'Images/Proyectos/Blog.png', alt: 'Main page screenshot of the horror blog concept' },
    ],
    category: 'Static Web Page / JavaScript Experiment',
    client: 'Personal Project (HTML/CSS/JS Practice)',
    date: 'January 2024',
    projectUrl: 'https://nicogenstudent.github.io/blog-horror/',
    urlText: 'Live Demo',
    description: `
      <p><strong>Goal:</strong> This project started as an exercise to practice foundational <strong>HTML structure and CSS styling</strong>, using the theme of a horror blog.</p>
      <p>Beyond the static layout, I experimented with JavaScript to add unique interactive elements and enhance the atmosphere.</p>
      <h6>Key Features & Experiments:</h6>
      <ul>
        <li><strong>Static Blog Layout:</strong> Designed the basic structure using semantic HTML and styled with CSS.</li>
        <li><strong>Atmospheric Flashlight Effect:</strong> Implemented a JavaScript feature where the area around the mouse cursor is illuminated like a flashlight, while the rest of the page is darkened, using mouse move event listeners and dynamic style manipulation.</li>
        <li><strong>Binary Comment Input:</strong> Created an experimental comment box where users input characters by clicking '0' and '1' buttons, demonstrating a basic binary-to-character mapping concept.</li>
        <li><strong>Button Logic Practice:</strong> The associated 'Publish' button was primarily an exercise in handling click events and manipulating input fields with JavaScript (it clears the input but doesn't actually submit data).</li>
      </ul>
      <h6>Technologies Used:</h6>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
      </ul>
    ` 
  }, 

  {
    id: 'calculator',
    title: 'JavaScript Calculator',
    pageTitleDescription: 'A functional web-based calculator built to practice JavaScript logic and DOM manipulation.',
    images: [
      { src: 'Images/Proyectos/Calculator.png', alt: 'Screenshot of the JavaScript calculator interface' }

    ],
    category: 'Web Application',
    client: 'Personal Project (JavaScript Practice)',
    date: 'January 2024',
    projectUrl: 'https://nicogenstudent.github.io/Calculator/',
    urlText: 'Live Demo',
    description: `
      <p><strong>Goal:</strong> To solidify understanding of core JavaScript concepts, particularly <strong>DOM manipulation and event handling</strong>, by building a functional web-based calculator.</p>
      <p>This project simulates a standard pocket calculator, allowing users to perform basic arithmetic operations through a clickable interface.</p>
      <h6>Key Features:</h6>
      <ul>
        <li>Standard arithmetic operations (+, -, *, /)</li>
        <li>Real-time display updates based on user input</li>
        <li>Clear (AC) and potentially Backspace (DEL) functionality</li>
        <li>Handles decimal inputs</li>
        <li>Responsive design for usability across devices.</li>
      </ul>
      <h6>Technologies Used:</h6>
      <ul>
        <li>HTML5</li>
        <li>CSS3 </li>
        <li>JavaScript </li>
      </ul>
      <h6>Challenges & Solutions:</h6>
      <p>Managing the order of operations and the internal state of the calculator (e.g., current number, pending operation, previous number) required careful planning. Logic was structured to handle sequential inputs correctly.</p>
    ` 
  }, 

  {
    id: 'carrot-drawing',
    title: 'Carrot (One Piece) Fan Art',
    pageTitleDescription: 'A digital drawing showcasing fan art of the character Carrot from One Piece.',
    images: [
      { src: 'Images/Proyectos/Carrot.png', alt: 'Digital drawing of Carrot from One Piece in Sulong form' }
    ],
    category: 'Digital Art / Illustration',
    client: 'Personal Artwork',
    date: '[Add specific date, e.g., December 2023]',
    description: `
      <p>A personal digital illustration of Carrot from the One Piece series, created using Krita.</p>
      <p><small><i>(This artwork is included temporarily while more coding projects are added to the portfolio.)</i></small></p>
    ` 
  }, 

  {
    id: 'doom-clone',
    title: 'DOOM (1993) Python Recreation',
    pageTitleDescription: 'A basic raycasting engine and game loop mimicking the original DOOM, built using Python and Pygame.',
    images: [
      { src: 'Images/Proyectos/Doom.png', alt: 'Screenshot of the Python DOOM recreation showing first-person view' }

    ],
    category: 'Game Development / Programming',
    client: 'Personal Project (Python & Algorithm Practice)',
    date: 'January 2023',
    projectUrl: 'https://github.com/NicoGenstudent/Game',
    urlText: 'View Code on GitHub', 
    description: `
      <p><strong>Goal:</strong> To understand and implement the <strong>raycasting algorithm</strong>, a fundamental technique used in early 3D games like DOOM (1993), using Python and the Pygame library.</p>
      <p>This project involved building a simple first-person perspective engine from scratch, focusing on the core rendering mechanics rather than complex gameplay.</p>
      <h6>Key Features Implemented:</h6>
      <ul>
        <li>Basic Raycasting engine for rendering walls</li>
        <li>First-person camera movement (forward/backward, turning)</li>
        <li>Simple map representation (2D grid)</li>
        <li>Rendering walls with basic shading based on distance (pseudo-3D effect)</li>
      </ul>
      <h6>Technologies Used:</h6>
      <ul>
        <li>Python 3</li>
        <li>Pygame library </li>
      </ul>
      <h6>Challenges & Solutions:</h6>
      <p>Translating the mathematical concepts of raycasting into working code was the primary challenge. Debugging visual artifacts and optimizing the rendering loop required careful step-by-step analysis and understanding of the algorithm's geometry.</p>
    ` 
  }, 

  {
    id: 'etch-a-sketch',
    title: 'Etch-a-Sketch',
    pageTitleDescription: 'An interactive web-based Etch-a-Sketch clone using JavaScript.',
    images: [
        { src: 'Images/Proyectos/Etch-a-Sketch.png', alt: 'Screenshot of the Etch-a-Sketch web application grid' }

    ],
    category: 'Web Application',
    client: 'Personal Project (JavaScript DOM Practice)',
    date: 'January 2024',
    projectUrl: 'https://nicogenstudent.github.io/Etch-a-Sketch/', 
    urlText: 'Live Demo',
    description: `
      <p><strong>Goal:</strong> To practice JavaScript <strong>DOM manipulation and event handling</strong> by recreating the classic Etch-a-Sketch toy in a web browser.</p>
      <p>This project allows users to draw on a grid by hovering their mouse over the cells, simulating the line-drawing mechanism of the original toy.</p>
      <h6>Key Features:</h6>
      <ul>
        <li>Dynamically generated drawing grid (size adjustable)</li>
        <li>Drawing by changing cell background color on mouse hover</li>
        <li>Button to clear the grid and start over</li>
        <li>Button for two different color modes  (rainbow mode - black mode)</li>
      </ul>
      <h6>Technologies Used:</h6>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
      </ul>
    ` 
  }, 

  {
    id: 'kerfus-drawing',
    title: 'Kerfus Robot Drawing',
    pageTitleDescription: 'Digital illustration featuring the Kerfus robot character.',
    images: [
        { src: 'Images/Proyectos/Kerfus.png', alt: 'Digital drawing of the Kerfus robot with an alien on its screen' }
    ],
    category: 'Digital Art / Illustration',
    client: 'Personal Artwork / Fan Art',
    date: '[Add specific date]',
    description: `
      <p>A personal digital illustration of the Kerfus robot meme character, created using Krita.</p>
      <p><small><i>(This artwork is included temporarily while more coding projects are added to the portfolio.)</i></small></p>
    ` 
  }, 

  {
    id: 'lewis-drawing',
    title: 'Lewis (Mystery Skulls) Fan Art',
    pageTitleDescription: 'Digital illustration of Lewis Pepper from the Mystery Skulls Animated music videos.',
    images: [
        { src: 'Images/Proyectos/Lewis.png', alt: 'Digital drawing of Lewis Pepper from Mystery Skulls' }
    ],
    category: 'Digital Art / Illustration',
    client: 'Personal Artwork / Fan Art',
    description: `
      <p>A personal digital illustration of Lewis from the Mystery Skulls Animated series, created using Krita.</p>
      <p><small><i>(This artwork is included temporarily while more coding projects are added to the portfolio.)</i></small></p>
    ` 
  }, 

  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors Game',
    pageTitleDescription: 'A simple implementation of the Rock Paper Scissors game using JavaScript.',
    images: [
        { src: 'Images/Proyectos/Rock-Paper-Scissors.png', alt: 'Screenshot of the Rock Paper Scissors game interface' }

    ],
    category: 'Web Application',
    client: 'Personal Project (JavaScript Logic Practice)',
    date: 'January 2024',
    projectUrl: 'https://nicogenstudent.github.io/rock-paper-scissors/', 
    urlText: 'Live Demo',
    description: `
      <p><strong>Goal:</strong> To practice fundamental JavaScript concepts like <strong>event handling, basic game logic, and random number generation</strong> by creating a playable Rock Paper Scissors game against the computer.</p>
      <p>This classic game provides a simple framework for implementing core programming techniques in a web context.</p>
      <h6>Key Features:</h6>
      <ul>
        <li>User selects Rock, Paper, or Scissors via button clicks.</li>
        <li>Computer makes a random selection.</li>
        <li>Game determines the winner based on standard rules.</li>
        <li>Displays the results (player choice, computer choice, outcome).</li>
        <li>Potentially includes score tracking (specify if implemented).</li>
      </ul>
      <h6>Technologies Used:</h6>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
      </ul>
    ` 
  }, 

  {
    id: 'voices-drawing',
    title: '"Voices" Cover Art Recreation/Study',
    pageTitleDescription: 'A drawing inspired by album artwork.',
    images: [
        { src: 'Images/Proyectos/Voices.png', alt: 'Drawing of a face inspired by the cover art for "Everywhere at the end of time with voices"' }
    ],
    category: 'Digital Art / Illustration Study',
    client: 'Personal Artwork / Style Study',
    date: '[Add specific date]',
    description: `
      <p>A digital drawing study exploring the style associated with the album "Everywhere at the end of time with voices", created using Krita.</p>
      <p><small><i>(This artwork is included temporarily while more coding projects are added to the portfolio.)</i></small></p>
    ` 
  } 
]; 