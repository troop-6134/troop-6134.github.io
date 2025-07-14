import { h, render } from 'preact'
import App from '../app/index.tsx'
import '../scss/styles.scss'

const root = document.createElement("div");
render(h(App, {}), root);
root.id = "app";
document.body.appendChild(root);