import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Login(props) {
  const Navigate = useNavigate();
  let emailRef = useRef();
  let passRef = useRef();

  const getapi = async () => {
    let em1 = emailRef.current.value;
    let pas1 = passRef.current.value;

    let data = { email: em1, password: pas1 };
    let obj = JSON.stringify(data);

    let response = await fetch("https://reqres.in/api/login", {
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
    <>
      <Header></Header>
      <section class="contact_section layout_padding-bottom">
        <div class="container">
          <div class="heading_container"></div>
          <div class="row">
            <div class="col-md-7">
              <div class="form_container">
                <div>
                  <h4>Enter the email</h4>
                  <input type="email" placeholder="email" ref={emailRef} />
                </div>
                <div>
                  <h4>Enter the password</h4>
                  <input type="password" placeholder="password" ref={passRef} />
                </div>
                <div>
                  <button onClick={() => getapi()}>CLICK</button>
                  <a class="nav-link" href="/sign">
                    d'ont have an account?create
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-5"></div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
