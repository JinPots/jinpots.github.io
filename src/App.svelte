<script>
  import { clipboard } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
  <!-- <script src="https://kit.fontawesome.com/05a652db68.js" crossorigin="anonymous"></script> -->
</svelte:head>

<main class="h-screen bg-surface-700 flex justify-center items-center text-white">
  <div class="text-center">
    <h1 class="h1 font-bold">JinPots</h1>
    <span class="">
      <a class="text-xl m-3 hover:text-3xl hover-effect" href="https://fb.me/jinpots.official">Facebook</a>
      <a class="text-xl m-3 hover:text-3xl hover-effect" href="https://drive.google.com/drive/u/0/folders/1nzTXYoujEnGbD4YHyJaq9hSx1kJSHom0">Sample</a>
      <button class="text-xl m-3 hover:text-3xl hover-effect" use:clipboard={"jinpots"}>Discord</button>
      <a class="text-xl m-3 hover:text-3xl hover-effect" href="mailto:huuthien27012@gmail.com">Email</a>
      <a class="text-xl m-3 hover:text-3xl hover-effect" href="https://instagram.com/jinpots_osu">Instagram</a>
    </span>
  </div>
</main>
