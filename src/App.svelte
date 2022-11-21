<script>
  import github from './assets/github.svg';
  import fb from './assets/facebook.svg';
  import twitch from './assets/twitch.svg';
  import discord from './assets/discord.svg';
  import youtube from './assets/youtube.svg';
  import mafuyu from './assets/mafuyu.png';

  const socialLink = [
    {
      link: "https://github.com/JinPots", icon: github
    },
    {
      link: "https://fb.me/jinpots.official/", icon: fb
    },
    {
      link: "https://twitch.tv/jinpots_osu", icon: twitch
    },
    {
      link: "https://discord.gg/YYNxq3ybb", icon: discord
    },
    {
      link: "https://www.youtube.com/channel/UCkgw8m5QXHydT9rHgTCjcMg", icon: youtube
    }
  ]

</script>

<main class="overflow-hidden">

  <div id="main">
    <div class="grid xl:grid-cols-3 gap-10 aibietj">
      <div class="flex justify-center text-gray-900 font-medium dark:text-gray-100 h-screen">
        <span id="name" class="text-7xl absolute select-none">
        JinPots          
        </span>

        <span id="icon" class="absolute shadow-2xl p-2 rounded-lg flex flex-row">
         {#each socialLink as s}
            <a href="{s.link}">
              <img src={s.icon} alt="" class="w-10 h-10 m-4">
            </a>
          {/each}
        </span>

        <span class="text-center absolute xl:invisible top-1/2 m-4 dark:text-teal-100 text-emerald-900">
          Hi there!
          My name is Thien, but you can call me Jin or JinPots
          I'm a young developer from Vietnam, currently studying on secondary school
          and I play lots of rhythm games like osu!, Project Sekai, and more<br><br>
          I'm currently learning web development, and I'm looking for a job.
          If you're interested in me, feel free to contact me on social media.
        </span>
      </div>
      <div class="text-center justify-center invisible xl:visible flex flex-col dark:text-teal-100 text-emerald-900">
        <span>Hi there! <br>
          My name is Thien, but you can call me Jin or JinPots <br>
          I'm a young developer from Vietnam, currently studying on secondary school
          and I play lots of rhythm games like osu!, Project Sekai, and more<br><br>
          I'm currently learning web development, and I'm looking for a job.
          If you're interested in me, feel free to contact me on social media.<br>
        </span>
      </div>
      <div id="mafuyu" class=" invisible xl:visible">
        <img src={mafuyu} alt="My wife!" class="max-h-screen absolute" id="mafuyu" style="right: 0;">
      </div>  
    </div>
  </div>
</main>

<style>
  main {
    font-family: 'Fira Code', monospace;
  }

  #mafuyu >img {
    mask-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
  }

  #nav {
    visibility: hidden;
  }

  #name {
    top: 25%;
  }

  #icon {
    top: 35%;
  }
  
  @media (min-width: 1280px) {
  #name {
    top: 40%;
  }
  #icon {
    top: 50%;
  }
  }

  #icon>a>img {
    transition: all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @media (prefers-color-scheme: dark) { 
    #icon > a > img {
      filter: invert(42%) sepia(94%) saturate(1274%) hue-rotate(161deg) brightness(95%) contrast(101%);
    }
  }

  #icon > a >img:hover {
    filter: invert(11%) sepia(87%) saturate(7410%) hue-rotate(3deg) brightness(111%) contrast(101%);
    transform: scale(1.15);

  }
</style>