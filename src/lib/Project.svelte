<script>
    import { prettyDate } from './utils'
    export let name, description, highlights, keywords, startDate, endDate, url, entity;
</script>

<article class="mx-2 my-2 rounded-2xl shadow-lg px-6 py-6 dark:bg-zinc-800">
    <h5 class="font-semibold text-l">{name}</h5>
    <div class="flex flex-row flex-wrap justify-start mt-1 mb-0 space-x-2">
        <span class="text-sm font-semibold text-blue-900 dark:text-blue-300">
            {#if url!=""}
             <a href={url} target="_blank" rel="noreferrer">{entity}</a>
            {:else}
                {entity}
            {/if}
        </span>
        {#if prettyDate(startDate)==prettyDate(endDate)}
            <span class="text-sm">{prettyDate(startDate)}</span>
        {:else}
             <span class="text-sm">{prettyDate(startDate) + " - " + prettyDate(endDate)}</span>
        {/if}
    </div>
    <p class="mt-3 mb-2 font-light text-left">{description}</p>
    <div class="flex justify-left mb-3 font-light">
        <ul class="px-8 list-['-']">
            {#each highlights as highlight}
                <li class="px-2 py-0  w-full">{highlight}</li>
            {/each}
        </ul>
    </div>

    <div class="flex flex-wrap justify-start">
        {#each keywords as skill}
            <span
            class="flex px-2 py-1 mr-1 my-1 text-xs font-normal text-gray-100 rounded-md bg-zinc-900 dark:bg-zinc-200 dark:text-zinc-800 align-center">{skill.trim()}</span>
        {/each}
    </div>
</article>
