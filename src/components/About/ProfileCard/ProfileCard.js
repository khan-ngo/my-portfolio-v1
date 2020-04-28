import React, { Component } from "react";
import "./ProfileCard.css";

export default class ProfileCard extends Component {
  render() {
    return (
      <div class="image-area">
        <div class="img-wrapper">
          <img src="../../assets/headshot-bw.png" />
          <h2>Khanh Ngo</h2>
          <ul>
            <li>
              <a href="https://github.com/atuljustano">
                <i class="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/atulkprajapati2000/">
                <i class="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/atuljustano">
                <i class="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw">
                <i class="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
