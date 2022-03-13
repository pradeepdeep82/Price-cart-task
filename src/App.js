import React from "react";
import "./App.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

function App() {
  return (
    <div className="app">
      <PriceTable />
    </div>
  );
}

export default App;

function PriceTable() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="priceTable">
            <div className="plan">FREE</div>
            <h1>
              $0<span className="month">/month</span>
            </h1>
            <hr />
            <li>
              <CheckIcon className="checkIcon" />
              Single User
            </li>
            <li>
              <CheckIcon className="checkIcon" />
              5GB Storage
            </li>
            <li>
              <CheckIcon className="checkIcon" />
              Unlimited Public Projects
            </li>
            <li>
              <CheckIcon className="checkIcon" />
              Community Access
            </li>
            <li>
            <span className="disabled"><ClearIcon className="checkIcon" />
              Unlimited Private Projects</span>
            </li>
            <li>
            <span className="disabled"><ClearIcon className="checkIcon" />
              Dedicated Phone Support</span>
            </li>
            <li>
            <span className="disabled"><ClearIcon className="checkIcon" />
              Free Subdomain</span>
            </li>
            <li>
            <span className="disabled"><ClearIcon className="checkIcon" />
              Monthly Status Reports</span>
            </li>
            <button type="button" class="btn btn-primary btn-lg  button">
              BUTTON
            </button>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="priceTable">
            <div className="plan">PLUS</div>
            <h1>
              $9<span className="month">/month</span>
            </h1>
            <hr />
            <li>
              <CheckIcon className="checkIcon" />
              <strong>5 Users</strong>
            </li>
            <li>
              <CheckIcon className="checkIcon" />
              50GB Storage
            </li>
            <li>
              <CheckIcon className="checkIcon" />
              Unlimited Public Projects
            </li>
            <li>
              <CheckIcon className="checkIcon" />
              Community Access
            </li>
            <li>
            <CheckIcon className="checkIcon" />
              Unlimited Private Projects
            </li>
            <li>
            <CheckIcon className="checkIcon" />
              Dedicated Phone Support
            </li>
            <li>
            <CheckIcon className="checkIcon" />
              Free Subdomain
            </li>
            <li>
            <span className="disabled"><ClearIcon className="checkIcon" />
              Monthly Status Reports</span>
            </li>
            <button type="button" class="btn btn-primary btn-lg  button">
              BUTTON
            </button>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="priceTable">
            <div className="plan">PRO</div>
            <h1>
              $49<span className="month">/month</span>
            </h1>
            <hr />
            <li>
              <CheckIcon className="checkIcon" />
              <strong>Unlimited Users</strong>
            </li>
            <li>
              <CheckIcon className="checkIcon" />
              150GB Storage
            </li>
            <li>
              <CheckIcon className="checkIcon" />
              Unlimited Public Projects
            </li>
            <li>
              <CheckIcon className="checkIcon" />
              Community Access
            </li>
            <li>
            <CheckIcon className="checkIcon" />
              Unlimited Private Projects
            </li>
            <li>
            <CheckIcon className="checkIcon" />
              Dedicated Phone Support
            </li>
            <li>
            <CheckIcon className="checkIcon" />
              <strong>Unlimited</strong> Free Subdomain
            </li>
            <li>
            <CheckIcon className="checkIcon" />
              Monthly Status Reports
            </li>
            <button type="button" className="btn btn-primary btn-lg  button">
              BUTTON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
