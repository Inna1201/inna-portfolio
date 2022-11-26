import React from "react";


function Footer() {
  return (
    <footer class="page-footer fixed-bottom font-large special-color-dark pt-4">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li px-2"
              href="https://www.linkedin.com/in/inna-mamedova-68477623a/"
            >
              <i class="fab fa-linkedin-in fa-2x"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb px-2"
              href="https://github.com/Inna1201"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb px-2"
              href="https://instagram.com/inna.amour?igshid=YmMyMTA2M2Y="
            >
              <i class="fab fa-instagram fa-2x"> </i>
            </a>
          </li>
        </ul>
        <h6>Made by Inna Mamedova©</h6>
      </div>
    </footer>
  );
}

export default Footer;
