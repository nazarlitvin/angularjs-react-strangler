import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import "todomvc-common/base.js";
import "angular/angular.js";
import "angular-route/angular-route.js";
import "angular-resource/angular-resource.js";
import "./legacy/js/app.js";
import "./legacy/js/controllers/todoCtrl.js";
import "./legacy/js/services/todoStorage.js";
import "./legacy/js/directives/todoFocus.js";
import "./legacy/js/directives/todoEscape.js";

function App() {
  return <div className="App"></div>;
}

export default App;
