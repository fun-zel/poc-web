import {animate, scroll} from "https://cdn.skypack.dev/motion@10.16.4"
scroll(animate("#progress-bar", {scaleX: [0, 1]}), {target: "#slides"})
