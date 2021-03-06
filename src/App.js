import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import TextLoop from "react-text-loop";
import Typist from "react-typist";
function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: "",
    hideWhenDone: true,
  };

  const [darkmode, setdarkmode] = useState(false);

  return (
    <div>
      <div className={`card ${darkmode ? "dark" : ""}`}>
        <div className="toggle-btn" onClick={() => setdarkmode(!darkmode)}></div>
        <div className="dark-mode"></div>
        <div className="card-body">
          <div className="profile text-center">
            <img src="/images/ozay.png" className="avatar" alt="gambar" />
            <div className="bg_content rd_12 p_8">
              <p className="mb-16">@Shobarudin alghozii</p>
              <Typist cursor={config_cursor}>
                <Typist.Delay ms={400} />
                Web Developer | IT Consultant
                <br></br>Terima Jasa Pembuatan Website
              </Typist>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with{" "}
              <TextLoop interval={800}>
                <span className="hightlight">Laravel</span>
                <span className="hightlight">JavaScript</span>
                <span className="hightlight">Bootstrap</span>
                <span className="hightlight">React</span>
                <span className="hightlight">Python</span>
                <span className="hightlight">PHP</span>
              </TextLoop>
            </div>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://instagram.com/alghozii_zy">
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="hhttps://www.linkedin.com/in/shobarudin-alghozi-550163217">
              <FaLinkedin />
              <span>Linkedin</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://github.com/shobarudin">
              <FaGithub />
              <span>Github</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.tiktok.com/@alghozi2204?lang=id-ID">
              <FaTiktok />
              <span>Tiktok</span>
            </a>
          </div>

          <div className="mt-16">
            <a className="btn_action bg_content" href="https://api.whatsapp.com/send?phone=6282320093601">
              <FaWhatsapp />
              <span>Whatsapp</span>
            </a>
          </div>
        </div>
      </div>

      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
