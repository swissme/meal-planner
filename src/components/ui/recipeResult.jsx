export const RecipeResult = (({ className, ...props }, ref) => {
    return (
        <div>
          {(props.results.results == undefined || props.results.results.length == 0) && <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>No results found</p>}
            <a
          className="rounded-lg border border-transparent px-5 py-4 transition-colors"
        >
          {props.results.results != undefined && props.results.results.map((result) => (
              <div key={result.id}>
                  <p>{result.title}</p>
                  <img src={result.image} alt={result.title} />
              </div>
          ))}
        </a>
        </div>
    );
});
