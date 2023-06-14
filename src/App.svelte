<script>
  import mafuyu from "./assets/mafuyu.png";
  import Work from "./assets/work.svelte";


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
        setTimeout(() => {
          bar.style.display = "none";
          // @ts-ignore
          document.querySelector("mainContainer").style.opacity = 1;
        }, 1300);
      },1000)
    }, 1300);
  }, 1000);

</script>

<main>
  <div bind:this={bar} id="bar">
    <div bind:this={bar_inside} id="bar_inside" />
  </div>
  <mainContainer>
    <div id="info" class="justify-center">
      <h1 id="name">
        <a
          href="https://www.facebook.com/jinpots.official/"
          style="font-size: 6rem"
          class="fancy-font name">JinPots</a
        >
      </h1>
    </div>
    <div id="alltheinfos" class="grid grid-rows-2 xl:grid-cols-3">
      <div id="para" class="">
        <p>
          Hello, welcome to my portfolio web! This is a meaningless web, I just
          want to make a web with Svelte. <br />
          I'm a 15 years old student from Vietnam, I'm currently learning web development
          and I'm also a osu! player. <br />
        </p>
      </div>

      <div id="work" class="text-center justify-center xl:absolute">
        <h1 class="text-3xl">My works:</h1>
        <Work />
      </div>

      <div id="mafuyu" class=" invisible xl:visible">
        <img
          src={mafuyu}
          alt="My wife!"
          class="max-h-screen absolute"
          id="mafuyu"
          style="right: 0;"
        />
      </div>
    </div>
  </mainContainer>
</main>

<style>
  @font-face {
  font-family: 'Fira Code';
  src: url('woff2/FiraCode-Light.woff2') format('woff2'),
    url("woff/FiraCode-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Fira Code';
  src: url('woff2/FiraCode-Regular.woff2') format('woff2'),
    url("woff/FiraCode-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Fira Code';
  src: url('woff2/FiraCode-Medium.woff2') format('woff2'),
    url("woff/FiraCode-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Fira Code';
  src: url('woff2/FiraCode-SemiBold.woff2') format('woff2'),
    url("woff/FiraCode-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Fira Code';
  src: url('woff2/FiraCode-Bold.woff2') format('woff2'),
    url("woff/FiraCode-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Fira Code VF';
  src: url('woff2/FiraCode-VF.woff2') format('woff2-variations'),
       url('woff/FiraCode-VF.woff') format('woff-variations');
  /* font-weight requires a range: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#Using_a_variable_font_font-face_changes */
  font-weight: 300 700;
  font-style: normal;
}

@font-face {
  font-family: 'Signature';
  src: url('woff2/SpectacularSignature.woff2') format('woff2'),
      url('woff/SpectacularSignature.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}





  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #mafuyu > img {
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }

  #bar {
    color: white;
    justify-content: left;
    align-items: center;
    text-align: center;
    position: absolute;
    display: flex;
    width: 0.25%;
    height: 4%;
    top: 46%;
    border: 1px solid white;
  }
  .name {
    text-decoration: none;
  }
  mainContainer {
    opacity: 0;
    color: white;
    transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }

  #para {
    text-align: center;
  }

  #mafuyu {
    display: none;
  }
  @media (min-width: 1280px) {
    #para {
      grid-column: 2 / 3;
    }
    #mafuyu {
      display: block;
    }
  }
  #info {
    display: flex;
  }
  #work {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: block;
  }
  .name {
    color: #009dff;
  }

  :root {
    font-family: "Fira Code", sans-serif;
    background-color: #2c394b;
  }

  .fancy-font {
    font-family: "Signature", sans-serif;
  }

  #bar_inside {
    background-color: white;
    width: 0%;
    height: 100%;
    transition: width 1s cubic-bezier(0.77, 0, 0.175, 1);
  }
  #bar {
    transition: all 1.2s cubic-bezier(0.77, 0, 0.175, 1);
  }
</style>
