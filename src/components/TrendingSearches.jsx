

const TrendingSearches = () => (
    <div className="space-x-2 py-5 border-b border-b-gray-400/50 w-full">
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