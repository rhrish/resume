<script>
  import About from "./lib/About.svelte";
  import Basics from "./lib/Basics.svelte";
  import Work from './lib/Work.svelte';
  import Project from "./lib/Project.svelte";
  import Skill from './lib/Skill.svelte';
  import Education from './lib/Education.svelte';
  import Certification from './lib/Certification.svelte';
  import Language from './lib/Language.svelte';

  let fetchResume = fetch('resume.json').then(res => res.json());
  let darkMode = false;

  function toggleDarkMode() {
    darkMode = !darkMode;
    let doc = document.getElementsByTagName('html')
    if(darkMode) {
      doc[0].setAttribute('class','');
    } else {
      doc[0].setAttribute('class','dark');
    }
  }

</script>


{#await fetchResume}
  <div class="flex items-center justify-center">
    <div class="inline-block w-8 h-8 border-2 rounded-full spinner-border animate-spin" role="status">
      <span class="visually-hidden">..</span>
    </div>
  </div>
{:then result}
  <div class="px-2 py-2 mt-2 mb-2 border-blue-900  border-dotted rounded-2xl min-h-max">

    <!-- Basics Section -->
    <Basics {...result["basics"]} />
            <!-- About Section -->
    <div class="">
      <About {...result["basics"]} />
    </div>
    <section class="grid grid-flow-col grid-cols-2 mt-4 space-x-3 max-sm:grid-cols-1 max-sm:grid-flow-row max-sm:space-x-0 max-sm:space-y-4">
      <!-- Skill Section -->
      <div class="">
        <h4 class="mt-0 mb-2 text-2xl font-medium leading-tight text-blue-800 dark:text-blue-200">Skills</h4>
          {#each result["skills"] as skill }
              <Skill {...skill} />
          {/each}
      </div>
      <div class="grid-flow-row grid-rows-2">
        <!-- Education Section -->
        <div class="text-right max-sm:text-left">
          <h4 class="mt-0 mb-2 text-2xl font-medium leading-tight text-blue-800 dark:text-blue-200">Education</h4>
          {#each result["education"] as edu }
              <Education {...edu} />
          {/each}
        </div>
        <!-- Certifications Section -->
        <div class="text-right max-sm:text-left mt-4">
          <h4 class="mt-0 mb-2 text-2xl font-medium leading-tight text-blue-800 dark:text-blue-200">Certifications</h4>
          {#each result["certificates"] as cert}
              <Certification {...cert} />
          {/each}
        </div>
        <!-- Languages Section -->
        <div class="text-right max-sm:text-left mt-4">
          <h4 class="mt-0 mb-2 text-2xl font-medium leading-tight text-blue-800 dark:text-blue-200">Languages</h4>
          {#each result["languages"] as lang}
              <Language {...lang} />
          {/each}
        </div>
      </div>
    </section>
    <!-- Work Experience Section -->
    <section class="mt-4">
      <div class="">
        <h4 class="mt-0 mb-2 text-2xl font-medium leading-tight text-blue-800 dark:text-blue-200">Work Experience</h4>
        {#each result["work"] as work }
            <Work {...work} />
        {/each}
      </div>
    </section>
    <!-- Projects Section -->
    <section class="mt-4">
      <h4 class="mt-0 mb-2 text-2xl font-medium leading-tight text-blue-800 dark:text-blue-200">Other Engagements/Personal Projects</h4>
      <div class="flex flex-wrap max-sm:flex-col justify-center">
        {#each result["projects"] as project }
            <Project {...project} />
        {/each}
      </div>
    </section>
  </div>
{/await}

<footer class="text-center mt-5 flex flex-row justify-center">
  <div class="flex flex-row-reverse justify-center items-center">
    <button on:click={toggleDarkMode} class="inline-block px-2 py-2 bg-gray-800 dark:bg-gray-200 dark:text-gray-700 text-white font-normal text-xs leading-tight rounded-3xl shadow-md hover:bg-gray-900 dark:hover:bg-gray-300 hover:shadow-lg focus:bg-gray-900 dark:focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 text-center">
      <svg width="20" height="20" viewBox="0 0 24 24" class="fill-current" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dark Mode Icon">
        <title>Dark Mode Icon</title>
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="currentColor" /> 
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor" /> 
        </svg>
    </button>
  </div>
  <div class="text-center p-4 text-xs">
    Tech: <a href="https://svelte.dev/" target="_blank" class="text-blue-700 dark:text-blue-200" rel="noreferrer">Svelte</a>, <a href="https://tailwindcss.com/" target="_blank" class="text-blue-700 dark:text-blue-200" rel="noreferrer">Tailwind CSS</a>, and <a href="https://jsonresume.org/" target="_blank" class="text-blue-700 dark:text-blue-200" rel="noreferrer">JSON Resume</a>.
  </div>
</footer>