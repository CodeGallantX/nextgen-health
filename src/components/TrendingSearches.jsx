

const TrendingSearches = () => (
    <div className="mt-4 space-x-2">
      <h3 className="font-medium inline-block">Trending searches: </h3>
      {["Gynecologists in Isolo", "Diagnosis", "Dentists near me", "Telemedicine"].map((item, index) => (
        <span
          key={index}
          className="inline-block border border-gray-200 px-4 py-2 rounded-xl text-gray-700 hover:scale-105 cursor-pointer"
        >
          {item}
        </span>
      ))}
    </div>
  );

  export default TrendingSearches