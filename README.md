Tree-shakeable component library useful for various projects. Per Fred Brooks' recommendation in "Mythical Man-Month" via Capers Jones:

> Most experienced programmers have private libraries which allow them to develop software without about 30% reused code by volume.

which recommendation is excellent after careful thought.

Components are also very useful because they encapsulate ideas from a million years ago.

### Usage

Download via NPM:

```
npm i --save
```

The package only supports ES6+ imports. Import a specific utility through its entrypoint - for example, to import the `FieldSet` component:

```
import { FieldSet } from '@justinlee0777/components/react/fieldset'
```
