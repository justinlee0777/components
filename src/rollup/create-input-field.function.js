export default function createInputField(baseDir, srcDir, exportedDirs) {
  return exportedDirs.reduce((inputObject, dir) => {
    return {
      ...inputObject,
      [`${dir}/index`]: `${srcDir}/${dir}/index.ts`,
    };
  }, {});
}
