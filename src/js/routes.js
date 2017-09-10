import IncomeAndExpensePage from './pages/IncomeAndExpensePage';
import CategoriesPage from './pages/CategoriesPage';
import ChartsPage from './pages/ChartsPage';
import NotFoundPage from './pages/NotFoundPage';

export default [

  {
    path: '/'
  },
  {
    path: '/incomeAndExpenses',
    component: IncomeAndExpensePage
  },
  {
    path: '/categories',
    component: CategoriesPage
  },
  {
    path: '/charts',
    component: ChartsPage
  },
  {
    component: NotFoundPage
  }
];
