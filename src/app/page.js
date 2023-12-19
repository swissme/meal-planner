import complexSearch from '../api/APIManager.js';
import { SearchForm } from '@/components/ui/searchForm.jsx';

export default function Home() {
  // const results = complexSearch("shrimp", 3)
  //   .then((data) => {
  //     console.log(data);
  //   });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center justify-center font-mono lg:flex">
        <h1 className='text-2xl font-bold'>Meal Planner</h1>
      </div>

      <SearchForm />
    </main>
  )
}
