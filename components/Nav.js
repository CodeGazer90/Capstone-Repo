export default () => `
<div class="navbar">
<nav id="divNav">
  <ul>
    ${links
      .map(
        (el) =>
          `<li><a href="/${el.title}" title="${el.title}">${el.title}</a></li>`
      )
      .join()}
  </ul>
<nav>
</div>`;

// <li>
//       <a href="#home">Home</a>
//       <a href="#about">About Us</a>
//       <a href="#contact">Contact Us</a>
//       <a href="">Workout</a>
//       <a href="">Play</a>
//       <a href="">Explore</a>
//     </li>
