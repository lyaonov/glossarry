
export const mindmapData = {
    initialNodes: [
      {
        id: "javascript",
        data: {
          label: "JavaScript"
        },
        position: { x: 250, y: 0 }
      },
      {
        id: "ui",
        data: {
          label: "UI"
        },
        position: { x: 250, y: 100 }
      },
      {
        id: "reactivity",
        data: {
          label: "Реактивность"
        },
        position: { x: 100, y: 200 }
      },
      {
        id: "state-management",
        data: {
          label: "State Management"
        },
        position: { x: 400, y: 200 },
      },
      {
        id: "vdom",
        data: {
          label: "Virtual DOM"
        },
        position: { x: 100, y: 280 }
      },
      {
        id: "framework",
        data: {
          label: "Фреймворк"
        },
        position: { x: 100, y: 350 }
      },
      {
        id: "frp",
        data: {
          label: "ФРП"
        },
        position: { x: 200, y: 420 }
      },
      {
        id: "oorp",
        data: {
          label: "ООРП"
        },
        position: { x: 0, y: 420 }
      },
      {
        id: "flux",
        data: {
          label: "Flux"
        },
        position: { x: 300, y: 300 }
      },
      {
        id: "mvc",
        data: {
          label: "MVC"
        },
        position: { x: 480, y: 300 }
      },
      {
        id: "observer",
        data: {
          label: "Observer"
        },
        position: { x: 650, y: 300 }
      },
      {
        id: "react",
        data: {
          label: "React"
        },
        position: { x: 200, y: 650 }
      },
      {
        id: "memoization",
        data: {
          label: "Мемоизация"
        },
        position: { x: 0, y: 730 }
      },
      {
        id: "immutability",
        data: {
          label: "Иммутабельность"
        },
        position: { x: 150, y: 730 }
      },
      {
        id: "virtualization",
        data: {
          label: "Виртуализация"
        },
        position: { x: 300, y: 730 }
      },
      {
        id: "web-workers",
        data: {
          label: "Веб-воркеры"
        },
        position: { x: 450, y: 730 }
      },
      {
        id: "vue",
        data: {
          label: "Vue"
        },
        position: { x: 0, y: 500 }
      },
      {
        id: "hydration",
        data: {
          label: "Гидратация"
        },
        position: { x: -80, y: 600 }
      },
      {
        id: "caching",
        data: {
          label: "Кэширование"
        },
        position: { x: 80, y: 600 }
      }
    ],
    initialEdges: [
      { id: "javascript-ui", source: "javascript", target: "ui" },
      { id: "ui-reactivity", source: "ui", target: "reactivity" },
      { id: "ui-state-management", source: "ui", target: "state-management" },
      { id: "reactivity-vdom", source: "reactivity", target: "vdom" },
      { id: "vdom-framework", source: "vdom", target: "framework" },
      { id: "framework-frp", source: "framework", target: "frp" },
      { id: "framework-oorp", source: "framework", target: "oorp" },
      { id: "state-management-flux", source: "state-management", target: "flux" },
      { id: "state-management-mvc", source: "state-management", target: "mvc" },
      { id: "state-management-observer", source: "state-management", target: "observer" },
      { id: "react-memoization", source: "react", target: "memoization" },
      { id: "react-immutability", source: "react", target: "immutability" },
      { id: "react-virtualization", source: "react", target: "virtualization" },
      { id: "react-web-workers", source: "react", target: "web-workers" },
      { id: "vue-hydration", source: "vue", target: "hydration" },
      { id: "vue-caching", source: "vue", target: "caching" },
      { id: "oorp-vue", source: "oorp", target: "vue" },
      { id: "frp-react", source: "frp", target: "react" },
    ],
  };