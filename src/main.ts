import './app.css';

import App from './App.svelte';

const app = new App({
    // eslint-disable-next-line no-undef, unicorn/prefer-query-selector
    target: document.getElementById('app'),
});

export default app;
