<script>
    export let name;
    export let label;
    export let email;
    export let phone;
    export let location;
</script>

    <section class="mb-10">
        <div class="flex flex-row justify-around max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <div class=" h-max">
                <img src="image.jpg" alt="Harish Ravindan" class="w-40 rounded-full max-sm:w-24 "/>
            </div>
            <div class="text-right max-sm:text-center">
                <h1 class="my-4 text-5xl text-blue-900 dark:text-blue-300">{name}</h1>
                <h2 class="my-2 text-lg font-semibold text-gray-800 dark:text-gray-200">{label}</h2>
                <p class="inline-flex flex-row text-m">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 -2 16 16" role="img" aria-label="Email icon">
                        <title>Email icon</title>
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    <span class="px-2"><a href={"mailto:"+email} class="hover:underline">{email}</a></span>
                </p>
                <p class="inline-flex flex-row text-m">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16" role="img" aria-label="Phone icon">
                        <title>Phone icon</title>
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <span class="px-2 hover:underline">{phone}</span>
                </p>
                <p class="my-1">{location['city']}, {location['region']}, {location['countryCode']}</p>
            </div>
        </div>
        <!-- <hr class="h-0.5 mt-3 bg-blue-900" /> -->
    </section>
