<script>
    export let name;
    export let keywords;
</script>

<article class="">
    <h6 class="mt-1 mb-1 text-base font-semibold">{name}</h6>
    <div class="flex flex-wrap justify-between">
        {#each keywords as skill}
            <span
            class="flex px-2 py-1 mx-1 my-1 text-xs font-normal text-gray-100 rounded-md bg-zinc-900 dark:bg-zinc-200 dark:text-zinc-800 align-center">{skill.trim()}</span>
        {/each}
    </div>
</article>