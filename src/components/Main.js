import '../App.css';
import Plants from './Plants';

function Main() {
  return (
    <div id="main" className='main'>
      <div id="container">
        <div class="title">
          <img src="/Images/succulent.ico" alt="a succulent" class="title_image" />
          <h1>About Echia</h1>
        </div>
        <div id="wrapper">
          <div class="mainContent">
            <Plants/>
          </div>
        </div>
        <div id="footer">
          <p>Footer</p>
        </div>
      </div>

    </div>
  );
}
export default Main;