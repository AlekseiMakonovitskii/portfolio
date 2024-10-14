import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ExperiencePage from "../pages/ExperiencePage";

const routesConfig = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/projects',
    component: ProjectsPage,
  },
  {
    path: '/experience',
    component: ExperiencePage,
  }
];

export default routesConfig;
