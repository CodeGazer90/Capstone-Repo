export default () => `
<div id="form">
      <form action="https://formspree.io/f/xoqyblvg" method="POST">
        <label id="login">Login</label>
        <label>
          Your email:
          <input type="email" name="email">
         </label>
        <label>
          Your password:
        <input type="password" name="password"></input>
        </label>
        <!-- your other form fields go here -->
        <button type="submit">Send</button>
      </form>
    </div>

<main id="home">

      <div class="wrapper">

        <div class="img-area">
          <div class="workoutPhoto">
            <h2>Workout</h2>
            <p>Discover workouts and challenges <br> to complete solo or join with friends <br> in the virtual workout room!</p>
            <img src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="two women in a boxing class" width="400" height="600" class="pics" >
          </div>

          <div class="playPhoto">
            <h2>Play</h2>
            <p> Blog your journey, post photos, <br> and receive or offer words <br> of encouragement from peers.
            </p>
            <img src="https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="a phone on the table showing social media tabs" width="400" height="600" class="pics">
          </div>

          <div class="explorePhoto">
            <h2>Explore</h2>
            <p>Tired of working out in the house <br> or the gym? Discover all  of the <br> outdoor/indoor workout groups in your area! </p>
            <img src="https://images.unsplash.com/photo-1573155993874-d5d48af862ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" alt="green grass with a cross path" class="pics" width="400" height="600">
          </div>

        </div>

      </div>

    </main>`;
