import React from 'react';
import './BdayInfo.scss';

export const BdayInfo = () => {
  return (
    <div className="BdayInfo">
      <div>
        <h3>Time</h3>
        <ul>
          <li>Saturday, August 21, 2021</li>
          <li>1:00pm</li>
        </ul>
      </div>
      <div>
        <h3>Location</h3>
        <ul>
          <li>Lisa's House</li>
          <li>3880 E Leah Court</li>
          <li>Higley, AZ 85236</li>
          <li>
            <a href="https://goo.gl/maps/KkKKTz6N5KVncCwb9">map</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Notes</h3>
        <ul>
          <li>It's a surprise party for Lisa's 60th birthday.</li>
          <li>We will have lots of food and drinks.</li>
          <li>
            Lisa will be out of the house until <strong>1:15</strong> so arrive
            before then and park down the street so she does not figure it out.
          </li>
          <li>
            Please let us know if you can come. Text or email Charlie or Summer.
          </li>
        </ul>
        <h4>Charlie</h4>
        <ul>
          <li>
            Phone: <a href="tel:480-510-4697">480-510-4697</a>
          </li>
          <li>
            Email: <a href="mailto:vernongirl61@gmail.com">vernongirl61@gmail.com</a>
          </li>
        </ul>
        <h4>Summer</h4>
        <ul>
          <li>
            Phone: <a href="tel:480-406-0905">480-406-0905</a>
          </li>
          <li>
            Email: <a href="mailto:sranous81@yahoo.com">sranous81@yahoo.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
