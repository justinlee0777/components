import { readFileSync } from 'fs';

export default function createExternalField(baseDir) {
  const pkg = JSON.parse(
    readFileSync(`${baseDir}/package.json`, { encoding: 'utf-8' }),
  );

  const externalPackages = [...Object.keys(pkg.peerDependencies || {})];

  // Creating regexes of the packages to make sure subpaths of the
  // packages are also treated as external
  return externalPackages.map(
    (packageName) => new RegExp(`^${packageName}(\/.*)?`),
  );
}
