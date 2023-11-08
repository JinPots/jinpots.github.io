<script>
  // @ts-nocheck

  // css
  import "./fira_code.css";

  let bar,
    bar_inside,
    bar_inside_width = 100;

  setTimeout(() => {
    bar.style.width = "60%";
    setTimeout(() => {
      bar_inside.style.width = bar_inside_width + "%";
      setTimeout(() => {
        bar.style.opacity = 0;
        // @ts-ignore
        document.querySelector("mainContainer").style.display = "grid";
        setTimeout(() => {
          bar.style.display = "none";
          // @ts-ignore
          document.querySelector("mainContainer").style.opacity = 1;
        }, 1300);
      }, 1000);
    }, 1300);
  }, 1000);

  let aboutH,
    worksH,
    socialH,
    about = false,
    about1 = false,
    works = false,
    works1 = false,
    social = false,
    social1 = false;

  setTimeout(() => {
    aboutH = document.getElementById("aboutH");
    aboutH.addEventListener("click", () => {
      if (!about) {
        works = false;
        social = false;
        about = true;
      } else {
        about = false;
      }
    });
    worksH = document.getElementById("worksH");
    worksH.addEventListener("click", () => {
      if (!works) {
        about = false;
        social = false;
        works = true;
      } else {
        works = false;
      }
    });
    socialH = document.getElementById("socialH");

    socialH.addEventListener("click", () => {
      if (!social) {
        about = false;
        works = false;
        social = true;
      } else {
        social = false;
      }
    });
    const aboutMe = document.getElementById("aboutMe");
    const myWorks = document.getElementById("myWorks");
    const socialDiv = document.getElementById("social");
    const c = setInterval(() => {
      if (!about && !about1) {
        aboutMe.style.opacity = 0;
        about1 = true;
        setTimeout(() => {
          aboutMe.style.display = "none";
        }, 301);
      }
      if (about && about1) {
        aboutMe.style.display = "flex";
        about1 = false;
        setTimeout(() => {
          aboutMe.style.opacity = 1;
        }, 301);
      }
      if (!works && !works1) {
        myWorks.style.opacity = 0;
        works1 = true;
        setTimeout(() => {
          myWorks.style.display = "none";
        }, 290);
      }
      if (works && works1) {
        myWorks.style.display = "flex";
        works1 = false;
        setTimeout(() => {
          myWorks.style.opacity = 1;
        }, 300);
      }
      if (!social && !social1) {
        socialDiv.style.opacity = 0;
        social1 = true;
        setTimeout(() => {
          socialDiv.style.display = "none";
        }, 290);
      }
      if (social && social1) {
        socialDiv.style.display = "flex";
        social1 = false;
        setTimeout(() => {
          socialDiv.style.opacity = 1;
        }, 300);
      }
    }, 1);
    if (screen.width < 768) {
      clearInterval(c);
    }
  }, 1);
</script>

<main>
  <div bind:this={bar} id="bar">
    <div bind:this={bar_inside} id="bar_inside" />
  </div>
  <mainContainer>
    <h1 id="name">
      <span class="fancy-font-ramisland">Jin</span><span
        class="fancy-font-qeilab">Pots</span
      >
    </h1>
    <br />
    <ul id="selectThingy">
      <li>
        <div class="hover fancy-font-rose" id="aboutH">1. About me</div>
      </li>
      <li>
        <div class="hover fancy-font-rose" id="worksH">2. My works</div>
      </li>
      <li>
        <div class="hover fancy-font-rose" id="socialH">3. Social medias</div>
      </li>
    </ul>
    <div id="selectedStuffThingy">
      <div id="aboutMe">
        <p>
          I'm Jin, but that's how my friend and others call me, you can call me
          whatever suits me.
          <br />
          I'm a small (fullstack soon) web developer in Vietnam, you might can't
          believe this but I'm still 15 and <br />
          yes I wrote a discord bot and others, I don't know why I can do this but
          maybe developing is my job I guess.
          <br />
          IF you wan't me to work for your project or hire, hit me up on whatever.
        </p>
      </div>
      <div id="myWorks">
        <div id="workContainer">
          <div>
            <a href="https://github.com/JinPots/fb60fps-neutralino"
              >Facebook 60FPS (DEAD)</a
            > <br />
            <span
              >An old tool made by me to bypass fps compress on facebook.</span
            >
          </div>
          <div>
            <a href="https://tsukushi.site">osu!droid skins website</a> <br />
            <span
              >A simple website for everyone to upload/download their skins or
              youtubers.</span
            >
          </div>
          <div>
            <a href="/">KanPots (DEAD)</a> <br />
            <span
              >An old bot of mine and BlacBrue that uses o!rdr API to render
              from osu!std replays to mp4 file.</span
            >
          </div>
        </div>
      </div>
      <div id="social">
        <span
          >You can check me out at: <div id="medias">
            <a href="https://fb.me/jinpots.official">Facebook</a>
            <a href="https://twitter.com/shot27_osu">Twitter (X)</a>
            <a href="mailto:jinpots@suithoughts.top">Email</a>
            <a href="https://www.instagram.com/jinpots_osu/">Instagram</a>
          </div></span
        >
      </div>
    </div>
  </mainContainer>
</main>
