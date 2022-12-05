<script>
    import { prettyDate } from './utils'
    export let name, date, issuer, url;


</script>

<article class="">
    <h6 class="mt-1 mb-1 font-semibold text-l">{name}</h6>
    <div class="flex flex-col flex-wrap justify-between mt-1 mb-1">
        <span class="text-sm text-blue-900 dark:text-blue-300"><a href={url} target="_blank" rel="noreferrer">{issuer}</a></span>
        <span class="text-sm">{prettyDate(date)}</span>
    </div>
</article>