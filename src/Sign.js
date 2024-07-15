import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Sign = () => {
  const Navigate = useNavigate();
  let email_sign_Ref = useRef();
  let pass_sign_Ref = useRef();

  const getapi1 = async () => {
    let em1 = email_sign_Ref.current.value;
    let pas1 = pass_sign_Ref.current.value;

    let data = { email: em1, password: pas1 };
    let obj = JSON.stringify(data);

    let response = await fetch("https://reqres.in/api/register", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: obj,
    });
    if (response.ok) {
      let serverRes = await response.json();
      localStorage.setItem("getapi", serverRes["token"]);
      Navigate("/home");
    }
  };

  return (
    <div>
      <Header></Header>
      <section class="contact_section layout_padding-bottom">
        <div class="container">
          <div class="heading_container"></div>
          <div class="row">
            <div class="col-md-7">
              <div class="form_container">
                <div>
                  <h4>Enter the fullname</h4>
                  <input type="name" placeholder="Fullname" />
                </div>

                <div>
                  <h4>Enter the email</h4>
                  <input
                    type="email"
                    placeholder="email"
                    ref={email_sign_Ref}
                  />
                </div>
                <div>
                  <h4>Enter the password</h4>
                  <input
                    type="password"
                    placeholder="password"
                    ref={pass_sign_Ref}
                  />
                </div>
                <div>
                  <button onClick={() => getapi1()}>CLICK</button>
                  <a class="nav-link" href="/login">
                    already have account?Login
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-5"></div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Sign;
