import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="left-column">
        <header className="App-header">
          <h1>Create an employer account</h1>
          <p>
            You haven't posted a job before, so you'll need to create an
            employer account.
          </p>
          <p>
            <a href="https://www.indeed.com">Not here to post a job?</a>
          </p>
        </header>
        <form id="create-emp-account">
          <label for="company-name">
            <span class="required">Your company's name</span>
          </label>
          <input
            type="text"
            name="company-name"
            id="company-name"
            placeholder="Placeholder text"
          />
          <label for="number-employees">
            <span class="required">Your company’s number of employees</span>
            <span class="helper-label">Helper text</span>
          </label>
          <select name="number-employees" id="number-employees">
            <option class="default-option" value="none">
              Select an option
            </option>
          </select>
          <label for="first-last-name">
            <span class="required">Your first and last name</span>
          </label>
          <input
            type="text"
            name="first-last-name"
            id="first-last-name"
            placeholder="Placeholder text"
          />
          <label for="phone-number">
            <span>Your phone number</span>
            <span class="helper-label">
              For account management communication. Not visible to job seekers.
            </span>
          </label>
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            placeholder="Placeholder text"
          />
          <div id="disclaimer">
            <div>
              <input id="checkbox" type="checkbox" />
            </div>
            <label for="checkbox">
              By clicking this box and providing your telephone number, you
              agree to receive marketing and information calls and texts from
              Indeed (Including prerecorded or artificial voice messages and
              autodialed calls and texts) at the telephone or wireless number
              provided. Your agreement to this is not required to obtain any
              product or service.
            </label>
          </div>
          <button type="submit">
            Continue
            <img
              aria-hidden
              alt=""
              class="right-arrow"
              src="icon-right-arrow.png"
            />
          </button>
        </form>
      </div>
      <div id="right-column">
        <img aria-hidden alt="" class="hero" src="Before-You-Leave.png" />
      </div>
    </div>
  );
}

export default App;
