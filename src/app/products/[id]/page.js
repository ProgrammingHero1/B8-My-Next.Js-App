const DynamicPage = ({ params, searchParams }) => {
  //   console.log(searchParams);
  return (
    <div>
      <h1>This is dynamic page: {params.id}</h1>
      <h2>Search by: {searchParams.category}</h2>
    </div>
  );
};

export default DynamicPage;
