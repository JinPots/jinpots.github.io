<script>
    const works = [
        {
            name: "Fishu Portfolio",
            link: "https://fishutechno.me",
            desc: "A personal website made for Fishu."
        },
        {
            name: "KanPots",
            link: "https://discord.com/api/oauth2/authorize?client_id=741242820115038209&permissions=156766694464&scope=bot",
            desc: "A discord bot I made for o!rdr rendering."
        },
        {
            name: "osu!droid skins website",
            link: "https://tsukushi.site",
            desc: "Website for all osu!droid skins that's available for everyone."
        },
        {
            name: "Facebook 60 FPS Re-encoder",
            link: "https://github.com/JinPots/fb60fps-neutralino",
            desc: "An app to encode your video to lower bitrate for 60fps on facebook."
        },
    ]
</script>

<work id="work" class="bg-gray-800 dark:bg-teal-600 h-screen w-screen absolute">
    <div id="container" class="grid grid-cols-2 grid-rows-5" style="padding-top: 5%">
        {#each works as thing}
            <span class='m-2 rounded bg-emerald-900 text-teal-300 p-2 text-center justify-center'> <h2 class="text-teal-500"><a href={thing.link}>{thing.name}</a></h2> <h5>{thing.desc}</h5> </span>
        {/each}
    </div>
</work>

<style>

</style>