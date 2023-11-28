// data.js

export const termsData = {
  "Реактивность": "Способность системы быстро реагировать на изменения внешних условий или внутренних состояний.",
  "Фреймворк": "Программная платформа, определяющая структуру программной системы; программное обеспечение, облегчающее разработку и объединение разных компонентов большого программного проекта.",
  "Virtual DOM": "Виртуальное представление документа в памяти, используемое веб-фреймворками для оптимизации обновления пользовательского интерфейса.",
  "UI": "Интерфейс пользователя, включая элементы управления, макет и визуальные элементы, предоставляемые приложением для взаимодействия с пользователем.",
  "фрп": "Функциональное реактивное программирование - парадигма программирования, использующая функциональные конструкции для работы с временно-зависимыми значениями.",
  "ООРП": "Объектно-ориентированное реактивное программирование - подход, комбинирующий принципы объектно-ориентированного и реактивного программирования.",
  "Javascript": "Язык программирования, широко используемый для создания динамических веб-страниц.",
  "React": "Библиотека JavaScript для разработки пользовательских интерфейсов, использующая подход на основе компонентов.",
  "Vue": "Прогрессивный фреймворк для создания пользовательских интерфейсов с поддержкой реактивности и компонентной архитектурой.",
  "мемоизация": "Техника оптимизации, при которой результат выполнения функции кэшируется для предотвращения повторных вычислений при одинаковых входных данных.",
  "Иммутабельность": "Свойство данных, которые не могут быть изменены после своего создания; изменение данных создает новый объект.",
  "State Management": "Управление состоянием приложения, включая хранение, изменение и передачу данных между компонентами.",
  "Flux": "Архитектурный паттерн и набор инструментов для управления состоянием веб-приложений.",
  "Виртуализация": "Создание виртуальной версии ресурсов, таких как вычислительная мощность или сетевые ресурсы, для более эффективного использования.",
  "веб-воркеры": "Сценарии веб-воркера выполняются в фоновом потоке, позволяя выполнять многозадачные операции без блокировки основного потока веб-приложения.",
  "Гидратация": "Процесс восстановления состояния клиентской части веб-приложения с использованием данных, полученных с сервера.",
  "Кэширование": "Механизм хранения копий данных в целях ускорения последующего доступа к этим данным.",
  "Observer": "Паттерн проектирования, который предоставляет механизм уведомления объектов об изменении состояния других объектов.",
  "MVC": "Архитектурный паттерн, разделяющий приложение на три компонента: Model (модель данных), View (представление) и Controller (управление).",
}


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