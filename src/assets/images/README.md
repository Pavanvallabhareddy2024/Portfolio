# Images

Drop your real images here and replace the placeholder URLs in
`src/data/portfolioData.js`.

Recommended files:

- `profile-placeholder.jpg` — your profile photo (square crop, ~600×600+).
- `project-dashpod.jpg` — Dashpod cover (16:10 or 16:9, ~1200×750+).
- `project-embehome.jpg` — EmbeHome cover.
- `project-build200.jpg` — 200 Days Build Journey cover.

To switch from the Unsplash URLs to local files, edit
`src/data/portfolioData.js`:

```js
import profilePlaceholder from '../assets/images/profile-placeholder.jpg';
import projectDashpod from '../assets/images/project-dashpod.jpg';
import projectEmbeHome from '../assets/images/project-embehome.jpg';
import projectBuild200 from '../assets/images/project-build200.jpg';
```

…and remove the placeholder URL constants at the top of the file.
