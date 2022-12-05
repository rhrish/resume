<script>
    import { prettyDate } from './utils'
    export let institution, url, area, studyType, startDate, endDate;


</script>

<article class="">
    <h6 class="mt-1 mb-1 font-semibold text-l">{studyType}, {area}</h6>
    <div class="flex flex-col flex-wrap justify-between mt-1 mb-1">
        <span class="text-sm text-blue-900 dark:text-blue-300"><a href={url} target="_blank" rel="noreferrer">{institution}</a></span>
        <span class="text-sm">{prettyDate(startDate) + " - " + prettyDate(endDate)}</span>
    </div>
</article>