<script>
import { clipboard } from '@skeletonlabs/skeleton';
import mafuyu from './assets/mafuyu.png';
</script>
<svelte:head>
  <script src="https://kit.fontawesome.com/05a652db68.js" crossorigin="anonymous"></script>
</svelte:head>

<main class="pt-16 p-2 h-full bg-surface-500 dark:bg-surface-800 text-center grid grid-cols-3">
  <div>
    <p class="text-sm">
    I'm a small developer currently live in <span class='text-red-600'>Vietnam</span>
    <br>
    You can check me out at:
    </p>
    <div class="w-full">
      <button use:clipboard={'JinPots'} class="m-2"> <i class="fa-brands fa-discord"></i> </button>
      <a class="m-2" target="_blank" href="https://fb.me/jinpots.official"><i class="fa-brands fa-facebook"></i></a>
      <a class="m-2" target="_blank" href="https://instagram.com/jinpots_osu/"><i class="fa-brands fa-instagram"></i></a>
      <a class="m-2" target="_blank" href="https://twitter.com/shot27_osu"><i class="fa-brands fa-x-twitter"></i></a>
      <a class="m-2" target="_blank" href="mailto:huuthien27012@gmail.com"><i class="fa-regular fa-envelope"></i></a>
    </div>
    <br>
    <p>
    But what I also do?
    </p>    
    <div>
      I also do some <span class="gradient-heading">photography</span> and join:
      <br>
      <a class="bg-gradient-to-br from-red-800 via-black/70 to-primary-400 bg-clip-text text-transparent box-decoration-clone text-sm hover:from-primary-800 hover:via-black/60 hover:to-secondary-400 transition-colors" target="_blank" href="https://www.facebook.com/lqdkhmediaclub">
        LMC - Le Quy Don Media Club (Nha Trang)
      </a> <br>
      <a href="https://www.facebook.com/clbnhiepanh.nvt" target="_blank" class="bg-gradient-to-br from-secondary-400 via-black/70 to-primary-500 bg-clip-text text-transparent box-decoration-clone text-sm hover:from-primary-800 hover:via-black/60 hover:to-secondary-400 transition-colors">Nguyen Van Troi Photography Club</a>
    </div>
<br>
    <div class="m-2 text-sm">
      My camera: <br>
      Sony NEX-5N + 18-55mm kit <br>
      But here is some of <a href="https://drive.google.com/drive/folders/1nzTXYoujEnGbD4YHyJaq9hSx1kJSHom0?usp=drive_link" class="text-secondary-700">my sample</a> so feel free to contact me and do some photo shoots lul

    </div>
    
  </div>
  <h1 class="h1 gradient-heading m-2">JinPots</h1>

  <div>
    <header class="h3">
    Some of my Projects I work on:
    </header> <br>
    <div class="m-1 gap-3 grid">
      <a href="https://github.com/JinPots/fb60fps-neutralino">
      <div class="card card-hover">
        <div class="card-header">
          Facebook 60FPS Re-encoder
        </div>
        <p class="text-xs m-2">
          A simple tool to re-encode video to get 60fps on Facebook
        </p>
        <span class="card-footer text-xs p-0 text-primary-800">https://github.com/JinPots/fb60fps-neutralinos</span>
      </div>
      </a>

      <a href="https://tsukushi.site/">
      <div class="card card-hover">
        <div class="card-header">
          Tsukushi.site
        </div>
        <p class="text-xs m-2">
          A website to download osu!droid skins 
        </p>
        <span class="card-footer text-xs p-0 text-primary-800">https://tsukushi.site/</span>
      </div>
      </a>

      <div class="card card-hover">
        <div class="card-header">
          KanPots
        </div>
        <p class="text-xs m-2">
          A discord bot to render osu! replays with o!rdr and more..
        </p>
        <span class="card-footer text-xs p-0 text-primary-800">(dead)</span>
      </div>

  </div>
  </div>
</main>