<template>
  <div class="docs">
    <div>
      <h1>Documentation</h1>
      <p class="intro">Surprise! I've decided to document the components I created for this UI Project. </p>
      <p>In this world, all the ui components are documented in a documentation website. The documentation website becomes the source of truth for designers and engineers to determine what the latest versions of all the components look and feel.</p>

      <h2>Markdown Documentation</h2>
      <p>The docs are generated from markdown in the ui component folders themselves. This way, the documentation gets versioned along with the components, which would live in a separate repo from the documentation website. Markdown is a breeze to write, making documentation easy. Plus, if the site every goes down, the docs can still be viewed in Github!</p>

      <h2>Live Code Demos</h2>
      <!-- eslint-disable vue/max-attributes-per-line -->
      <p>Using the <a href="https://github.com/fengyuanchen/markdown-to-vue-loader" target="_blank">markdown-to-vue-loader</a>, we're able to generate Vue.js code in markdown to live code. This means we can document the *actual* code and it's true result. Far better than screenshots, which can get outdated.</p>
      <!-- eslint-enable vue/max-attributes-per-line -->

      <h2>Ideas for the future</h2>
      <ul>
        <li>Open sourcing: Share our good design and engineering with the world, and attract talent by leading by example.</li>
        <li>Code highlighting: Add some visual flair to the site.</li>
        <li>Two-way code: Allow engineers to edit the code live in the documnentation website, so they can work on something and copy/paste it into their project.</li>
      </ul>
    </div>
  </div>
</template>
