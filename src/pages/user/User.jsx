import React from 'react';
import './Users.css';
import Toggle from 'react-toggle';
import 'react-toggle/style.css'; // for ES6 modules
function User() {
  return (
    <>
      <div className="User_top_secton">
        <div></div>
        {/* user topbar start  */}
        <div className="User_filter">
          <div>
            <h3 className="font-weight-bold pt-3 underline text-capitalize">
              User
            </h3>{' '}
            <div className="tolal_user">70 Customers</div>
          </div>

          <div className="dummy">
            <div style={{ display: 'none' }}></div>
          </div>
          <div className="Serch_user">
            <div className="Productserch">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                className="Productserchinder"
              />
            </div>
          </div>
          <div className="newst_first">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">Newest First</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="All">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">All </option>
              <option value="saab">Saab</option>
              <option value="opel">Opeldsf</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        {/* user topbar end  */}
        {/* User main conte state  */}
        <div className="purches_data tavlcolor">
          <div className="user_content">
            <div className="Sn">1</div>
            <div className="contect">
              <div className="information">Sain in date:13/10/2022</div>
              <div className="bg_color">965895689</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="user_addres">
              15-16, Lakshya Vihar Kanadia Road, Square, Vaibhav Nagar Sector A,
              Indore, Madhya Pradesh 452016
            </div>
            <div className="User_Enabl_dis">
              <div>
                Block
                <span>
                  <Toggle
                    defaultChecked={true}
                    icons={false}
                    id="doctor_toggle"
                  />
                </span>
              </div>

              <div>
                Non Verified{' '}
                <span>
                  <Toggle
                    defaultChecked={false}
                    icons={false}
                    id="doctor_toggle"
                  />{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="user_content">
            <div className="Sn">1</div>
            <div className="contect">
              <div className="information">Sain in date:13/10/2022</div>
              <div className="bg_color">965895689</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="user_addres">
              15-16, Lakshya Vihar Kanadia Road, Square, Vaibhav Nagar Sector A,
              Indore, Madhya Pradesh 452016
            </div>
            <div className="User_Enabl_dis">
              <div>
                Block
                <span>
                  <Toggle
                    defaultChecked={true}
                    icons={false}
                    id="doctor_toggle"
                  />
                </span>
              </div>

              <div>
                Non Verified{' '}
                <span>
                  <Toggle
                    defaultChecked={false}
                    icons={false}
                    id="doctor_toggle"
                  />{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="user_content">
            <div className="Sn">1</div>
            <div className="contect">
              <div className="information">Sain in date:13/10/2022</div>
              <div className="bg_color">965895689</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="user_addres">
              15-16, Lakshya Vihar Kanadia Road, Square, Vaibhav Nagar Sector A,
              Indore, Madhya Pradesh 452016
            </div>
            <div className="User_Enabl_dis">
              <div>
                Block
                <span>
                  <Toggle
                    defaultChecked={true}
                    icons={false}
                    id="doctor_toggle"
                  />
                </span>
              </div>

              <div>
                Non Verified{' '}
                <span>
                  <Toggle
                    defaultChecked={false}
                    icons={false}
                    id="doctor_toggle"
                  />{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="user_content">
            <div className="Sn">1</div>
            <div className="contect">
              <div className="information">Sain in date:13/10/2022</div>
              <div className="bg_color">965895689</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="user_addres">
              15-16, Lakshya Vihar Kanadia Road, Square, Vaibhav Nagar Sector A,
              Indore, Madhya Pradesh 452016
            </div>
            <div className="User_Enabl_dis">
              <div>
                Block
                <span>
                  <Toggle
                    defaultChecked={true}
                    icons={false}
                    id="doctor_toggle"
                  />
                </span>
              </div>

              <div>
                Non Verified{' '}
                <span>
                  <Toggle
                    defaultChecked={false}
                    icons={false}
                    id="doctor_toggle"
                  />{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="user_content">
            <div className="Sn">1</div>
            <div className="contect">
              <div className="information">Sain in date:13/10/2022</div>
              <div className="bg_color">965895689</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="user_addres">
              15-16, Lakshya Vihar Kanadia Road, Square, Vaibhav Nagar Sector A,
              Indore, Madhya Pradesh 452016
            </div>
            <div className="User_Enabl_dis">
              <div>
                Block
                <span>
                  <Toggle
                    defaultChecked={true}
                    icons={false}
                    id="doctor_toggle"
                  />
                </span>
              </div>

              <div>
                Non Verified{' '}
                <span>
                  <Toggle
                    defaultChecked={false}
                    icons={false}
                    id="doctor_toggle"
                  />{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* User main conte End  */}
      </div>
    </>
  );
}

export default User;
