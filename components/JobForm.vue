<template>
    <div class="w-full w-96 md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">
          <form
            method="POST"
            action="https://herotofu.com/start"
            enctype="multipart/form-data"
          >
            <label class="block mb-6">
              <span class="text-gray-700">Your name</span>
              <input
                required
                name="name"
                type="text"
                class="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                placeholder="Joe Bloggs"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Email address</span>
              <input
                required
                name="email"
                type="email"
                class="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                placeholder="joe.bloggs@example.com"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Years of experience</span>
              <select
                required
                name="experience"
                class="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              >
                <option>Less than a year</option>
                <option>1 - 2 years</option>
                <option>2 - 4 years</option>
                <option>4 - 7 years</option>
                <option>7 - 10 years</option>
                <option>10+ years</option>
              </select>
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Tell us more about yourself</span>
              <textarea
                name="message"
                class="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                rows="3"
                placeholder="What motivates you?"
              ></textarea>
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Your CV</span>
              <input
                required
                name="cv"
                type="file"
                class="
                  block
                  w-full
                  mt-1
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
            </label>
            <div class="mb-6">
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input
                      name="remote"
                      value="yes"
                      type="radio"
                      class="
                        text-indigo-600
                        border-gray-300
                        rounded-full
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                      checked
                    />
                    <span class="ml-2">You'd like to work remotely</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input
                      name="re"
                      value="no"
                      type="radio"
                      class="
                        text-indigo-600
                        border-gray-300
                        rounded-full
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                    />
                    <span class="ml-2">You'd prefer to work onsite</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="
                  h-10
                  px-5
                  text-indigo-100
                  bg-indigo-700
                  rounded-lg
                  transition-colors
                  duration-150
                  focus:shadow-outline
                  hover:bg-indigo-800
                "
              >
                Apply
              </button>
            </div>
            <div>
              <div class="mt-2 text-gray-700 text-right text-xs">
                by
                <a href="https://herotofu.com" class="hover:underline" target="_blank"
                  >HeroTofu</a
                >
              </div>
            </div>
          </form>
        </div>
      </div>
      
  
</template>

<script>
export default {

}
</script>

<style>

</style>