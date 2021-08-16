import "regenerator-runtime";
import main from "./script/view/main.js";
import "./script/component/pokemon-list";
import "./script/component/app-bar.js";
import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", main(20));