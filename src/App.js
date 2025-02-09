import "@radix-ui/themes/styles.css";
import * as React from "react";

import { Button } from "./components/action/Button/Button";

function App() {
  return (
    <div className="p-6 space-y-4">
      <Button variant="primary" size="md" icon="home">
        <a>BUTTON</a>
      </Button>
      <div></div>
      <Button variant="primary" size="sm" icon="home">
        <a>BUTTON</a>
      </Button>
      <div></div>
      <Button variant="secondary" size="md" icon="home">
        <a>BUTTON</a>
      </Button>
      <div></div>
      <Button variant="secondary" size="sm" icon="home">
        <a>BUTTON</a>
      </Button>
      <div></div>
      <Button variant="textPrimary" size="sm" icon="home">
        <a>BUTTON</a>
      </Button>
      <div></div>
      <Button variant="textSecondary" size="sm" icon="home">
        <a>BUTTON</a>
      </Button>
      <div></div>
      <Button variant="danger" size="sm" icon="home">
        <a>BUTTON</a>
      </Button>
      <div></div>
      <Button variant="textDanger" size="sm" icon="home">
        <a>BUTTON</a>
      </Button>
    </div>
  );
}

export default App;
