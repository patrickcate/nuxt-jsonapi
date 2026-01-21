import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // set additional configuration or customize using hooks
  rollup: {
    // for example, if you wish to continue to generate `.cjs` output
    emitCJS: true,
  },
})
